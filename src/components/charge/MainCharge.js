import styled from "styled-components";
import ChargeHeader from "../common/ChargeHeader";
import GradientBox from "../common/GradientBox";
import { Box } from "@mui/material/index";
import AmountInput from "./AmountInput";
import AmountSelect from "./AmountSelect";
import MethodSelect from "./MethodSelect";
import { Grid } from "@mui/material/index";
import BottomButton from "./BottomButton";
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

  .caution-container {
    display: flex;
    justify-content:center;
    margin-top: 20px;
    font-size: 14px;
    .caution-title {
      width: 90px;
    }
    .caution-link {
      text-decoration: underline;
    }
  }
  .bottom-button {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

const MainCharge = ({
  prevBalance,
  totalAmount,
  handleChangeAmount,
  onChange,
  anchorEl,
  handleClose,
  handleClick,
  handleMethod,
  itemRef
}) => {
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
          <MethodSelect
            anchorEl={anchorEl}
            handleClose={handleClose}
            handleClick={handleClick}
            handleMethod={handleMethod}
            itemRef={itemRef}
          />
        </GradientBox>
      </div>
      <div className="caution-container">
        <Grid container
          sx={{width:"460px" }}
        >
          <Grid className="caution-title" item sx={4}>
            유의사항
          </Grid>
          <Grid item sx={8}>
            <div>체크카드는 할부기간을 설정할 수 없습니다.</div>
            <div className="caution-link">카드사별 혜택 보기</div>
          </Grid>
        </Grid>
      </div>
      <div className="bottom-button">
        <BottomButton/>
      </div>
    </MainChargeBlock>
  )
}

export default MainCharge;