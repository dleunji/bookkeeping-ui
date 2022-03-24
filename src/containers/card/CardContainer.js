import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import MainCard from '../../components/card/MainCard';
import {
	initializeMonth,
	changeMonth,
	changeCard,
	changeInfoVisibility,
	changeResult,
	changeMessage,
} from '../../modules/card';

const CardContainer = () => {
	const {
		totalAmount,
		maxInterestFreeMonth,
		selectedMonth,
		selectedCard,
		infoVisibility,
		result,
		message,
	} = useSelector(({ charge, card }) => ({
		totalAmount: charge.totalAmount,
		maxInterestFreeMonth: card.interestFreeMonth,
		selectedMonth: card.selectedMonth,
		selectedCard: card.selectedCard,
		infoVisibility: card.infoVisibility,
		result: card.result,
		message: card.message,
	}));

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInstallMonth = (e) => {
		// 카드사를 선택해야 할부 기간 조절 가능
		const { name, value } = e.target;
		if (selectedCard === '') {
			dispatch(changeInfoVisibility(true));
			return;
		}

		if (name === 'install-month') {
			dispatch(changeMonth(e.target.value));
		}
	};

	const handleCard = (card) => {
		dispatch(changeCard(card));
	};

	const handleBack = () => {
		navigate(-2);
	};

	const handlePopup = () => {
		sessionStorage.setItem('card', selectedCard);
		sessionStorage.setItem('installMonth', selectedMonth);
		sessionStorage.setItem('totalAmount', totalAmount);
		// PG사로 연결
		// 현재 메인 결제창에 겹치지 않게 오픈
		window.open(
			'/pg-card',
			'카드 결제',
			'width=850,height=600,location=no,left=530,status=no,scrollbars=yes'
		);
		const receiveMessage = (e) => {
			console.log(e.data);
			if (e.origin !== 'http://localhost:3000') return;
			if (e.type === 'webpackInvalid') return;
			if (typeof e.data === 'object') return;

			const res = JSON.parse(e.data);
			const { state, data } = res;
			console.log(state, data);
			dispatch(changeResult(state));
			dispatch(changeMessage(JSON.stringify(data)));
		};
		window.addEventListener('message', receiveMessage, false);
	};

	useEffect(() => {
		switch (result) {
			case 'SUCCESS':
				console.log(message);
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

	// 카드 선택 시 안내 숨김
	useEffect(() => {
		if (selectedCard !== '') {
			dispatch(changeInfoVisibility(false));
		}
	}, [selectedCard]);

	return (
		<MainCard
			totalAmount={totalAmount}
			maxInterestFreeMonth={maxInterestFreeMonth}
			handleInstallMonth={handleInstallMonth}
			selectedMonth={selectedMonth}
			handleCard={handleCard}
			selectedCard={selectedCard}
			infoVisibility={infoVisibility}
			handlePopup={handlePopup}
			handleBack={handleBack}
		/>
	);
};

export default CardContainer;
