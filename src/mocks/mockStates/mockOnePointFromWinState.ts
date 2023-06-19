import { DEFAULT_NAMES } from '@/constants';
import { createCardsByLevelCollection, createPlayer, createTokensCollection, dealCards, generateAristocrats, generateBank, generateDecks, pickCardFromDeck, shuffleDecks, transfer } from '@/helpers';
import { BasicColor, CardData, CardLevel, CardsByLevel, Player, Store, Tokens } from '@/types';

const COLLECTED_CARDS_LEVEL: CardLevel = 3
const COLLECTED_CARD_IDS = [77, 80, 81] // 14 points in total

export const MISSING_POINT_CARD_ID = 7
const MISSING_POINT_CARD_LEVEL: CardLevel = 1

export function mockOnePointFromWinState(): Store {
  const players = DEFAULT_NAMES.map(createPlayer)
  const bank = generateBank(players.length)
  const favourizedPlayer = players[0]

  const decksByLevel = shuffleDecks(generateDecks())

  const collectedCards = pickCollectedCards(decksByLevel)
  assignCardsToPlayer(collectedCards, favourizedPlayer)
  
  const boardCardsByLevel = createCardsByLevelCollection()
  const missingPointCard = prepareMissingPointCard(decksByLevel, boardCardsByLevel)

  supplyRequiredTokens(favourizedPlayer, missingPointCard, bank)
  dealCards(decksByLevel, boardCardsByLevel)

  return {
    decksByLevel,
    boardCardsByLevel,
    aristocrats: generateAristocrats(players.length),
    bank,
    players,
    gameState: { type: 'started' },
    currentPlayerIndex: 0,
    purchaseTokens: createTokensCollection()
  }
}

function pickCollectedCards(decksByLevel: CardsByLevel) {
  const modifiedDeck = decksByLevel[COLLECTED_CARDS_LEVEL]
  const collectedCards = COLLECTED_CARD_IDS.map(id => pickCardFromDeck(modifiedDeck, id))
  return collectedCards
}

function prepareMissingPointCard(decksByLevel: CardsByLevel, boardCardsByLevel: CardsByLevel) {
  const missingPointCardDeck = decksByLevel[MISSING_POINT_CARD_LEVEL]
  const missingPointCard = pickCardFromDeck(missingPointCardDeck, MISSING_POINT_CARD_ID)
  boardCardsByLevel[MISSING_POINT_CARD_LEVEL].push(missingPointCard)

  return missingPointCard
}

function assignCardsToPlayer(cards: CardData[], player: Player) {
  cards.forEach(card => player.cards[card.color].push(card))
}

function supplyRequiredTokens(player: Player, card: CardData, bank: Tokens) {
  Object.entries(card.price).forEach(([color, amount]) => {
    transfer(bank, player.tokens, color as BasicColor, amount)
  })
}
