import styled from "styled-components";
import ChargeHeader from "../common/ChargeHeader";
import GradientBox from "../common/GradientBox";
import { Box } from "@mui/material/index";
import AmountInput from "./AmountInput";
import AmountSelect from "./AmountSelect";
const MainChargeBlock = styled.div`
  background-color: #F3F6F9;
  height: 100vh;
  color: #323232;
  .amount-container {
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
  }
  .amount-selection-container {
    margin-top: 35px;
  }
  .method-title-container {
    display: flex;
    justify-content:center;
    margin-top: 35px;
    .method-title {
      width:460px;
      font-family: 'Noto Sans Serif KR';
      font-size: 24px;
    }
  }
  .method-selection-container{
    display: flex;
    justify-content:center;
    margin-top: 10px;
  }
`;

const MainCharge = ({prevBalance, totalAmount, handleChangeAmount, onChange}) => {
  return(
    <MainChargeBlock>
      <ChargeHeader/>
      <div className="amount-container">
        <GradientBox
          backgroundColor="white"
          width="460px"
          height="85px"
        >
          <AmountInput
            value={totalAmount}
            onChange={onChange}
          />
        </GradientBox>
        <div className="amount-selection-container">
          <GradientBox
            backgroundColor="#E5E5E5"
            width="460px"
            height="50px"
          >
            <AmountSelect
              handleChangeAmount={handleChangeAmount}
            />
          </GradientBox>
        </div>
      </div>
      <div className="method-title-container">
        <div className="method-title">결제수단 선택</div>
      </div>
      <div className="method-selection-container">
        <GradientBox
          backgroundColor="white"
          width="460px"
          height="277px"
        >
        </GradientBox>
      </div>
    </MainChargeBlock>
  )
}

export default MainCharge;