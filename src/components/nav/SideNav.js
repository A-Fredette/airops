import React from 'react'
import styled from 'styled-components'
import {
  AirOps,
  Reload,
  Global,
  Order,
  Settings,
  Exit
} from '../../assets/icons'
import { H3 } from '../../common/typography/H3'

const NavContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  background: #ffffff;
  width: 220px;
  border-right: 1px #ECEDEF solid;
`

const LogoContainer = styled.div`
  padding: 12px 0 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-bottom: 10.67px;
  
  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
`

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17.33px;
`

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 17.33px;
  margin-top: 17.33px;
  
  :last-of-type {
    margin-bottom: 17.33px;
  }
  
  
  h3 {
    margin-left: 10.67px;
  }

  :hover {
    cursor: pointer;
    color: darkgray;
  }
`

const SettingsFooter = styled.div`
  border-top: 1px #ecedef solid;
  position: absolute;
  bottom: 0;
  width: 100%;
`

const SideNav = () => {

  return (
      <NavContainer>
        <LogoContainer>
          <img src={AirOps} alt="AirOps Logo"/>
          <H3>AirOps</H3>
        </LogoContainer>
        <NavItems>
          <NavItem>
            <Reload/>
            <H3>Syncs</H3>
          </NavItem>
          <NavItem>
            <Global/>
            <H3>Sources</H3>
          </NavItem>
          <NavItem>
            <Order/>
            <H3>Queries</H3>
          </NavItem>
        </NavItems>
        <SettingsFooter>
          <NavItem>
            <Settings/>
            <H3>Settings</H3>
          </NavItem>
          <NavItem>
            <Exit/>
            <H3>Logout</H3>
          </NavItem>
        </SettingsFooter>
      </NavContainer>
  )
}

export default SideNav
