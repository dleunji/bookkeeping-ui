import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_ACCOUNTID= 'pgAccountTransfer/INITIALIZE_ACCOUNTID';
const CHANGE_ACCOUNTID = 'pgAccountTransfer/CHANGE_ACCOUNTID';

export const initializeAccountId = createAction(INITIALIZE_ACCOUNTID, id => id);
export const changeAccountId = createAction(CHANGE_ACCOUNTID, id => id);

const initialState = {  
  accountId: '',
};

const pgAcountTransfer = handleActions(
  {
    [INITIALIZE_ACCOUNTID]: (state, {payload: id}) => ({
        ...state,
        accountId : id
      }),
    [CHANGE_ACCOUNTID]: (state, {payload: id}) => ({
      ...state,
      accountId : state.accountId + id
    }),
  },
  initialState
);

export default pgAcountTransfer;
