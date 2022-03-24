import GradientBox from "../common/GradientBox";
import styled from 'styled-components';
import BottomBorderInput from "../common/BottomBorderInput";
import BigButton from "../common/BigButton";
import { useState } from "react";
import PayBlockContainer from "../../containers/payBlock/PayBlockContainer";

const AccountTransferBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color:  #f3f6f9;    
    font-family: 'AppleSDGothicNeoM';
    color: #323232;
    height: 499px;

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

const PGAccountTransfer = ({totalAmount}) => {
    var checkLimit = 1;
    const [accountId, setAccountId] = useState('');
    
    
    return (
        <div>
            <AccountTransferBlock>
                <div className='container'>
                    <div className='title'>내용</div>
                    <GradientBox
                        backgroundColor="white"
                        width="460px"
                    >   
                        <div style={{padding: '20px', display:'flex', justifyContent:'space-between'}}>
                            <div>충전 금액</div>
                            <div>{totalAmount}원</div>
                        </div>
                    </GradientBox>
                </div>


                <div className='container'>
                    <div className='title'>계좌 선택</div>
                    <GradientBox
                        backgroundColor="white"
                        width="460px"
                        height="260px"
                    >
                        <div style={{display:'flex', justifyContent:'center'}}>

                            <div style={{width : '420px', display:'flex', justifyContent:'center', flexFlow:'wrap'}}>
                                <div style={{height:'70px', display:'flex',flexDirection:'column', justifyContent:'center'}}>
                                <BottomBorderInput placeholder={'계좌 번호'} width={'390px'} height={'40px'} onChange={(e)=>{setAccountId(e.target.value);}}/>
                                </div>
                                <div style={{height:'70px'}}>
                                <BottomBorderInput placeholder={'계좌 비밀번호'} width={'390px'} height={'40px'}/>
                                </div>
                                <BigButton possible={true} title='인증요청' handleClick={()=>{
                                    console.log('계좌 인증 요청');
                                    accountId === ''
                                    ? alert('계좌 인증 실패')
                                    : alert('계좌 인증 완료')
                                }}/>
                            </div>
                        </div>
                    </GradientBox>    
                </div>        
            </AccountTransferBlock>
            <PayBlockContainer />
        </div>
    )
}

export default PGAccountTransfer;
