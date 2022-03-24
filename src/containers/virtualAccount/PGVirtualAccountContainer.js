import React from 'react';
import { useEffect } from 'react';
import PGVirtualAccount from '../../components/virtualAccount/PGVirtualAccount';
import { useDispatch, useSelector } from 'react-redux';
import { changeMethod, initializeVirtual } from '../../modules/pgVirtualAccount';
const PGVirtualAccountContainer = () => {
	const dispatch = useDispatch();
	const { totalAmount, method } = useSelector(({ pgVirtualAccount }) => ({
		totalAmount: pgVirtualAccount.totalAmount,
		method: pgVirtualAccount.method,
	}));

	const handleMethod =(method) =>{
		dispatch(changeMethod(method));
	}

    useEffect(() => {
        // TODO : 충전창으로부터 데이터를 전달받기 위해 SessionStorage 활용(새로운 창이 생성되면 state 는 갱신되기 때문)
        const temp = sessionStorage.getItem('totalAmount');
		dispatch(initializeVirtual(temp));
		console.log('useEffect Error');
	}, []);

	return (
		<PGVirtualAccount
			totalAmount={totalAmount}
			method={method}
			handleMethod={handleMethod}
		/>
	);
};

export default PGVirtualAccountContainer;
