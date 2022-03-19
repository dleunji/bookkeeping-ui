import { createAction, handleActions } from 'redux-actions';

// 상태 변경 액션 이름
const INITIAILIZE_CHARGE = 'charge/INITIAILIZE_CHARGE';
const CHANGE_AMOUNT = 'charge/CHANGE_AMOUNT';
const CHANGE_INPUT = 'charge/CHANGE_INPUT';
const CHANGE_ANCHOR = 'charge/CHANGE_ANCHOR';

// 상태 변경하는 액션 생성
export const initializeCharge = createAction(INITIAILIZE_CHARGE, ({prevBalance}) => ({prevBalance}));
export const changeAmount = createAction(CHANGE_AMOUNT, amount => amount);
export const changeInput = createAction(CHANGE_INPUT, ({name, value}) => ({name, value}));
export const changeAnchor = createAction(CHANGE_ANCHOR, status => status);

// redux 초기 상태 설정
const initialState = {
  prevBalance: 0,
  userId: null,
  totalAmount: '',
  anchorEl: null,
};

const charge = handleActions(
  {
    [INITIAILIZE_CHARGE]:(state, {payload: {prevBalance, userId}}) => ({
      ...state,
      prevBalance,
      userId
    }),
    [CHANGE_AMOUNT]:(state, {payload: amount}) => ({
      ...state,
      totalAmount: state.totalAmount + amount
    }),
    [CHANGE_INPUT]: (state, {payload: {name ,value}}) => ({
      ...state,
      [name]: value
    }),
    [CHANGE_ANCHOR]: (state, {payload: status}) => ({
      ...state,
      anchorEl: status
    })
  }, initialState
)

export default charge;