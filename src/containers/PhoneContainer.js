import { useSelector } from 'react-redux';
import MainPhone from '../components/phone/MainPhone';

const PhoneContainer = () => {
  const { totalAmount } = useSelector(({ charge }) => ({
    totalAmount: charge.totalAmount,
  }));

  return <MainPhone totalAmount={totalAmount} />;
};

export default PhoneContainer;
