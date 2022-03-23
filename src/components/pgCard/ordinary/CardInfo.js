import styled from 'styled-components';
import { Grid } from '@mui/material/index';
const CardInfoBlock = styled.div`
  display: flex;
  justify-content: center;
  // flex-direction: column;
  .fixed-info {
    width: 90%;
    display: flex;
    margin-top: 20px;

    .key {
      background-color: #1976d2;
      color: white;
      border-radius: 6px;
    }
    .value {
    }
  }
  .MuiGrid-container {
    height: 30px;
  }
  .MuiGrid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardInfo = ({ totalAmount }) => {
  return (
    <CardInfoBlock>
      <div className='fixed-info'>
        <Grid container sx={{ width: '100%' }}>
          <Grid item xs={2} className='key'>
            가맹점명
          </Grid>
          <Grid item xs={2} className='value'>
            용돈기입장
          </Grid>
          <Grid item xs={2} className='key'>
            상품명
          </Grid>
          <Grid item xs={2} className='value'>
            넥토캐시
          </Grid>
          <Grid item xs={2} className='key'>
            금액
          </Grid>
          <Grid item xs={2} className='value'>
            {parseInt(totalAmount).toLocaleString()}
          </Grid>
        </Grid>
      </div>
    </CardInfoBlock>
  );
};

export default CardInfo;
