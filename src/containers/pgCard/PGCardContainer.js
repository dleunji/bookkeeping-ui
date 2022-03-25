import { useEffect } from 'react';
import MainPGCard from '../../components/pgCard/MainPGCard';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab, initializeInfo, changeQrButton ,changeTime, changeTimer, initializeTimer} from '../../modules/pgCard';

const PGCardContainer = () => {
  const dispatch = useDispatch();
  // 선택한 카드사 정보, 할부 개월 수 가져오기

  const { activeTab, selectedCard, installMonth, totalAmount,start,qrButton } = useSelector(({ pgCard }) => ({
    activeTab: pgCard.activeTab,
    selectedCard: pgCard.selectedCard,
    installMonth: pgCard.installMonth,
    totalAmount : pgCard.totalAmount,
    qrButton : pgCard.qrButton,
  }));

  var {timeLimit} = useSelector(
		({pgCard}) => ({
		timeLimit : pgCard.timeLimit,
	}))

  const handleTimer = () => {
		dispatch(changeTime(timeLimit--));
	};

  const setTimer = () => {
    dispatch(changeTimer());
  }

  const startTimer = () => {
    const openerWindow = window.opener;
    const func = () => {
      if (timeLimit>=0) {
        console.log(timeLimit);
        dispatch(changeTime(timeLimit--));
      } else {
        openerWindow.postMessage(JSON.stringify({
          state : 'FAIL',
          data : {
              code : 'PG_ERROR',
              title: 'PG 결제 오류',
              message : 'PG 사 결제 과정에서 오류가 발생하였습니다. 다시 시도해주세요',
          }
        }), 'http://localhost:3000/pg-card')
        dispatch(changeTimer());
        alert('PG 인증 시간이 만료되었습니다.');
      }
    }
    dispatch(initializeTimer(func));
  }

  const handleTab = tab => {
    dispatch(changeTab(tab));
  };

  const handleQrButton = () => {
    console.log('handleQrButton');
    startTimer();
		dispatch(changeQrButton());
	}

  useEffect(() => {
    const selectedCard = sessionStorage.getItem('card');
    const selectedMonth = sessionStorage.getItem('installMonth');
    const totalAmount = sessionStorage.getItem('totalAmount');
    console.log(selectedMonth);
    console.log(selectedCard);
    dispatch(initializeInfo({ selectedCard, installMonth: selectedMonth, totalAmount }));
    // 최초 렌더링 시에만 실행되도록
  },[]);

  

  return (
    <MainPGCard
      selectedCard={selectedCard}
      installMonth={installMonth}
      activeTab={activeTab}
      handleTab={handleTab}
      totalAmount={totalAmount}
			timeLimit={timeLimit}			
			handleTimer={handleTimer}
			handleQrButton={handleQrButton}
      qrButton = {qrButton}
      startTimer = {startTimer}
      stopTimer = {setTimer}
    />
  );
};

export default PGCardContainer;
