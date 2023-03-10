import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Kittens app</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export { App }
