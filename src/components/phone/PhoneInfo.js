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
  .carriers {
    display: flex;
  }
  .social-password {
    font-size: 25px;
    text-align: center;
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
`;

const carriers = [
  {
    key: 'SKT',
    value: 'SKT',
  },
  {
    key: 'KT',
    value: 'KT',
  },
  {
    key: 'LGU',
    value: 'LG U+',
  },
  {
    key: 'CHEAP',
    value: '?????????',
  },
];
const cheapCarriers = [
  {
    key: 'HELLO',
    value: '???????????????',
  },
  {
    key: 'KCT',
    value: 'KCT',
  },
  {
    key: 'SK7',
    value: 'SK7Mobile',
  },
];

const PhoneInfo = ({
  phone,
  handleAuthentication,
  handleInput,
  handleStatus,
  handlePassword,
  handleCarrier,
  handlePasswordButton,
}) => {
  const { mainCarrier, subCarrier, auth, status, phoneNum, socialNum, password } = phone;
  return (
    <PhoneInfoBlock>
      <table>
        <tbody>
          <tr>
            <td>?????????</td>
            <td className='carriers'>
              <CarrierSelect value={mainCarrier} name='mainCarrier' onChange={handleCarrier}>
                {carriers.map(c => (
                  <option key={c.key} value={c.key}>
                    {c.value}
                  </option>
                ))}
              </CarrierSelect>
              {mainCarrier === 'CHEAP' && (
                <CarrierSelect value={subCarrier} name='subCarrier' onChange={handleCarrier}>
                  {cheapCarriers.map(c => (
                    <option key={c.key} value={c.key}>
                      {c.value}
                    </option>
                  ))}
                </CarrierSelect>
              )}
            </td>
          </tr>
          <tr>
            <td>?????? ??????</td>
            <td>
              <FormControl>
                <RadioGroup row value={auth} onChange={handleAuthentication}>
                  <FormControlLabel value='SMS' control={<Radio size='small' />} label='SMS??????' />
                  <FormControlLabel
                    value='PASSWORD'
                    control={<Radio size='small' />}
                    label='??????????????????'
                  />
                </RadioGroup>
              </FormControl>
            </td>
          </tr>
          <tr>
            <td>?????? ??????</td>
            <td>
              <StyledInput
                value={phoneNum[0]}
                onChange={e =>
                  handleInput({
                    name: 'phoneNum',
                    idx: 0,
                    value: e.target.value,
                  })
                }
              />
              <StyledInput
                value={phoneNum[1]}
                onChange={e =>
                  handleInput({
                    name: 'phoneNum',
                    idx: 1,
                    value: e.target.value,
                  })
                }
              />
              <StyledInput
                value={phoneNum[2]}
                onChange={e =>
                  handleInput({
                    name: 'phoneNum',
                    idx: 2,
                    value: e.target.value,
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>??????????????????</td>
            <td>
              <StyledInput
                value={socialNum[0]}
                onChange={e =>
                  handleInput({
                    name: 'socialNum',
                    idx: 0,
                    value: e.target.value,
                  })
                }
              />
              <StyledInput
                value={socialNum[1]}
                width='10px'
                onChange={e =>
                  handleInput({
                    name: 'socialNum',
                    idx: 1,
                    value: e.target.value,
                  })
                }
              />
              <span className='social-password'>????????????</span>
            </td>
          </tr>
          <tr>
            <td>
              {auth === 'SMS' && '????????????'}
              {auth === 'PASSWORD' && '????????????'}
            </td>
            <td>
              {auth === 'SMS' && (
                <StyledInput
                  value={password}
                  onChange={handlePassword}
                  disabled={status === 'NONE' || status === 'SUCCESS_SMS_AUTH'}
                />
              )}
              {auth === 'PASSWORD' && (
                <StyledInput value={password} onChange={handlePassword} type='password' />
              )}
              {auth === 'SMS' && (
                <StyledButton
                  width='100px'
                  height='35px'
                  backgroundColor='#1976D2'
                  color='white'
                  fontSize='13px'
                  onClick={() => handlePasswordButton()}
                >
                  {status === 'NONE' && '???????????? ??????'}
                  {status === 'SUCCESS_SMS_AUTH' && '?????? ??????'}
                  {status === 'READY_SMS_AUTH' && '?????? ??????'}
                  {status === 'POSSIBLE_SMS_AUTH' && '?????? ??????'}
                  {status === 'FAIL_SMS_AUTH' && '???????????? ?????????'}
                </StyledButton>
              )}
            </td>
          </tr>
          {/* <tr>
            <td>????????????</td>
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
