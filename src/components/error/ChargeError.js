import GradientBox from '../common/GradientBox';
import styled from 'styled-components';
import StyledButton from '../common/StyledButton';

const ErrorBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f3f6f9;
	font-family: 'AppleSDGothicNeoM';
	color: #323232;
	.success-icon {
		display: flex;
		justify-content: center;
		margin-top: 10px;
		img {
			width: 100px;
		}
	}

	.error-title {
		font-size: 24px;
		display: flex;
		justify-content: center;
		font-weight: bold;
		margin: 20px;
	}
	.error-code {
		font-size: 20px;
		display: flex;
		justify-content: space-between;
		margin: 20px;
	}
	.error-message {
		justify-content: center;
		font-size: 14px;
		display: flex;
		margin-top: 70px;
	}
`;
const ERROR_IMG_URL = `${process.env.PUBLIC_URL}/images/error2.png`;
const ChargeError = ({ code, title, message, handleClose }) => {
	return (
		<ErrorBlock>
			<GradientBox backgroundColor="white" width="460px" height="500px">
				<div className="success-icon">
					<img src={ERROR_IMG_URL} />
				</div>
				<div>
					<div>
						<div className="error-title">
							<span>{title}</span>
						</div>
						<hr style={{ margin: '20px' }} />
						<div style={{ marginTop: '50px' }}>
							<div className="error-code">
								<span>오류코드</span>
								<span>{code}</span>
							</div>
							<span className="error-message">{message}</span>
						</div>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '50px',
					}}
				>
					<StyledButton
						width="412px"
						backgroundColor="#C5C5C5"
						fontSize="24px"
						height="58px"
						onClick={handleClose}
					>
						닫기
					</StyledButton>
				</div>
			</GradientBox>
		</ErrorBlock>
	);
};

export default ChargeError;
