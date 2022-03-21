import GradientBox from "../common/GradientBox";
import styled from "styled-components";

const ErrorBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color:  #f3f6f9;
    font-family: 'AppleSDGothicNeoM';
    color: #323232;

    .error-title {
        font-size: 24px;
        display : flex;
        justify-content: center;
        font-family: 'AppleSDGothicNeoB';
        font-weight: bold;
        margin: 20px;
    }
    .error-code {
        font-size : 20px;
        display : flex;
        justify-content: space-between;
        margin: 20px;
    }
    .error-message {
        font-size : 18px;
        display : flex;
        margin: 20px;
    }
`

const ChargeError = ({code, title,message,handleClose}) => {
    return (
        <ErrorBlock>
            <GradientBox
                backgroundColor="white"
                width="460px"
                height="465px"
            >
                <div>
                    <div>
                        <div style={{textAlign:'center', margin:'20px'}}>
                            <img src={`${process.env.PUBLIC_URL}/images/error.png`} width='30vh' height='30vh'/>    
                        </div>
                        <div className="error-title">   
                            <span >
                                {title}
                            </span>
                        </div>
                        <hr style={{margin:'20px'}}/>
                        <div style={{marginTop:'50px'}}>
                            <div className="error-code">
                                <span>오류코드</span>
                                <span>{code}</span>
                            </div>
                            <span className="error-message">
                                {message}
                            </span>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
                    <button style={{fontSize:'24px', width:'412px', height:'58px', fontFamily:'AppleSDGothicNeoM'}} onClick={handleClose}>닫기</button>
                </div>
            </GradientBox>
        </ErrorBlock>
    )
}

export default ChargeError;