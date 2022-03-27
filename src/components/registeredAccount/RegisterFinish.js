import styled from 'styled-components';

const FinishBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  img {
    margin-top: 50px;
    width: 200px;
  }
  .info {
    margin-top: 30px;
    text-align: center;
    span {
      color: #1976d2;
    }
  }
`;

const SUCCESS_GIF_URL = `${process.env.PUBLIC_URL}/images/card_success.gif`;
const RegisterFinish = () => {
  return (
    <FinishBlock>
      <img src={SUCCESS_GIF_URL} />
      <div className='info'>
        <div>
          <strong>계좌 연결이 완료되었습니다.</strong>
        </div>
        <br />
        <div>
          이제 간편하게 비밀번호 입력만으로
          <br /> 넥토를 충전해보세요!
        </div>
        {/* <div>
          메인 화면으로 <span>{second}</span>초 후 돌아갑니다.
        </div> */}
      </div>
    </FinishBlock>
  );
};

export default RegisterFinish;
