import { createAction, handleActions } from 'redux-actions';


const CHANGE_RESULT = 'postPayment/CHANGE_RESULT';
const CHANGE_MESSAGE = 'postPayment/CHANGE_MESSAGE';
const INITIALIZE_RESPONSE = 'postPayment/INITIALIZE_RESPONSE';
const CHANGE_OTP = 'postPayment/CHANGE_OTP';
const INITIALIZE_OTP = 'postPayment/INITIALIZE_OTP';
const STOP_TIMER = 'postPayment/STOP_TIMER';
const INITIALIZE_TIMER = 'postPayment/INITIALIZE_TIMER';
const SET_TIMER = 'postPayment/SET_TIMER';
export const changeResult = createAction(CHANGE_RESULT,(result) => result);
export const changeMessage = createAction(CHANGE_MESSAGE,(message) => message);
export const initalizeResponse = createAction(INITIALIZE_RESPONSE,({result, message}) => ({result, message}));
export const initializeOTP = createAction(INITIALIZE_OTP,(OTP)=>OTP);
export const changeOTP = createAction(CHANGE_OTP, (OTP) => OTP);
export const stopTimer = createAction(STOP_TIMER );
export const initializeTimer = createAction(INITIALIZE_TIMER);
export const setTimer = createAction(SET_TIMER,(func)=>func);

const initialState = {    
    result : '',
    message : '',
    OTP: '',
    myTimer: '',
};

const postPayment = handleActions(
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
    [INITIALIZE_OTP]: (state, {payload: OTP}) => ({
      ...state,
      OTP,
    }),
    [CHANGE_OTP]: (state, {payload: OTP}) => ({
        ...state,
        OTP,
    }),
    [STOP_TIMER]: (state, {payload: func}) => ({
      ...state,
      myTimer: clearTimeout(state.myTimer),
    }),
    [INITIALIZE_TIMER]: (state, {payload: func}) => ({
      ...state,
      myTimer: setInterval(func, 1000 * 2)
    }),
    [SET_TIMER]: (state, {payload: myTimer}) => ({
      ...state,
      myTimer: myTimer
    }),
  },
  initialState
);

export default postPayment;
