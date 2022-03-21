import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_TERMS = 'term/INITIALIZE_TERMS';
const INITIALIZE_TO = 'term/INITIALIZE_TO';
const CHECK_TERM = 'term/CHECK_TERM';
// 전체 약관 확인을 누르면 전체 약관 확인 처리
const AGREE_COMPLETE_TERM = 'term/AGREE_COMPLETE_TERM';
// 일부 약관 미동의 시 전체 약관 확인 취소 / 개별 동의 눌러서 전체 약관 동의 시
const CHANGE_COMPLETE_TERM = 'term/CHANGE_COMPLETE_TERM';

export const initializeTerms = createAction(INITIALIZE_TERMS, terms => terms);
export const initializeTo = createAction(INITIALIZE_TO, to => to);
export const checkTerm = createAction(CHECK_TERM, idx => idx);
export const agreeCompleteTerm = createAction(AGREE_COMPLETE_TERM);
export const changeCompleteTerm = createAction(CHANGE_COMPLETE_TERM);

const initialState = {
  terms: [],
  isCompletelyAgreed: false,
  to: '',
};

const term = handleActions(
  {
    [INITIALIZE_TERMS]: (state, { payload: terms }) => ({
      ...state,
      terms,
    }),
    [INITIALIZE_TO]: (state, { payload: to }) => ({
      ...state,
      to,
    }),
    [CHECK_TERM]: (state, { payload: idx }) => ({
      ...state,
      terms: state.terms.map((term, index) =>
        idx === index ? { ...term, checked: !term.checked } : { ...term, checked: term.checked }
      ),
    }),
    [AGREE_COMPLETE_TERM]: state => ({
      ...state,
      isCompletelyAgreed: !state.isCompletelyAgreed,
      terms: state.terms.map(term => ({
        ...term,
        checked: !state.isCompletelyAgreed,
      })),
    }),
    [CHANGE_COMPLETE_TERM]: state => ({
      ...state,
      isCompletelyAgreed: !state.isCompletelyAgreed,
    }),
  },
  initialState
);

export default term;
