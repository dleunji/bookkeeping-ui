import StyledButton from '../common/StyledButton';
import { useEffect } from 'react';

var QRCode = require('qrcode.react');

const QRBox = ({totalAmount, installMonth, timeLimit, stopTimer}) => {
    const openerWindow = window.opener;	
		const desc = installMonth > 0 ? `${installMonth}개월 할부` : '일시불';

    return (
        <div>
            <div style={{display:'flex', flexDirection:"column", justifyContent:'space-evenly'}}>                    
                <div style={{display:'flex', justifyContent:'center'}}>
                    <QRCode value={totalAmount + installMonth} fgColor="#333" bgColor="#fff" renderAs='svg' />
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    {parseInt(timeLimit/60)}:{parseInt(timeLimit%60)}
                </div>
                <div>앱에서 결제 완료 시 확인 버튼을 눌러주세요</div>
                <div style={{display:'flex', justifyContent:'space-around'}}>                   
                    <StyledButton 
                        width='100px' height='50px'
                        onClick={()=>{
												stopTimer();
                        console.log('결제창 이동');                    
                        openerWindow.postMessage(JSON.stringify({
                            state : 'SUCCEED',
                            data : {
                                chargeAmount : totalAmount,                         // 총 충전 금액
                                chargeDesc: '충전완료',                              // 충전 정보
                                chargeMethod : '카드',                              // 결제 수단 이름
                                chargeMethodAmount : totalAmount,                   // 결제 수단 금액(가상 계좌는 '입금대기'라 출력)
                                chargeAnnounceTitle: '할부 정보',                    // 안내사항 제목
                                chargeAnnounceDesc: desc,      											// 안내사항 내용 
                                balance: 0,                                          // 충전 후 잔액
                                chargeLimit: 0,                                      // 잔여 충전 한도
                            }
                        }),'http://localhost:3000/pg-card');
                        window.close();
                    }}>
                            확인
                    </StyledButton>
                </div>
            </div>
        </div>
    )
}

export default QRBox;