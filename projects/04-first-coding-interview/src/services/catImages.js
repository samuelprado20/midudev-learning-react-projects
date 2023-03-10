function getImage (firstWord) {
  return fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      return url
    })
}

export { getImage }
