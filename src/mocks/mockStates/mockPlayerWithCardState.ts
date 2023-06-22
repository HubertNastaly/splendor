import { Store } from '@/types';
import { mockCardToBuyState } from './mockCardToBuyState';
import { CardLocation } from '.';
import { pickCardFromDeck } from '@/helpers';

export const PLAYER_CARD: CardLocation = {
  level: 1,
  id: 26,
}

export function mockPlayerWithCardState(): Store {
  const state = mockCardToBuyState()
  const { decksByLevel, players, currentPlayerIndex } = state
  const currentPlayer = players[currentPlayerIndex]

  const playerCard = pickCardFromDeck(decksByLevel[PLAYER_CARD.level], PLAYER_CARD.id)
  currentPlayer.cards[playerCard.color].push(playerCard)

  return { ...state, players, decksByLevel }
}
