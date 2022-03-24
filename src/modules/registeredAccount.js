import { createAction, handleActions } from 'redux-actions';
const SHUFFLE_NUMS = 'registeredAcount/SHUFFLE_NUMS';
const CHANGE_PASSWORD = 'registeredAccount/CHANGE_PASSWORD';
const CHANGE_WRONG = 'registeredAccount/CHANGE_WRONG';

export const shuffleNums = createAction(SHUFFLE_NUMS, (nums) => nums);
export const changePassword = createAction(CHANGE_PASSWORD, (num) => num);
export const changeWrong = createAction(CHANGE_WRONG, (value) => value);

const initialState = {
	registeredPassword: '202222',
	registeredAccounts: [
		{
			bank: '우리',
			account: '1002556597228',
			password: '202222',
			createdAt: '2022-01-01',
		},
		{
			bank: '하나',
			account: '13891037723507',
			password: '970703',
			createdAt: '2022-01-03',
		},
	],
	nums: [],
	password: '',
	wrong: false,
};

const registeredAccount = handleActions(
	{
		[SHUFFLE_NUMS]: (state, { payload: nums }) => ({
			...state,
			nums,
		}),
		[CHANGE_PASSWORD]: (state, { payload: num }) => ({
			...state,
			password: num,
		}),
		[CHANGE_WRONG]: (state, { payload: value }) => ({
			...state,
			wrong: value,
		}),
	},
	initialState
);

export default registeredAccount;
