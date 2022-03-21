import styled from 'styled-components';
import GradientBox from '../common/GradientBox';
import CautionBox from '../common/CautionBox';
import CardInfoBox from './CardInfoBox';
import BankSelect from './BankSelect';
const MainCardBlock = styled.div`
  background-color: #f3f6f9;
  height: 100vh;
  color: #323232;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  .title {
    margin-bottom: 15px;
    font-family: 'Noto Sans Serif KR';
    font-size: 24px;
    font-weight: 700;
  }
  .bank-selection-container {
    margin-top: 20px;
  }
  .caution-container {
    margin-top: 30px;
    font-size: 14px;
    .caution-link {
      text-decoration: underline;
    }
  }
`;

const MainCard = ({ totalAmount, maxInterestFreeMonth, handleInstallMonth, seletedMonth }) => {
  return (
    <MainCardBlock>
      <div className='container'>
        <div>
          <div className='title'>내용</div>
          <GradientBox width='460px' height='170px' backgroundColor='white'>
            <CardInfoBox
              totalAmount={totalAmount}
              maxInterestFreeMonth={maxInterestFreeMonth}
              handleInstallMonth={handleInstallMonth}
              seletedMonth={seletedMonth}
            />
          </GradientBox>
        </div>
        <div className='bank-selection-container'>
          <div className='title'>신용/체크 카드</div>
          <GradientBox width='460px' height='340px' backgroundColor='white'>
            <div className='bank-selection-container'>
              <BankSelect />
            </div>
          </GradientBox>
        </div>
        <div className='caution-container'>
          <CautionBox />
        </div>
      </div>
    </MainCardBlock>
  );
};

export default MainCard;
