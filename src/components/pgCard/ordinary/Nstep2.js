import CardInfo from './CardInfo';
import InputTable2 from './InputTable2';
import PairButtons from './PairButtons';
import NinputTable2 from './NinputTable2';
const Nstep2 = ({
  totalAmount,
  handleInput,
  handleCardNum,
  step2,
  handleCancel,
  handleNext,
  currentStep,
  nstep2,
  handleAuth,
}) => {
  // 칸이 모두 채워져야 다음 버튼 활성화
  const possible = nstep2.authStatus === 'COMPLETE';

  return (
    <div>
      <NinputTable2
        handleInput={handleInput}
        step2={step2}
        nstep2={nstep2}
        handleAuth={handleAuth}
      />
      <PairButtons
        marginTop='90px'
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

export default Nstep2;
