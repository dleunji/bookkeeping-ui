import styled from 'styled-components';
import { Select } from '@mui/material/index';
import {
	FormControl,
	MenuItem,
} from '../../../node_modules/@mui/material/index';
const CardInfoBoxBlock = styled.div`
	.info-item {
		display: flex;
		height: 30px;
		justify-content: space-between;
		align-items: center;
	}
	.info-item + .info-item {
		padding-top: 10px;
	}
	.info-box {
		font-size: 14px;
		padding-top: 10px;
		display: flex;
		justify-content: flex-end;
		color: #ff0000;
		visibility: hidden;
		&.visible {
			visibility: visible;
		}
	}
	padding: 15px;
`;
// TODO: 카드사에 따른 가능 할부 개월 수
const months = [0, 2, 3, 4, 5, 6, 7, 8];

const CardInfoBox = ({
	totalAmount,
	maxInterestFreeMonth,
	handleInstallMonth,
	selectedMonth,
	selectedCard,
	infoVisibility,
}) => {
	return (
		<CardInfoBoxBlock>
			<div className="info-item">
				<div className="">충전 금액</div>
				<div className="">{parseInt(totalAmount).toLocaleString()}</div>
			</div>
			<div className="info-item">
				<div className="">할부 기간</div>
				<div className="">
					<FormControl
						disabled={selectedCard === ''}
						onClick={handleInstallMonth}
					>
						<Select
							sx={{
								width: '150px;',
								height: '40px;',
							}}
							name="install-month"
							value={selectedMonth}
							onChange={handleInstallMonth}
						>
							{months.map((month, idx) => (
								<MenuItem key={idx} value={month}>
									{month === 0
										? '일시불'
										: `${month}개월 ${
												month <= maxInterestFreeMonth ? '(무이자)' : ''
										  }`}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</div>
			<div className={`info-box ${infoVisibility ? 'visible' : ''}`}>
				카드 선택 후 할부 기간을 설정하세요
			</div>
		</CardInfoBoxBlock>
	);
};

export default CardInfoBox;
