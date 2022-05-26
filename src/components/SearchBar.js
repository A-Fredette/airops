import styled from 'styled-components'
import { Search } from "../assets/icons"

const SearchInput = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px;
  width: 299px;
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
  }
`

const SearchBar = ({ placeholder }) => {
    return (
        <>

            <SearchInput>
                <div className="search-icon">
                    <Search />
                </div>
                {placeholder}
            </SearchInput>
        </>
    )
}

export { SearchBar }
