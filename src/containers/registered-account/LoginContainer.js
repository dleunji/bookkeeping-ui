import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainRegisteredAccount from '../../components/registeredAccount/MainRegisteredAccount';
import {
  changePassword,
  changeWrong,
  initialize,
  shuffleNums,
} from '../../modules/registeredAccount';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const _ = require('lodash');
const REGISTERED_BASE_URL = '/api/RegisteredAccounts/';
const LoginContainer = () => {
  const { nums, password, registered, wrong, totalAmount } = useSelector(
    ({ registeredAccount, charge }) => ({
      nums: registeredAccount.nums,
      password: registeredAccount.password,
      registered: registeredAccount.registeredAccount,
      wrong: registeredAccount.wrong,
      totalAmount: charge.totalAmount,
    })
  );
  const { accountAddress, registeredAccountPassword, bank } = registered;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const prevBalance = parseInt(sessionStorage.getItem('prevBalance'));
  const userId = sessionStorage.getItem('userId');

  const shuffleArr = () => {
    const shuffledArr = _.range(10).sort(() => Math.random() - 0.5);
    dispatch(shuffleNums(shuffledArr));
  };

  const handleButton = num => {
    if (password.length === 6) {
      return;
    }
    dispatch(changePassword(password + num.toString()));
    // input change까지
  };

  const handleEraser = () => {
    if (password === '') {
      return;
    }
    dispatch(changePassword(password.slice(0, -1)));
  };

  const handleAllEraser = () => {
    if (password === '') {
      return;
    }
    dispatch(changePassword(''));
  };
  useEffect(() => {
    if (wrong) {
      dispatch(changeWrong(false));
    }
    if (password.length === 6) {
      // 6자리 채워지면 자동으로 암호 매칭
      if (registeredAccountPassword === password) {
        // 결제 완료
        const result = {
          chargeAmount: totalAmount,
          chargeDesc: '',
          chargeMethod: 'REGISTERED_ACCOUNT',
          chargeMethodAmount: totalAmount,
          chargeAnnounceTitle: '',
          chargeAnnounceDesc: '',
          balance: prevBalance + totalAmount,
          chargeLimit: 0,
        };
        navigate('/complete', { state: JSON.stringify(result) });
      } else {
        console.log('wrong');
        //비밀번호를 확인해주세요
        dispatch(changeWrong(true));
      }
    }
  }, [password]);

  const fetchRegisteredAccounts = async () => {
    try {
      await fetch(`${REGISTERED_BASE_URL}${userId}`)
        .then(res => {
          if (res.status === 404) {
            throw new Error('Non-Registered User');
          } else {
            return res.json();
          }
        })
        .then(data => {
          console.log(data);
          const { accountAddress, registeredAccountPassword, bank } = data;
          dispatch(initialize({ accountAddress, registeredAccountPassword, bank }));
          shuffleArr();
        });
    } catch (e) {
      navigate('/registered-account/register');
    }
  };

  useEffect(() => {
    // 만약 미등록학생이면 register 페이지로 넘어간다.
    fetchRegisteredAccounts();
  }, []);

  return (
    <MainRegisteredAccount
      shuffledArr={nums}
      handleButton={handleButton}
      handleEraser={handleEraser}
      handleAllEraser={handleAllEraser}
      password={password}
      wrong={wrong}
    />
  );
};

export default LoginContainer;
