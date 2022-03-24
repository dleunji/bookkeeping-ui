import StyledButton from '../common/StyledButton';
import { useEffect } from 'react';

var QRCode = require('qrcode.react');

const QRBox = ({totalAmount, installMonth, timeLimit, handleTimer}) => {
    const openerWindow = window.opener;    

    useEffect(()=>{
        timer();
    },[])

    var timer = () => {
        setInterval(()=>{
            if (timeLimit>=0){
                handleTimer(timeLimit--);
            } else {
                // TODO MainPGCard 창이 /error 으로 이동
                openerWindow.postMessage(JSON.stringify({
                    state : 'FAIL',
                    data : {
                        code : 'PG_ERROR',
                        title: 'PG 결제 오류',
                        message : 'PG 사 결제 과정에서 오류가 발생하였습니다. 다시 시도해주세요',
                    }
                }), 'http://localhost:3000/pg-card')
                window.close();
            }
        }, 1000);
    }

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
                <div style={{display:'flex', justifyContent:'center'}}>
                    
                    <StyledButton 
                        onClick={()=>{
                        console.log('결제창 이동');                    
                        openerWindow.postMessage(JSON.stringify({
                            state : 'SUCCEED',
                            data : {
                                chargeAmount : totalAmount,                         // 총 충전 금액
                                chargeDesc: '충전완료',                              // 충전 정보
                                chargeMethod : '카드',                              // 결제 수단 이름
                                chargeMethodAmount : totalAmount,                   // 결제 수단 금액(가상 계좌는 '입금대기'라 출력)
                                chargeAnnounceTitle: '할부 정보',                    // 안내사항 제목
                                chargeAnnounceDesc: `${installMonth}개월 할부`,      // 안내사항 내용 
                                balance: 0,                                          // 충전 후 잔액
                                chargeLimit: 0,                                      // 잔여 충전 한도
                            }
                        }),'http://localhost:3000/pg-card');
                        window.close()
                    }}>
                            확인
                    </StyledButton>
                </div>
            </div>
        </div>
    )
}

export default QRBox;