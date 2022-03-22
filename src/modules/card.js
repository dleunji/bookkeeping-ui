import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_MONTH = 'card/INITIALIZE_INTEREST_FREE_MONTH';
const CHANGE_MONTH = 'card/CHANGE_MONTH';
const CHANGE_CARD = 'card/CHANGE_CARD';
const CHANGE_INFO_VISIBILITY = 'card/CHANGE_INFO_VISIBILITY';

export const initializeMonth = createAction(
	INITIALIZE_MONTH,
	({ maxInterestFreeMonth, installMonths }) => ({
		maxInterestFreeMonth,
		installMonths,
	})
);

export const changeMonth = createAction(CHANGE_MONTH, (month) => month);
export const changeCard = createAction(CHANGE_CARD, (card) => card);
export const changeInfoVisibility = createAction(
	CHANGE_INFO_VISIBILITY,
	(value) => value
);

const initialState = {
	maxInterestFreeMonth: 3,
	installMonths: [2, 3, 4, 5, 6, 7, 8],
	selectedMonth: 0,
	selectedCard: '',
	infoVisibility: false,
};

const card = handleActions(
	{
		[INITIALIZE_MONTH]: (
			state,
			{ payload: { maxInterestFreeMonth, installMonths } }
		) => ({
			...state,
			maxInterestFreeMonth,
			installMonths,
		}),
		[CHANGE_MONTH]: (state, { payload: month }) => ({
			...state,
			selectedMonth: month,
		}),
		[CHANGE_CARD]: (state, { payload: card }) => ({
			...state,
			selectedCard: card,
		}),
		[CHANGE_INFO_VISIBILITY]: (state, { payload: value }) => ({
			...state,
			infoVisibility: value,
		}),
	},
	initialState
);

export default card;
