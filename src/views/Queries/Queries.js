import { useEffect, useId, useState } from 'react'
import useFetchQueries from './useFetchQueries'
import { Spinner } from '../../components/Spinner'
import QueryHeader from "./Header"
import QueryRow from "./QueryRow"

const Queries = () => {
    const [filterText, setFilterText] = useState(null)
    const id = useId()
    const { queries } = useFetchQueries()

    const changeHandler = e => {
        setFilterText(e.target.value)
    }

    useEffect( () => {

    }, [filterText])

    const QueryList = () => {
        let entries = queries.data

        if (filterText) {
           entries = entries.filter(e => e.name.includes(filterText))
        }

        return entries.map( (q, index) =>
             <QueryRow
                 key={id+index}
                 name={q.name}
                 status={q.status}
                 avatar={q.owner}
                 time={q.created_at}
             /> )
        }

    return (
        <>
            <QueryHeader onChange={changeHandler}/>
            {queries.isFetching
                ? <Spinner />
                : QueryList()
            }
        </>
    )
}

export default Queries
