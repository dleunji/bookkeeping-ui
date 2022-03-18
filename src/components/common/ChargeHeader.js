import styled from "styled-components";

/**
 * 충전 메인창 타이틀
 */
const ChargeHeaderBlock = styled.div`
  font-family: 'Noto Sans Serif KR';
  font-size: ${props => props.size || "24px"};
  display: flex;
  justify-content: center;
  padding: 35px 0px 35px;
  .nexto {
    width: 460px;
  }

`;
const ChargeHeader = () => {
  return (
    <ChargeHeaderBlock size="36px">
      <div className="nexto">
        넥토충전
      </div>
    </ChargeHeaderBlock>
  )
}

export default ChargeHeader;