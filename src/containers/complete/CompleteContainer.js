import React from 'react';
import { useEffect } from 'react';
import ChargeComplete from '../../components/complete/ChargeComplete';
import { initializeComplete } from '../../modules/complete';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from '../../../node_modules/react-router-dom/index';
import { initEntry } from '../../modules/entry';
import {
	changeTab,
	changeJournalDate,
	changeLatestJournals,
	changeTotalPages,
} from '../../modules/journal';
import { changeUserInfo } from '../../modules/auth';
import { changeNavTab } from '../../modules/home';

const JOURNAL_BASE_URL = 'api/Journals/';
const chargeElementTable = {
	card: {
		title: '카드',
		debitId: 1003,
		creditId: 2001,
		creditSign: 1,
	},
	post_payment: {
		title: '후불 결제',
		debitId: 1003,
		creditId: 2003,
		creditSign: 1,
	},
	voucher: {
		title: '상품권',
		debitId: 1003,
		creditId: 1004,
		creditSign: -1,
	},
	virtual_account: {
		title: '가상 계좌',
		debitId: 1003,
		creditId: 1001,
		creditSign: -1,
	},
	account_transfer: {
		title: '실시간 계좌 이체',
		debitId: 1003,
		creditId: 1001,
		creditSign: -1,
	},
	REGISTERED_ACCOUNT: {
		title: '연결 계좌',
		debitId: 1003,
		creditId: 1005,
		creditSign: -1,
	},
	PHONE: {
		title: '휴대폰 결제',
		debitId: 1003,
		creditId: 2002,
		creditSign: 1,
	},
};

const CompleteContainer = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const {
		chargeAmount,
		chargeDesc,
		chargeMethod,
		chargeMethodAmount,
		chargeAnnounceTitle,
		chargeAnnounceDesc,
		balance,
		chargeLimit,
		entry,
		journal,
		user,
	} = useSelector(({ complete, entry, journal, auth }) => ({
		chargeAmount: complete.chargeAmount,
		chargeDesc: complete.chargeDesc,
		chargeMethod: complete.chargeMethod,
		chargeMethodAmount: complete.chargeMethodAmount,
		chargeAnnounceTitle: complete.chargeAnnounceTitle,
		chargeAnnounceDesc: complete.chargeAnnounceDesc,
		balance: complete.balance,
		chargeLimit: complete.chargeLimit,
		entry: entry,
		journal: journal,
		user: auth.currentUser,
	}));

	const handleClose = () => {
		console.log('닫기 버튼 클릭');
		window.close();
	};

	const handleAddition = () => {
		console.log('추가 충전 클릭');
		// TODO :메인 충전창 이동 로직
	};

	useEffect(() => {
		const userId = sessionStorage.getItem('userId');
		const totalAmount = sessionStorage.getItem('totalAmount');
		const prevBalance = sessionStorage.getItem('prevBalance');
		const result = JSON.parse(location.state);
		const {
			chargeAmount,
			chargeDesc,
			chargeMethod,
			chargeMethodAmount,
			chargeAnnounceTitle,
			chargeAnnounceDesc,
		} = result;
		console.log(result);
		const balance = parseInt(prevBalance) + parseInt(chargeAmount);
		const chargeLimit = '현재 한도 정보는 가져와야 함';
		dispatch(
			initializeComplete({
				chargeAmount,
				chargeDesc,
				chargeMethod,
				chargeMethodAmount,
				chargeAnnounceTitle,
				chargeAnnounceDesc,
				balance,
				chargeLimit,
			})
		);

		const { debitId, creditId, creditSign } = chargeElementTable[chargeMethod];
		const entryDate = new Date();
		console.log({
			userId: userId,
			transactedAt: entryDate,
			summary: '넥토머니 충전',
			totalAmount: chargeAmount,
			note: '',
			elements: [
				{
					categoryId: debitId,
					content: '',
					amount: chargeAmount,
					sign: 1,
				},
				{
					categoryId: creditId,
					content: '',
					amount: chargeAmount,
					sign: creditSign,
				},
			],
		});
		fetch(JOURNAL_BASE_URL, {
			method: 'POST',
			body: JSON.stringify({
				userId: userId,
				transactedAt: entryDate,
				summary: '넥토머니 충전',
				totalAmount: chargeAmount,
				note: '',
				elements: [
					{
						categoryId: debitId,
						content: '',
						amount: chargeAmount,
						sign: 1,
					},
					{
						categoryId: creditId,
						content: '',
						amount: chargeAmount,
						sign: creditSign,
					},
				],
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				console.log(res.status);
				if (res.ok) {
					return res.json();
				} else {
					throw Error(res.status);
				}
			})
			.then((data) => {
				// 성공에 따른 유저 별도 처리 필요
				console.log(data);
				const pocketBalance = data.pocketBalance;
				const accBalance = data.accBalance;
				const unpaidBill = data.unpaidBill;
				dispatch(initEntry());
				dispatch(changeTab(1));
				dispatch(changeNavTab(0));
				dispatch(changeJournalDate(entryDate));
				dispatch(changeUserInfo({ pocketBalance, accBalance, unpaidBill }));
				// 최신 저널 가져와야한다.
				getLatestJournals();
			});
	}, [location.state]);

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
						const totalRowsCount = data.totalRowsCount;
						const totalPages = data.totalPages;
						const journals = data.journals;
						dispatch(changeTotalPages({ totalPages, totalRowsCount }));
						dispatch(changeLatestJournals(journals));
					});
			} catch (e) {
				console.log(e);
			}
		}
	};

	return (
		<ChargeComplete
			chargeAmount={chargeAmount}
			chargeDesc={chargeDesc}
			chargeMethod={chargeMethod}
			chargeMethodAmount={chargeMethodAmount}
			chargeAnnounceTitle={chargeAnnounceTitle}
			chargeAnnounceDesc={chargeAnnounceDesc}
			balance={balance}
			chargeLimit={chargeLimit}
			handleClose={handleClose}
			handleAddition={handleAddition}
		/>
	);
};

export default CompleteContainer;
