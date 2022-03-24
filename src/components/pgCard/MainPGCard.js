import styled from 'styled-components';
import GradientBox from '../common/GradientBox';
import Banner from './Banner';
import MethodTab from './MethodTab';

const MainPGCardBlock = styled.div`
	background-color: #f3f6f9;
	height: 100vh;
	color: #323232;
	font-size: 16px;
	display: flex;
	justify-content: center;

	.method-selection-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const MainPGCard = ({ selectedCard, installMonth, handleTab, activeTab, qrButton, totalAmount, timeLimit, handleQrButton, handleTimer }) => {
	return (
		<MainPGCardBlock>
			<div className="method-selection-container">
				<GradientBox backgroundColor="white" width="450px" height="480px">
					<Banner />
					<MethodTab 
						activeTab={activeTab} 
						handleTab={handleTab} 
						handleQrButton={handleQrButton}
						handleTimer={handleTimer}
						totalAmount={totalAmount}
						timeLimit={timeLimit}
						installMonth={installMonth}
						qrButton={qrButton}/>
				</GradientBox>
			</div>
		</MainPGCardBlock>
	);
};

export default MainPGCard;
