import { createAction, handleActions } from 'redux-actions';

const CHANGE_TAB = 'pgcard/CHANGE_TAB';
const INITIALIZE_INFO = 'pgcard/INITIALIZE_INFO';

export const changeTab = createAction(CHANGE_TAB, (tab) => tab);
export const initializeInfo = createAction(
	INITIALIZE_INFO,
	({ selectedCard, installMonth }) => ({ selectedCard, installMonth })
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
};

const pgCard = handleActions(
	{
		[INITIALIZE_INFO]: (
			state,
			{ payload: { selectedCard, installMonth } }
		) => ({
			...state,
			selectedCard,
			installMonth,
		}),
		[CHANGE_TAB]: (state, { payload: tab }) => ({
			...state,
			activeTab: tab,
		}),
	},
	initialState
);

export default pgCard;
