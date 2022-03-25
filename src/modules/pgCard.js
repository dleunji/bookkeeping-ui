import { createAction, handleActions } from 'redux-actions';

const CHANGE_TAB = 'pgcard/CHANGE_TAB';
const INITIALIZE_INFO = 'pgcard/INITIALIZE_INFO';
const CHANGE_TIME = 'pgcard/CHANGE_TIME';
const CHANGE_QR_BUTTON = 'pgcard/CHANGE_QR_BUTTON';
const CHANGE_TIMER = 'pgcard/CHANGE_TIMER';
const INITIALIZE_TIMER = 'pgcard/INITIALIZE_TIMER';
const CHANGE_START = 'pgcard/CHANGE_START';

export const changeTab = createAction(CHANGE_TAB, (tab) => tab);
export const initializeInfo = createAction(
	INITIALIZE_INFO,
	({ selectedCard, installMonth, totalAmount }) => ({
		selectedCard,
		installMonth,
		totalAmount,
	})
);
export const changeTime = createAction(CHANGE_TIME, (timeLimit) => timeLimit);
export const changeQrButton = createAction(CHANGE_QR_BUTTON);
export const changeTimer = createAction(CHANGE_TIMER);
export const initializeTimer = createAction(INITIALIZE_TIMER, (func) => func);
export const changeStart = createAction(CHANGE_START, (start) => start);

const initialState = {
	banks: [
		{
			name: '우리',
			value: 'WOORI',
			url: `${process.env.PUBLIC_URL}/images/woori_bank.png`,
		},
		{
			name: '국민',
			value: 'KOOKMIN',
			url: `${process.env.PUBLIC_URL}/images/kookmin_bank.png`,
		},
	],
	activeTab: 0,
	selectedCard: '',
	installMonth: 0,
	totalAmount: 0,
	timeLimit: 30,
	qrButton: true,
	myTimer : '',
};

const pgCard = handleActions(
	{
		[INITIALIZE_INFO]: (
			state,
			{ payload: { selectedCard, installMonth, totalAmount } }
		) => ({
			...state,
			selectedCard,
			installMonth,
			totalAmount,
		}),
		[CHANGE_TAB]: (state, { payload: tab }) => ({
			...state,
			activeTab: tab,
		}),
		[CHANGE_TIME]: (state, { payload: timeLimit }) => ({
			...state,
			timeLimit: timeLimit,
		}),
		[CHANGE_QR_BUTTON]: (state) => ({
			...state,
			qrButton: !state.qrButton,
		}),
		[CHANGE_TIMER]: (state) => ({
			...state,
			myTimer : clearTimeout(state.myTimer),
		}),
		[INITIALIZE_TIMER]: (state, { payload: func }) => ({
			...state,
			myTimer : setInterval(func, 1000),
		}),
		[CHANGE_START]: (state, { payload: start }) => ({
			...state,
			start : start,
		}),
	},
	initialState
);

export default pgCard;

