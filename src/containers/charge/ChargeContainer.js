import React from 'react';
import { useEffect } from 'react';
import MainCharge from '../../components/charge/MainCharge';
import {
	initializeCharge,
	changeInput,
	changeCheck,
	changeMethod,
	changePossible,
} from '../../modules/charge';
import { useDispatch, useSelector } from 'react-redux';

const ChargeContainer = () => {
	const dispatch = useDispatch();
	const {
		prevBalance,
		userId,
		totalAmount,
		checked,
		selectedMethod,
		possible,
	} = useSelector(({ charge }) => ({
		prevBalance: charge.prevBalance,
		userId: charge.userId,
		totalAmount: charge.totalAmount,
		checked: charge.checked,
		selectedMethod: charge.selectedMethod,
		possible: charge.possible,
	}));

	const handleCheck = () => {
		dispatch(changeCheck());
	};

	const handleMethod = (method) => {
		console.log(window.innerHeight);
		if (method === 'EASY_PAYMENT') {
			dispatch(changeCheck());
			return;
		}
		dispatch(changeMethod(method));
		console.log(method);
	};

	const handleChangeAmount = (amount) => {
		if (totalAmount === '') {
			dispatch(
				changeInput({ name: 'totalAmount', value: totalAmount + amount })
			);
		} else {
			dispatch(
				changeInput({
					name: 'totalAmount',
					value: parseInt(totalAmount) + parseInt(amount),
				})
			);
		}
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		dispatch(changeInput({ name, value }));
	};

	useEffect(() => {
		const prevBalance = sessionStorage.getItem('prevBalance');
		const userId = sessionStorage.getItem('userId');
		dispatch(initializeCharge({ prevBalance, userId }));
	}, []);

	// 결제 가능 여부 결정
	useEffect(() => {
		// 결제 수단을 반드시 선택해야 한다.
		if (!selectedMethod) {
			dispatch(changePossible(false));
			return;
		}

		// 금액이 10000원 이상
		if (totalAmount >= 10000) {
			dispatch(changePossible(true));
		} else {
			dispatch(changePossible(false));
		}
	}, [totalAmount, selectedMethod]);

	return (
		<MainCharge
			prevBalance={prevBalance || 0}
			totalAmount={totalAmount}
			handleChangeAmount={handleChangeAmount}
			onChange={onChange}
			checked={checked}
			handleMethod={handleMethod}
			handleCheck={handleCheck}
			selectedMethod={selectedMethod}
			possible={possible}
		/>
	);
};

export default ChargeContainer;
