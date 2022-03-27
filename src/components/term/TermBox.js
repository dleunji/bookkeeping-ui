import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/index';
import PairButtons from './PairButtons';
const TermBoxBlock = styled.div`
  margin: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .term-title {
    font-size: 24px;
    margin-bottom: 15px;
    font-family: 'Noto Sans Serif KR';
  }
  .terms {
    padding-top: 10px;
    .term-icon {
      color: #c5c5c5;
      cursor: pointer;
      padding-right: 10px;
      &.checked {
        color: #323232;
      }
    }
    hr {
      border: none;
      height: 1px;
      background-color: #c5c5c5;
    }
    .term-detail {
      text-decoration: underline;
    }
  }
`;

const TermListItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
`;

const TermListItem = ({ idx, content, checked, handleTerm }) => {
  return (
    <TermListItemBlock>
      <div>
        <FontAwesomeIcon
          className={`term-icon ${checked ? 'checked' : ''}`}
          icon={faCheckCircle}
          onClick={() => handleTerm(idx)}
        />
        <span>{content}</span>
      </div>
      <span className='term-detail'>보기</span>
    </TermListItemBlock>
  );
};

const TermBox = ({ terms, handleTerm, isCompletelyAgreed, handleAllTerms, to, handleBack }) => {
  return (
    <TermBoxBlock>
      <div className='terms'>
        <div className='term-title'>약관 안내</div>
        <div className='total-terms-ok'>
          <TermListItem
            content='전체약관 확인'
            checked={isCompletelyAgreed}
            handleTerm={handleAllTerms}
          />
        </div>
        <hr />
        <div className='terms-list'>
          {terms.map((term, idx) => (
            <TermListItem
              key={idx}
              idx={idx}
              content={term.name}
              checked={term.checked}
              handleTerm={handleTerm}
            />
          ))}
        </div>
      </div>
      <PairButtons handleBack={handleBack} possible={isCompletelyAgreed} to={to} />
    </TermBoxBlock>
  );
};

export default TermBox;
