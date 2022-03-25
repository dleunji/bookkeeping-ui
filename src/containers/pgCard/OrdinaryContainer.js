import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainOrdinary from '../../components/pgCard/ordinary/MainOrdinary';
import {
	changeInput,
	changeSecond,
	changeStatusCode,
} from '../../modules/ordinary';
import {
	changeCardNum,
	changeStep,
	changeRegistered,
} from '../../modules/ordinary';
const registeredSteps = ['카드 정보 입력', '결제 인증', '결제 완료'];
const unregisteredSteps = [
	'신규 가입 및 약관 동의',
	'비밀번호 등록',
	'결제 인증',
	'완료',
];
// mocking
const cards = [
	{
		cardNum: [1111, 1111, 1111, 1111],
		validMonth: 9,
		validYear: 2027,
		cvc: 123,
		registered: false,
		// 미등록되었으므로 아직 비밀번호는 null
		password: null,
	},
	{
		cardNum: [5480, 2058, 1692, 1772],
		validMonth: 1,
		validYear: 2027,
		cvc: 444,
		registered: true,
		password: 'nexondd',
	},
];

const OrdinaryContainer = () => {
	const {
		totalAmount,
		installMonth,
		step1,
		currentStep,
		registered,
		step2,
		statusCode,
		second,
	} = useSelector(({ pgCard, ordinary }) => ({
		totalAmount: pgCard.totalAmount,
		installMonth: pgCard.installMonth,
		step1: ordinary.step1,
		currentStep: ordinary.currentStep,
		registered: ordinary.registered,
		step2: ordinary.step2,
		statusCode: ordinary.statusCode,
		second: ordinary.second,
	}));

	const dispatch = useDispatch();

	const handleInput = ({ name, value, step }) => {
		console.log(name, value, step);
		// CVC는 세자리의 수
		if (name === 'cvc' && value.length > 3) {
			return;
		}
		// 비밀번호는 최대 8자리의 수
		if (name === 'password' && value.length > 8) {
			return;
		}

		dispatch(changeInput({ name, value, step }));
	};

	const handleCardNum = (e) => {
		const { name, value } = e.target;
		// 한 단위에 최대 천 자리
		// XXXX - XXXX - XXXX - XXXX
		if (value.length > 4) {
			// TODO: 자동으로 다음 input으로 포커스 이동
			return;
		}
		console.log(name, value);
		dispatch(changeCardNum({ idx: parseInt(name), value }));
	};

	const handleNext = () => {
		if (registered) {
			// 현재가 마지막 스텝인 경우
			// 결제 처리
			switch (currentStep) {
				case 0:
					const check = cards.find(
						(card) =>
							card.cardNum.every((c, i) => c === parseInt(step1.cardNum[i])) &&
							card.validMonth === parseInt(step1.validMonth) &&
							card.validYear === parseInt(step1.validYear)
					);
					console.log(check);
					if (check === undefined) {
						alert('유효한 카드를 입력해주세요');
					} else if (check && check.registered) {
						// 2. 등록된 카드
						dispatch(changeStep(currentStep + 1));
					} else if (check && !check.registered) {
						// 3. 미등록된 카드로 신규 등록부터 진행
						dispatch(changeRegistered());
					}
					break;
				case 1:
					const registeredCard = cards.find(
						(card) =>
							card.cardNum.every((c, i) => c === parseInt(step1.cardNum[i])) &&
							card.validMonth === parseInt(step1.validMonth) &&
							card.validYear === parseInt(step1.validYear)
					);
					if (registeredCard.password === step2.password) {
						dispatch(changeStep(currentStep + 1));
					} else {
						alert('잘못된 정보입니다.');
					}
				case 2:
					// 결제 완료
					dispatch(changeStatusCode('SUCCESS'));
					break;
			}
		} else {
			switch (currentStep) {
				case 0:
					// 신규 등록
					dispatch(changeStep(currentStep + 1));
					break;
				case 1:
					// 비밀번호 입력
					dispatch(changeStep(currentStep + 1));
					break;
				case 2:
					// 결제 인증
					dispatch(changeStep(currentStep + 1));
					break;
				case 3:
					// 결제 완료
					// statusCode 변경
					dispatch(changeStatusCode('SUCCESS'));
					dispatch(changeStep(currentStep + 1));
					break;
			}
		}
	};

	const handleCancel = () => {
		// statusCode 변경
	};

	useEffect(() => {
		const desc = installMonth > 0 ? `${installMonth}개월 할부` : '일시불';
		if (
			(registered && currentStep === registeredSteps.length - 1) ||
			(!registered && currentStep === unregisteredSteps.length - 1)
		) {
			// 1초 간격으로 카운트 다운
			const timer = setInterval(() => {
				dispatch(changeSecond());
			}, 1000);

			// 5초간만 타이머 유지하고 자동 창 종료
			setTimeout(() => {
				clearTimeout(timer);
				const parentWindow = window.opener;
				const userId = sessionStorage.getItem('userId');
				parentWindow.postMessage(
					JSON.stringify({
						state: 'SUCCESS',
						data: {
							chargeAmount: totalAmount, // 총 충전 금액
							userId,
							chargeDesc: '충전완료', // 충전 정보
							chargeMethod: '카드', // 결제 수단 이름
							chargeMethodAmount: totalAmount, // 결제 수단 금액(가상 계좌는 '입금대기'라 출력)
							chargeAnnounceTitle: '할부 정보', // 안내사항 제목
							chargeAnnounceDesc: desc, // 안내사항 내용
							balance: 0, // 충전 후 잔액
							chargeLimit: 0, // 잔여 충전 한도
						},
					}),
					'http://localhost:3000/pg-card'
				);
				window.close();
			}, 5000);
		}
	}, [statusCode]);

	return (
		<MainOrdinary
			totalAmount={totalAmount}
			handleInput={handleInput}
			handleCardNum={handleCardNum}
			step1={step1}
			handleNext={handleNext}
			handleCancel={handleCancel}
			currentStep={currentStep}
			registered={registered}
			step2={step2}
			registeredSteps={registeredSteps}
			unregisteredSteps={unregisteredSteps}
			second={second}
		/>
	);
};

export default OrdinaryContainer;
