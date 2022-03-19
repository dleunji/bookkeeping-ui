import styled from "styled-components";
const BottomButtonBlock = styled.button`
  width: 100%;
  // background-color: #1976D2;
  background-color: #E5E5E5;
  height: 60px;
  color: white;
  border:none;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 6px;
`;

const BottomButton = () => {
  return (
    <BottomButtonBlock>
      충전
    </BottomButtonBlock>
  );
};

export default BottomButton;
