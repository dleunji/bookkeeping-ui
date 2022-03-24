import GradientBox from "../common/GradientBox";
import styled from 'styled-components';
import ChargeHeader from "../common/ChargeHeader";
import BigButton from "../common/BigButton";
import PayBlockContainer from "../../containers/payBlock/PayBlockContainer";

const VirtualAccountBlock = styled.div`
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
`

const VirtualAccount = ({totalAmount, handlePopup }) => {    
    return (
        <div>
            <VirtualAccountBlock>
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
                    <div className='title'>휴대폰 인증</div>
                    <GradientBox
                        backgroundColor="white"
                        width="460px"
                        height="380px"
                    >
                        <div style={{display:'flex', padding:'20px', justifyContent:'center'}}>
                            <BigButton possible={true} title='인증요청' handleClick={handlePopup}/>
                        </div>
                    </GradientBox>    
                </div>       
            </VirtualAccountBlock>            
        </div>
    )
}

export default VirtualAccount;
