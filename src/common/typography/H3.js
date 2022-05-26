import styled from 'styled-components'

const H3 = styled.h3`
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.color ? props.color : '#00000'};
  margin: 3px 0;
`

export { H3 }
