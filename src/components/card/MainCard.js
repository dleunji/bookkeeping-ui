import styled from 'styled-components';
import GradientBox from '../common/GradientBox';
import CautionBox from '../common/CautionBox';
import CardInfoBox from './CardInfoBox';
import BankSelect from './BankSelect';
import ChargeHeader from '../common/ChargeHeader';
import PairButtons from '../common/PairButtons';
const MainCardBlock = styled.div`
  background-color: #f3f6f9;
  height: 100vh;
  color: #323232;
  font-size: 16px;
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .info-container {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .title {
    margin-bottom: 15px;
    font-family: 'Noto Sans Serif KR';
    font-size: 24px;
    font-weight: 700;
    display: flex;
  }
  .bank-selection-container {
    margin-top: 20px;
    height: 100%;
  }
  .bank-selection-box {
    height: 100%;
  }
  .caution-container {
    font-family: 'AppleSDGothicNeoM';
    margin-top: 30px;
    font-size: 14px;
    .caution-link {
      text-decoration: underline;
    }
  }
`;

const MainCard = ({
  totalAmount,
  maxInterestFreeMonth,
  handleInstallMonth,
  selectedMonth,
  handleCard,
  selectedCard,
  infoVisibility,
  handlePopup,
}) => {
  return (
    <MainCardBlock>
      <ChargeHeader />
      <div className='container'>
        <div>
          <div className='title'>충전 내용</div>
          <div className='info-container'>
            <GradientBox width='460px' height='130px' backgroundColor='white'>
              <CardInfoBox
                totalAmount={totalAmount}
                maxInterestFreeMonth={maxInterestFreeMonth}
                handleInstallMonth={handleInstallMonth}
                selectedMonth={selectedMonth}
                selectedCard={selectedCard}
                infoVisibility={infoVisibility}
              />
            </GradientBox>
          </div>
        </div>
        <div className='bank-selection-container'>
          <div className='title'>신용/체크 카드</div>
          <div className='info-container'>
            <GradientBox width='460px' height='250px' backgroundColor='white'>
              <div className='bank-selection-box'>
                <BankSelect
                  handleCard={handleCard}
                  selectedCard={selectedCard}
                  selectedMonth={selectedMonth}
                  handlePopup={handlePopup}
                  totalAmount={totalAmount}
                />
              </div>
            </GradientBox>
          </div>
        </div>
        <div className='caution-container'>
          <CautionBox />
        </div>
      </div>
    </MainCardBlock>
  );
};

export default MainCard;
