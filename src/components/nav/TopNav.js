import styled from "styled-components"
import { SearchBar } from "../SearchBar"
import { Avatar } from "../../assets/icons"
import { Light } from "../../common/typography/Light"
import { StyledKey } from "../Key"

//TODO: Fix margin around Avatar
const TopNavContainer = styled.div`
  border-bottom: 1px #ECEDEF solid;
  width: calc(100% - 221px);
  height: 56px;
  position: absolute;   
  top: 0;
  left: 221px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 48px;
  
  img {
    width: 32px;
    height: 32px;
    margin: 12px;
  }
`

const TopNav = () => {
    return (
        <TopNavContainer>
            <SearchBar placeholder={
                <Light>
                    Press <StyledKey>⌘</StyledKey> <StyledKey>K</StyledKey> to search
                </Light>
            }/>
            <img src={Avatar} alt="Avatar" />
        </TopNavContainer>
    )
}

export default TopNav
