import { createAction, handleActions } from 'redux-actions';


const CHECK_TERM = 'payAgree/CHECK_TERM';


export const checkTerm = createAction(CHECK_TERM, idx => idx);

const initialState = {  
  possible: false,
};

const payAgree = handleActions(
  {
    [CHECK_TERM]: (state) => ({
      ...state,
      possible : !state.possible
    }),
  },
  initialState
);

export default payAgree;
