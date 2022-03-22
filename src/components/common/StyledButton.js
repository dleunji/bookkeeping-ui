import styled from 'styled-components';

const StyledButtonBlock = styled.button`
	background-color: ${(props) => props.backgroundColor || '#1976D2'};
	border: none;
	font-size: 16px;
	color: ${(props) => props.color || '#323232'};
	border-radius: 6px;
	font-weight: 700;
	width: ${(props) => props.width || '180px'};
	height: ${(props) => props.height || '60px'};
	cursor: pointer;
`;

const StyledButton = ({ children, ...rest }) => {
	return <StyledButtonBlock {...rest}>{children}</StyledButtonBlock>;
};

export default StyledButton;
