import CardInfo from './CardInfo';
import InputTable1 from './InputTable1';
import PairButtons from './PairButtons';
import InputTable2 from './InputTable2';
import NinputTable3 from './NinputTable3';
const Nstep3 = ({
  totalAmount,
  handleInput,
  handleCardNum,
  step1,
  handleCancel,
  handleNext,
  currentStep,
  step2,
}) => {
  // 칸이 모두 채워져야 다음 버튼 활성화
  // const possible = step2.cvc.length === 3 && step2.password.length > 6;

  return (
    <div>
      <CardInfo totalAmount={totalAmount} />
      <NinputTable3 handleInput={handleInput} step2={step2} />
      <PairButtons
        marginTop='150px'
        marginBottom='30px'
        marginSide='180px'
        height='50px'
        width='160px'
        possible={1}
        handleCancel={handleCancel}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Nstep3;
