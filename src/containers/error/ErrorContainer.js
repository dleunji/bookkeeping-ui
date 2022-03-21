import React from 'react';
import { useEffect } from 'react';
import ChargeError from '../../components/error/ChargeError';
import { initializeError } from '../../modules/error';
import { useDispatch, useSelector } from 'react-redux';

const ErrorContainer = () => {
	const dispatch = useDispatch();
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
		console.log('useEffect Error ');
		// 각 값에는 API 반환값 할당 필요
		const code = 'test code';
		const title = 'test title';
		const message = 'test message';
		dispatch(initializeError({ code, title, message }));
	}, []);

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
