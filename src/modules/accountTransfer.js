import { createAction, handleActions } from 'redux-actions';


const CHANGE_RESULT = 'acountTransfer/CHANGE_RESULT';
const CHANGE_MESSAGE = 'acountTransfer/CHANGE_MESSAGE';
const INITIALIZE_RESPONSE = 'acountTransfer/INITIALIZE_RESPONSE';
export const changeResult = createAction(CHANGE_RESULT,(result) => result);
export const changeMessage = createAction(CHANGE_MESSAGE,(message) => message);
export const initalizeResponse = createAction(INITIALIZE_RESPONSE,({result, message}) => ({result, message}));

const initialState = {    
  result : '',
  message : '',
};

const accountTransfer = handleActions(
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
  },

  initialState
);

export default accountTransfer;
