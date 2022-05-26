import { useEffect, useState } from "react";

const initialState = {
  isFetching: false,
  data: []
}

const fetchingState = {
  isFetching: true,
  data: []
}

export default () => {
  const [queries, setQueries] = useState(initialState)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setQueries(fetchingState)
        const url = 'https://628d3bae3df57e983ede34fd.mockapi.io/queries'

        const response = await fetch(url, {
          method: 'GET'
        })

        const res = await response.json()

        setQueries({
          isFetching: false,
          data: res
        })
      } catch (err) {
        setQueries(initialState)
      }
    }
    fetchUsers()
  }, [])

  return { queries }
}
