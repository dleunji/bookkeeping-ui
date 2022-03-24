import styled from 'styled-components';

const MainBlock = styled.div`
	background-color: #f3f6f9;
	height: 100vh;
	color: #323232;
	font-size: 16px;
	display: flex;
	justify-content: center;
	font-family: 'AppleSDGothicNeoM';
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
`;

const MainPhone = () => {
	return <MainBlock></MainBlock>;
};

export default MainPhone;
