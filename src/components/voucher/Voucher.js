import GradientBox from "../common/GradientBox";
import styled from 'styled-components';
import ChargeHeader from "../common/ChargeHeader";
import BigButton from "../common/BigButton";
import PayBlockContainer from "../../containers/payBlock/PayBlockContainer";
import BottomBorderInput from "../common/BottomBorderInput";

const VirtualAccountBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color:  #f3f6f9;    
    font-family: 'AppleSDGothicNeoM';
    color: #323232;
    height: 615px;

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

const Voucher = ({totalAmount, handleVoucherId, voucherId }) => {    

    const openerWindow = window.opener;
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
                    <div className='title'>상품권 조회</div>
                    <GradientBox
                        backgroundColor="white"
                        width="460px"
                        height="260px"
                    >
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <div style={{width : '420px', display:'flex', justifyContent:'center', flexFlow:'wrap'}}>
                                <div style={{height:'70px', display:'flex',flexDirection:'column', justifyContent:'center'}}>
                                    <BottomBorderInput placeholder={'상품권 번호'} width={'390px'} height={'40px'} onChange={(e)=>{handleVoucherId(e.target.value);}}/>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex', padding:'20px', justifyContent:'center'}}>
                                <BigButton possible={true} title='조회' handleClick={()=>{
                                    voucherId===''
                                    ? alert("상품권 번호를 입력해주세요")
                                    : alert("확인되었습니다")
                                    }}/>
                        </div>
                    </GradientBox>    
                </div>       
            </VirtualAccountBlock>      
            <PayBlockContainer customHandleClick={()=>{
                window.postMessage(JSON.stringify({
                    state : 'SUCCESS',
                    data : {
                        chargeAmount : totalAmount,
                        chargeDesc: '상품권',
                        chargeMethod : `voucher`,
                        chargeMethodAmount : totalAmount,
                        chargeAnnounceTitle: '안내사항',
                        chargeAnnounceDesc:  `없음`,
                    }
                }),'http://localhost:3000/voucher');}}/>
        </div>
    )
}

export default Voucher;