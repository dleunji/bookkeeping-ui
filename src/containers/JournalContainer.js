import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import MainJournal from "../components/journal/MainJournal";
import {
	changeTab,
	changeJournalDate,
	changePage,
	changeLatestJournals,
	changeDailyJournals,
	changeTotalPages,
} from '../modules/journal';
import { changeUserInfo } from '../modules/auth';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import getDate from 'date-fns/getDate';

const JOURNAL_BASE_URL = 'api/Journals/';

const JournalContainer = () => {
  const { user, journal } = useSelector(({ journal, auth }) => ({ 
    journal: journal,
    user: auth.currentUser, 
  }));

  const dispatch = useDispatch();

	const onChangeTab = (e, tab) => {
		dispatch(changeTab(tab));
	};

	const handleChangeJournalDate = (date) => {
		dispatch(changeJournalDate(date));
	};

	const handleDeleteJournal = async (journalId) => {
		try {
			await fetch(JOURNAL_BASE_URL + journalId, {
				method: 'DELETE',
			})
				.then((res) => {
					if (res.ok) {
						console.log('삭제 완료');
						switch (journal.tab) {
							case 0:
								getLatestJournals();
								break;
							case 1:
								getDailyJournals();
								break;
						}
						return res.json();
					} else {
						throw new Error(res.status);
					}
				})
				.then((data) => {
					const { pocketBalance, accBalance, unpaidBill } = data;
					dispatch(changeUserInfo({ pocketBalance, accBalance, unpaidBill }));
				});
		} catch (e) {
			console.log(e);
		}
	};

	const getLatestJournals = async () => {
		if (user) {
			try {
				await fetch(JOURNAL_BASE_URL + `latest/${user.userId}/${journal.currentPage}`)
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

	const getDailyJournals = () => {
		if (user) {
			const { userId } = user;
			const year = getYear(journal.journalDate);
			const month = getMonth(journal.journalDate) + 1;
			const d = getDate(journal.journalDate);
			try {
				fetch(
					JOURNAL_BASE_URL +
						`${userId}/${year}-${month}-${d}/${journal.currentPage}`
				)
					.then((res) => {
						if (res.ok) {
							return res.json();
						} else {
							throw Error(res.json());
						}
					})
					.then((data) => {
						console.log(data);
						const { totalRowsCount, totalPages, journals } = data;
						console.log('확인');
						dispatch(changeTotalPages({ totalPages, totalRowsCount }));
						dispatch(changeDailyJournals(journals));
					});
			} catch (e) {
				console.log(e);
			}
		}
	};

	const onChangePage = (e, page) => {
		dispatch(changePage(page));
	};

  useEffect(() => {
		dispatch(changePage(1));
		switch (journal.tab) {
			case 0:
				getLatestJournals();
				break;
			case 1:
				getDailyJournals();
				break;
		}
	}, [journal.tab]);

	useEffect(() => {
		switch (journal.tab) {
			case 0:
				getLatestJournals();
				break;
			case 1:
				getDailyJournals();
				break;
		}
	}, [journal.currentPage]);

  useEffect(() => {
		if (journal.journalDate !== null && journal.tab == 1) {
			getDailyJournals(0);
		}
	}, [journal.journalDate]);

  useEffect(() => {
		getLatestJournals();
	}, [user]);

  return (
    <MainJournal
      journal={journal}
      onChangeTab={onChangeTab}
      handleChangeJournalDate={handleChangeJournalDate}
      handleDeleteJournal={handleDeleteJournal}
      onChangePage={onChangePage}
    />
  );
}

export default JournalContainer;