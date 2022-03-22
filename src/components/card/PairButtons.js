import styled from 'styled-components';
import StyledButton from '../common/StyledButton';
import ConditionalStyledButton from '../common/ConditionalStyledButton';

const PairButtonBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${(props) => props.marginBottom || '15px'};
	margin-right: ${(props) => props.marginSide || '0px'};
	margin-left: ${(props) => props.marginSide || '0px'};
`;

const PairButtons = ({
	possible,
	width,
	height,
	marginBottom,
	navigate,
	marginSide,
	selectedMonth,
	selectedCard,
}) => {
	return (
		<PairButtonBlock marginBottom={marginBottom} marginSide={marginSide}>
			<StyledButton
				width={width}
				height={height}
				backgroundColor="#C5C5C5"
				color="#323232"
				onClick={() => {
					// 뒤로 가기
					// 약관 동의는 건너뛰기
					navigate(-2);
				}}
			>
				뒤로
			</StyledButton>
			<ConditionalStyledButton
				width={width}
				height={height}
				backgroundColor="#1976D2"
				color="white"
				possible={possible}
				onClick={() => {
					sessionStorage.setItem('card', selectedCard);
					sessionStorage.setItem('install-month', selectedMonth);
					// PG사로 연결
					// 현재 메인 결제창에 겹치지 않게 오픈
					window.open(
						'/pg-card',
						'카드 결제',
						'width=850,height=600,location=no,left=530,status=no,scrollbars=yes'
					);
				}}
			>
				결제
			</ConditionalStyledButton>
		</PairButtonBlock>
	);
};

export default PairButtons;
