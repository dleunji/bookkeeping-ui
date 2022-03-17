import { createAction, handleActions } from 'redux-actions';

const CHANGE_TAB = 'journal/CHANGE_TAB';
const CHANGE_JOURNAL_DATE = 'journal/CHANGE_JOURNAL_DATE';
const CHANGE_TOTAL_PAGES = 'journal/CHANGE_TOTAL_PAGES';
const CHANGE_PAGE = 'journal/CHANGE_PAGE';
const CHANGE_LATEST_JOURNALS = 'journal/CHANGE_LATEST_JOURNALS';
const CHANGE_DAILY_JOURNALS = 'journal/CHANGE_DAILY_JOURNALS';
const DELETE_LATEST_JOURNAL = 'journal/DELETE_LATEST_JOURNAL';
const DELETE_DAILY_JOURNAL = 'journal/DELETE_DAILY_JOURNAL';

export const changeLatestJournals = createAction(
	CHANGE_LATEST_JOURNALS,
	(journals) => journals
);

export const changeDailyJournals = createAction(
	CHANGE_DAILY_JOURNALS,
	(journals) => journals
);

export const changeTab = createAction(CHANGE_TAB, (tab) => tab);
export const changeJournalDate = createAction(
	CHANGE_JOURNAL_DATE,
	(date) => date
);
export const changeTotalPages = createAction(CHANGE_TOTAL_PAGES, 
  ({totalPages, totalRowsCount}) => ({totalPages, totalRowsCount}));
export const changePage = createAction(CHANGE_PAGE, page => page);
export const deleteLatestJournal = createAction(DELETE_LATEST_JOURNAL, journalId => journalId);
export const deleteDailyJournal = createAction(DELETE_DAILY_JOURNAL, journalId => journalId);
const initialState = {
	tab: 0,
	journalDate: new Date(),
  totalPages:0,
  totalRowsCount: 0,
  currentPage:1,
	latestJournals: [],
	dailyJournals: [],
};

const journal = handleActions(
	{
		[CHANGE_LATEST_JOURNALS]: (state, { payload: journals }) => ({
			...state,
			latestJournals: journals,
		}),
		[CHANGE_DAILY_JOURNALS]: (state, { payload: journals }) => ({
			...state,
			dailyJournals: journals,
		}),
    [DELETE_LATEST_JOURNAL]: (state, {payload: journalId}) => ({
      ...state,
      latestJournals: state.latestJournals.filter(j => j.journalId !== journalId)
    }),
    [DELETE_DAILY_JOURNAL]: (state, {payload: journalId}) => ({
      ...state,
      dailyJournals: state.dailyJournals.filter(j => j.journalId !== journalId)
    }),
		[CHANGE_TAB]: (state, { payload: tab }) => ({
			...state,
			tab,
		}),
		[CHANGE_JOURNAL_DATE]: (state, { payload: date }) => ({
			...state,
			journalDate: date,
		}),
		[CHANGE_TOTAL_PAGES]: (state, { payload: {totalPages, totalRowsCount} }) => ({
			...state,
			totalPages,
      totalRowsCount,
		}),
    [CHANGE_PAGE]: (state, {payload: page}) => ({
      ...state,
      currentPage: page
    })
	},
	initialState
);

export default journal;
