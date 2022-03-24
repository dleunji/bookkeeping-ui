import { useDispatch, useSelector } from 'react-redux';
import MainPhone from '../components/phone/MainPhone';
import {
  changeAuthentication,
  changeCarrier,
  changeInput,
  changePassword,
  changeStatus,
} from '../modules/phone';

const PhoneContainer = () => {
  const { totalAmount, phone } = useSelector(({ charge, phone }) => ({
    totalAmount: charge.totalAmount,
    phone,
  }));
  const dispatch = useDispatch();

  const { mainCarrier, subCarrier, auth, status, phoneNum, socialNum, password } = phone;

  const handleCarrier = e => {
    const { name, value } = e.target;
    dispatch(changeCarrier({ name, value }));
  };

  // TODO: 각자 자리수 제한 필요
  const handleAuthentication = e => {
    dispatch(changeAuthentication(e.target.value));
  };

  const handleInput = ({ name, idx, value }) => {
    switch (name) {
      case 'phoneNum':
        if (idx === 0 && value.length < 4) {
          dispatch(changeInput({ name, idx, value }));
        } else if (idx > 0 && value.length < 5) {
          dispatch(changeInput({ name, idx, value }));
        }
        break;
      case 'socialNum':
        if (idx === 0 && value.length < 7) {
          dispatch(changeInput({ name, idx, value }));
        } else if (idx === 1 && value.length < 7) {
          dispatch(changeInput({ name, idx, value }));
        }
        break;
      default:
        break;
    }
  };

  const handleStatus = status => {
    dispatch(changeStatus(status));
  };

  const handlePassword = e => {
    const { value } = e.target;
    // 6자리 고정
    if (value.length > 6) {
      return;
    }
    dispatch(changePassword(value));
  };
  return (
    <MainPhone
      totalAmount={totalAmount}
      phone={phone}
      handleAuthentication={handleAuthentication}
      handleInput={handleInput}
      handleStatus={handleStatus}
      handlePassword={handlePassword}
      handleCarrier={handleCarrier}
    />
  );
};

export default PhoneContainer;
