import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
	faHandHoldingDollar,
	faFileInvoiceDollar,
	faCreditCard,
} from '@fortawesome/free-solid-svg-icons/index';

const InfoBlock = styled.div`
	padding: 3rem 3rem;
	display: flex;
	justify-content: center;
	border-radius: 10px;
	width: 95%;
	.balance-items {
		.balance-item {
			margin-bottom: 0.8rem;
			width: 30rem;
		}
		.icon {
			font-size: 1.5rem;
			width: 2rem;
		}
	}
`;

const MainInfo = ({ user }) => {
	return (
		<InfoBlock>
			<div className="balance-items">
				<div className="balance-item">
					<FontAwesomeIcon className="icon" icon={faHandHoldingDollar} />
					현금 잔액 {user.pocketBalance.toLocaleString()}
				</div>
				<div className="balance-item">
					<FontAwesomeIcon className="icon" icon={faFileInvoiceDollar} />
					예금 잔액 {user.accBalance.toLocaleString()}
				</div>
				<div className="balance-item">
					<FontAwesomeIcon className="icon" icon={faCreditCard} />
					미납 대금 {user.unpaidBill.toLocaleString()}
				</div>
			</div>
		</InfoBlock>
	);
};

export default MainInfo;
