import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
	createEntry,
	deleteEntry,
	changeEntry,
	changeEntryDate,
	initEntry,
} from '../modules/entry';
import {
	changeLatestJournals,
	changeTotalPages,
	changeTab,
	changeJournalDate,
} from '../modules/journal';
import { changeUserInfo } from '../modules/auth';
import { changeNavTab } from '../modules/home';
import MainEntry from '../components/entry/MainEntry';

const JOURNAL_BASE_URL = 'api/Journals/';

const EntryContainer = () => {
	const { user, entry, journal } = useSelector(({ entry, auth, journal }) => ({
		entry: entry,
		journal: journal,
		user: auth.currentUser,
	}));

	const dispatch = useDispatch();

	const getLatestJournals = () => {
		if (user) {
			try {
				fetch(JOURNAL_BASE_URL + `latest/${user.userId}/${journal.currentPage}`)
					.then((res) => {
						if (res.ok) {
							return res.json();
						} else {
							throw Error(res.status);
						}
					})
					.then((data) => {
						console.log(data);
						const { totalRowsCount, totalPages, journals } = data;
						dispatch(changeTotalPages({ totalPages, totalRowsCount }));
						dispatch(changeLatestJournals(journals));
					});
			} catch (e) {
				console.log(e);
			}
		}
	};

	const handleCreateEntry = (name, value) => {
		if (value.accountId === '') {
			alert('계정을 선택하세요');
			return;
		}
		if (value.categoryId === '') {
			alert('계정 과목을 선택하세요');
			return;
		}
		if (value.amount === '') {
			alert('금액을 입력하세요');
			return;
		}
		if (name === 'debtors') {
			if (value.accountId === 0) {
				value = {
					...value,
					sign: 1,
				};
			} else if (value.accountId === 1) {
				value = {
					...value,
					sign: -1,
				};
			} else {
				value = {
					...value,
					sign: 0,
				};
			}
			dispatch(changeEntry({ name: 'activeDebtorAccount', value: '' }));
			dispatch(changeEntry({ name: 'activeDebtorAccountTitle', value: '' }));
			dispatch(changeEntry({ name: 'debtorAccountAmount', value: '' }));
		} else {
			if (value.accountId === 0) {
				value = {
					...value,
					sign: -1,
				};
			} else if (value.accountId === 1) {
				value = {
					...value,
					sign: 1,
				};
			} else {
				value = {
					...value,
					sign: 0,
				};
			}
			dispatch(changeEntry({ name: 'activeCreditorAccount', value: '' }));
			dispatch(changeEntry({ name: 'activeCreditorAccountTitle', value: '' }));
			dispatch(changeEntry({ name: 'creditorAccountAmount', value: '' }));
		}
		dispatch(createEntry({ name, value }));
	};

	const handleChangeEntry = (e) => {
		const { name, value } = e.target;
		if (name === 'activeDebtorAccount') {
			dispatch(changeEntry({ name: 'activeDebtorAccountTitle', value: '' }));
		}
		if (name === 'activeCreditorAccount') {
			dispatch(changeEntry({ name: 'activeCreditorAccountTitle', value: '' }));
		}
		dispatch(changeEntry({ name, value }));
	};
	const handleDeleteEntry = (name, idx) => {
		dispatch(deleteEntry({ name, idx }));
	};

	const handleChangeEntryDate = (date) => {
		dispatch(changeEntryDate(date));
	};

	const handleCreateJournal = () => {
		const { entryDate, entrySummary, debtors, creditors } = entry;
		const { userId, accBalance, unpaidBill, pocketBalance } = user;

		// 대차 평균의 원리
		const debtorsAmount = debtors.reduce(
			(acc, d) => acc + parseInt(d.amount),
			0
		);
		const creditorsAmount = creditors.reduce(
			(acc, c) => acc + parseInt(c.amount),
			0
		);
		if (debtorsAmount !== creditorsAmount) {
			alert('대차 평균의 원리를 확인하세요.');
			return;
		}

		// totalAmount 수정
		dispatch(changeEntry('totalAmount', debtorsAmount));
		try {
			fetch(JOURNAL_BASE_URL, {
				method: 'POST',
				body: JSON.stringify({
					userId,
					transactedAt: entryDate,
					summary: entrySummary,
					totalAmount: 0,
					note: '',
					elements: [
						...debtors.map((d) => {
							return {
								categoryId: d.categoryId,
								content: '',
								amount: d.amount,
								sign: d.sign,
							};
						}),
						...creditors.map((c) => {
							return {
								categoryId: c.categoryId,
								content: '',
								amount: c.amount,
								sign: c.sign,
							};
						}),
					],
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					} else {
						throw Error(res.status);
					}
				})
				.then((data) => {
					// 성공에 따른 유저 별도 처리 필요
					console.log(data);
					const { pocketBalance, accBalance, unpaidBill } = data;
					dispatch(initEntry());
					dispatch(changeTab(1));
					dispatch(changeNavTab(0));
					dispatch(changeJournalDate(entryDate));
					dispatch(changeUserInfo({ pocketBalance, accBalance, unpaidBill }));
					// 최신 저널 가져와야한다.
					getLatestJournals();
				});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<MainEntry
			handleCreateEntry={handleCreateEntry}
			handleDeleteEntry={handleDeleteEntry}
			handleChangeEntry={handleChangeEntry}
			handleChangeEntryDate={handleChangeEntryDate}
			entry={entry}
			handleCreateJournal={handleCreateJournal}
		/>
	);
};

export default EntryContainer;
