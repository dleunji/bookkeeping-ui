import styled from 'styled-components'
import ConditionalStyledButton from "./ConditionalStyledButton";
import StyledButton from './StyledButton';

const BigButtonBlock = styled(ConditionalStyledButton)`
    && {
        width: 390px;
        height: 50px;
    }
`

const BigButton = ({possible, title, handleClick, ...rest}) => {
    return (
        <BigButtonBlock {...rest} possible={possible} onClick={handleClick} >
            {title}
        </BigButtonBlock>
    )
}

export default BigButton;