import React from 'react';
import { useEffect } from 'react';
import ChargeComplete from '../../components/complete/ChargeComplete';
import { initializeComplete } from '../../modules/complete';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from '../../../node_modules/react-router-dom/index';
import { initEntry } from '../../modules/entry';
import {
  changeTab,
  changeJournalDate,
  changeLatestJournals,
  changeTotalPages,
} from '../../modules/journal';
import { changeUserInfo } from '../../modules/auth';
import { changeNavTab } from '../../modules/home';
import { initializeMore } from '../../modules/charge';
import { useNavigate } from 'react-router-dom';

const JOURNAL_BASE_URL = 'api/Journals/';
const chargeElementTable = {
  card: {
    title: '카드',
    debitId: 1003,
    creditId: 2001,
    creditSign: 1,
  },
  post_payment: {
    title: '후불 결제',
    debitId: 1003,
    creditId: 2003,
    creditSign: 1,
  },
  voucher: {
    title: '상품권',
    debitId: 1003,
    creditId: 1004,
    creditSign: -1,
  },
  virtual_account: {
    title: '가상 계좌',
    debitId: 1003,
    creditId: 1001,
    creditSign: -1,
  },
  account_transfer: {
    title: '실시간 계좌 이체',
    debitId: 1003,
    creditId: 1001,
    creditSign: -1,
  },
  REGISTERED_ACCOUNT: {
    title: '연결 계좌',
    debitId: 1003,
    creditId: 1005,
    creditSign: -1,
  },
  PHONE: {
    title: '휴대폰 결제',
    debitId: 1003,
    creditId: 2002,
    creditSign: 1,
  },
  // 카드의 경우 체크, 신용카드 계정과목 분리
  CHECK_CARD: {
    title: '체크 카드 결제',
    debitId: 1003,
    creditId: 1002,
    creditSign: -1,
  },
  CREDIT_CARD: {
    title: '신용 카드 결제',
    debitId: 1003,
    creditId: 2001,
    creditSign: 1,
  },
  // 토스는 예금에서만 인출된다고 가정
  TOSS: {
    title: '토스',
    debitId: 1003,
    creditId: 1002,
    creditSign: -1,
  },
};

const CompleteContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userId = sessionStorage.getItem('userId');
  const totalAmount = sessionStorage.getItem('totalAmount');
  const prevBalance = sessionStorage.getItem('prevBalance');
  const {
    chargeAmount,
    chargeDesc,
    chargeMethod,
    chargeMethodAmount,
    chargeAnnounceTitle,
    chargeAnnounceDesc,
    balance,
    chargeLimit,
    entry,
    journal,
    user,
  } = useSelector(({ complete, entry, journal, auth }) => ({
    chargeAmount: complete.chargeAmount,
    chargeDesc: complete.chargeDesc,
    chargeMethod: complete.chargeMethod,
    chargeMethodAmount: complete.chargeMethodAmount,
    chargeAnnounceTitle: complete.chargeAnnounceTitle,
    chargeAnnounceDesc: complete.chargeAnnounceDesc,
    balance: complete.balance,
    chargeLimit: complete.chargeLimit,
    entry: entry,
    journal: journal,
    user: auth.currentUser,
  }));

  const navigate = useNavigate();
  const handleClose = () => {
    console.log('닫기 버튼 클릭');
    window.close();
  };

  const handleAddition = () => {
    console.log('추가 충전 클릭');
    dispatch(initializeMore());
    navigate('/charge');
    // TODO :메인 충전창 이동 로직
  };

  useEffect(() => {
    const result = JSON.parse(location.state);
    const {
      chargeAmount,
      chargeDesc,
      chargeMethod,
      chargeMethodAmount,
      chargeAnnounceTitle,
      chargeAnnounceDesc,
      balance,
    } = result;
    console.log(result);
    const chargeLimit = '현재 한도 정보는 가져와야 함';
    dispatch(
      initializeComplete({
        chargeAmount,
        chargeDesc,
        chargeMethod,
        chargeMethodAmount,
        chargeAnnounceTitle,
        chargeAnnounceDesc,
        balance,
        chargeLimit,
      })
    );

    const { title, debitId, creditId, creditSign } = chargeElementTable[chargeMethod];
    const entryDate = new Date();

    fetch(JOURNAL_BASE_URL, {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        transactedAt: entryDate,
        summary: '넥토머니 충전',
        totalAmount: chargeAmount,
        note: title,
        elements: [
          {
            categoryId: debitId,
            content: '',
            amount: chargeAmount,
            sign: 1,
          },
          {
            categoryId: creditId,
            content: '',
            amount: chargeAmount,
            sign: creditSign,
          },
        ],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.status);
        }
      })
      .then(data => {
        // 성공에 따른 유저 별도 처리 필요
        const { pocketBalance } = data;
        // 세션 스토리지값 갱신
        console.log('스토리지 값 갱신');
        console.log(pocketBalance);
        sessionStorage.setItem('prevBalance', pocketBalance);
        const parentWindow = window.opener;
        parentWindow.postMessage(
          JSON.stringify({ balance: pocketBalance }),
          'http://localhost:3000/journal'
        );
      });
  }, [location.state]);

  return (
    <ChargeComplete
      chargeAmount={chargeAmount}
      chargeDesc={chargeDesc}
      chargeMethod={chargeMethod}
      chargeMethodAmount={chargeMethodAmount}
      chargeAnnounceTitle={chargeAnnounceTitle}
      chargeAnnounceDesc={chargeAnnounceDesc}
      balance={balance}
      chargeLimit={chargeLimit}
      handleClose={handleClose}
      handleAddition={handleAddition}
    />
  );
};

export default CompleteContainer;
