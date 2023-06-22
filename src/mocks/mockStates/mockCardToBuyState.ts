import { DEFAULT_NAMES } from '@/constants';
import {
  createCardsByLevelCollection,
  createTokensCollection,
  dealCards,
  generateAristocrats,
  generateBank,
  generateDecks,
  generatePlayers,
  pickCardFromDeck,
  shuffleDecks,
  transfer
} from '@/helpers';
import { BASIC_COLORS, CardData, Store } from '@/types';
import { CardLocation, FIXED_BOARD_CARDS_IDS } from './fixedBoardCards';

export const PURCHASE_TARGET_CARD: CardLocation = {
  level: 2,
  id: FIXED_BOARD_CARDS_IDS[2][1]
}

export function mockCardToBuyState(): Store {
  const decksByLevel = shuffleDecks(generateDecks())
  const boardCardsByLevel = createCardsByLevelCollection()
  const players = generatePlayers(DEFAULT_NAMES)
  const bank = generateBank(players.length)
  const currentPlayerIndex = 0
  const currentPlayer = players[currentPlayerIndex]

  const purchaseTargetCard: CardData = pickCardFromDeck(decksByLevel[PURCHASE_TARGET_CARD.level], PURCHASE_TARGET_CARD.id)
  boardCardsByLevel[PURCHASE_TARGET_CARD.level].push(purchaseTargetCard)

  dealCards(decksByLevel, boardCardsByLevel)

  for(const color of BASIC_COLORS) {
    transfer(bank, currentPlayer.tokens, color, purchaseTargetCard.price[color])
  }

  transfer(bank, currentPlayer.tokens, 'gold', 1)

  return {
    aristocrats: generateAristocrats(players.length),
    decksByLevel,
    boardCardsByLevel,
    players,
    currentPlayerIndex,
    bank,
    purchaseTokens: createTokensCollection(),
    gameState: 'started'
  }
}
