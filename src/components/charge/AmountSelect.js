import styled from "styled-components";
const AmountBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .amounts {
    display: flex;
    width:90%;
    justify-content: space-between;
    div {
      padding: 10px;
      cursor: pointer;
    }
  }
`;

const amounts = [
  {
    name: "+1만원",
    amountInc: 10000,
  },
  {
    name: "+3만원",
    amountInc: 30000
  },
  {
    name: "+5만원",
    amountInc: 50000
  },
  {
    name: "+10만원",
    amountInc: 100000
  }
]
const AmountSelect = ({handleChangeAmount}) => {
  return(
    <AmountBlock>
      <div className="amounts">
        {amounts.map((amount, idx) => 
          <div
            key={idx}
            onClick={() => handleChangeAmount(amount.amountInc)}
          >
            {amount.name}
          </div>
        )}
      </div>
    </AmountBlock>
  );
}

export default AmountSelect;