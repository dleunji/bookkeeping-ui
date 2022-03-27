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
  marginSide,
  handlePopup,
  handleBack,
}) => {
  return (
    <PairButtonBlock marginBottom={marginBottom} marginSide={marginSide}>
      <StyledButton
        width={width}
        height={height}
        backgroundColor='#C5C5C5'
        color='#323232'
        onClick={handleBack}
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
        disabled={!possible}
      >
        결제
      </ConditionalStyledButton>
    </PairButtonBlock>
  );
};

export default PairButtons;
