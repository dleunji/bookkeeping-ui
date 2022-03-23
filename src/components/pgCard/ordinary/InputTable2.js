import styled from 'styled-components';
import StyledButton from '../../common/StyledButton';
const _ = require('lodash');
const InputTableBlock = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	.password-box {
		height: 90px;
		.password-info {
			margin-top: 15px;
			font-size: 13px;
		}
	}
	table {
		width: 90%;
		border: 1px solid #e5e5e5;
		border-collapse: collapse;
	}
	td {
		border: 1px solid #e5e5e5;
		height: 50px;
		text-align: center;
		&:first-child {
			background-color: #e5e5e5;
			width: 240px;
		}
		&:last-child {
			padding: 0px 15px;
			text-align: left;
		}
	}
`;

const StyledInput = styled.input`
	width: 80px;
	height: 25px;
	border: 1px solid #c5c5c5;
	border-radius: 3px;
	margin-right: 15px;
	text-align: center;
	font-family: inherit;
	&:active {
		border: 1px solid #1976d2;
	}
	&[type='number']::-webkit-outer-spin-button,
	&[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const InputTable2 = ({ handleInput, step2 }) => {
	return (
		<InputTableBlock>
			<table>
				<tbody>
					<tr>
						<td>CVC 번호</td>
						<td>
							{
								<StyledInput
									name="cvc"
									value={step2.cvc}
									onChange={(e) => {
										const { name, value } = e.target;
										return handleInput({ name, value, step: 'step2' });
									}}
									type="number"
								/>
							}
						</td>
					</tr>
					<tr className="password-box">
						<td>결제 비밀번호</td>
						<td>
							<StyledInput
								name="password"
								value={step2.password}
								onChange={(e) => {
									const { name, value } = e.target;
									return handleInput({ name, value, step: 'step2' });
								}}
								type="password"
							/>
							<StyledButton
								width="95px"
								height="30px"
								backgroundColor="#1976D2"
								color="white"
								fontSize="11px"
								fontWeight="500"
							>
								비밀번호 재설정
							</StyledButton>
							<div className="password-info">
								결제 비밀번호는 숫자 6 ~ 8자리입니다.
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</InputTableBlock>
	);
};

export default InputTable2;
