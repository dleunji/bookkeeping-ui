import styled from 'styled-components';
import { fa1 } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
import ChargeHeader from '../common/ChargeHeader';
import GradientBox from '../common/GradientBox';
import AccountAddress from './AccountAddress';
import AccountPassword from './AccountPassword';
import KeyBoard from './Keyboard';

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
`;

const MainRegister = ({
  shuffledArr,
  handleButton,
  handleEraser,
  handleAllEraser,
  password,
  wrong,
}) => {
  return (
    <MainBlock>
      <div className='container'>
        <ChargeHeader text='넥토 연결 계좌' />
        <div className='step-title'>
          <div className='icon'>
            <FontAwesomeIcon icon={fa1} />
          </div>
          은행 선택
        </div>
        <GradientBox width='90%' height='500px'></GradientBox>
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
