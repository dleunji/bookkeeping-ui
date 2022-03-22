import React from "react";
import { useEffect } from "react";
import ChargeComplete from '../../components/complete/ChargeComplete';
import { initializeComplete } from "../../modules/complete";
import { useDispatch, useSelector } from "react-redux";


const CompleteContainer = () => {
  const dispatch = useDispatch();
  const {
    chargeAmount, 
    chargeDesc,
    chargeMethod,
    chargeMethodAmount,
    chargeAnnounceTitle,
    chargeAnnounceDesc,
    balance,
    chargeLimit
} = useSelector(({complete}) => ({
    chargeAmount: complete.chargeAmount,
    chargeDesc: complete.chargeDesc,
    chargeMethod: complete.chargeMethod,
    chargeMethodAmount: complete.chargeMethodAmount,
    chargeAnnounceTitle: complete.chargeAnnounceTitle,
    chargeAnnounceDesc: complete.chargeAnnounceDesc,
    balance: complete.balance,
    chargeLimit: complete.chargeLimit
  }));

  const handleClose = () => {
    console.log('닫기 버튼 클릭');
    window.close();
  }

  const handleAddition = () => {
    console.log('추가 충전 클릭');
    // TODO :메인 충전창 이동 로직
  }


  useEffect(() => {
    console.log("useEffect Error ");
    // 각 값에는 이전 페이지들로부터의 반환값 할당 필요  
    // 현재는 예시 데이터  
    const chargeAmount = 5000;
    const chargeDesc = '충전 완료';
    const chargeMethod= '카드';
    const chargeMethodAmount= '5000';
    const chargeAnnounceTitle= '안내사항';
    const chargeAnnounceDesc= '내용';
    const balance= 5000;
    const chargeLimit = 45000;
    dispatch(initializeComplete({
        chargeAmount, 
        chargeDesc,
        chargeMethod,
        chargeMethodAmount,
        chargeAnnounceTitle,
        chargeAnnounceDesc,
        balance,
        chargeLimit
    }));
  },[]);

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
        
        handleClose = {handleClose}
        handleAddition = {handleAddition}
    />
  );
}

export default CompleteContainer;