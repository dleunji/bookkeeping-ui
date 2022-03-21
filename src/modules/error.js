import { createAction, handleActions } from 'redux-actions';

// 상태 변경 액션 이름
const INITIAILIZE_ERROR = 'error/INITIAILIZE_ERROR'; // error 

// 상태 변경하는 액션 생성
export const initializeError = createAction(INITIAILIZE_ERROR, ({code, title, message}) => ({code, title, message}));

// redux 초기 상태 설정
const initialState = {
  code: '',
  title: '',
  message: ''
};

const error = handleActions(
  {
    [INITIAILIZE_ERROR]:(state, {payload: {code, title, message}}) => ({
      ...state,
      code,
      title,
      message,
    })
  }, initialState
)

export default error;