import styled from 'styled-components';
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
    .bank {
      margin-top: 20px;
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

const MainRegisteredAccount = ({
  shuffledArr,
  handleButton,
  handleEraser,
  handleAllEraser,
  password,
  wrong,
  registeredAccount,
}) => {
  return (
    <MainBlock>
      <div className='container'>
        <ChargeHeader text='넥토 연결 계좌' />
        <div className='bank'>
          <GradientBox width='410px' height='88px'>
            <AccountAddress
              bank={registeredAccount.bank}
              address={registeredAccount.accountAddress}
            />
          </GradientBox>
        </div>
        <div className='password'>
          <GradientBox width='410px' height='88px'>
            <AccountPassword password={password} wrong={wrong} />
          </GradientBox>
        </div>
        <div className='alert'>비밀번호 재설정</div>
      </div>
      <KeyBoard
        shuffledArr={shuffledArr}
        handleButton={handleButton}
        handleEraser={handleEraser}
        handleAllEraser={handleAllEraser}
      />
    </MainBlock>
  );
};

export default MainRegisteredAccount;
