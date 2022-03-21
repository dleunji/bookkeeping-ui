import styled from 'styled-components';
import {
	faAngleDown,
	faPiggyBank,
	faFileInvoice,
	faBoxes,
	faFileInvoiceDollar,
	faCalendarDays,
	faCreditCard,
	faMobileButton,
	faTicket,
} from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { Menu, MenuItem } from '@mui/material/index';
import { IconButton } from '@mui/material/index';

const MethodSelectBlock = styled.div`
.method-block {
  display: flex;
	.selected {
		background-color: rgba(25, 118, 210, 0.4) !important;
	}
  .method {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0px;
    position: relative;
    cursor: pointer;
    &:hover {
      background-color: #E5E5E5;
    }
    .method-icon {
      display: flex;
      justify-content: center;
      font-size: 45px;
    }
    .method-name {
      display: flex;
      margin-top: 20px;
      justify-content: center;
    }
    .badge {
      position: absolute;
      top: 5px;
      right: 15px;
      background-color: #FF0000;
      color: white;
      width: 32px;
      height: 22px;
      font-size: 13px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
    }
    .angle-down {
      margin-left: 8px;
      align-items: center;
    }
  }
`;
const methods = [
	{
		name: '연결 계좌',
		icon: faPiggyBank,
		alertContent: '간편',
		value: 'REGISTERED_ACCOUNT',
	},
	{
		name: '일괄 정산',
		icon: faCalendarDays,
		alertContent: '신규',
		value: 'POST_PAYMENT',
	},
	{
		name: '신용/체크 카드',
		icon: faCreditCard,
		value: 'CARD',
	},
	{
		name: '휴대폰',
		icon: faMobileButton,
		value: 'PHONE',
	},
	{
		name: '상품권',
		icon: faTicket,
		value: 'VOUCHER',
	},
	{
		name: '가상계좌',
		icon: faFileInvoice,
		value: 'VIRTUAL_ACCOUNT',
	},
	{
		name: '실시간 계좌 이체',
		icon: faFileInvoiceDollar,
		value: 'ACCOUNT_TRANSFER',
	},
	{
		name: '간편 결제',
		icon: faBoxes,
		value: 'EASY_PAYMENT',
		items: [
			{
				name: '카카오페이',
				imgSrc: `${process.env.PUBLIC_URL}/images/kakao_img.png`,
				value: 'KAKAO',
			},
			{
				name: '토스',
				imgSrc: `${process.env.PUBLIC_URL}/images/toss_img.png`,
				value: 'TOSS',
			},
		],
	},
];

const MethodSelect = ({
	anchorEl,
	handleCheck,
	handleClose,
	handleClick,
	handleMethod,
	itemRef,
	selectedMethod,
}) => {
	const open = Boolean(anchorEl);
	return (
		<MethodSelectBlock>
			<div className="method-block">
				{methods.slice(0, 4).map((method, idx) => (
					<div
						className={`method ${
							selectedMethod === method.value ? 'selected' : ''
						}`}
						key={idx}
						onClick={() => handleMethod(method.value)}
					>
						{method.alertContent && (
							<div className="badge">{method?.alertContent}</div>
						)}
						<FontAwesomeIcon className="method-icon" icon={method.icon} />
						<div className="method-name">{method.name}</div>
						{method.items && <FontAwesomeIcon icon={faAngleDown} />}
					</div>
				))}
			</div>
			<div className="method-block">
				{methods.slice(4, 8).map((method, idx) => (
					<div
						key={idx}
						onClick={() => handleMethod(methods[4 + idx].value)}
						className={`method ${
							selectedMethod === method.value ? 'selected' : ''
						}`}
					>
						{method.alertContent && (
							<div className="badge">{method?.alertContent}</div>
						)}
						<FontAwesomeIcon className="method-icon" icon={method.icon} />
						<div className="method-name">
							{method.name}
							{method.items && (
								<div>
									<FontAwesomeIcon className="angle-down" icon={faAngleDown} />
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</MethodSelectBlock>
	);
};

export default MethodSelect;
