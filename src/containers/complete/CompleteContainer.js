import React from 'react';
import { useEffect } from 'react';
import ChargeComplete from '../../components/complete/ChargeComplete';
import { initializeComplete } from '../../modules/complete';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from '../../../node_modules/react-router-dom/index';
const CompleteContainer = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const {
		chargeAmount,
		chargeDesc,
		chargeMethod,
		chargeMethodAmount,
		chargeAnnounceTitle,
		chargeAnnounceDesc,
		balance,
		chargeLimit,
	} = useSelector(({ complete }) => ({
		chargeAmount: complete.chargeAmount,
		chargeDesc: complete.chargeDesc,
		chargeMethod: complete.chargeMethod,
		chargeMethodAmount: complete.chargeMethodAmount,
		chargeAnnounceTitle: complete.chargeAnnounceTitle,
		chargeAnnounceDesc: complete.chargeAnnounceDesc,
		balance: complete.balance,
		chargeLimit: complete.chargeLimit,
	}));

	const handleClose = () => {
		console.log('닫기 버튼 클릭');
		window.close();
	};

	const handleAddition = () => {
		console.log('추가 충전 클릭');
		// TODO :메인 충전창 이동 로직
	};

	useEffect(() => {
		const result = JSON.parse(location.state);
		const chargeAmount = result.chargeAmount;
		const chargeDesc = result.chargeDesc;
		const chargeMethod = result.chargeMethod;
		const chargeMethodAmount = result.chargeMethodAmount;
		const chargeAnnounceTitle = result.chargeAnnounceTitle;
		const chargeAnnounceDesc = result.chargeAnnounceDesc;
		const balance =
			parseInt(sessionStorage.getItem('prevBalance')) +
			parseInt(result.chargeAmount);
		const chargeLimit = '현재 한도 정보는 가져와야 함';
		dispatch(
			initializeComplete({
				chargeAmount,
				chargeDesc,
				chargeMethod,
				chargeMethodAmount,
				chargeAnnounceTitle,
				chargeAnnounceDesc,
				balance,
				chargeLimit,
			})
		);
	}, [location.state]);

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
			handleClose={handleClose}
			handleAddition={handleAddition}
		/>
	);
};

export default CompleteContainer;
