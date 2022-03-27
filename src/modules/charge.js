import { createAction, handleActions } from 'redux-actions';

// 상태 변경 액션 이름
const INITIAILIZE_CHARGE = 'charge/INITIAILIZE_CHARGE';
const CHANGE_AMOUNT = 'charge/CHANGE_AMOUNT';
const CHANGE_INPUT = 'charge/CHANGE_INPUT';
const CHANGE_CHECK = 'charge/CHANGE_CHECK';
const CHANGE_METHOD = 'charge/CHANGE_METHOD';
const CHANGE_POSSIBLE = 'charge/CHANGE_POSSIBLE';
const INITIALIZE_MORE = 'charge/INITIALIZE_MORE';

// 상태 변경하는 액션 생성
export const initializeCharge = createAction(INITIAILIZE_CHARGE, ({ prevBalance }) => ({
  prevBalance,
}));
export const changeAmount = createAction(CHANGE_AMOUNT, amount => amount);
export const changeInput = createAction(CHANGE_INPUT, ({ name, value }) => ({
  name,
  value,
}));
export const changeCheck = createAction(CHANGE_CHECK);
export const changeMethod = createAction(CHANGE_METHOD, method => method);
export const changePossible = createAction(CHANGE_POSSIBLE, possible => possible);
export const initializeMore = createAction(INITIALIZE_MORE);

// redux 초기 상태 설정
const initialState = {
  prevBalance: 0,
  userId: null,
  totalAmount: '',
  checked: false,
  selectedMethod: '',
  possible: false,
};

const charge = handleActions(
  {
    [INITIAILIZE_CHARGE]: (state, { payload: { prevBalance, userId } }) => ({
      ...state,
      prevBalance,
      userId,
    }),
    [CHANGE_AMOUNT]: (state, { payload: amount }) => ({
      ...state,
      totalAmount: state.totalAmount + amount,
    }),
    [CHANGE_INPUT]: (state, { payload: { name, value } }) => ({
      ...state,
      [name]: value,
    }),
    [CHANGE_CHECK]: state => ({
      ...state,
      checked: !state.checked,
    }),
    [CHANGE_METHOD]: (state, { payload: method }) => ({
      ...state,
      selectedMethod: method,
    }),
    [CHANGE_POSSIBLE]: (state, { payload: possible }) => ({
      ...state,
      possible,
    }),
    [INITIALIZE_MORE]: state => ({
      ...state,
      totalAmount: '',
      checked: false,
      selectedMethod: '',
      possible: false,
    }),
  },
  initialState
);

export default charge;
