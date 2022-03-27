import { createAction, handleActions } from 'redux-actions';

const CHANGE_CARRIER = 'change/CHANGE_CARRIER';
const CHANGE_AUTHENTICATION = 'phone/CHANGE_AUTHENTICATION';
const CHANGE_INPUT = 'phone/CHANGE_INPUT';
const CHANGE_PASSWORD = 'phone/CHANGE_PASSWORD';
const CHANGE_STATUS = 'phone/CHANGE_STATUS';

export const changeCarrier = createAction(CHANGE_CARRIER, ({ name, value }) => ({ name, value }));
export const changeAuthentication = createAction(CHANGE_AUTHENTICATION, auth => auth);
export const changeInput = createAction(CHANGE_INPUT, ({ name, idx, value }) => ({
  name,
  idx,
  value,
}));
export const changeStatus = createAction(CHANGE_STATUS, status => status);
export const changePassword = createAction(CHANGE_PASSWORD, value => value);

const initialState = {
  // 주요 통신사
  mainCarrier: 'SKT',
  // 알뜰폰 통신사
  subCarrier: '',
  // 인증방식
  auth: 'SMS',
  // 인증 단계 기록
  status: 'NONE',
  // 전화번호
  phoneNum: ['', '', ''],
  // 주민등록번호
  socialNum: ['', ''],
  // 인증번호 혹은 주민번호
  password: '',
};

const phone = handleActions(
  {
    [CHANGE_CARRIER]: (state, { payload: { name, value } }) => ({
      ...state,
      [name]: value,
    }),
    [CHANGE_AUTHENTICATION]: (state, { payload: auth }) => ({
      ...state,
      auth,
    }),
    [CHANGE_INPUT]: (state, { payload: { name, idx, value } }) => ({
      ...state,
      [name]: state[name].map((s, i) => (i === idx ? value : s)),
    }),
    [CHANGE_PASSWORD]: (state, { payload: value }) => ({
      ...state,
      password: value,
    }),
    [CHANGE_STATUS]: (state, { payload: status }) => ({
      ...state,
      status,
    }),
  },
  initialState
);

export default phone;
