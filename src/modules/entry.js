import { createAction, handleActions } from 'redux-actions';

const INIT_ENTRY = 'entry/INIT_ENTRY';
const CREATE_ENTRY = 'entry/CREATE_ENTRY';
const DELETE_ENTRY = 'entry/DELETE_ENTRY';
const CHANGE_ENTRY = 'entry/CHANGE_ENTRY';
const CHANGE_ENTRY_DATE = 'entry/CHANGE_ENTRY_DATE';

export const initEntry = createAction(INIT_ENTRY);
export const createEntry = createAction(CREATE_ENTRY, (entry) => entry);
export const deleteEntry = createAction(DELETE_ENTRY, (entry) => entry);
export const changeEntry = createAction(CHANGE_ENTRY, (entry) => entry);
export const changeEntryDate = createAction(CHANGE_ENTRY_DATE, (date) => date);

const initialState = {
	entryDate: new Date(),
	entrySummary: '',
	activeDebtorAccount: '',
	activeCreditorAccount: '',
	activeDebtorAccountTitle: '',
	activeCreditorAccountTitle: '',
	debtorAccountAmount: '',
	creditorAccountAmount: '',
	debtors: [],
	creditors: [],
	totalAmount: 0,
};

const entry = handleActions(
	{
    [INIT_ENTRY]: () => (initialState),
		[CREATE_ENTRY]: (state, { payload: { name, value } }) => ({
			...state,
			[name]: [...state[name], { ...value }],
		}),
		[DELETE_ENTRY]: (state, { payload: { name, idx } }) => ({
			...state,
			[name]: state[name].filter((e, i) => i !== idx),
		}),
		[CHANGE_ENTRY]: (state, { payload: { name, value } }) => ({
			...state,
			[name]: value,
		}),
		[CHANGE_ENTRY_DATE]: (state, { payload: date }) => ({
			...state,
			entryDate: date,
		}),
	},
	initialState
);

export default entry;
