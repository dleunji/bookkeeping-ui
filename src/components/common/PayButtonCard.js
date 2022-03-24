// 결제하기 버튼을 포함한 블록
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import GradientBox from './GradientBox';
import BigButton from './BigButton';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// TODO : PayBlockContainer 의 handleClick 함수에 필요한 기능 추가해서 사용
const PayButtonCard = ({possible, handleClick, handleChange, PGHandleClick}) => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', height: '154.4px', backgroundColor:'#f3f6f9'}}>
      <GradientBox 
          backgroundColor="white"
          width="460px"
          height="120px"
          >
          <div >
            
            <div style={{width :'390px', marginLeft:'20px', marginTop:'5px'}}>
              <Checkbox {...label} onChange={handleChange}/>
              <span>결제내역 확인 및 동의</span>
            </div>          
            
            <div style={{width :'100%', display:'flex', justifyContent:'center'}}>

              {/* <Link to={possible ? '/complete' : '#'} className={possible ? '' : 'disabled'}> */}
                {/* BigButton 의 handleClick 은 onClick 에 전달할 함수를 의미 */}
                <BigButton handleClick={ PGHandleClick ? PGHandleClick : handleClick} title={'결제하기'} backgroundColor='#1976D2' color='white' possible={possible} />        
              {/* </Link> */}
            </div>

          </div>
      </GradientBox>
    </div>
  )
}

export default PayButtonCard
