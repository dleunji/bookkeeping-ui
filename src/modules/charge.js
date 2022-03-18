import { createAction, handleActions } from 'redux-actions';

const INITIAILIZE_CHARGE = 'charge/INITIAILIZE_CHARGE';
const CHANGE_AMOUNT = 'charge/CHANGE_AMOUNT';
const CHANGE_INPUT = 'charge/CHANGE_INPUT';

export const initializeCharge = createAction(INITIAILIZE_CHARGE, ({prevBalance}) => ({prevBalance}));
export const changeAmount = createAction(CHANGE_AMOUNT, amount => amount);
export const changeInput = createAction(CHANGE_INPUT, ({name, value}) => ({name, value}));
// redux 초기 상태 설정
const initialState = {
  prevBalance: 0,
  userId: null,
  totalAmount: 0,
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
    })
  }, initialState
)

export default charge;