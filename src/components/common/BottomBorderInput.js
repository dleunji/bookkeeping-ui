import styled from 'styled-components';

const BottomBorderInputBlock = styled.input`
  border-left: 0;
  border-right: 0;
  border-top: 0;
  outline: none;
  border-bottom: 1px solid #c5c5c5;
  width: ${props => props.width || '418px'};
  height: ${props => props.height || '30px'};
  font-size: ${props => props.fontSize || '18px'};
  color: #323232;
  font-family: ${props => props.fontFamily || 'AppleSDGothicNeoM'};
  &::placeholder {
    color: #c5c5c5;
  }
`;

const BottomBorderInput = ({
  value,
  fontFamily,
  placeholder,
  width,
  height,
  fontSize,
  name,
  onChange,
}) => {
  return (
    <BottomBorderInputBlock
      placeholder={placeholder}
      width={width}
      height={height}
      value={value}
      fontFamily={fontFamily}
      fontSize={fontSize}
      name={name}
      onChange={onChange}
    />
  );
};

export default BottomBorderInput;
