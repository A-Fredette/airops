import React, {useId} from 'react'
import styled from "styled-components"
import { H1 } from '../../common/typography/H1'
import { Button } from "../../components/Button"
import { Filter } from '../../assets/icons'

const HeaderContainer = styled.div`
  border-bottom: 1px #ECEDEF solid;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 104px;
  width: 100%;
  overflow-x: hidden;
  margin-bottom: 24px;
`

const FilterContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  overflow-x: hidden;
  align-items: center;
  margin-right: 120px;
`

const SearchIn = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px;
  width: 200px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #ecedef;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px;
  
  .search-icon {
    margin-top: 2px;
`

const InputGroup = styled.div`
  position: relative;
`;

const QueryHeader = ({ onChange }) => {
    const id = useId()

    return (
        <HeaderContainer>
            <H1 style={{ marginLeft: '48px' }}>Queries</H1>
            <FilterContainer>
                <InputGroup>
                    <SearchIn id={id} placeholder={"Filter by name"} onChange={onChange}/>
                </InputGroup>
                <Button
                    dark={true}
                    icon={<Filter />}
                    text="Create new query"
                    width={"150px"}
                    fontSize={'13px'}
                />
            </FilterContainer>
        </HeaderContainer>

    )
}

export default QueryHeader
