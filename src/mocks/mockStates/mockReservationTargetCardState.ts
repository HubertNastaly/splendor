import { DEFAULT_NAMES } from '@/constants';
import { createCardsByLevelCollection, createPlayer, createTokensCollection, dealCards, generateAristocrats, generateBank, generateDecks, pickCardFromDeck, shuffleDecks } from '@/helpers';
import { CARD_LEVELS, CardLevel, Store } from '@/types';

export const BOARD_CARDS_IDS: Record<CardLevel, number[]> = {
  1: [0, 8, 16, 24],
  2: [40, 46, 52, 58],
  3: [70, 74, 78, 82]
} 

export function mockReservationTargetCardState(): Store {
  const players = DEFAULT_NAMES.map(createPlayer)

  const boardCardsByLevel = createCardsByLevelCollection()
  const decksByLevel = shuffleDecks(generateDecks())

  for(const level of CARD_LEVELS) {
    for(const cardId of BOARD_CARDS_IDS[level]) {
      const card = pickCardFromDeck(decksByLevel[level], cardId)
      boardCardsByLevel[level].push(card)
    }
  }

  dealCards(decksByLevel, boardCardsByLevel)

  return {
    players,
    bank: generateBank(players.length),
    currentPlayerIndex: 0,
    decksByLevel,
    boardCardsByLevel,
    aristocrats: generateAristocrats(players.length),
    purchaseTokens: createTokensCollection(),
    gameState: 'started'
  }
}
