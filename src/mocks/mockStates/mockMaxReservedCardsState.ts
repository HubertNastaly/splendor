import { CardData, CardLevel, Store } from '@/types';
import { mockReservationTargetCardState } from '.';
import { pickCardFromDeck, transfer } from '@/helpers';

const RESERVED_CARD_IDS: [level: CardLevel, cardId: number][] = [[1, 1], [2, 41], [3, 71]]

export function mockMaxReservedCardsState(): Store {
  const state = mockReservationTargetCardState()
  const { players, currentPlayerIndex, decksByLevel, bank } = state

  const currentPlayer = players[currentPlayerIndex]

  const reservedCards: CardData[] = []
  for(const [level, cardId] of RESERVED_CARD_IDS) {
    reservedCards.push(pickCardFromDeck(decksByLevel[level], cardId))
  }

  currentPlayer.reservedCards = reservedCards

  transfer(bank, currentPlayer.tokens, 'gold', RESERVED_CARD_IDS.length)

  return {
    ...state,
    players,
    bank,
    decksByLevel
  }
}
