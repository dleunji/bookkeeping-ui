import CardInfo from './CardInfo';
import InputTable1 from './InputTable1';
import PairButtons from './PairButtons';

const Step1 = ({
	totalAmount,
	handleInput,
	handleCardNum,
	step1,
	handleCancel,
	handleNext,
	currentStep,
}) => {
	// 칸이 모두 채워져야 다음 버튼 활성화
	const possible =
		step1.cardNum.every((num) => num > 999) &&
		step1.validMonth !== '' &&
		step1.validYear !== '';
	return (
		<div>
			<CardInfo totalAmount={totalAmount} />
			<InputTable1
				handleCardNum={handleCardNum}
				handleInput={handleInput}
				step1={step1}
			/>
			<PairButtons
				marginTop="150px"
				marginBottom="30px"
				marginSide="180px"
				height="50px"
				width="160px"
				possible={possible}
				handleCancel={handleCancel}
				handleNext={handleNext}
			/>
		</div>
	);
};

export default Step1;
