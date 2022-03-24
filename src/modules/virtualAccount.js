import { createAction, handleActions } from 'redux-actions';


const CHANGE_RESULT = 'virtual/CHANGE_RESULT';
const CHANGE_MESSAGE = 'virtual/CHANGE_MESSAGE';
const INITIALIZE_RESPONSE = 'virtual/INITIALIZE_RESPONSE';
export const changeResult = createAction(CHANGE_RESULT,(result) => result);
export const changeMessage = createAction(CHANGE_MESSAGE,(message) => message);
export const initalizeResponse = createAction(INITIALIZE_RESPONSE,({result, message}) => ({result, message}));

const initialState = {    
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
  },

  initialState
);

export default virtualAccount;
