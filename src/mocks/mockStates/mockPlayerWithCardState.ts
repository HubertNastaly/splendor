import { MockState, Store } from '@/types';
import { mockCardToBuyState } from './mockCardToBuyState';
import { CardLocation } from '.';
import { pickCardFromDeck } from '@/helpers';

const PLAYER_CARD: CardLocation = {
  level: 1,
  id: 26,
}

function mockState(): Store {
  const state = mockCardToBuyState.mockState()
  const { decksByLevel, players, currentPlayerIndex } = state
  const currentPlayer = players[currentPlayerIndex]

  const playerCard = pickCardFromDeck(decksByLevel[PLAYER_CARD.level], PLAYER_CARD.id)
  currentPlayer.cards[playerCard.color].push(playerCard)

  return { ...state, players, decksByLevel }
}

export const mockPlayerWithCardState: MockState & { playerCardId: number } = {
  mockState,
  playerCardId: PLAYER_CARD.id
}
