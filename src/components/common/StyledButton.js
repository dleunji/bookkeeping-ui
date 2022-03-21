import styled from 'styled-components'

const StyledButtonBlock = styled.button`
  background-color: ${props => props.backgroundColor || '#1976D2'};
  border: none;
  font-size: 20px;
  color: ${props => props.color || '#323232'};
  border-radius: 6px;
  font-weight: 700;
  width: 180px;
  height: 60px;
  cursor: pointer;
`

const StyledButton = ({ children, ...rest }) => {
  return <StyledButtonBlock {...rest}>{children}</StyledButtonBlock>
}

export default StyledButton
