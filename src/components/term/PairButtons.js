import styled from 'styled-components';
import StyledButton from '../common/StyledButton';
import ConditionalStyledButton from '../common/ConditionalStyledButton';
import { Link } from 'react-router-dom';
const PairButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  .disabled {
    pointer-events: none;
  }
`;

const PairButtons = ({ possible, to, handleBack }) => {
  return (
    <PairButtonBlock>
      <StyledButton onClick={() => handleBack()} backgroundColor='#C5C5C5' color='#323232'>
        취소
      </StyledButton>
      <Link to={to} className={possible ? '' : 'disabled'}>
        <ConditionalStyledButton backgroundColor='#1976D2' color='white' possible={possible}>
          확인
        </ConditionalStyledButton>
      </Link>
    </PairButtonBlock>
  );
};

export default PairButtons;
