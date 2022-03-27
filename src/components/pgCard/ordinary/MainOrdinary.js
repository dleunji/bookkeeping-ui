import styled from 'styled-components';
import { Step, StepLabel, Stepper } from '../../../../node_modules/@mui/material/index';
import GradientBox from '../../common/GradientBox';
import NStep1 from './Nstep1';
import Nstep2 from './Nstep2';
import Nstep3 from './Nstep3';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MainOrdinaryBlock = styled.div`
  background-color: #f3f6f9;
  height: 100vh;
  color: #323232;
  font-size: 16px;
  display: flex;
  justify-content: center;
  font-family: 'AppleSDGothicNeoM';

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .stepper {
      width: 80%;
      margin-bottom: 20px;
    }
  }
`;

const MainOrdinary = ({
  totalAmount,
  handleInput,
  handleCardNum,
  step1,
  handleNext,
  handleCancel,
  currentStep,
  registered,
  step2,
  registeredSteps,
  unregisteredSteps,
  second,
  statusCode,
  nstep1,
  nstep2,
  nstep3,
  handleAuth,
}) => {
  return (
    <MainOrdinaryBlock>
      <div className='container'>
        <div className='stepper'>
          <Stepper activeStep={currentStep}>
            {registered
              ? registeredSteps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))
              : unregisteredSteps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
          </Stepper>
        </div>
        <GradientBox backgroundColor='white' width='700px' height='450px'>
          {currentStep === 0 && registered && (
            <Step1
              totalAmount={totalAmount}
              handleInput={handleInput}
              handleCardNum={handleCardNum}
              step1={step1}
              currentStep={currentStep}
              handleNext={handleNext}
              handleCancel={handleCancel}
            />
          )}
          {currentStep === 1 && registered && (
            <Step2
              totalAmount={totalAmount}
              handleInput={handleInput}
              handleCardNum={handleCardNum}
              step2={step2}
              currentStep={currentStep}
              handleNext={handleNext}
              handleCancel={handleCancel}
            />
          )}
          {currentStep === 2 && registered && (
            <div>
              <Step3 second={second} />
            </div>
          )}
          {currentStep === 0 && !registered && (
            <NStep1
              handleInput={handleInput}
              handleCardNum={handleCardNum}
              step1={step1}
              currentStep={currentStep}
              handleNext={handleNext}
              handleCancel={handleCancel}
              nstep1={nstep1}
            />
          )}
          {currentStep === 1 && !registered && (
            <Nstep2
              totalAmount={totalAmount}
              handleInput={handleInput}
              handleCardNum={handleCardNum}
              step2={step2}
              currentStep={currentStep}
              handleNext={handleNext}
              handleCancel={handleCancel}
              nstep2={nstep2}
              handleAuth={handleAuth}
            />
          )}
          {currentStep === 2 && !registered && (
            <Nstep3
              totalAmount={totalAmount}
              handleInput={handleInput}
              handleCardNum={handleCardNum}
              step2={step2}
              currentStep={currentStep}
              handleNext={handleNext}
              handleCancel={handleCancel}
            />
          )}
          {currentStep === 3 && !registered && (
            <div>
              <Step3 second={second} />
            </div>
          )}
        </GradientBox>
      </div>
    </MainOrdinaryBlock>
  );
};

export default MainOrdinary;
