import React from 'react';
import { useEffect } from 'react';
import ChargeError from '../../components/error/ChargeError';
import { initializeError } from '../../modules/error';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ErrorContainer = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const { code, title, message } = useSelector(({ error }) => ({
		code: error.code,
		title: error.title,
		message: error.message,
	}));

	const handleClose = () => {
		console.log('닫기 버튼 클릭');
		window.close();
	};

	useEffect(() => {
		const result = JSON.parse(location.state);
		console.log('useEffect Error ');
		// 각 값에는 API 반환값 할당 필요
		const code = result.code;
		const title = result.title;
		const message = result.message;
		dispatch(initializeError({ code, title, message }));
	}, [location.state]);

	return (
		<ChargeError
			code={code}
			title={title}
			message={message}
			handleClose={handleClose}
		/>
	);
};

export default ErrorContainer;
