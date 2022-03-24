import styled from 'styled-components';
const BottomButtonBlock = styled.button`
  width: 100%;
  background-color: ${props => (props.possible ? '#1976D2' : '#e5e5e5')};
  cursor: ${props => (props.possible ? 'pointer' : 'default')};
  height: 60px;
  color: white;
  border: none;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 6px;
`;

const BottomButton = ({ possible, onClick }) => {
  return (
    <BottomButtonBlock possible={possible} disabled={!possible} onClick={onClick}>
      충전
    </BottomButtonBlock>
  );
};

export default BottomButton;
