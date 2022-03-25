import React from 'react';
import { useEffect } from 'react';
import PGAccountTransfer from '../../components/accountTransfer/PGAccountTransfer';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccountId, initializePGAccountTransfer } from '../../modules/pgAccountTransfer';

const PGAccountTransferContainer = () => {
	const dispatch = useDispatch();
	const { totalAmount, accountId, bank } = useSelector(({ pgAccountTransfer }) => ({
		totalAmount: pgAccountTransfer.totalAmount,
		accountId : pgAccountTransfer.accountId,
		bank : pgAccountTransfer.bank,
	}));

	const handleAccountId =(e) =>{
		dispatch(changeAccountId(e));
	}

    useEffect(() => {
		console.log('useEffect Error');
        const totalAmount = sessionStorage.getItem('totalAmount');
		const bank = sessionStorage.getItem('bank');
		dispatch(initializePGAccountTransfer({totalAmount, bank}));
	}, []);

	return (
		<PGAccountTransfer
			totalAmount={totalAmount}
			accountId={accountId}
			handleAccountId={handleAccountId}
			bank={bank}
		/>
	);
};

export default PGAccountTransferContainer;
