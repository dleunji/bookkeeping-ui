import React from 'react';
import { useEffect } from 'react';
import PostPayment from '../../components/postPayment/PostPayment';
import { useDispatch, useSelector } from 'react-redux';
import { changeOTP, changeResult, changeMessage, initializeTimer, stopTimer, setTimer } from '../../modules/postPayment';
import { useNavigate } from 'react-router-dom';

const PostPaymentContainer = () => {
	const dispatch = useDispatch();
    const navigate = useNavigate();
	const { totalAmount, message, result, OTP, myTimer } = useSelector(({ charge, postPayment }) => ({
		totalAmount: charge.totalAmount,        
        message: postPayment.message,
        result: postPayment.result,
		OTP: postPayment.OTP,
		myTimer : postPayment.myTimer,
	}));

	const handlePopup =() => {
		sessionStorage.setItem('totalAmount', totalAmount);
		window.open(
			'/pg-post',
			'가상 계좌',
			'width=530.89,height=650,location=no,status=no,scrollbars=yes'
		);
	}

	const handleClick = () => {
		const receiveMessage = (e) => {
			console.log(e.data);
			if (e.origin !== 'http://localhost:3000') return;
			if (e.type === 'webpackInvalid') return;
			if (typeof e.data === 'object') return;

			const res = JSON.parse(e.data);
			const { state, data } = res;
			console.log(data);
			dispatch(changeResult(state));
			dispatch(changeMessage(JSON.stringify(data)));
		};
		window.addEventListener('message', receiveMessage, false);
	}
	

    useEffect(() => {
		switch (result) {
			case 'SUCCESS':				
				navigate('/complete', { state: message });				
				dispatch(stopTimer());
				break;
			case 'ERROR':				
				navigate('/error', { state: message });
				dispatch(stopTimer());
				break;
			case 'SUCCEED':
				navigate('/complete', { state: message });
				dispatch(stopTimer());
				break;
			case 'FAIL':
				navigate('/error', { state: message });
				dispatch(stopTimer());
				break;
			default:
				break;
		}		
	}, [message]);

	const handleOTP = (OTP) => {
		dispatch(changeOTP(OTP))
	}

	const handleTimer = () => {
		console.log('OTP 갱신 종료');
		dispatch(stopTimer());
	}	

	useEffect(()=>{
		const func = () => {
			const userId = sessionStorage.getItem('userId');
			const today = new Date();
			// const OTP = (userId + '.' + today.getTime())
			const OTP = today.getTime();
			console.log(1);
			dispatch(changeOTP(OTP));
		}

		dispatch(initializeTimer(func));
	},[])

	return (
		<PostPayment
			totalAmount={totalAmount}
			handlePopup={handlePopup}
			OTP={OTP}
			handleOTP={handleOTP}	
			handleTimer={handleTimer}
			handleClick={handleClick}			
		/>
	);
};

export default PostPaymentContainer;
