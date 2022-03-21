import StyledButton from './StyledButton'
import styled from 'styled-components'
const ConditionalStyledButton = styled(StyledButton)`
  && {
    cursor: ${props => (props.possible ? 'pointer' : 'default')};
    opacity: ${props => (props.possible ? '100%' : '60%')};
  }
`

export default ConditionalStyledButton
