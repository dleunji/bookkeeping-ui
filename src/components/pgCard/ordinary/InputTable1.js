import styled from 'styled-components';
const _ = require('lodash');
const InputTableBlock = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
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
	.info-box {
		display: flex;
		width: 90%;
		justify-content: flex-end;
		margin-bottom: 10px;
		font-size: 14px;
	}
`;

const StyledInput = styled.input`
	width: 60px;
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
const StyledSelect = styled.select`
	width: 65px;
	height: 25px;
	border: 1px solid #c5c5c5;
	text-align: center;
	border-radius: 3px;
	font-family: inherit;
	margin-right: 15px;
`;

const InputTable1 = ({ handleInput, handleCardNum, step1 }) => {
	return (
		<InputTableBlock>
			<div className="info-box">
				<span>
					❖ 일반결제 신규등록 시 추가적인 인증 절차 및 약관 동의가 필요합니다.
				</span>
			</div>
			<table>
				<tbody>
					<tr>
						<td>카드번호</td>
						<td>
							{_.range(4).map((num) => (
								<StyledInput
									key={num}
									name={num}
									value={step1.cardNum[num]}
									onChange={handleCardNum}
									type="number"
								/>
							))}
						</td>
					</tr>
					<tr>
						<td>카드 유효 기간</td>
						<td>
							{/* TODO 4자리만 입력하도록 제한 */}
							<StyledSelect
								value={step1.validMonth}
								name="validMonth"
								step="1"
								onChange={(e) => {
									const { name, value } = e.target;
									handleInput({ name, value, step: 'step1' });
								}}
							>
								{_.range(1, 13).map((num) => (
									<option key={num} value={num}>
										{num.toString().padStart(2, '0')}
									</option>
								))}
							</StyledSelect>
							<StyledSelect
								value={step1.validYear}
								name="validYear"
								step="1"
								onChange={(e) => {
									const { name, value } = e.target;
									handleInput({ name, value, step: 'step1' });
								}}
							>
								{_.range(2022, 2028).map((num) => (
									<option key={num} value={num}>
										{num}
									</option>
								))}
							</StyledSelect>
							<span> (Month/Year)</span>
						</td>
					</tr>
				</tbody>
			</table>
		</InputTableBlock>
	);
};

export default InputTable1;
