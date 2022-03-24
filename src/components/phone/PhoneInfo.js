import styled from 'styled-components';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import StyledButton from '../common/StyledButton';
const PhoneInfoBlock = styled.div`
  display: flex;
  justify-content: center;
  table {
    width: 90%;
    border: 1px solid #e5e5e5;
    border-collapse: collapse;
    margin-top: 20px;
  }
  td {
    border: 1px solid #e5e5e5;
    height: 100%;
    padding: 15px 0px;
    text-align: center;
    &:first-child {
      background-color: #e5e5e5;
      width: 100px;
    }
    &:last-child {
      padding: 0px 15px;
      text-align: left;
    }
  }
  .MuiTypography-root {
    font-size: 14px;
  }
`;

const CarrierBox = styled.div`
  cursor: pointer;
  background-color: #c5c5c5;
  border-radius: 6px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 22%;
  height: 50px;
  &.selected {
    background-color: #1976d2;
  }
`;
const CarrierSelect = styled.select`
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  width: 30%;
  height: 50px;
  &.selected {
    background-color: #1976d2;
  }
`;
const StyledInput = styled.input`
  width: 60px;
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

const carriers = ['SKT', 'KT', 'LG U+'];
const cheapCarriers = ['헬로모바일', 'KCT', 'SK7Mobile'];

const PhoneInfo = ({ selected }) => {
  return (
    <PhoneInfoBlock>
      <table>
        <tbody>
          <tr>
            <td>통신사</td>
            <td>
              <CarrierSelect className={`${selected ? 'selected' : ''}`} readOnly value=''>
                {carriers.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </CarrierSelect>
              {/* <CarrierSelect className={`${selected ? 'selected' : ''}`} readOnly value=''>
                {cheapCarriers.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </CarrierSelect> */}
            </td>
          </tr>
          <tr>
            <td>인증 방식</td>
            <td>
              <FormControl>
                {/* <FormLabel id='demo-row-radio-buttons-group-label'>인증 수단</FormLabel> */}
                <RadioGroup row>
                  <FormControlLabel value='sms' control={<Radio size='small' />} label='SMS인증' />
                  <FormControlLabel
                    value='password'
                    control={<Radio size='small' />}
                    label='비밀번호입력'
                  />
                </RadioGroup>
              </FormControl>
            </td>
          </tr>
          <tr>
            <td>전화 번호</td>
            <td>
              <StyledInput />
              <StyledInput />
              <StyledInput />
            </td>
          </tr>
          <tr>
            <td>주민등록번호</td>
            <td>
              <StyledInput />
              <StyledInput />
            </td>
          </tr>
          <tr>
            <td>인증번호</td>
            <td>
              <StyledInput />
              <StyledButton
                width='100px'
                height='35px'
                backgroundColor='#1976D2'
                color='white'
                fontSize='13px'
              >
                인증번호 요청
              </StyledButton>
            </td>
          </tr>
          {/* <tr>
            <td>비밀번호</td>
            <td>
              <StyledInput />
            </td>
          </tr> */}
        </tbody>
      </table>
    </PhoneInfoBlock>
  );
};

export default PhoneInfo;
