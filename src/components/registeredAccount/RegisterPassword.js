import styled from 'styled-components';
import GradientBox from '../common/GradientBox';
import AccountPassword from './AccountPassword';
import KeyBoard from './Keyboard';
const MainBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RegisterPassword = ({
  shuffledArr,
  handleAllEraser,
  handleEraser,
  handleButton,
  password,
  wrong,
}) => {
  return (
    <MainBlock>
      <div className='password'>
        <GradientBox width='410px' height='88px'>
          <AccountPassword password={password} wrong={wrong} />
        </GradientBox>
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

export default RegisterPassword;
