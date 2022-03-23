import styled from 'styled-components';
import StyledButton from '../common/StyledButton';
import ConditionalStyledButton from '../common/ConditionalStyledButton';

const PairButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.marginBottom || '15px'};
  margin-right: ${props => props.marginSide || '0px'};
  margin-left: ${props => props.marginSide || '0px'};
`;

const PairButtons = ({
  possible,
  width,
  height,
  marginBottom,
  navigate,
  marginSide,
  selectedMonth,
  selectedCard,
  totalAmount,
  handlePopup,
}) => {
  return (
    <PairButtonBlock marginBottom={marginBottom} marginSide={marginSide}>
      <StyledButton
        width={width}
        height={height}
        backgroundColor='#C5C5C5'
        color='#323232'
        onClick={() => {
          // 뒤로 가기
          // 약관 동의는 건너뛰기
          navigate(-2);
        }}
      >
        뒤로
      </StyledButton>
      <ConditionalStyledButton
        width={width}
        height={height}
        backgroundColor='#1976D2'
        color='white'
        possible={possible}
        onClick={handlePopup}
      >
        결제
      </ConditionalStyledButton>
    </PairButtonBlock>
  );
};

export default PairButtons;
