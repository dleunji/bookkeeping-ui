import styled from 'styled-components';
import GradientBox from '../common/GradientBox';
import TermBox from './TermBox';
const TermBlock = styled.div`
	background-color: rgba(50, 50, 50, 0.6);
	height: 100vh;
	color: #323232;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MainTerm = ({
	terms,
	handleTerm,
	isCompletelyAgreed,
	handleAllTerms,
}) => {
	return (
		<TermBlock>
			<div className="term-container">
				<GradientBox width="440px" height="452px">
					<TermBox
						terms={terms}
						handleTerm={handleTerm}
						isCompletelyAgreed={isCompletelyAgreed}
						handleAllTerms={handleAllTerms}
					/>
				</GradientBox>
			</div>
		</TermBlock>
	);
};

export default MainTerm;
