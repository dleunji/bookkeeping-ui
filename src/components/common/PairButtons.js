import styled from 'styled-components';
import StyledButton from './StyledButton';
import ConditionalStyledButton from './ConditionalStyledButton';

const PairButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '15px'};
  margin-right: ${props => props.marginSide || '0px'};
  margin-left: ${props => props.marginSide || '0px'};
`;

const PairButtons = ({
  possible,
  width,
  height,
  marginBottom,
  marginTop,
  marginSide,
  handleNext,
  handleCancel,
  leftText,
  rightText,
}) => {
  return (
    <PairButtonBlock marginBottom={marginBottom} marginSide={marginSide} marginTop={marginTop}>
      <StyledButton
        width={width}
        height={height}
        backgroundColor='#C5C5C5'
        color='#323232'
        onClick={handleCancel}
      >
        {leftText || '뒤로'}
      </StyledButton>
      <ConditionalStyledButton
        width={width}
        height={height}
        backgroundColor='#1976D2'
        color='white'
        possible={possible}
        onClick={handleNext}
      >
        {rightText || '다음'}
      </ConditionalStyledButton>
    </PairButtonBlock>
  );
};

export default PairButtons;
