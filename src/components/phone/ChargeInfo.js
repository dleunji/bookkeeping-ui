import styled from 'styled-components';
import { Grid } from '@mui/material/index';
const ChargeInfoBlock = styled.div`
  display: flex;
  justify-content: center;
  .charge-info {
    width: 90%;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    .key {
      background-color: #1976d2;
      color: white;
      border-radius: 6px 0 0 6px;
    }
    .value {
    }
  }
  .MuiGrid-container {
    height: 30px;
    border-radius: 6px;
    height: 40px;
    border: 1px solid #1976d2;
  }
  .MuiGrid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ChargeInfo = ({ totalAmount }) => {
  return (
    <ChargeInfoBlock>
      <div className='charge-info'>
        <Grid container>
          <Grid item xs={6} className='key'>
            충전 금액
          </Grid>
          <Grid item xs={6} className='value'>
            {parseInt(totalAmount).toLocaleString()}
          </Grid>
        </Grid>
      </div>
    </ChargeInfoBlock>
  );
};

export default ChargeInfo;
