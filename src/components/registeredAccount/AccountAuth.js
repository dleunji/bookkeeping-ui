import styled from 'styled-components';
import GradientBox from '../common/GradientBox';

const AccountBlock = styled.div`
  .container {
    margin: 15px;
    display: flex;
    flex-direction: column;
    .info {
      text-align: center;
      span {
        color: #1976d2;
        font-weight: 600;
      }
    }
    .input {
      margin-top: 20px;
    }
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    .nexto {
      font-size: 30px;
      display: flex;
      align-items: center;
    }
    .empty-box {
      margin-left: 10px;
      width: 35px;
      height: 35px;
      background-color: white;
      border-radius: 6px;
      &:last-child {
        margin-right: 10px;
      }
    }
  }
`;

const StyledInput = styled.input`
  margin-top: 20px;
  width: 90%;
  height: 40px;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  font-family: 'Lexend';
  font-size: 20px;
  margin-bottom: 10px;
  &:active {
    border: 1px solid #1976d2;
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    font-family: 'AppleSDGothicNeoM';
    color: #e5e5e5;
  }
`;
const AccountAuth = ({ value, handleAccountAuth }) => {
  return (
    <AccountBlock>
      <div className='container'>
        <div className='info'>
          해당 계좌로 <span>1원</span>을 보냈습니다. <br />
          계좌 거래 내역에서 입금된 1원의 <span>입금자명</span>을 확인 후<br />
          NEXTO 뒤 <span>3자리</span> 숫자를 입력해주세요.
        </div>
        <div className='input'>
          <GradientBox width='350px' backgroundColor='#E5E5E5' height='80px'>
            <div className='flex-container'>
              <div>입금자명</div>
              <div className='nexto'>
                NEXTO
                <div className='empty-box' />
                <div className='empty-box' />
                <div className='empty-box' />
                1원
              </div>
            </div>
          </GradientBox>
        </div>
        <StyledInput
          onChange={e => handleAccountAuth(e.target.value)}
          value={value}
          placeholder='3자리 숫자'
          type='number'
        />
      </div>
    </AccountBlock>
  );
};

export default AccountAuth;
