import { CardData } from '@/types'

export function pickCardFromDeck(deck: CardData[], cardId: number) {
  const pickedCardIndex = deck.findIndex(({ id }) => id === cardId)
  if(pickedCardIndex === -1) {
    throw new Error('Card with given id not found in deck')
  }
  const pickedCard = deck[pickedCardIndex]
  deck.splice(pickedCardIndex, 1)

  return pickedCard
}
