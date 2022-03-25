import styled from 'styled-components';
import PairButtons from '../common/PairButtons';
import ChargeHeader from '../common/ChargeHeader';
import GradientBox from '../common/GradientBox';
import ChargeInfo from './ChargeInfo';
import PhoneInfo from './PhoneInfo';
const MainBlock = styled.div`
	background-color: #f3f6f9;
	height: 100vh;
	color: #323232;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	font-family: 'AppleSDGothicNeoM';
	.container {
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`;

const MainPhone = ({
	totalAmount,
	phone,
	handleAuthentication,
	handleInput,
	handleStatus,
	handlePassword,
	handleCarrier,
	handlePasswordButton,
	handleNext,
	handleBack,
}) => {
	return (
		<MainBlock>
			<ChargeHeader />
			<div className="container">
				<div className="gradient-box">
					<GradientBox width="460px" height="600px">
						<ChargeInfo totalAmount={totalAmount} />
						<PhoneInfo
							phone={phone}
							handleAuthentication={handleAuthentication}
							handleInput={handleInput}
							handleStatus={handleStatus}
							handlePassword={handlePassword}
							handleCarrier={handleCarrier}
							handlePasswordButton={handlePasswordButton}
						/>
						<PairButtons
							marginTop="180px"
							marginBottom="30px"
							marginSide="40px"
							height="50px"
							width="160px"
							leftText="취소"
							rightText="결제"
							possible={
								phone.status === 'SUCCESS_SMS_AUTH' || phone.auth === 'PASSWORD'
							}
							handleCancel={handleBack}
							handleNext={handleNext}
						/>
					</GradientBox>
				</div>
			</div>
		</MainBlock>
	);
};

export default MainPhone;
