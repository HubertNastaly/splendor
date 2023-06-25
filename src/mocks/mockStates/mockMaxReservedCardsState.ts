import { CardData, MockState, Store } from '@/types';
import { CardLocation, mockReservationTargetCardState } from '.';
import { pickCardFromDeck, transfer } from '@/helpers';

const RESERVED_CARD_IDS: CardLocation[] = [
  { level: 1, id: 1 },
  { level: 2, id: 41},
  { level: 3, id: 71}
]

function mockState(): Store {
  const state = mockReservationTargetCardState.mockState()
  const { players, currentPlayerIndex, decksByLevel, bank } = state

  const currentPlayer = players[currentPlayerIndex]

  const reservedCards: CardData[] = []
  for(const { level, id } of RESERVED_CARD_IDS) {
    reservedCards.push(pickCardFromDeck(decksByLevel[level], id))
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

export const mockMaxReservedCardsState: MockState & { reservedCardsIds: CardLocation[] } = {
  mockState,
  reservedCardsIds: RESERVED_CARD_IDS
}
