import MainTerm from '../../components/term/MainTerm';
import { useEffect } from 'react';
import {
  agreeCompleteTerm,
  changeCompleteTerm,
  checkTerm,
  initializeTerms,
  initializeTo,
} from '../../modules/term';
import { useDispatch, useSelector } from 'react-redux';

const REGISTERED_ACCOUNT = 'REGISTERED_ACCOUNT';
const POST_PAYMENT = 'POST_PAYMENT';
const CARD = 'CARD';
const PHONE = 'PHONE';
const VOUCHER = 'VOUCHER';
const VIRTUAL_ACCOUNT = 'VIRTUAL_ACCOUNT';
const ACCOUNT_TRANSFER = 'ACCOUNT_TRANSFER';
const TOSS = 'TOSS';

const TermContainer = () => {
  const { selectedMethod, terms, isCompletelyAgreed, to } = useSelector(({ charge, term }) => ({
    selectedMethod: charge.selectedMethod,
    terms: term.terms,
    isCompletelyAgreed: term.isCompletelyAgreed,
    to: term.to,
  }));

  const dispatch = useDispatch();

  const handleTerm = idx => {
    dispatch(checkTerm(idx));
  };

  const handleAllTerms = () => {
    dispatch(agreeCompleteTerm());
  };

  useEffect(() => {
    switch (selectedMethod) {
      case REGISTERED_ACCOUNT: {
        const terms = [
          {
            name: '전자금융거래 이용약관',
            url: '',
            checked: false,
          },
          {
            name: '금융결제원 개인정보 제공 동의',
            url: '',
            checked: false,
          },
          {
            name: '오픈뱅킹을 통한 출금이체 동의',
            url: '',
            checked: false,
          },
        ];
        dispatch(initializeTo('/registered-account'));
        dispatch(initializeTerms(terms));
        break;
      }
      case POST_PAYMENT: {
        const terms = [
          {
            name: '후불 결제 대행사 결제 정도 위탁 동의',
            url: '',
            checked: false,
          },
        ];
        dispatch(initializeTo('/post-payment'));
        dispatch(initializeTerms(terms));
        break;
      }
      case CARD: {
        const terms = [
          {
            name: '전자금융거래 이용약관',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 수집/이용 동의',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 제공/위탁 동의',
            url: '',
            checked: false,
          },
        ];
        dispatch(initializeTo('/card'));
        dispatch(initializeTerms(terms));
        break;
      }
      case PHONE: {
        const terms = [
          {
            name: '고유식별정보 처리 동의',
            url: '',
            checked: false,
          },
          {
            name: '통신과금서비스 이용약관',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 수집/이용 동의',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 제공/위탁 동의',
            url: '',
            checked: false,
          },
        ];
        dispatch(initializeTo('/phone'));
        dispatch(initializeTerms(terms));
        break;
      }
      case VOUCHER: {
        const terms = [
          {
            name: '전자금융거래 이용약관',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 수집/이용 동의',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 제공/위탁 동의',
            url: '',
            checked: false,
          },
        ];
        dispatch(initializeTo('/voucher'));
        dispatch(initializeTerms(terms));
        break;
      }
      case VIRTUAL_ACCOUNT: {
        const terms = [
          {
            name: '전자금융거래 이용약관',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 수집/이용 동의',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 제공/위탁 동의',
            url: '',
            checked: false,
          },
        ];
        dispatch(initializeTo('/virtual-account'));
        dispatch(initializeTerms(terms));
        break;
      }
      case ACCOUNT_TRANSFER: {
        const terms = [
          {
            name: '전자금융거래 이용약관',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 수집/이용 동의',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 제공/위탁 동의',
            url: '',
            checked: false,
          },
        ];
        dispatch(initializeTo('/account-transfer'));
        dispatch(initializeTerms(terms));
        break;
      }
      case TOSS: {
        const terms = [
          {
            name: '전자금융거래 이용약관',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 수집/이용 동의',
            url: '',
            checked: false,
          },
          {
            name: '개인(신용)정보 제공/위탁 동의',
            url: '',
            checked: false,
          },
        ];
        dispatch(initializeTo('/toss'));
        dispatch(initializeTerms(terms));
        break;
      }
    }
  }, []);

  useEffect(() => {
    // 모든 조건을 확인
    // 만약 하나라도 false면 전체 false
    if (terms.length > 0) {
      var allChecked = true;
      for (let t = 0; t < terms.length; t++) {
        if (terms[t].checked === false) {
          allChecked = false;
          break;
        }
      }
      if (allChecked ^ isCompletelyAgreed) {
        dispatch(changeCompleteTerm());
      }
    }
  }, [terms]);

  // useEffect(()=> {
  //   const

  //   if(to !== ''){

  //   }
  // }, [to])

  return (
    <MainTerm
      terms={terms}
      handleTerm={handleTerm}
      isCompletelyAgreed={isCompletelyAgreed}
      handleAllTerms={handleAllTerms}
      to={to}
    />
  );
};

export default TermContainer;
