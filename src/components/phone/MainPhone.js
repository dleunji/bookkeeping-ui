import styled from 'styled-components';
import PairButtons from '../common/PairButtons';
import ChargeHeader from '../common/ChargeHeader';
import GradientBox from '../common/GradientBox';
import ChargeInfo from './ChargeInfo';
import PhoneInfo from './PhoneInfo';
const MainBlock = styled.div`
  background-color: #f3f6f9;
  height: 100vh;
  color: #323232;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  font-family: 'AppleSDGothicNeoM';
  .container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const MainPhone = ({ totalAmount }) => {
  return (
    <MainBlock>
      <ChargeHeader />
      <div className='container'>
        <div className='gradient-box'>
          <GradientBox width='460px' height='600px'>
            <ChargeInfo totalAmount={totalAmount} />
            <PhoneInfo />
            <PairButtons
              marginTop='180px'
              marginBottom='30px'
              marginSide='40px'
              height='50px'
              width='160px'
              // possible={possible}
              // handleCancel={handleCancel}
              // handleNext={handleNext}
            />
          </GradientBox>
        </div>
      </div>
    </MainBlock>
  );
};

export default MainPhone;
