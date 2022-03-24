import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_VIRTUAL ='virtual/INITIALIZE_VIRTUAL';
const CHANGE_MESSAGE = 'virtual/CHANGE_MESSAGE';
const CHANGE_METHOD = 'virtual/CHANGE_METHOD';

export const initializeVirtual = createAction(INITIALIZE_VIRTUAL, (totalAmount) => (totalAmount))
export const changeMessage = createAction(CHANGE_MESSAGE,(message) => message);
export const changeMethod = createAction(CHANGE_METHOD, (method) => method)

const initialState = {    
  totalAmount : '',
  method : '',
};

const pgVirtualAccount = handleActions(
  {
    [INITIALIZE_VIRTUAL]: (state, {payload:totalAmount}) => ({
        ...state,
        totalAmount,
    }),
    [CHANGE_MESSAGE]: (state, {payload:message}) => ({
        ...state,
        message,
    }),
    [CHANGE_METHOD]: (state, {payload:method}) => ({
        ...state,
        method,
    }),
  },
 
  initialState
);

export default pgVirtualAccount;
