import styled from 'styled-components';

const BankSelectBlock = styled.div`
	padding: 10px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	img {
		width: 100px;
	}
	.bank-select-block {
		display: flex;
		// 선택한 결제 수단
		.selected {
			outline: 2px solid #1976d2;
			border-radius: 6px;
		}
		.item {
			cursor: pointer;
			display: flex;
			align-items: center;
			flex-direction: column;
			padding: 3px;
			.img-container {
				display: flex;
				align-items: center;
				height: 100px;
			}
		}
	}
`;
const banks = [
	{
		name: '우리',
		value: 'WOORI',
		url: `${process.env.PUBLIC_URL}/images/woori_bank.png`,
	},
	{
		name: '국민',
		value: 'KOOKMIN',
		url: `${process.env.PUBLIC_URL}/images/kookmin_bank.png`,
	},
];

const BankSelect = ({ totalAmount, selectedCard, handlePopup }) => {
	return (
		<BankSelectBlock>
			<div className="bank-select-block">
				{banks.map((bank, idx) => (
					<div
						key={idx}
						className={`item ${selectedCard === bank.value ? 'selected' : ''}`}
						onClick={()=>{sessionStorage.setItem('bank',bank.name); handlePopup(totalAmount)}}
					>
						<div className="img-container">
							<img src={bank.url} />
						</div>
						<div>{bank.name}</div>
					</div>
				))}
			</div>
		</BankSelectBlock>
	);
};

export default BankSelect;
