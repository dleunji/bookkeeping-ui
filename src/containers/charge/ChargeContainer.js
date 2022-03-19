import React from "react";
import { useEffect, useRef } from "react";
import MainCharge from "../../components/charge/MainCharge"
import { initializeCharge, changeAmount, changeAnchor, changeInput } from "../../modules/charge";
import { useDispatch, useSelector } from "react-redux";

const ChargeContainer = () => {
  const dispatch = useDispatch();
  const { prevBalance, userId, totalAmount, anchorEl } = useSelector(({charge}) => ({
    prevBalance: charge.prevBalance,
    userId: charge.userId,
    totalAmount: charge.totalAmount,
    anchorEl: charge.anchorEl
  }));

  const itemRef = useRef();

  const handleClose = () => {
    console.log('handleClose');
    dispatch(changeAnchor(null));
  }

  const handleClick = (e) => {
    console.log('handleClick');
    console.log(e.currentTarget);
    dispatch(changeAnchor(e.currentTarget));
  }

  const handleMethod = (method) => {
    if(method === "EASY_PAYMENT"){
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
      anchorEl={anchorEl}
      handleClose={handleClose}
      handleClick={handleClick}
      handleMethod={handleMethod}
      itemRef={itemRef}
    />
  );
}

export default ChargeContainer;