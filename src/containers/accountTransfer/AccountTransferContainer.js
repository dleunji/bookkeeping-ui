import React from 'react';
import { useEffect } from 'react';
import AccountTransfer from '../../components/accountTransfer/AccountTransfer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeResult, changeMessage } from '../../modules/accountTransfer';

const AccountTransferContainer = () => {
	const dispatch = useDispatch();
    const navigate = useNavigate();
	const { totalAmount, result, message } = useSelector(({ charge,accountTransfer }) => ({
		totalAmount: charge.totalAmount,
        result : accountTransfer.result,
		message : accountTransfer.message,
	}));

    const handlePopup =(amount) => {
		sessionStorage.setItem('totalAmount', amount);
		window.open(
			'/pg-account',
			'가상 계좌',
			'width=530.89,height=654.4,location=no,status=no,scrollbars=yes'
		);

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
		<AccountTransfer
			totalAmount={totalAmount}
            handlePopup={handlePopup}
		/>
	);
};

export default AccountTransferContainer;
