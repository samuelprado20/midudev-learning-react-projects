import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `${routeParams.query} search`
  }, [])

  return (
    <h1>You searched: {routeParams.query}</h1>
  )
}
