import styled from 'styled-components';
import StyledButton from '../common/StyledButton';
import { Alert, AlertTitle } from '../../../node_modules/@mui/material/index';
const AgreeBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  .container {
    display: flex;
    flex-direction: column;
    .info {
      text-align: center;
      span {
        color: #1976d2;
        font-weight: 600;
      }
      .ars-num {
        margin-top: 30px;
        font-size: 40px;
        color: #1976d2;
        font-weight: 800;
      }
    }
    .button {
      margin-top: 20px;
    }
    .faq-box {
      margin-top: 20px;
      width: 100%;
      .questions {
        & + & {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const ARSAgree = ({ activeArsButton, requestARS }) => {
  return (
    <AgreeBlock>
      <div className='container'>
        <div className='info'>
          <span>ARS 인증 전화 받기</span> 후 <br />
          안내에 따라 아래 숫자를 입력하세요.
          <div className='ars-num'>96</div>
        </div>
        <div className='button'>
          <StyledButton
            disabled={!activeArsButton}
            height='50px'
            color='white'
            fontSize='18px'
            onClick={() => requestARS()}
          >
            ARS 전화받기
          </StyledButton>
        </div>
        <div className='faq-box'>
          <Alert severity='info'>
            <AlertTitle>
              <strong>FAQ</strong>
            </AlertTitle>
            <div className='questions'>
              해외 거주로 ARS 전화 인증이 어려우신가요?
              <br />
              본인 명의의 휴대전화가 없으신가요?
              <br />
              전화가 오지 않나요?
              <br />
            </div>
          </Alert>
        </div>
      </div>
    </AgreeBlock>
  );
};

export default ARSAgree;
