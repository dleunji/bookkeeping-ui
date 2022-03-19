import styled from "styled-components";

const EasyPaymentBlock = styled.div`
  display: flex;
  height: 100%;
  align-items:center;
  .method {
    width: 100px;
    display: flex;
    justify-content: center;
    .easy-icon-box {
      display: flex;
      justify-content: center;
      .easy-icon {
        font-size: 20px;
      }
    }
    .easy-name-box {
      display: flex;
      justify-content: center;
      margin-top: 5px;
    }
  }
`;
const items = [
  {
    name: "카카오페이",
    imgSrc: `${process.env.PUBLIC_URL}/images/kakao_img.png`,
    value: "KAKAO"
  },
  {
    name: "토스",
    imgSrc: `${process.env.PUBLIC_URL}/images/toss_img.png`,
    value: "TOSS"
  }
];

const EasyPayment = ({handleMethod}) => {
  return(
    <EasyPaymentBlock>
      {items.map((item, idx) =>
      <div
        className="method"
        key={idx}
        onClick={() => handleMethod(item.value)}
      >
        <div>
          <div className="easy-icon-box">
            <img className="easy-icon" src={item.imgSrc}/>
          </div>
          <div className="easy-name-box">{item.name}</div>
        </div>
      </div>
      )}
    </EasyPaymentBlock>
  );
}

export default EasyPayment;