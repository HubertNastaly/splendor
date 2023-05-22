// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shuffle(array: any[]) {
  const shuffledArray = [...array]

  for(let i=array.length-1; i>=0; i--) {
    const randomIndex = Math.floor(Math.random() * i)
    ;[shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]]
  }

  return shuffledArray
}
