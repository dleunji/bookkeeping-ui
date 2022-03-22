import styled from 'styled-components';
const MethodBoxBlock = styled.div`
	width: 100%;
	border-radius: 6px;
	&:hover {
		background-color: rgba(197, 197, 197, 0.3);
	}
	height: 75px;
	width: 95%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const MethodBox = ({ children }) => {
	return <MethodBoxBlock>{children}</MethodBoxBlock>;
};

export default MethodBox;
