import {createAction, handleActions} from 'redux-actions';
const CHANGE_SUM = 'statistics/CHANGE_SUM';
const CHANGE_MONTH = 'statistics/CHANGE_MONTH';
const CHANGE_STATISTICS_TAB = 'statistics/CHANGE_STATISTICS_TAB';
export const changeSum = createAction(CHANGE_SUM, sum => sum);
export const changeMonth = createAction(CHANGE_MONTH, month => month);
export const changeStatisticsTab = createAction(CHANGE_STATISTICS_TAB, tab => tab);
const initialState = {
  month: new Date(),
  tab: 0,
  sum: []
}

const statistics = handleActions(
  {
    [CHANGE_SUM]: (state, {payload: sum}) => ({
      ...state,
      sum
    }),
    [CHANGE_MONTH]: (state, {payload: month}) => ({
      ...state,
      month
    }),
    [CHANGE_STATISTICS_TAB]: (state, {payload: tab}) => ({
      ...state,
      tab
    })
  },
  initialState
);

export default statistics;

