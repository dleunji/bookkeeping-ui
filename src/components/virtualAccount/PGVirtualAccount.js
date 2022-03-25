import GradientBox from "../common/GradientBox";
import styled from 'styled-components';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PayBlockContainer from "../../containers/payBlock/PayBlockContainer";

const VirtualAccountBlock = styled.div`
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

const PGVirtualAccount = ({totalAmount, method, handleMethod}) => {
    var checkLimit = 1;
    const openerWindow = window.opener;

    return (
        <div>
        <VirtualAccountBlock>
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
                    <div style={{padding: '20px'}} >
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                onChange={(e)=>{handleMethod(e.target.value)}}
                            >
                                <FormControlLabel value="우리은행" control={<Radio />} label="우리은행"/>
                                <FormControlLabel value="국민은행" control={<Radio />} label="국민은행"/>
                                <FormControlLabel value="신한은행" control={<Radio />} label="신한은행"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </GradientBox>    
            </div>        
        </VirtualAccountBlock>
        <PayBlockContainer customHandleClick={()=>{
            openerWindow.postMessage(JSON.stringify({
                state : 'SUCCESS',
                data : {
                    chargeAmount : totalAmount,                                 // 총 충전 금액
                    chargeDesc: '입금 예정',                                    // 충전 정보
                    chargeMethod : 'virtual_account',                          // 결제 수단 이름
                    chargeMethodAmount : totalAmount,                          // 결제 수단 금액(가상 계좌는 '입금대기'라 출력)
                    chargeAnnounceTitle: '안내사항',                            // 안내사항 제목
                    chargeAnnounceDesc:  `입금일로부터 3일 후에 충전됩니다.`,     // 안내사항 내용 
                }
            }),'http://localhost:3000/virtual-account');
            window.close();
            }}/>
        </div>
    )
}

export default PGVirtualAccount;
