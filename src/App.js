import styled from "styled-components"
import SideNav from "./components/nav/SideNav"
import Queries from './views/Queries/Queries'
import TopNav from "./components/nav/TopNav"

const Main = styled.div`
  position: absolute;
  left: 221px;
  top: 57px;
  width: calc(100% - 221px);
  background-color: #F5F5F5;
  height: calc(100% - 57px);
`

function App() {
  return (
    <>
        <SideNav/>
        <TopNav />
        <Main>
            <Queries />
        </Main>
    </>
  )
}

export default App
