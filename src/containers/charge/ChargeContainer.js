import { useEffect } from "react";
import MainCharge from "../../components/charge/MainCharge"
import { initializeCharge,changeAmount, changeInput } from "../../modules/charge";
import { useDispatch, useSelector } from "react-redux";

const ChargeContainer = () => {
  const dispatch = useDispatch();
  const { prevBalance, userId, totalAmount } = useSelector(({charge}) => ({
    prevBalance: charge.prevBalance,
    userId: charge.userId,
    totalAmount: charge.totalAmount
  }));

  const handleChangeAmount = (amount) => {
    // dispatch(changeAmount(amount));
    if(totalAmount===""){
      dispatch(changeInput({name: 'totalAmount', value: totalAmount + amount}));
    }else {
      dispatch(changeInput({name: 'totalAmount', value: parseInt(totalAmount) + parseInt(amount)}));
    }
  }

  const onChange = (e) => {
    const {name, value} = e.target;
    dispatch(changeInput({name, value}));
  }

  useEffect(() => {
    const prevBalance = sessionStorage.getItem("prevBalance");
    const userId = sessionStorage.getItem("userId");
    dispatch(initializeCharge({prevBalance, userId}));
  },[]);

  return (
    <MainCharge
      prevBalance={prevBalance || 0}
      totalAmount={totalAmount}
      handleChangeAmount={handleChangeAmount}
      onChange={onChange}
    />
  );
}

export default ChargeContainer;