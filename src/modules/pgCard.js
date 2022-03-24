import { createAction, handleActions } from 'redux-actions';

const CHANGE_TAB = 'pgcard/CHANGE_TAB';
const INITIALIZE_INFO = 'pgcard/INITIALIZE_INFO';
const CHANGE_TIME = 'pgcard/CHANGE_TIME';
const CHANGE_QR_BUTTON = 'pgcard/CHANGE_QR_BUTTON';

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
export const changeQrButton = createAction(
	CHANGE_QR_BUTTON,
	(qrButton) => qrButton
);

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
	qrButton: false,
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
		[CHANGE_QR_BUTTON]: (state, { payload: qrButton }) => ({
			...state,
			qrButton: !qrButton,
		}),
	},
	initialState
);

export default pgCard;
