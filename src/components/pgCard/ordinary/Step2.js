import CardInfo from './CardInfo';
import InputTable2 from './InputTable2';
import PairButtons from './PairButtons';

const Step2 = ({
  totalAmount,
  handleInput,
  handleCardNum,
  step2,
  handleCancel,
  handleNext,
  currentStep,
}) => {
  // 칸이 모두 채워져야 다음 버튼 활성화
  const possible = step2.cvc.length === 3 && step2.password.length > 5;

  return (
    <div>
      <CardInfo totalAmount={totalAmount} />
      <InputTable2 handleInput={handleInput} step2={step2} />
      <PairButtons
        marginTop='150px'
        marginBottom='30px'
        marginSide='180px'
        height='50px'
        width='160px'
        possible={possible}
        handleCancel={handleCancel}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Step2;
