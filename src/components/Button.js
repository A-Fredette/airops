import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  font-size: ${(props) => props.fontSize
          ? props.fontSize
          : '14px'};
  font-weight: 600;
  border: 1px #ECEDEF solid;
  width: ${(props) => props.width 
          ? props.width
          : '152px'};
  height: 32px;
  background-color: ${props => props.dark
          ? '#000'
          : '#FFF' };
  border-radius: 4px;
  cursor: pointer;
  color: ${props => !props.dark
    ? '#000'
    : '#FFF' };
`

const Button = ({ dark, width, text, icon, fontSize }) => {
    return (
        <StyledButton dark={dark} width={width} fontSize={fontSize}>
            {text}
            {icon}
        </StyledButton>
    )
}

export { Button }
