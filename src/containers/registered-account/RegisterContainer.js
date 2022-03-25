import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainRegister from '../../components/registeredAccount/MainRegister';
import { changePassword, changeWrong, shuffleNums } from '../../modules/registeredAccount';
import { useNavigate } from 'react-router-dom';
const _ = require('lodash');

const REGISTERED_BASE_URL = 'api/RegisteredAcounts/';

const RegisterContainer = () => {
  const { nums, password, registeredPassword, wrong, totalAmount } = useSelector(
    ({ registeredAccount, charge }) => ({
      nums: registeredAccount.nums,
      password: registeredAccount.password,
      registeredPassword: registeredAccount.registeredPassword,
      wrong: registeredAccount.wrong,
      totalAmount: charge.totalAmount,
    })
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      if (registeredPassword === password) {
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

  useEffect(() => {
    // TODO: 유저의 연결 계좌 리스트 불러오기
    shuffleArr();
  }, []);
  return <MainRegister />;
};

export default RegisterContainer;
