import styled from "styled-components"
import { H3 } from "../common/typography/H3"

const StatusStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  width: ${props => props.status === 'active'
      ? '35px'
      : '50px'};
  height: 22px;
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background-color: ${props => props.status === 'active'
    ? '#E7FDE8'
    : '#DDDFE3'};
  
  h3 {
    color: ${props => props.status === 'active'
        ? '#035434'
        : '#4B4D58' };
  }
`

const Status = ({ status }) => {
    return (
        <StatusStyle status={status}>
            <H3>{status}</H3>
        </StatusStyle>
    )
}

export default Status
