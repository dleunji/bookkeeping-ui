import React from "react";
import { useEffect, useRef } from "react";
import MainCharge from "../../components/charge/MainCharge"
import { initializeCharge, changeAmount, changeAnchor, changeInput, changeCheck } from "../../modules/charge";
import { useDispatch, useSelector } from "react-redux";

const ChargeContainer = () => {
  const dispatch = useDispatch();
  const { prevBalance, userId, totalAmount, checked } = useSelector(({charge}) => ({
    prevBalance: charge.prevBalance,
    userId: charge.userId,
    totalAmount: charge.totalAmount,
    checked: charge.checked
  }));

  const itemRef = useRef();

  const handleClose = () => {
    console.log('handleClose');
    // dispatch(changeAnchor(null));
  }

  const handleClick = (e) => {
    console.log('handleClick');
    console.log(e.currentTarget);
    // dispatch(changeAnchor(e.currentTarget));
  }

  const handleCheck = () => {
    dispatch(changeCheck());
  }

  const handleMethod = (method) => {
    console.log(window.innerHeight);
    if(method === "EASY_PAYMENT"){
      dispatch(changeCheck());
      return;

    }

    console.log(method);    
  }

  const handleChangeAmount = (amount) => {
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
      // anchorEl={anchorEl}
      checked={checked}
      handleClose={handleClose}
      handleClick={handleClick}
      handleMethod={handleMethod}
      itemRef={itemRef}
      handleCheck={handleCheck}
    />
  );
}

export default ChargeContainer;