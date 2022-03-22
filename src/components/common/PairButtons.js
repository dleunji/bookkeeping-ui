import styled from 'styled-components';
import StyledButton from './StyledButton';
import ConditionalStyledButton from './ConditionalStyledButton';
const PairButtonBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${(props) => props.marginBottom || '15px'};
`;

const PairButtons = ({ possible, width, height, marginBottom }) => {
	return (
		<PairButtonBlock marginBottom={marginBottom}>
			<StyledButton
				width={width}
				height={height}
				backgroundColor="#C5C5C5"
				color="#323232"
			>
				취소
			</StyledButton>
			<ConditionalStyledButton
				width={width}
				height={height}
				backgroundColor="#1976D2"
				color="white"
				possible={possible}
			>
				확인
			</ConditionalStyledButton>
		</PairButtonBlock>
	);
};

export default PairButtons;
