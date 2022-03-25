import GradientBox from "../common/GradientBox";
import styled from 'styled-components';
import ChargeHeader from "../common/ChargeHeader";
import BankSelect from "./BankSelect";

const AccountTransferBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color:  #f3f6f9;    
    font-family: 'AppleSDGothicNeoM';
    color: #323232;
    height: 769px;

    .container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

    .title {
		margin-bottom: 15px;
		font-family: 'Noto Sans Serif KR';
		font-size: 24px;
		font-weight: 700;
        width: 460px;
		display: flex;
	}

    .bank-select-block {
		display: flex;
		// 선택한 결제 수단
		.selected {
			outline: 2px solid #1976d2;
			border-radius: 6px;
		}
		.item {
			cursor: pointer;
			display: flex;
			align-items: center;
			flex-direction: column;
			padding: 3px;
			.img-container {
				display: flex;
				align-items: center;
				height: 100px;
			}
		}
	}
`


const banks = [
	{
		name: '우리',
		value: 'WOORI',
		url: `${process.env.PUBLIC_URL}/images/woori_bank.png`,
	},
	{
		name: '국민',
		value: 'KOOKMIN',
		url: `${process.env.PUBLIC_URL}/images/kookmin_bank.png`,
	},
];


const AccountTransfer = ({totalAmount, handlePopup}) => {    
    return (
        <AccountTransferBlock>
            <ChargeHeader />
            <div className='container'>
                <div className='title'>내용</div>
                <GradientBox
                    backgroundColor="white"
                    width="460px"
                >   
                    <div style={{padding: '20px', display:'flex', justifyContent:'space-between'}}>
                        <div>충전 금액</div>
                        <div>{totalAmount} 원</div>
                    </div>
                </GradientBox>
            </div>


            <div className='container'>
                <div className='title'>은행 선택</div>
                <GradientBox
                    backgroundColor="white"
                    width="460px"
                    height="380px"
                >
                   <BankSelect handlePopup={handlePopup} totalAmount={totalAmount}/>
                </GradientBox>    
            </div>        
        </AccountTransferBlock>
    )
}

export default AccountTransfer;
