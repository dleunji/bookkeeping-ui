import { createAction, handleActions } from 'redux-actions';


const CHANGE_RESULT = 'voucher/CHANGE_RESULT';
const CHANGE_MESSAGE = 'voucher/CHANGE_MESSAGE';
const INITIALIZE_RESPONSE = 'voucher/INITIALIZE_RESPONSE';
const CHANGE_ACCOUNTID = 'voucher/CHANGE_ACCOUNTID';
export const changeResult = createAction(CHANGE_RESULT,(result) => result);
export const changeMessage = createAction(CHANGE_MESSAGE,(message) => message);
export const initalizeResponse = createAction(INITIALIZE_RESPONSE,({result, message}) => ({result, message}));
export const changeVoucherId = createAction(CHANGE_ACCOUNTID, (voucherId) => voucherId);

const initialState = {    
    voucherId : '',
    result : '',
    message : '',
};

const virtualAccount = handleActions(
  {
    [INITIALIZE_RESPONSE]: (state, {payload:result, message}) => ({
      ...state,
      result,
      message,
      }),
    [CHANGE_RESULT]: (state, {payload:result}) => ({
    ...state,
    result,
    }),
    [CHANGE_MESSAGE]: (state, {payload:message}) => ({
      ...state,
      message,
    }),
    [CHANGE_ACCOUNTID]: (state, {payload: voucherId}) => ({
        ...state,
        voucherId,
      }),
  },

  initialState
);

export default virtualAccount;
