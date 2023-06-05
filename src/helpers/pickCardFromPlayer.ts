import { CardData } from '@/types';

export function pickCardFromPlayer(reservedCards: CardData[], pickedCard: CardData) {
  const pickedCardIndex = reservedCards.findIndex(card => card.id === pickedCard.id)
  reservedCards.splice(pickedCardIndex, 1)
}
