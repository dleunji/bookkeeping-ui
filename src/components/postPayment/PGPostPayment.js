import GradientBox from "../common/GradientBox";
import styled from 'styled-components';
import BottomBorderInput from "../common/BottomBorderInput";
import BigButton from "../common/BigButton";
import PayBlockContainer from "../../containers/payBlock/PayBlockContainer";
import PGPostPaymentPage from "../../pages/PGPostPaymentPage";

const AccountTransferBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color:  #f3f6f9;    
    font-family: 'AppleSDGothicNeoM';
    color: #323232;
    height: 649px;

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

   .method {
      padding-left : 20px;
      padding-right : 20px;
      padding-top : 10px;
   }

   .method-block {      
      border-style:solid;
      border-color: #1976D2;
      font-size: 16px;
      font-weight: '700';      
      border-radius: 6px;
      width: 390px;
      height: 50px;        
      display: flex;
      justify-content: space-between;    
   }

   .method-block-plain {
      border-style:solid;
      border-color: #323232;
      font-size: 16px;
      font-weight: '700';      
      border-radius: 6px;
      width: 390px;
      height: 50px;   
      display: flex;
      justify-content: space-between;    
      margin-bottom: 10px;
   }

`
const paymentMethod = [
   {
      method : '계좌',
      title : '우리은행',
      desc : '1002-650-511883'
   },
   {
      method : '계좌',
      title : '신한은행',
      desc : '112-650-511883'
   }
]

const PGPostPayment = ({totalAmount, methodArray}) => {    
    const openerWindow = window.opener;
    const today = new Date();

    return (
        <div>
            <AccountTransferBlock>
                <div className='container'>
                    <div className='title'>정산 수단</div>
                    <GradientBox
                        backgroundColor="white"
                        width="460px"
                        height="550px"
                    >
                        <div style={{display:'flex', justifyContent:'center'}}>
                           <div>
                              <div className='method'>자동 정산</div>
                              <div style={{width : '420px', display:'flex', justifyContent:'center', flexFlow:'wrap'}}>
                                 <div className="method">
                                    {                                       
                                       <div className="method-block">
                                          <div style={{display:'flex', justifyContent:'center', flexDirection:'column', width:'100px', padding:'20px'}}>
                                             {paymentMethod[0].method}
                                          </div>
                                          <div style={{display:'flex', justifyContent:'center'}}>
                                             <div style={{display:'flex', justifyContent:'center', flexDirection:'column', width:'70px'}}>
                                                {paymentMethod[0].title}
                                             </div>
                                             <div style={{display:'flex', justifyContent:'center', flexDirection:'column', width: '140px'}}>
                                                {paymentMethod[0].desc}
                                             </div>
                                          </div>
                                       </div>   
                                    }
                                    
                                 </div>
                              </div>
                           </div>
                        </div>
                        <hr style={{width:'400px', color:'#323232'}}/>
                        <div style={{paddingLeft:'20px', paddingRight:'20px', paddingBottom:'20px', height:'330px'}}>
                           <div style={{paddingLeft:'20px', marginBottom:'10px'}}>목록</div>
                           {
                              paymentMethod.map((method, index)=>{
                                 return (
                                    <div style={{display:'flex', justifyContent:'center'}}>
                                       <div className="method-block-plain">
                                          <div style={{display:'flex', justifyContent:'center', flexDirection:'column', width:'100px', padding:'20px'}}>
                                             {method.method}
                                          </div>
                                          <div style={{display:'flex', justifyContent:'center'}}>
                                             <div style={{display:'flex', justifyContent:'center', flexDirection:'column', width:'70px'}}>
                                                {method.title}
                                             </div>
                                             <div style={{display:'flex', justifyContent:'center', flexDirection:'column', width: '140px'}}>
                                                {method.desc}
                                             </div>
                                          </div>
                                       </div>         
                                    </div>                           
                                 )
                              })
                           }
                        </div>
                        <div className='method' style={{display:'flex', justifyContent:'center'}}>
                           <BigButton possible={true} title='추가/변경' color='#ffffff' handleClick={()=>{}}/>
                        </div>
                    </GradientBox>    
                </div>        
            </AccountTransferBlock>
        </div>
    )
}

export default PGPostPayment;
