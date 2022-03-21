import styled from 'styled-components'
import StyledButton from './StyledButton'
import ConditionalStyledButton from './ConditionalStyledButton'
const PairButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

const PairButtons = ({ possible }) => {
  return (
    <PairButtonBlock>
      <StyledButton backgroundColor='#C5C5C5' color='#323232'>
        취소
      </StyledButton>
      <ConditionalStyledButton backgroundColor='#1976D2' color='white' possible={possible}>
        확인
      </ConditionalStyledButton>
    </PairButtonBlock>
  )
}

export default PairButtons
