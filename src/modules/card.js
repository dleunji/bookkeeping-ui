import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_MONTH = 'card/INITIALIZE_INTEREST_FREE_MONTH';
const CHANGE_MONTH = 'card/CHANGE_MONTH';

export const initializeMonth = createAction(
  INITIALIZE_MONTH,
  ({ maxInterestFreeMonth, installMonths }) => ({
    maxInterestFreeMonth,
    installMonths,
  })
);

export const changeMonth = createAction(CHANGE_MONTH, month => month);

const initialState = {
  maxInterestFreeMonth: 0,
  installMonths: [2, 3, 4, 5, 6, 7, 8],
  selectedMonth: null,
};

const card = handleActions(
  {
    [INITIALIZE_MONTH]: (state, { payload: { maxInterestFreeMonth, installMonths } }) => ({
      ...state,
      maxInterestFreeMonth,
      installMonths,
    }),
    [CHANGE_MONTH]: (state, { payload: month }) => ({
      ...state,
      selectedMonth: month,
    }),
  },
  initialState
);

export default card;
