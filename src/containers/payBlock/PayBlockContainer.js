import React from 'react';
import { useEffect } from 'react';
import { checkTerm } from '../../modules/payAgree';
import { useDispatch, useSelector } from 'react-redux';
import PayButtonCard from '../../components/common/PayButtonCard';

const PayBlockContainer = () => {
	
	const {  possible } = useSelector(({ payAgree }) => ({
		possible: payAgree.possible,
	}));

    const dispatch = useDispatch();

    const handleChange = () => {
		console.log('동의 버튼');
		dispatch(checkTerm());
	};

	const handleClick = () => {
		// TODO : 서버로 전송
        possible 
        ? console.log('결제하기 가능')
        : console.log('결제하기 불가')
	};

	useEffect(() => {
		const possible = '/complete';
	},[]);

	return (
		<PayButtonCard
            possible={possible}
			handleClick={handleClick}
            handleChange={handleChange}
		/>
	);
};

export default PayBlockContainer;
