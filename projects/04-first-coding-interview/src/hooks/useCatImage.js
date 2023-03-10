import { useState, useEffect } from 'react'
import { getImage } from '../services/catImages'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function useCatImage ({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  // Getting an imange every time there's a new fact
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    getImage(firstWord).then(newImgUrl => setImgUrl(newImgUrl))
  }, [fact])

  return { imgUrl: `${CAT_PREFIX_IMAGE_URL}${imgUrl}` }
}

export { useCatImage }
