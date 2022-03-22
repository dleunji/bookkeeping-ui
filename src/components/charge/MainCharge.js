import styled from 'styled-components';
import ChargeHeader from '../common/ChargeHeader';
import GradientBox from '../common/GradientBox';
import AmountInput from './AmountInput';
import AmountSelect from './AmountSelect';
import MethodSelect from './MethodSelect';
import BottomButton from './BottomButton';
import { Collapse } from '@mui/material/index';
import CautionBox from '../common/CautionBox';
import EasyPayment from './EasyPayment';
import { Link } from 'react-router-dom';

const MainChargeBlock = styled.div`
	background-color: #f3f6f9;
	height: 100vh;
	color: #323232;
	.amount-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.amount-selection-container {
		margin-top: 10px;
	}
	.method-title-container {
		display: flex;
		justify-content: center;
		margin-top: 25px;
		.method-title {
			width: 460px;
			font-family: 'Noto Sans Serif KR';
			font-size: 20px;
		}
	}
	.method-selection-container {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	.easy-payment-container {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}
	.caution-container {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		font-size: 14px;
		font-family: 'AppleSDGothicNeoM';
		.caution-title {
			width: 90px;
		}
		.caution-link {
			text-decoration: underline;
		}
	}
	.bottom-button {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
`;

const MainCharge = ({
	prevBalance,
	totalAmount,
	handleChangeAmount,
	onChange,
	handleClose,
	handleClick,
	handleMethod,
	itemRef,
	checked,
	handleCheck,
	selectedMethod,
	possible,
}) => {
	return (
		<MainChargeBlock>
			<ChargeHeader />
			<div className="amount-container">
				<GradientBox backgroundColor="white" width="460px" height="85px">
					<AmountInput value={totalAmount} onChange={onChange} />
				</GradientBox>
				<div className="amount-selection-container">
					<GradientBox backgroundColor="#E5E5E5" width="460px" height="50px">
						<AmountSelect handleChangeAmount={handleChangeAmount} />
					</GradientBox>
				</div>
			</div>
			{/* 770px에 맞추기 위함 */}
			{/* <div className="method-title-container">
				<div className="method-title">결제수단 선택</div>
			</div> */}
			<div className="method-selection-container">
				<GradientBox backgroundColor="white" width="460px" height="250px">
					<MethodSelect
						handleClose={handleClose}
						handleClick={handleClick}
						handleMethod={handleMethod}
						itemRef={itemRef}
						handleCheck={handleCheck}
						selectedMethod={selectedMethod}
					/>
				</GradientBox>
			</div>
			<div className="easy-payment-container">
				<Collapse
					in={checked}
					sx={{
						width: '460px',
					}}
				>
					<GradientBox backgroundColor="white" width="460px" height="85px">
						<EasyPayment
							handleMethod={handleMethod}
							selectedMethod={selectedMethod}
						/>
					</GradientBox>
				</Collapse>
			</div>
			<div className="caution-container">
				<CautionBox />
			</div>
			<div className="bottom-button">
				<Link to="/term">
					<BottomButton possible={possible} />
				</Link>
			</div>
		</MainChargeBlock>
	);
};

export default MainCharge;
