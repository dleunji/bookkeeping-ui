import CardInfo from './CardInfo';
import InputTable1 from './InputTable1';
import PairButtons from './PairButtons';
import NinputTable1 from './NinputTable1';
const NStep1 = ({
  handleInput,
  handleCardNum,
  step1,
  handleCancel,
  handleNext,
  currentStep,
  nstep1,
}) => {
  // 칸이 모두 채워져야 다음 버튼 활성화
  const possible = nstep1.socialNum1 != '' && nstep1.socialNum2 != '' && nstep1.cvc.length === 3;
  return (
    <div>
      <NinputTable1
        handleCardNum={handleCardNum}
        handleInput={handleInput}
        step1={step1}
        nstep1={nstep1}
      />
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

export default NStep1;
