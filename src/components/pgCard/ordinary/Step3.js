import styled from 'styled-components';
import StyledButton from '../../common/StyledButton';

const Step3Block = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 18px;
	font-weight: 600;
	img {
		margin-top: 50px;
		width: 200px;
	}
	.info {
		margin-top: 30px;
		text-align: center;
		span {
			color: #1976d2;
		}
	}
`;

const SUCCESS_GIF_URL = `${process.env.PUBLIC_URL}/images/card_success.gif`;

const Step3 = ({ second }) => {
	return (
		<Step3Block>
			<img src={SUCCESS_GIF_URL} />
			<div className="info">
				<div>결제가 완료되었습니다.</div>
				<div>
					메인 화면으로 <span>{second}</span>초 후 돌아갑니다.
				</div>
			</div>
		</Step3Block>
	);
};

export default Step3;
