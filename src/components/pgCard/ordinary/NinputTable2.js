import styled from 'styled-components';
import StyledButton from '../../common/StyledButton';
const _ = require('lodash');
const InputTableBlock = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .password-box {
    height: 90px;
    .password-info {
      margin-top: 15px;
      font-size: 13px;
    }
  }
  .auth-box {
    display: flex;
    align-items: center;
  }
  table {
    width: 90%;
    border: 1px solid #e5e5e5;
    border-collapse: collapse;
  }
  td {
    border: 1px solid #e5e5e5;
    height: 50px;
    text-align: center;
    &:first-child {
      background-color: #e5e5e5;
      width: 240px;
    }
    &:last-child {
      padding: 0px 15px;
      text-align: left;
    }
  }
`;

const StyledInput = styled.input`
  width: 80px;
  height: 25px;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  margin-right: 15px;
  text-align: center;
  font-family: inherit;
  &:active {
    border: 1px solid #1976d2;
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const NinputTable2 = ({ handleInput, step2, nstep2, handleAuth }) => {
  return (
    <InputTableBlock>
      <table>
        <tbody>
          <tr className='password-box'>
            <td>결제 비밀번호 입력</td>
            <td>
              {
                <StyledInput
                  name='password'
                  value={nstep2.password}
                  onChange={e => {
                    const { name, value } = e.target;
                    return handleInput({ name, value, step: 'nstep2' });
                  }}
                  type='password'
                />
              }
              <div className='password-info'>결제 비밀번호는 숫자 6 ~ 8자리입니다.</div>
            </td>
          </tr>
          <tr>
            <td>결제 비밀번호 확인</td>
            <td>
              <StyledInput
                name='checkPassword'
                value={step2.checkPassword}
                onChange={e => {
                  const { name, value } = e.target;
                  return handleInput({ name, value, step: 'nstep2' });
                }}
                type='password'
              />
            </td>
          </tr>
          <tr>
            <td>휴대 번호</td>
            <td>
              <StyledInput
                name='phoneNum1'
                value={step2.phoneNum1}
                onChange={e => {
                  const { name, value } = e.target;
                  return handleInput({ name, value, step: 'nstep2' });
                }}
                type='number'
              />
              <StyledInput
                name='phoneNum2'
                value={step2.phoneNum2}
                onChange={e => {
                  const { name, value } = e.target;
                  return handleInput({ name, value, step: 'nstep2' });
                }}
                type='number'
              />
              <StyledInput
                name='phoneNum3'
                value={step2.phoneNum3}
                onChange={e => {
                  const { name, value } = e.target;
                  return handleInput({ name, value, step: 'nstep2' });
                }}
                type='number'
              />
            </td>
          </tr>
          <tr>
            <td>인증 번호</td>
            <td className='auth-box'>
              <StyledInput
                name='auth'
                value={step2.authNum}
                onChange={e => {
                  const { name, value } = e.target;
                  return handleInput({ name, value, step: 'nstep2' });
                }}
                type='number'
                disabled={nstep2.authStatus === 'NONE' || nstep2.authStatus === 'COMPLETE'}
              />
              <StyledButton
                height='28px'
                width='120px'
                color='white'
                fontSize='14px'
                disabled={nstep2.authStatus === 'COMPLETE'}
                onClick={() => handleAuth()}
              >
                {nstep2.authStatus === 'NONE' && '인증번호 요청'}
                {nstep2.authStatus === 'READY' && '인증번호 확인'}
                {nstep2.authStatus === 'COMPLETE' && '인증 완료'}
              </StyledButton>
            </td>
          </tr>
        </tbody>
      </table>
    </InputTableBlock>
  );
};

export default NinputTable2;
