import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainPhone from '../components/phone/MainPhone';
import {
	changeAuthentication,
	changeCarrier,
	changeInput,
	changePassword,
	changeStatus,
} from '../modules/phone';

const PhoneContainer = () => {
	const { totalAmount, phone } = useSelector(({ charge, phone }) => ({
		totalAmount: charge.totalAmount,
		phone,
	}));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		mainCarrier,
		subCarrier,
		auth,
		status,
		phoneNum,
		socialNum,
		password,
	} = phone;

	// TODO: 인증방식을 바꾸면 텍스트필드 초기화

	const handleCarrier = (e) => {
		const { name, value } = e.target;
		dispatch(changeCarrier({ name, value }));
	};

	const handleAuthentication = (e) => {
		dispatch(changeAuthentication(e.target.value));
	};

	const handleInput = ({ name, idx, value }) => {
		switch (name) {
			case 'phoneNum':
				if (idx === 0 && value.length < 4) {
					dispatch(changeInput({ name, idx, value }));
				} else if (idx > 0 && value.length < 5) {
					dispatch(changeInput({ name, idx, value }));
				}
				break;
			case 'socialNum':
				if (idx === 0 && value.length < 7) {
					dispatch(changeInput({ name, idx, value }));
				} else if (idx === 1 && value.length < 7) {
					dispatch(changeInput({ name, idx, value }));
				}
				break;
			default:
				break;
		}
	};

	const handleStatus = (status) => {
		dispatch(changeStatus(status));
	};

	const handlePassword = (e) => {
		const { value } = e.target;
		// 6자리 고정
		if (value.length > 6) {
			return;
		}
		dispatch(changePassword(value));
	};

	const handleBack = () => {
		navigate(-2);
	};

	const handleNext = () => {
		const prevBalance = sessionStorage.getItem('prevBalance');
		const result = {
			chargeAmount: totalAmount,
			chargeDesc: '휴대폰 결제',
			chargeMethod: '넥토 머니',
			chargeMethodAmount: totalAmount,
			chargeAnnounceTitle: '',
			chargeAnnounceDesc: '',
			balance: prevBalance + totalAmount,
			chargeLimit: 0,
		};
		switch (auth) {
			case 'SMS':
				navigate('/complete', { state: JSON.stringify(result) });
				// SMS 인증 실패인 경우에는 다음 버튼이 활성화되지 않으므로 실패인 경우는 고려 X
				break;
			case 'PASSWORD':
				if (password === '111111') {
					dispatch(changeStatus('SUCCESS_PASSWORD_AUTH'));
					navigate('/complete', { state: JSON.stringify(result) });
				} else {
					dispatch(changeStatus('FAIL_PASSWORD_AUTH'));
				}
				break;
		}
	};

	const handlePasswordButton = () => {
		switch (status) {
			case 'NONE': {
				// 통신사, 전화번호, 주민등록번호의 데이터가 아이디 소유주의 것과 매치하는지 확인
				dispatch(changeStatus('READY_SMS_AUTH'));
				break;
			}
			case 'POSSIBLE_SMS_AUTH': {
				if (password === '111111') dispatch(changeStatus('SUCCESS_SMS_AUTH'));
				else {
					dispatch(changePassword(''));
					dispatch(changeStatus('FAIL_SMS_AUTH'));
				}
				break;
			}
			case 'FAIL_SMS_AUTH': {
				dispatch(changeStatus('READY_SMS_AUTH'));
				break;
			}
			default:
				break;
		}
	};

	useEffect(() => {
		// 6자리의 인증번호를 입력해야 인증확인 버튼 활성화
		if (password.length === 6) {
			dispatch(changeStatus('POSSIBLE_SMS_AUTH'));
		}
	}, [password]);

	return (
		<MainPhone
			totalAmount={totalAmount}
			phone={phone}
			handleAuthentication={handleAuthentication}
			handleInput={handleInput}
			handleStatus={handleStatus}
			handlePassword={handlePassword}
			handleCarrier={handleCarrier}
			handlePasswordButton={handlePasswordButton}
			handleNext={handleNext}
			handleBack={handleBack}
		/>
	);
};

export default PhoneContainer;
