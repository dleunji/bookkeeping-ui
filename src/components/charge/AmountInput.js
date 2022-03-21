import styled from 'styled-components';
import BottomBorderInput from '../common/BottomBorderInput';
const AmountBlock = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 13px;
	.alert {
		margin-top: 5px;
		font-size: 13px;
		color: #ff0000;
	}
`;

const AmountInput = ({ value, onChange }) => {
	return (
		<AmountBlock>
			<div>
				<BottomBorderInput
					value={value}
					fontFamily="Lexend"
					fontSize="25px"
					placeholder="충전 금액"
					width="418px"
					height="30px"
					name="totalAmount"
					onChange={onChange}
				/>
				<div className="alert">암호</div>
			</div>
		</AmountBlock>
	);
};

export default AmountInput;
