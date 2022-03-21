import styled from 'styled-components';
const GradientBoxBlock = styled.div`
	background-color: ${(props) => props.backgroundColor || 'white'};
	box-shadow: 0px 4px 4px 0px #00000040;
	width: ${(props) => props.width || '460px'};
	height: ${(props) => props.height || '85px'};
	border-radius: 6px;
	font-family: ${(props) => props.fontFamily || 'AppleSDGothicNeoM'};
`;

const GradientBox = ({ backgroundColor, width, height, children }) => {
	return (
		<GradientBoxBlock
			backgroundColor={backgroundColor}
			width={width}
			height={height}
		>
			{children}
		</GradientBoxBlock>
	);
};

export default GradientBox;
