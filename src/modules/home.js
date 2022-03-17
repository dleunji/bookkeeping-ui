import { handleActions, createAction } from 'redux-actions';
const CHANGE_NAV_TAB = 'home/CHANGE_NAV_TAB';

export const changeNavTab = createAction(CHANGE_NAV_TAB, (navTab) => navTab);

const initialState = {
	activeNavTab: 0,
};

const home = handleActions(
	{
		[CHANGE_NAV_TAB]: (state, { payload: navItem }) => ({
			...state,
			activeNavTab: navItem,
		}),
	},
	initialState
);
export default home;
