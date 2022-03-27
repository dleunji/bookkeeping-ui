import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'ordinary/CHANGE_INPUT';
const CHANGE_CARD_NUM = 'ordinary/CHANGE_CARD_NUM';
const CHANGE_STEP = 'ordinary/CHANGE_STEP';
const CHANGE_REGISTERED = 'ordinary/CHANGE_REGISTERED';
const CHANGE_SECOND = 'ordindary/CHANGE_SECOND';
const CHANGE_STATUSCODE = 'ordinary/CHANGE_STATUSCODE';
const INITIALIZE_CARD = 'ordinary/INITIALIZE_CARD';

export const changeInput = createAction(CHANGE_INPUT, ({ name, step, value }) => ({
  name,
  step,
  value,
}));

export const changeCardNum = createAction(CHANGE_CARD_NUM, ({ idx, value }) => ({
  idx,
  value,
}));

export const changeStep = createAction(CHANGE_STEP, step => step);
export const changeRegistered = createAction(CHANGE_REGISTERED);
export const changeSecond = createAction(CHANGE_SECOND);
export const changeStatusCode = createAction(CHANGE_STATUSCODE, statusCode => statusCode);
export const initializeCard = createAction(
  INITIALIZE_CARD,
  ({ cardId, cardAddress, cVC, validYear, validMonth, isCheck, isRegistered, cardPassword }) => ({
    cardId,
    cardAddress,
    cVC,
    validYear,
    validMonth,
    isCheck,
    isRegistered,
    cardPassword,
  })
);

const initialState = {
  currentStep: 0,
  registered: true,
  card: {
    cardId: null,
    cardAddress: '',
    cVC: '',
    validYear: '',
    validMonth: '',
    isCheck: '',
    isRegistered: '',
    phoneNum: ['', '', ''],
  },
  step1: {
    cardNum: ['', '', '', ''],
    validMonth: '1',
    validYear: '2022',
  },
  step2: {
    cvc: '',
    password: '',
  },
  nstep1: {
    socialNum1: '',
    socialNum2: '',
    cvc: '',
  },
  nstep2: {
    carrier: '',
    password: '',
    checkPassword: '',
    authNum: '',
    authStatus: 'NONE',
    phoneNum1: '',
    phoneNum2: '',
    phoneNum3: '',
  },
  nstep3: {
    cvc: '',
    password: '',
  },
  second: 5,
  // 결제 상태 코드
  statusCode: '',
};
const ordinary = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { step, name, value } }) => ({
      ...state,
      [step]: { ...state[step], [name]: value },
    }),
    [CHANGE_CARD_NUM]: (state, { payload: { idx, value } }) => ({
      ...state,
      step1: {
        ...state.step1,
        cardNum: state.step1.cardNum.map((num, index) => (index === idx ? value : num)),
      },
    }),
    [CHANGE_STEP]: (state, { payload: step }) => ({
      ...state,
      currentStep: step,
    }),
    [CHANGE_REGISTERED]: state => ({
      ...state,
      registered: !state.registered,
    }),
    [CHANGE_SECOND]: state => ({
      ...state,
      second: state.second - 1,
    }),
    [CHANGE_STATUSCODE]: (state, { payload: statusCode }) => ({
      ...state,
      statusCode,
    }),
    [INITIALIZE_CARD]: (
      state,
      {
        payload: {
          cardId,
          cardAddress,
          cVC,
          validYear,
          validMonth,
          isCheck,
          isRegistered,
          cardPassword,
        },
      }
    ) => ({
      ...state,
      card: {
        ...state.card,
        cardId,
        cardAddress,
        cVC,
        validYear,
        validMonth,
        isCheck,
        isRegistered,
        cardPassword,
      },
    }),
  },
  initialState
);

export default ordinary;
