import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoggedInContent from '../../components/home/LoggedInContent';
import LoggedOutContent from '../../components/home/LoggedOutContent';
import {
	createEntry,
	deleteEntry,
	changeEntry,
	changeEntryDate,
	initEntry,
} from '../../modules/entry';
import {
	changeTab,
	changeJournalDate,
	changePage,
	changeLatestJournals,
	changeDailyJournals,
	changeTotalPages,
} from '../../modules/journal';

import { changeStatisticsTab, changeSum } from '../../modules/statistics';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import getDate from 'date-fns/getDate';
import { changeNavTab } from '../../modules/home';
import { changeMonth, changeSPage } from '../../modules/statistics';
import { changeUserInfo } from '../../modules/auth';

const JOURNAL_BASE_URL = 'api/Journals/';
const ELEMENT_BASE_URL = 'api/Elements/';

const ContentContainer = () => {
	const { user, navTab, entry, journal, statistics } = useSelector(
		({ auth, home, entry, journal, statistics }) => ({
			user: auth.currentUser,
			navTab: home.activeNavTab,
			entry: entry,
			journal: journal,
			statistics: statistics,
		})
	);

	const dispatch = useDispatch();

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
						throw Error(res.json());
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

	const handleDeleteEntry = (name, idx) => {
		dispatch(deleteEntry({ name, idx }));
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

	const handleChangeEntryDate = (date) => {
		dispatch(changeEntryDate(date));
	};

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
	// statistics
	const getStatistics = () => {
		if (user) {
			const { userId } = user;
			const year = getYear(statistics.month);
			const month = getMonth(statistics.month) + 1;
			try {
				fetch(ELEMENT_BASE_URL + `${userId}/${year}/${month}`)
					.then((res) => {
						if (res.ok) {
							return res.json();
						} else {
							throw new Error(res.status);
						}
					})
					.then((data) => {
						dispatch(changeSum(data));
					});
			} catch (e) {
				console.log(e);
			}
		}
	};

	const onChangeStatisticsTab = (e, tab) => {
		dispatch(changeStatisticsTab(tab));
	};

	const onChangeMonth = (month) => {
		dispatch(changeMonth(month));
	};
	

	useEffect(() => {
		if (statistics.month !== null) {
			getStatistics();
		}
	}, [statistics.month]);

	useEffect(() => {
		dispatch(changeMonth(new Date()));
	}, [statistics.tab]);

	return (
		<div>
			{user === null ? (
				<LoggedOutContent />
			) : (
				<LoggedInContent
					navTab={navTab}
					entry={entry}
					handleCreateEntry={handleCreateEntry}
					handleCreateJournal={handleCreateJournal}
					handleDeleteEntry={handleDeleteEntry}
					handleChangeEntry={handleChangeEntry}
					handleChangeEntryDate={handleChangeEntryDate}
					statistics={statistics}
					onChangeMonth={onChangeMonth}
					onChangeStatisticsTab={onChangeStatisticsTab}
					user={user}
				/>
			)}
		</div>
	);
};

export default ContentContainer;
