import { createAction, handleActions } from 'redux-actions';


const CHECK_TERM = 'payAgree/CHECK_TERM';
const CHANGE_RESULT = 'payAgree/CHANGE_RESULT';
const CHANGE_MESSAGE = 'payAgree/CHANGE_MESSAGE';


export const checkTerm = createAction(CHECK_TERM, idx => idx);
export const changeResult = createAction(CHANGE_RESULT, (result) => result);
export const changeMessage = createAction(CHANGE_MESSAGE, (message) => message);

const initialState = {  
  possible: false,
  result : '',
  message : '',
};

const payAgree = handleActions(
  {
    [CHECK_TERM]: (state) => ({
      ...state,
      possible : !state.possible
    }),
    [CHANGE_RESULT]: (state, { payload: result }) => ({
      ...state,
      result,
    }),
    [CHANGE_MESSAGE]: (state, { payload: message }) => ({
      ...state,
      message,
    }),
  },
  initialState
);

export default payAgree;
