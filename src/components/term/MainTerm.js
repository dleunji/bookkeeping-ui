import styled from 'styled-components';
import GradientBox from '../common/GradientBox';
import PairButtons from '../common/PairButtons';
import TermBox from './TermBox';
const TermBlock = styled.div`
  background-color: rgba(50, 50, 50, 0.6);
  height: 100vh;
  color: #323232;
  display: flex;
  align-items: center;
  justify-content: center;
  .term-container {
    height: 100%;
  }
`;

const MainTerm = ({ terms, handleTerm, isCompletelyAgreed, handleAllTerms, to, handleBack }) => {
  return (
    <TermBlock>
      <GradientBox width='440px' height='452px'>
        <div className='term-container'>
          <TermBox
            terms={terms}
            handleTerm={handleTerm}
            isCompletelyAgreed={isCompletelyAgreed}
            handleAllTerms={handleAllTerms}
            to={to}
            handleBack={handleBack}
          />
        </div>
      </GradientBox>
    </TermBlock>
  );
};

export default MainTerm;
