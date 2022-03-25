import { createAction, handleActions } from 'redux-actions';
const SHUFFLE_NUMS = 'registeredAcount/SHUFFLE_NUMS';
const CHANGE_PASSWORD = 'registeredAccount/CHANGE_PASSWORD';
const CHANGE_WRONG = 'registeredAccount/CHANGE_WRONG';
const INITIALIZE = 'registeredAccount/INITIALIZE';

export const shuffleNums = createAction(SHUFFLE_NUMS, nums => nums);
export const changePassword = createAction(CHANGE_PASSWORD, num => num);
export const changeWrong = createAction(CHANGE_WRONG, value => value);
export const initialize = createAction(
  INITIALIZE,
  ({ accountAddress, registeredAccountPassword, bank }) => ({
    accountAddress,
    registeredAccountPassword,
    bank,
  })
);

const initialState = {
  registeredAccount: {
    accountAddress: '',
    registeredAccountPassword: '',
    bank: '',
  },
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
    [INITIALIZE]: (state, { payload: { accountAddress, registeredAccountPassword, bank } }) => ({
      ...state,
      registeredAccount: { accountAddress, registeredAccountPassword, bank },
    }),
  },
  initialState
);

export default registeredAccount;
