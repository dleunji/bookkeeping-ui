import styled from 'styled-components';

const EasyPaymentBlock = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  height: 100%;
  .selected {
    background-color: rgba(25, 118, 210, 0.4) !important;
    border-radius: 6px 0 0 6px;
  }
  .method {
    cursor: pointer;
    width: 100px;
    height: 100%;
    align-items: center;
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
    &:hover {
      background-color: #e5e5e5;
    }
  }
`;
const items = [
  {
    name: '토스',
    imgSrc: `${process.env.PUBLIC_URL}/images/toss_img.png`,
    value: 'TOSS',
  },
];

const EasyPayment = ({ handleMethod, selectedMethod }) => {
  return (
    <EasyPaymentBlock>
      {items.map((item, idx) => (
        <div
          className={`method ${selectedMethod === item.value ? 'selected' : ''}`}
          key={idx}
          onClick={() => handleMethod(item.value)}
        >
          <div>
            <div className='easy-icon-box'>
              <img className='easy-icon' src={item.imgSrc} />
            </div>
            <div className='easy-name-box'>{item.name}</div>
          </div>
        </div>
      ))}
    </EasyPaymentBlock>
  );
};

export default EasyPayment;
