import styled from 'styled-components';
import { Select } from '@mui/material/index';
import { MenuItem } from '../../../node_modules/@mui/material/index';
const CardInfoBoxBlock = styled.div`
  .info-item {
    display: flex;
    height: 30px;
    justify-content: space-between;
    padding-bottom: 20px;
    align-items: center;
  }
  padding: 15px;
`;
// TODO: 카드사에 따른 가능 할부 개월 수
const months = [2, 3, 4, 5, 6, 7, 8];

const CardInfoBox = ({ totalAmount, maxInterestFreeMonth, handleInstallMonth, selectedMonth }) => {
  return (
    <CardInfoBoxBlock>
      <div className='info-item'>
        <div className=''>충전 금액</div>
        <div className=''>{parseInt(totalAmount).toLocaleString()}</div>
      </div>
      <div className='info-item'>
        <div className=''>은행</div>
        <div className=''>우리</div>
      </div>
      <div className='info-item'>
        <div className=''>할부 기간</div>
        <div className=''>
          <Select
            sx={{
              width: '150px;',
              height: '40px;',
              // fontSize: '13px',
            }}
            value={selectedMonth}
            onChange={handleInstallMonth}
          >
            {months.map((month, idx) => (
              <MenuItem key={idx} value={month}>
                {month}개월 {month <= maxInterestFreeMonth ? '(무이자)' : ''}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </CardInfoBoxBlock>
  );
};

export default CardInfoBox;
