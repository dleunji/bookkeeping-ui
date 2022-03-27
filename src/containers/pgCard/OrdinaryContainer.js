import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainOrdinary from '../../components/pgCard/ordinary/MainOrdinary';
import {
  changeInput,
  changeSecond,
  changeStatusCode,
  initializeCard,
} from '../../modules/ordinary';
import { changeCardNum, changeStep, changeRegistered } from '../../modules/ordinary';
const registeredSteps = ['카드 정보 입력', '결제 인증', '결제 완료'];
const unregisteredSteps = ['신규 가입 및 약관 동의', '비밀번호 등록', '결제 인증', '완료'];
// mocking

const CARD_BASE_URL = '/api/OrdinaryCards/';

const OrdinaryContainer = () => {
  const {
    totalAmount,
    installMonth,
    step1,
    currentStep,
    registered,
    step2,
    statusCode,
    second,
    card,
    nstep1,
    nstep2,
    nstep3,
  } = useSelector(({ pgCard, ordinary }) => ({
    totalAmount: pgCard.totalAmount,
    installMonth: pgCard.installMonth,
    step1: ordinary.step1,
    currentStep: ordinary.currentStep,
    registered: ordinary.registered,
    step2: ordinary.step2,
    statusCode: ordinary.statusCode,
    second: ordinary.second,
    card: ordinary.card,
    nstep1: ordinary.nstep1,
    nstep2: ordinary.nstep2,
    nstep3: ordinary.nstep3,
  }));

  const dispatch = useDispatch();

  const handleInput = ({ name, value, step }) => {
    console.log(name, value, step);

    // CVC는 세자리의 수
    if (name === 'cvc' && value.length > 3) {
      return;
    }
    // 비밀번호는 최대 8자리의 수
    if (name === 'password' && value.length > 8) {
      return;
    }

    dispatch(changeInput({ name, value, step }));
  };

  const handleCardNum = e => {
    const { name, value } = e.target;
    // 한 단위에 최대 천 자리
    // XXXX - XXXX - XXXX - XXXX
    if (value.length > 4) {
      // TODO: 자동으로 다음 input으로 포커스 이동
      return;
    }
    console.log(name, value);
    dispatch(changeCardNum({ idx: parseInt(name), value }));
  };

  const checkRegistered = async () => {
    const cardAddress = step1.cardNum.join('');
    console.log(cardAddress);
    try {
      await fetch(CARD_BASE_URL + `${cardAddress}/${step1.validMonth}/${step1.validYear}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(res.status);
          }
        })
        .then(data => {
          // 카드가 유효하면 카드사에서 카드 정보 가져오기
          const {
            cardId,
            cardAddress,
            cvc,
            validYear,
            validMonth,
            isCheck,
            isRegistered,
            cardPassword,
            socialNum,
            phoneNum,
            bank,
          } = data;
          dispatch(
            initializeCard({
              cardId,
              cardAddress,
              cvc,
              validYear,
              validMonth,
              isCheck,
              isRegistered,
              cardPassword,
              socialNum,
              phoneNum,
              bank,
            })
          );
          if (!isRegistered) {
            // 미등록된 카드
            dispatch(changeRegistered());
          } else {
            // 등록된 카드
            dispatch(changeStep(currentStep + 1));
          }
        });
    } catch (e) {
      alert('카드가 유효하지 않습니다.');
    }
  };

  const registerCard = async () => {
    try {
      const cardAddress = step1.cardNum.join('');
      console.log(cardAddress);
      await fetch(CARD_BASE_URL + 'register', {
        method: 'POST',
        body: JSON.stringify({
          address: cardAddress,
          password: nstep2.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          console.log(res.url);
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(res.status);
          }
        })
        .then(data => {
          // 카드 등록 후 결제까지
          dispatch(changeStatusCode('SUCCESS'));
          console.log(data);
        });
    } catch (e) {
      alert('카드 등록에 실패했습니다.');
    }
  };

  const handleNext = async () => {
    console.log(registered, currentStep);
    if (registered) {
      // 현재가 마지막 스텝인 경우
      // 결제 처리
      switch (currentStep) {
        case 0:
          // 카드사 확인
          checkRegistered();
          break;
        case 1:
          if (card.cardPassword === step2.password && card.cvc === step2.cvc) {
            dispatch(changeStep(currentStep + 1));
            dispatch(changeStatusCode('SUCCESS'));
          } else {
            alert('잘못된 정보입니다.');
          }
          break;
      }
    } else {
      switch (currentStep) {
        case 0:
          // 신규 등록
          const socialNums = nstep1.socialNum1.toString() + nstep1.socialNum2.toString();
          console.log(socialNums);

          if (socialNums === card.socialNum && card.cvc === nstep1.cvc) {
            dispatch(changeStep(currentStep + 1));
          } else {
            alert('정보를 확인해주세요.');
          }
          break;
        case 1:
          dispatch(changeStep(currentStep + 1));
          break;
        case 2:
          // 신규 등록
          if (step2.cvc === card.cvc && step2.password === card.cardPassword) {
            registerCard();
            dispatch(changeStep(currentStep + 1));
          } else alert('정보를 확인해주세요.');
          break;
      }
    }
  };

  const handleAuth = () => {
    switch (nstep2.authStatus) {
      case 'NONE': {
        const phoneNums =
          nstep2.phoneNum1.toString() + nstep2.phoneNum2.toString() + nstep2.phoneNum3.toString();
        console.log(phoneNums);
        if (
          nstep2.password.length > 5 &&
          nstep2.password.length < 9 &&
          phoneNums === card.phoneNum
        ) {
          // dispatch(changeStep(currentStep + 1));
          dispatch(changeInput({ name: 'authStatus', value: 'READY', step: 'nstep2' }));
        } else {
          alert('정보를 확인해주세요.');
        }
        break;
      }
      case 'READY': {
        dispatch(changeInput({ name: 'authStatus', value: 'COMPLETE', step: 'nstep2' }));
      }
    }
  };

  const handleCancel = () => {
    if (currentStep === 0) {
      return;
    }
    dispatch(changeStep(currentStep - 1));
  };

  useEffect(() => {
    const desc = installMonth > 0 ? `${installMonth}개월 할부` : '일시불';
    if (
      (registered && currentStep === registeredSteps.length - 1) ||
      (!registered && currentStep === unregisteredSteps.length - 1)
    ) {
      // 1초 간격으로 카운트 다운
      const timer = setInterval(() => {
        dispatch(changeSecond());
      }, 1000);

      // 5초간만 타이머 유지하고 자동 창 종료
      setTimeout(() => {
        clearTimeout(timer);
        const parentWindow = window.opener;
        const prevBalance = sessionStorage.getItem('prevBalance');
        const userId = sessionStorage.getItem('userId');
        parentWindow.postMessage(
          JSON.stringify({
            state: card.isCheck ? 'CHECK_CARD_SUCCESS' : 'CREDIT_CARD_SUCCESS',
            data: {
              chargeAmount: totalAmount, // 총 충전 금액
              userId,
              chargeDesc: '충전완료', // 충전 정보
              chargeMethod: card.isCheck ? 'CHECK_CARD' : 'CREDIT_CARD', // 결제 수단 이름
              chargeMethodAmount: totalAmount, // 결제 수단 금액(가상 계좌는 '입금대기'라 출력)
              chargeAnnounceTitle: '할부 정보', // 안내사항 제목
              chargeAnnounceDesc: desc, // 안내사항 내용
              balance: parseInt(prevBalance) + parseInt(totalAmount), // 충전 후 잔액
              chargeLimit: 0, // 잔여 충전 한도
            },
          }),
          'http://localhost:3000/pg-card'
        );
        window.close();
      }, 5000);
    }
  }, [statusCode]);

  useEffect(() => {
    window.addEventListener(
      'unload',
      event => {
        // 표준에 따라 기본 동작 방지
        event.preventDefault();
        // Chrome에서는 returnValue 설정이 필요함
        const parentWindow = window.opener;
        const prevBalance = sessionStorage.getItem('prevBalance');
        const userId = sessionStorage.getItem('userId');
        parentWindow.postMessage(
          JSON.stringify({
            // state: 'FAIL',
            // data: {
            //   chargeAmount: totalAmount, // 총 충전 금액
            //   userId,
            //   chargeDesc: '충전 실패', // 충전 정보
            //   chargeMethod: 'CARD', // 결제 수단 이름
            //   chargeMethodAmount: totalAmount, // 결제 수단 금액(가상 계좌는 '입금대기'라 출력)
            //   chargeAnnounceTitle: '할부 정보', // 안내사항 제목
            //   chargeAnnounceDesc: '', // 안내사항 내용
            //   balance: parseInt(prevBalance) + parseInt(totalAmount), // 충전 후 잔액
            //   chargeLimit: 0, // 잔여 충전 한도
            // },
            // state: 'FAIL',
            // data: {
            // }
          }),
          'http://localhost:3000/pg-card'
        );
        window.close();
      },
      5000
    );
  }, []);

  return (
    <MainOrdinary
      totalAmount={totalAmount}
      handleInput={handleInput}
      handleCardNum={handleCardNum}
      step1={step1}
      handleNext={handleNext}
      handleCancel={handleCancel}
      currentStep={currentStep}
      registered={registered}
      step2={step2}
      registeredSteps={registeredSteps}
      unregisteredSteps={unregisteredSteps}
      second={second}
      nstep1={nstep1}
      nstep2={nstep2}
      nstep3={nstep3}
      handleAuth={handleAuth}
    />
  );
};

export default OrdinaryContainer;
