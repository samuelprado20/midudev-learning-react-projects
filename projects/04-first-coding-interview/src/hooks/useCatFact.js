import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Fetching the cat fact
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

export { useCatFact }
