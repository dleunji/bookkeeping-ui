import styled from 'styled-components';
import { Alert } from '../../../node_modules/@mui/material/index';

const StyledInput = styled.input`
  height: 40px;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  font-family: 'Lexend';
  font-size: 30px;
  margin-bottom: 10px;
  &:active {
    border: 1px solid #1976d2;
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const AccountAddressBlock = styled.div`
  .bank-container {
    font-size: 20px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    .bank-title {
      font-weight: 700;
      margin: 10px 0;
    }
  }
`;

const AccountInput = ({ value, handleAccountAddress }) => {
  return (
    <AccountAddressBlock>
      <div className='bank-container'>
        <Alert severity='info'>본인 명의의 계좌만 가능합니다.</Alert>
        <div className='bank-title'>우리</div>
        <StyledInput
          value={value}
          type='number'
          onChange={e => handleAccountAddress(e.target.value)}
        ></StyledInput>
      </div>
    </AccountAddressBlock>
  );
};

export default AccountInput;
