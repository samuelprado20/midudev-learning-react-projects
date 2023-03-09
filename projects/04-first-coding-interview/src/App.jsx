import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDOPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDOPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  // Fetching the cat fact
  useEffect(() => {
    fetch(CAT_ENDOPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Getting an imange every time there's a new fact
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImgUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Kittens app</h1>

      {fact && <p>{fact}</p>}
      {imgUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imgUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export { App }
