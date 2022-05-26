import styled from "styled-components"
import { Order, Timer, Menu } from '../../assets/icons'
import { Light } from "../../common/typography/Light"
import Status from '../../components/Status'
import { Button } from "../../components/Button"
import { H3 } from "../../common/typography/H3"

const RowContainer = styled.div`
  padding: 12px 16px;
  box-sizing: border-box;
  gap: 24px;
  width: 1124px;
  height: 62px;
  background: #FFFFFF;
  border: 1px solid #ECEDEF;
  border-radius: 6px;
  margin-left: 48px;
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: 10px 300px 350px 100px 40px 100px 60px;
  grid-template-rows: auto;
`

const TeamContainer = styled.div`
  display: inline-flex;
  flex-direction: column;

  h4 {
    margin: 5px 0 0;
  }
`

const TimeContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  h4 {
    margin: 2px 0 0 5px;
  } 
`

const ProfilePic = styled.div`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  content: url(${props => props.avatar});
`

const IconContainer = styled.div`
  margin-top: 11px;
`

const StatusContainer = styled.div`
  margin-top: 6px;
  display: inline-flex;
  justify-content: center;
`

const QueryRow = ({ name, type, time, status, avatar }) => {

    const dateFromCreation = () => {
        const created = new Date(time)
        const today = new Date()
        const timeDiff = today.getTime() - created.getTime()

        return Math.round(timeDiff / (1000 * 3600 * 24))
    }

    return (
        <RowContainer>
            <IconContainer>
                <Order />
            </IconContainer>
            <TeamContainer>
                <H3>{name}</H3>
                <Light>{type ? type : "Query"}</Light>
            </TeamContainer>
            <TimeContainer>
                <Timer />
                <Light>
                   Created { dateFromCreation() } days from today
                </Light>
            </TimeContainer>
            <StatusContainer>
                <Status status={status}>
                </Status>
            </StatusContainer>
            <ProfilePic avatar={avatar} />
            <Button dark={false} width={"100px"} text="Use query"/>
            <Button dark={false} icon={ <Menu/> } width={"36px"} />
        </RowContainer>
    )
}

export default QueryRow
