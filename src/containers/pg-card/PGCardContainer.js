import { useEffect } from 'react';
import MainPGCard from '../../components/pgCard/MainPGCard';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab, initializeInfo } from '../../modules/pgCard';

const PGCardContainer = () => {
	const dispatch = useDispatch();
	// 선택한 카드사 정보, 할부 개월 수 가져오기

	const { activeTab, selectedCard, installMonth } = useSelector(
		({ pgCard }) => ({
			activeTab: pgCard.activeTab,
			selectedCard: pgCard.selectedCard,
			installMonth: pgCard.installMonth,
		})
	);

	const handleTab = (tab) => {
		dispatch(changeTab(tab));
	};

	useEffect(() => {
		const selectedCard = sessionStorage.getItem('card');
		const selectedMonth = sessionStorage.getItem('install-month');
		dispatch(initializeInfo({ selectedCard, installMonth: selectedMonth }));
	});

	return (
		<MainPGCard
			selectedCard={selectedCard}
			installMonth={installMonth}
			activeTab={activeTab}
			handleTab={handleTab}
		/>
	);
};

export default PGCardContainer;
