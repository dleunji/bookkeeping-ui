import { createAction, handleActions } from 'redux-actions';
const SHUFFLE_NUMS = 'registeredAccount/SHUFFLE_NUMS';
const CHANGE_PASSWORD = 'registeredAccount/CHANGE_PASSWORD';
const CHANGE_WRONG = 'registeredAccount/CHANGE_WRONG';
const INITIALIZE = 'registeredAccount/INITIALIZE';
const CHANGE_REGISTER = 'registeredAccount/CHANGE_REGISTER';
const CHANGE_STEP = 'registeredAccount/CHANGE_STEP';
const CHANGE_ARS_BUTTON = 'registeredAccount/CHAGE_ARS_BUTTON';

export const shuffleNums = createAction(SHUFFLE_NUMS, nums => nums);
export const changePassword = createAction(CHANGE_PASSWORD, num => num);
export const changeWrong = createAction(CHANGE_WRONG, value => value);
export const changeRegister = createAction(CHANGE_REGISTER, ({ name, value }) => ({
  name,
  value,
}));
export const changeStep = createAction(CHANGE_STEP, step => step);

export const initialize = createAction(
  INITIALIZE,
  ({ accountAddress, registeredAccountPassword, bank }) => ({
    accountAddress,
    registeredAccountPassword,
    bank,
  })
);
export const changeArsButton = createAction(CHANGE_ARS_BUTTON);

const initialState = {
  registeredAccount: {
    accountAddress: '',
    registeredAccountPassword: '',
    bank: '',
  },
  register: {
    selectedBank: '',
    accountAddress: '',
    accountAuth: '',
    password: '',
    activeArsButton: true,
  },
  nums: [],
  password: '',
  wrong: false,
  step: 1,
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
    [CHANGE_REGISTER]: (state, { payload: { name, value } }) => ({
      ...state,
      register: { ...state.register, [name]: value },
    }),
    [CHANGE_STEP]: (state, { payload: step }) => ({
      ...state,
      step,
    }),
    [CHANGE_ARS_BUTTON]: state => ({
      ...state,
      register: { ...state.register, activeArsButton: false },
    }),
  },
  initialState
);

export default registeredAccount;
