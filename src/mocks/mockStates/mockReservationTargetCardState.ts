import { DEFAULT_NAMES } from '@/constants';
import { createCardsByLevelCollection, createPlayer, createTokensCollection, dealCards, generateAristocrats, generateBank, generateDecks, pickCardFromDeck, shuffleDecks } from '@/helpers';
import { CARD_LEVELS, MockState, Store } from '@/types';
import { FIXED_BOARD_CARDS_IDS } from './fixedBoardCards';

export function mockState(): Store {
  const players = DEFAULT_NAMES.map(createPlayer)

  const boardCardsByLevel = createCardsByLevelCollection()
  const decksByLevel = shuffleDecks(generateDecks())

  for(const level of CARD_LEVELS) {
    for(const cardId of FIXED_BOARD_CARDS_IDS[level]) {
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

export const mockReservationTargetCardState: MockState = { mockState }
