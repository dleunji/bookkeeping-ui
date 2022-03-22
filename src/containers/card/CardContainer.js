import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import MainCard from '../../components/card/MainCard';
import {
	initializeMonth,
	changeMonth,
	changeCard,
	changeInfoVisibility,
} from '../../modules/card';

const CardContainer = () => {
	const {
		totalAmount,
		maxInterestFreeMonth,
		selectedMonth,
		selectedCard,
		infoVisibility,
	} = useSelector(({ charge, card }) => ({
		totalAmount: charge.totalAmount,
		maxInterestFreeMonth: card.interestFreeMonth,
		selectedMonth: card.selectedMonth,
		selectedCard: card.selectedCard,
		infoVisibility: card.infoVisibility,
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
			navigate={navigate}
		/>
	);
};

export default CardContainer;
