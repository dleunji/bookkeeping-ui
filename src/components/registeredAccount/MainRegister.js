import styled from 'styled-components';
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
} from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import ChargeHeader from '../common/ChargeHeader';
import GradientBox from '../common/GradientBox';
import AccountAddress from './AccountAddress';
import AccountPassword from './AccountPassword';
import KeyBoard from './Keyboard';
import BankSelect from './BankSelect';
import PairButtons from '../common/PairButtons';
import AccountInput from './AccountInput';
import AccountAuth from './AccountAuth';
import ARSAgree from './ARSAgree';
import RegisterPassword from './RegisterPassword';
import CheckPassword from './CheckPassword';
import RegisterFinish from './RegisterFinish';
const MainBlock = styled.div`
  background-color: #f3f6f9;
  height: 100vh;
  color: #323232;
  font-size: 16px;
  display: flex;
  justify-content: center;
  font-family: 'AppleSDGothicNeoM';
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    .step-title {
      font-family: 'Noto Sans Serif KR';
      width: 90%;
      .icon {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1976d2;
        margin-right: 10px;
      }
      font-size: 24px;
      display: flex;
      align-items: center;
      margin: 20px 0;
    }
    .password {
      margin-top: 15px;
    }
    .alert {
      margin-top: 20px;
      font-size: 14px;
      text-decoration: underline;
      text-align: center;
    }
  }

  .button-container {
    width: 90%;
  }
`;

const StyledInput = styled.input`
  width: 60px;
  height: 25px;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  margin-right: 15px;
  text-align: center;
  font-family: inherit;
  &:active {
    border: 1px solid #1976d2;
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const MainRegister = ({
  step,
  register,
  handleCard,
  handleBack,
  handleNext,
  handleAccountAddress,
  handleAccountAuth,
  shuffledArr,
  handleButton,
  handleAllEraser,
  handleEraser,
  requestARS,
}) => {
  console.log(register);
  return (
    <MainBlock>
      <div className='container'>
        <ChargeHeader text='넥토 연결 계좌' />
        <div className='step-title'>
          <div className='icon'>
            {step === 1 && <FontAwesomeIcon icon={fa1} />}
            {step === 2 && <FontAwesomeIcon icon={fa2} />}
            {step === 3 && <FontAwesomeIcon icon={fa3} />}
            {step === 4 && <FontAwesomeIcon icon={fa4} />}
            {step === 5 && <FontAwesomeIcon icon={fa5} />}
            {step === 6 && <FontAwesomeIcon icon={fa6} />}
            {step === 7 && <FontAwesomeIcon icon={fa7} />}
          </div>
          {step === 1 && '은행 선택'}
          {step === 2 && '계좌 입력'}
          {step === 3 && '계좌 인증'}
          {step === 4 && '출금이체 ARS 동의'}
          {step === 5 && '비밀번호 등록'}
          {step === 6 && '비밀번호 확인'}
          {step === 7 && '등록 완료'}
        </div>
        {step === 5 && (
          <RegisterPassword
            shuffledArr={shuffledArr}
            handleAllEraser={handleAllEraser}
            handleEraser={handleEraser}
            handleButton={handleButton}
            password={register.password}
            wrong={1}
          />
        )}
        {step === 6 && (
          <CheckPassword
            shuffledArr={shuffledArr}
            handleAllEraser={handleAllEraser}
            handleEraser={handleEraser}
            handleButton={handleButton}
            password={register.password}
            wrong={1}
          />
        )}
        {(step < 5 || step === 7) && (
          <GradientBox width='90%' height='500px'>
            {step === 1 && (
              <BankSelect selectedBank={register.selectedBank} handleCard={handleCard} />
            )}
            {step === 2 && (
              <AccountInput
                value={register.accountAddress}
                handleAccountAddress={handleAccountAddress}
              />
            )}
            {step === 3 && (
              <AccountAuth handleAccountAuth={handleAccountAuth} value={register.AccountAuth} />
            )}
            {step === 4 && (
              <ARSAgree activeArsButton={register.activeArsButton} requestARS={requestARS} />
            )}
            {step === 7 && <RegisterFinish />}
          </GradientBox>
        )}
        <div className='button-container'>
          {step === 1 && (
            <PairButtons
              marginTop='20px'
              possible={register.selectedBank}
              handleCancel={handleBack}
              handleNext={handleNext}
            />
          )}
          {step === 2 && (
            <PairButtons
              marginTop='20px'
              possible={register.accountAddress}
              handleCancel={handleBack}
              handleNext={handleNext}
            />
          )}
          {step === 3 && (
            <PairButtons
              marginTop='20px'
              possible={register.accountAddress}
              handleCancel={handleBack}
              handleNext={handleNext}
            />
          )}
          {step === 4 && (
            <PairButtons
              marginTop='20px'
              possible={register.accountAddress}
              handleCancel={handleBack}
              handleNext={handleNext}
            />
          )}
          {step === 7 && (
            <PairButtons
              marginTop='20px'
              possible={register.accountAddress}
              handleCancel={handleBack}
              handleNext={handleNext}
              rightText='충전하기'
              leftText='닫기'
            />
          )}
        </div>
      </div>
      {/* <div className='container'>
        <ChargeHeader text='넥토 연결 계좌' />
        <div className='bank'>
          <GradientBox width='410px' height='88px'>
            <AccountAddress />
          </GradientBox>
        </div>
        <div className='password'>
          <GradientBox width='410px' height='88px'>
            <AccountPassword password={password} wrong={wrong} />
          </GradientBox>
        </div>
        <div className='alert'>
          <div>암호가 기억이 안나요.</div>
        </div>
      </div>
      <KeyBoard
        shuffledArr={shuffledArr}
        handleButton={handleButton}
        handleEraser={handleEraser}
        handleAllEraser={handleAllEraser}
      /> */}
    </MainBlock>
  );
};

export default MainRegister;
