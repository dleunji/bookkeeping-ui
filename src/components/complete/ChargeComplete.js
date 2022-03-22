import GradientBox from "../common/GradientBox";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const CompleteBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color:  #f3f6f9;
    font-family: 'AppleSDGothicNeoM';
    color: #323232;

    .charge-info {
        font-size: 24px;
        display : flex;
        justify-content: center;
        font-family: 'AppleSDGothicNeoB';
        font-weight: bold;
        margin: 20px;
    }

    .payment-info {
        font-size : 20px;
        display : flex;
        justify-content: space-between;
        margin: 20px;
    }

    .announcement-title {
        font-size : 14px;
        display : flex;
        justify-content: space-between;
        margin: 20px;
    }

    .announcement {
        font-size : 12px;
        display : flex;
        justify-content: right;
        margin: 20px;
    }

    .balance-status {        
        text-align : right;
        align : right;
        font-size : 14px;     
        margin-right: 20px;   
    }
`

const ChargeComplete = ({
    chargeAmount, 
    chargeDesc,
    chargeMethod,
    chargeMethodAmount,
    chargeAnnounceTitle,
    chargeAnnounceDesc,
    balance,
    chargeLimit,
    handleClose,
    handleAddition
}) => {
    return (
        <CompleteBlock>
            <GradientBox
                backgroundColor="white"
                width="460px"
                height="465px"
            >
                <div>
                    <div>
                        <div>
                            <div className="charge-info">   
                                    {chargeAmount}
                            </div>
                            <div className="charge-info" style={{fontSize:'18px'}}>   
                                    {chargeDesc}
                            </div>
                        </div>
                        
                        <hr style={{margin:'20px'}}/>
                        <div style={{marginTop:'50px'}}>
                            <div className="payment-info">
                                <span>{chargeMethod}</span>
                                <span>{chargeMethodAmount}</span>
                            </div>
                        </div>

                        <div style={{marginTop:'50px'}}>
                            <div className="announcement-title">
                                <span>{chargeAnnounceTitle}</span>
                            </div>
                            <div className="announcement">
                                <span>{chargeAnnounceDesc}</span>
                            </div>
                        </div>

                        <div style={{marginTop:'30px'}}>
                            <div className="balance-status">
                                <span>충전 후 잔액 {balance}</span>
                            </div>
                            <div className="balance-status">
                                <span>잔여 충전 한도 {chargeLimit}</span>

                            </div>
                        </div>

                    </div>
                </div>
                
                <div style={{display:'flex', justifyContent:'space-between', margin:'20px'}}>
                    <button style={{fontSize:'24px', width:'198px', height:'58px', fontFamily:'AppleSDGothicNeoM', backgroundColor:'#C4C4C4', color:'#323232'}} onClick={handleClose}>닫기</button>
                    <Link to='/charge'>
                        <button style={{fontSize:'24px', width:'198px', height:'58px', fontFamily:'AppleSDGothicNeoM', backgroundColor:'#1976D2', color:'#ffffff'}} onClick={handleAddition}>추가 충전</button>
                    </Link>
                </div>
            </GradientBox>
        </CompleteBlock>
    )
}

export default ChargeComplete;