import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_PG_ACCOUNT_TRANSFER= 'pgAccountTransfer/INITIALIZE_PG_ACCOUNT_TRANSFER';
const INITIALIZE_ACCOUNTID= 'pgAccountTransfer/INITIALIZE_ACCOUNTID';
const CHANGE_ACCOUNTID = 'pgAccountTransfer/CHANGE_ACCOUNTID';
const CHANGE_BANK = 'pgAccountTransfer/CHANGE_BANK';

export const initializePGAccountTransfer = createAction(INITIALIZE_PG_ACCOUNT_TRANSFER, 
  ({totalAmount, bank}) => ({totalAmount, bank}));
export const initializeAccountId = createAction(INITIALIZE_ACCOUNTID, (accountId) => accountId);
export const changeAccountId = createAction(CHANGE_ACCOUNTID, (accountId) => accountId);
export const changeBank = createAction(CHANGE_BANK, (bank) => bank);

const initialState = {  
  totalAmount: 0,
  accountId: '',
  bank: '',
};

const pgAccountTransfer = handleActions(
  {
    [INITIALIZE_PG_ACCOUNT_TRANSFER]: (state, {payload: {totalAmount, bank} }) => ({
      ...state,
      totalAmount,
      bank,
    }),
    [INITIALIZE_ACCOUNTID]: (state, {payload: accountId}) => ({
      ...state,
      accountId,
    }),
    [INITIALIZE_ACCOUNTID]: (state, {payload: accountId}) => ({
        ...state,
        accountId,
      }),
    [CHANGE_ACCOUNTID]: (state, {payload: accountId}) => ({
      ...state,
      accountId : accountId,
    }),
    [CHANGE_BANK]: (state, {payload: bank}) => ({
      ...state,
      bank,
    }),
  },
  initialState
);

export default pgAccountTransfer;
