import styled from 'styled-components';

const BankSelectBlock = styled.div`
  padding: 10px;
  .bank-block {
    display: flex;
    .item {
      width: 25%;
    }
  }
`;
const banks = [
  {
    name: '우리',
    url: `${process.env.PUBLIC_URL}/images/woori_bank.png`,
  },
  {
    name: '국민',
    url: `${process.env.PUBLIC_URL}/images/kookmin_bank.png`,
  },
];

const BankSelect = () => {
  return (
    <BankSelectBlock>
      <div className='bank-block'>
        {banks.map((bank, idx) => (
          <div className='item' key={idx}>
            <img src={bank.url} width='100%' />
          </div>
        ))}
      </div>
    </BankSelectBlock>
  );
};

export default BankSelect;
