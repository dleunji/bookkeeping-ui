import React from 'react';
import { useEffect } from 'react';
import { checkTerm } from '../../modules/payAgree';
import { useDispatch, useSelector } from 'react-redux';
import PayButtonCard from '../../components/common/PayButtonCard';
import { useNavigate } from '../../../node_modules/react-router-dom/index';
import { changeMessage } from '../../modules/payAgree';

const PayBlockContainer = ({customHandleClick}) => {
	const PGHandleClick = customHandleClick;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {  totalAmount, prevBalance, possible, result, message } = useSelector(({ charge, payAgree }) => ({
		totalAmount: charge.totalAmount,
		prevBalance: charge.prevBalance,
		possible: payAgree.possible,
		result : payAgree.result,
		message : payAgree.message,
	}));

    

    const handleChange = () => {
		console.log('동의 버튼');
		dispatch(checkTerm());
	};

	const handleClick = () => {
		// TODO : 서버로 전송
        possible 
        ? navigate('/complete', {state : message})
        : console.log('결제하기 불가')
	};

	const handleMessage = ({desc, selectedMethod, announceTitle, announceDesc}) => {
		dispatch(changeMessage(JSON.stringify({
			chargeAmount: totalAmount,          	// 총 충전 금액
			chargeDesc: desc,   					// 충전 정보
			chargeMethod: selectedMethod,       	// 결제 수단 이름
			chargeMethodAmount: totalAmount,   		// 결제 수단 금액(가상 계좌는 '입금대기'라 출력)
			chargeAnnounceTitle: announceTitle,  	// 안내사항 제목
			chargeAnnounceDesc: announceDesc,   	// 안내사항 내용 
		})));
	}

	useEffect(() => {
		const possible = '/complete';
	},[]);

	useEffect(() => {
		switch(message){
			case message !=='':
				navigate('/complete',{state: message})
				break;
			default:
				break;
		}
	},[message])

	return (
		<PayButtonCard
            possible={possible}
			handleClick={handleClick}
            handleChange={handleChange}
			PGHandleClick={PGHandleClick}
			handleMessage={handleMessage}
		/>
	);
};

export default PayBlockContainer;
