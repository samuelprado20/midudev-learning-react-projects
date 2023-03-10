const CAT_ENDOPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

async function getRandomFact () {
  const res = await fetch(CAT_ENDOPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export { getRandomFact }
