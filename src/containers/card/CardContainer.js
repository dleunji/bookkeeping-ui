import { useDispatch, useSelector } from 'react-redux';
import MainCard from '../../components/card/MainCard';
import { initializeMonth, changeMonth } from '../../modules/card';

const CardContainer = () => {
  const { totalAmount, maxInterestFreeMonth, selectedMonth } = useSelector(({ charge, card }) => ({
    totalAmount: charge.totalAmount,
    maxInterestFreeMonth: card.interestFreeMonth,
    selectedMonth: card.selectedMonth,
  }));

  const dispatch = useDispatch();

  const handleInstallMonth = e => {
    dispatch(changeMonth(e.target.value));
  };
  return (
    <MainCard
      totalAmount={totalAmount}
      maxInterestFreeMonth={maxInterestFreeMonth}
      handleInstallMonth={handleInstallMonth}
      selectedMonth={selectedMonth}
    />
  );
};

export default CardContainer;
