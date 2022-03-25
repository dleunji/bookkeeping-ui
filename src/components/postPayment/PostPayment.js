import GradientBox from "../common/GradientBox";
import styled from 'styled-components';
import ChargeHeader from "../common/ChargeHeader";
import BigButton from "../common/BigButton";
import PayBlockContainer from "../../containers/payBlock/PayBlockContainer";
import { useState } from "react";

const VirtualAccountBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const PostPayment = ({totalAmount, OTP, handleOTP, handlePopup, handleTimer, handleClick}) => {    
    const today = new Date();        
    // const [timer, setTimer] = useState('');

    // const run = () => {
    //     setTimer(
    //         setInterval(() => {
    //             const userId = sessionStorage.getItem('userId');
    //             const today = new Date();
    //             // const OTP = (userId + '.' + today.getTime())
    //             const OTP = today.getTime();
    //             console.log(1);
    //             handleOTP(OTP);
    //         }, 1000 * 2)
    //     )
    // }

    // const stop = () => {
    //     setTimer(clearInterval(timer));
    // }

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
                        <div style={{paddingTop:'20px', paddingLeft: '20px', paddingRight:'20px', display:'flex', justifyContent:'space-between'}}>
                            <div>충전 금액</div>
                            <div>{totalAmount} 원</div>
                        </div>
                        <div style={{paddingLeft: '20px', paddingRight:'20px', display:'flex', justifyContent:'space-between'}}>
                            <div>정산일</div>
                            <div>{today.getFullYear()}/{today.getMonth() + 2}/15</div>
                        </div>
                    </GradientBox>
                </div>

                <div className='container'>
                    <div className='title' style={{display:'flex', justifyContent:'space-between'}}>
                        <div>후불 결제</div>
                        <div style={{fontSize:'14px', display:'flex', flexDirection:'column-reverse', cursor:'pointer'}} onClick={handlePopup}>결제수단 설정하기</div>
                    </div>                    
                    <GradientBox
                        backgroundColor="white"
                        width="460px"
                        height="320px"
                    >
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <div style={{width : '420px', display:'flex', justifyContent:'center', flexFlow:'wrap'}}>
                                <div style={{height:'70px', display:'flex',flexDirection:'column', justifyContent:'center'}}>
                                    <h3>모바일 OTP</h3>
                                </div>
                            </div>

                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            {OTP}
                        </div>
                        <div style={{display:'flex', justifyContent:'center', fontSize:'12px'}}>
                                    앱에서 OTP 인증 후 확인을 눌러주세요.
                        </div>
                        <div style={{display:'flex', padding:'20px', justifyContent:'center'}}>
                                <BigButton possible={true} title='확인' handleClick={handleTimer}/>
                        </div>
                    </GradientBox>    
                </div>
            </VirtualAccountBlock>            
            <PayBlockContainer customHandleClick={()=>{   
                handleClick();             
                window.postMessage(JSON.stringify({
                    state : 'SUCCESS',
                    data : {
                        chargeAmount : totalAmount,                                 // 총 충전 금액
                        chargeDesc: '정산 예정',                                    // 충전 정보
                        chargeMethod : 'post_payment',                                     // 결제 수단 이름
                        chargeMethodAmount : totalAmount,                          // 결제 수단 금액(가상 계좌는 '입금대기'라 출력)
                        chargeAnnounceTitle: '안내사항',                            // 안내사항 제목
                        chargeAnnounceDesc: `${today.getFullYear()}/${today.getMonth() + 2}/15에 일괄 정산됩니다`,     // 안내사항 내용 
                    }
                }),'http://localhost:3000/post-payment');}}
            />
        </div>
    )
}

export default PostPayment;