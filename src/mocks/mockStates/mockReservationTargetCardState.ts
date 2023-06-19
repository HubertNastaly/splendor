import { DEFAULT_NAMES } from '@/constants';
import { createCardsByLevelCollection, createPlayer, createTokensCollection, dealCards, generateAristocrats, generateBank, generateDecks, pickCardFromDeck, shuffleDecks } from '@/helpers';
import { CardLevel, Store } from '@/types';

export const RESERVATION_TARGET_CARD_ID = 0
const RESERVATION_TARGET_CARD_LEVEL: CardLevel = 1

export function mockReservationTargetCardState(): Store {
  const players = DEFAULT_NAMES.map(createPlayer)

  const boardCardsByLevel = createCardsByLevelCollection()
  const decksByLevel = shuffleDecks(generateDecks())

  const targetCard = pickCardFromDeck(decksByLevel[RESERVATION_TARGET_CARD_LEVEL], RESERVATION_TARGET_CARD_ID)
  boardCardsByLevel[RESERVATION_TARGET_CARD_LEVEL].push(targetCard)

  dealCards(decksByLevel, boardCardsByLevel)

  return {
    players,
    bank: generateBank(players.length),
    currentPlayerIndex: 0,
    decksByLevel,
    boardCardsByLevel,
    aristocrats: generateAristocrats(players.length),
    purchaseTokens: createTokensCollection(),
    gameState: { type: 'started' }
  }
}
