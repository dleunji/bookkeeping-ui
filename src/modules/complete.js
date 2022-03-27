import { createAction, handleActions } from 'redux-actions';

// 상태 변경 액션 이름
const INITIAILIZE_COMPLETE = 'complete/INITIAILIZE_COMPLETE'; // error

// 상태 변경하는 액션 생성
export const initializeComplete = createAction(
  INITIAILIZE_COMPLETE,
  ({
    chargeAmount,
    chargeDesc,
    chargeMethod,
    chargeMethodAmount,
    chargeAnnounceTitle,
    chargeAnnounceDesc,
    balance,
    chargeLimit,
  }) => ({
    chargeAmount,
    chargeDesc,
    chargeMethod,
    chargeMethodAmount,
    chargeAnnounceTitle,
    chargeAnnounceDesc,
    balance,
    chargeLimit,
  })
);

// redux 초기 상태 설정
const initialState = {
  chargeAmount: 0, // 총 충전 금액
  chargeDesc: '충전 완료', // 충전 정보
  chargeMethod: '', // 결제 수단 이름
  chargeMethodAmount: '', // 결제 수단 금액(가상 계좌는 '입금대기'라 출력)
  chargeAnnounceTitle: '', // 안내사항 제목
  chargeAnnounceDesc: '', // 안내사항 내용
  balance: 0, // 충전 후 잔액
  chargeLimit: 0, // 잔여 충전 한도
};

const complete = handleActions(
  {
    [INITIAILIZE_COMPLETE]: (
      state,
      {
        payload: {
          chargeAmount,
          chargeDesc,
          chargeMethod,
          chargeMethodAmount,
          chargeAnnounceTitle,
          chargeAnnounceDesc,
          balance,
          chargeLimit,
        },
      }
    ) => ({
      ...state,
      chargeAmount,
      chargeDesc,
      chargeMethod,
      chargeMethodAmount,
      chargeAnnounceTitle,
      chargeAnnounceDesc,
      balance,
      chargeLimit,
    }),
  },
  initialState
);

export default complete;
