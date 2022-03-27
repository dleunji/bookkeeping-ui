import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainRegister from '../../components/registeredAccount/MainRegister';
import {
  changePassword,
  changeRegister,
  changeStep,
  changeWrong,
  shuffleNums,
  changeArsButton,
} from '../../modules/registeredAccount';
import { useNavigate } from 'react-router-dom';
const _ = require('lodash');
const REGISTERED_BASE_URL = '/api/RegisteredAccounts/';

const RegisterContainer = () => {
  const { register, step, nums } = useSelector(({ registeredAccount }) => ({
    register: registeredAccount.register,
    step: registeredAccount.step,
    nums: registeredAccount.nums,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedBank, accountAddress, accountAuth, password } = register;

  const userId = sessionStorage.getItem('userId');

  const shuffleArr = () => {
    const shuffledArr = _.range(10).sort(() => Math.random() - 0.5);
    dispatch(shuffleNums(shuffledArr));
  };

  const handleCard = card => {
    dispatch(changeRegister({ name: 'selectedBank', value: card }));
  };

  const handleNext = () => {
    if (step === 7) {
      navigate('/registered-account/login');
    } else {
      dispatch(changeStep(step + 1));
    }
  };

  const handleBack = () => {
    if (step === 7) {
      window.close();
    } else if (step > 1) {
      dispatch(changeStep(step + 1));
    }
  };

  const handleAccountAddress = value => {
    if (value.length > 14) {
      return;
    }
    dispatch(changeRegister({ name: 'accountAddress', value }));
  };

  const handleAccountAuth = value => {
    console.log(value);
    if (value.length > 3) {
      return;
    }
    dispatch(changeRegister({ name: 'accountAuth', value }));
  };

  const handleButton = num => {
    if (password.length === 6) {
      return;
    }
    dispatch(changeRegister({ name: 'password', value: password + num.toString() }));
    // input change까지
  };
  const handleEraser = () => {
    if (password === '') {
      return;
    }
    dispatch(changeRegister({ name: 'password', value: password.slice(0, -1) }));
  };

  const handleAllEraser = () => {
    if (password === '') {
      return;
    }
    dispatch(changeRegister({ name: 'password', value: '' }));
  };

  const requestARS = () => {
    dispatch(changeArsButton());
  };

  const registerAPI = async () => {
    try {
      console.log({
        userId: userId,
        accountAddress: accountAddress,
        registeredAccountPassword: password,
        bank: selectedBank,
      });
      await fetch(REGISTERED_BASE_URL, {
        method: 'POST',
        body: JSON.stringify({
          userId: userId,
          accountAddress: accountAddress,
          registeredAccountPassword: password,
          bank: selectedBank,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          console.log(res.url);
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('등록 실패');
          }
        })
        .then(data => console.log(data));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (step === 6) {
      shuffleArr();
      dispatch(changeRegister({ name: 'password', value: '' }));
    } else if (step === 7) {
      registerAPI();
    }
  }, [step]);

  useEffect(() => {
    if (password.length === 6) {
      dispatch(changeStep(step + 1));
    }
  }, [password]);
  useEffect(() => {
    // TODO: 유저의 연결 계좌 리스트 불러오기
    shuffleArr();
  }, []);
  return (
    <MainRegister
      step={step}
      register={register}
      handleCard={handleCard}
      handleBack={handleBack}
      handleNext={handleNext}
      handleAccountAddress={handleAccountAddress}
      handleAccountAuth={handleAccountAuth}
      handleButton={handleButton}
      handleEraser={handleEraser}
      handleAllEraser={handleAllEraser}
      shuffledArr={nums}
      requestARS={requestARS}
    />
  );
};

export default RegisterContainer;
