import styled from 'styled-components';
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome/index';
import { faCircle } from '../../../../node_modules/@fortawesome/free-solid-svg-icons/index';
const _ = require('lodash');
const InputTableBlock = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  .info-box {
    display: flex;
    width: 90%;
    justify-content: flex-end;
    margin-bottom: 10px;
    font-size: 14px;
  }
  .password-dots {
    .dot {
      margin-right: 2px;
    }
  }
  .cvc-info {
    font-size: 13px;
  }
`;

const StyledInput = styled.input`
  width: ${props => props.width || '60px'};
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
  &:read-only {
    background-color: #e5e5e5;
  }
`;
const StyledSelect = styled.select`
  width: 65px;
  height: 25px;
  border: 1px solid #c5c5c5;
  text-align: center;
  border-radius: 3px;
  font-family: inherit;
  margin-right: 15px;
`;

const NinputTable1 = ({ handleInput, handleCardNum, step1, nstep1 }) => {
  return (
    <InputTableBlock>
      <table>
        <tbody>
          <tr>
            <td>카드번호</td>
            <td>
              {_.range(4).map(num => (
                <StyledInput
                  key={num}
                  name={num}
                  value={step1.cardNum[num]}
                  onChange={handleCardNum}
                  type='number'
                  readOnly
                />
              ))}
            </td>
          </tr>
          <tr>
            <td>카드 유효 기간</td>
            <td>
              {/* TODO 4자리만 입력하도록 제한 */}
              <StyledSelect
                disabled
                value={step1.validMonth}
                name='validMonth'
                step='1'
                onChange={e => {
                  const { name, value } = e.target;
                  handleInput({ name, value, step: 'step1' });
                }}
              >
                {_.range(1, 13).map(num => (
                  <option key={num} value={num}>
                    {num.toString().padStart(2, '0')}
                  </option>
                ))}
              </StyledSelect>
              <StyledSelect
                disabled
                value={step1.validYear}
                name='validYear'
                step='1'
                onChange={e => {
                  const { name, value } = e.target;
                  handleInput({ name, value, step: 'step1' });
                }}
              >
                {_.range(2022, 2028).map(num => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </StyledSelect>
              <span> (Month/Year)</span>
            </td>
          </tr>
          <tr>
            <td>주민등록번호</td>
            <td>
              <StyledInput
                name='socialNum1'
                width='100px'
                value={nstep1.socialNum1}
                onChange={e => {
                  const { name, value } = e.target;
                  handleInput({ name, value, step: 'nstep1' });
                }}
              />
              <StyledInput
                name='socialNum2'
                width='10px'
                value={nstep1.socialNum2}
                onChange={e => {
                  const { name, value } = e.target;
                  handleInput({ name, value, step: 'nstep1' });
                }}
              />
              <span className='password-dots'>
                <FontAwesomeIcon width='5px' className='dot' icon={faCircle} />
                <FontAwesomeIcon width='5px' className='dot' icon={faCircle} />
                <FontAwesomeIcon width='5px' className='dot' icon={faCircle} />
                <FontAwesomeIcon width='5px' className='dot' icon={faCircle} />
                <FontAwesomeIcon width='5px' className='dot' icon={faCircle} />
                <FontAwesomeIcon width='5px' className='dot' icon={faCircle} />
              </span>
            </td>
          </tr>
          <tr>
            <td>CVC번호</td>
            <td>
              <StyledInput
                width='100px'
                type='password'
                value={nstep1.cvc}
                name='cvc'
                onChange={e => {
                  const { name, value } = e.target;
                  handleInput({ name, value, step: 'nstep1' });
                }}
              />
              <span className='cvc-info'>카드 뒷면 3자리</span>
            </td>
          </tr>
        </tbody>
      </table>
    </InputTableBlock>
  );
};

export default NinputTable1;
