import { Grid } from "@mui/material/index";

const CautionBox = () => {
  return(
    <Grid container
      sx={{width:"460px" }}
    >
      <Grid className="caution-title" item xs={3}>
        유의사항
      </Grid>
      <Grid item xs={9}>
        <div>체크카드는 할부기간을 설정할 수 없습니다.</div>
        <div className="caution-link">카드사별 혜택 보기</div>
      </Grid>
    </Grid>
  );
}

export default CautionBox;