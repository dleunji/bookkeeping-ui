import React from 'react';
import { useEffect } from 'react';
import AccountTransfer from '../../components/accountTransfer/AccountTransfer';
import { useDispatch, useSelector } from 'react-redux';

const AccountTransferContainer = () => {
	const dispatch = useDispatch();
	const { totalAmount } = useSelector(({ charge }) => ({
		totalAmount: charge.totalAmount
	}));

	useEffect(() => {
		console.log('useEffect Error ');
	}, []);

	return (
		<AccountTransfer
			totalAmount={totalAmount}
		/>
	);
};

export default AccountTransferContainer;
