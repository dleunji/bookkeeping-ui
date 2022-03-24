import React from 'react';
import { useEffect } from 'react';
import PGAccountTransfer from '../../components/accountTransfer/PGAccountTransfer';
import { useDispatch, useSelector } from 'react-redux';

const PGAccountTransferContainer = () => {
	const dispatch = useDispatch();
	const { totalAmount } = useSelector(({ charge }) => ({
		totalAmount: charge.totalAmount,
	}));

	useEffect(() => {		
		console.log('useEffect Error ');
	}, []);

	return (
		<PGAccountTransfer
			totalAmount={totalAmount}
		/>
	);
};

export default PGAccountTransferContainer;
