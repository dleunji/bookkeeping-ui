import React from 'react';
import { useEffect } from 'react';
import Voucher from '../../components/voucher/Voucher';
import { useDispatch, useSelector } from 'react-redux';
import { changeVoucherId, changeResult, changeMessage } from '../../modules/voucher';
import { useNavigate } from 'react-router-dom';

const VoucherContainer = () => {
	const dispatch = useDispatch();
    const navigate = useNavigate();
	const { totalAmount, voucherId, message, result } = useSelector(({ charge, voucher }) => ({
		totalAmount: charge.totalAmount,
        voucherId: voucher.voucherId,
        message: voucher.message,
        result: voucher.result,
	}));

	const handleVoucherId =(e) =>{
		dispatch(changeVoucherId(e));
	}

    useEffect(() => {
		console.log('useEffect Error');		
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
	}, []);

    useEffect(() => {
		switch (result) {
			case 'SUCCESS':				
				navigate('/complete', { state: message });
				break;
			case 'ERROR':				
				navigate('/error', { state: message });
				break;
			case 'SUCCEED':
				navigate('/complete', { state: message });
				break;
			case 'FAIL':
				navigate('/error', { state: message });
				break;
			default:
				break;
		}		
	}, [message]);

	return (
		<Voucher
            totalAmount={totalAmount}
            handleVoucherId={handleVoucherId}
            voucherId={voucherId}
		/>
	);
};

export default VoucherContainer;
