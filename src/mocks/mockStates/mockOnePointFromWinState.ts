import { DEFAULT_NAMES } from "@/constants";
import { createCardsByLevelCollection, createPlayer, createTokensCollection, dealCards, generateAristocrats, generateBank, generateDecks, shuffleDecks, transfer } from "@/helpers";
import { BasicColor, CardData, CardLevel, CardsByLevel, Player, Store, Tokens } from "@/types";

const COLLECTED_CARDS_LEVEL: CardLevel = 3
const COLLECTED_CARD_IDS = [77, 80, 81] // 14 points in total

const MISSING_POINT_CARD_ID = 7
const MISSING_POINT_CARD_LEVEL: CardLevel = 1

export function mockOnePointFromWinState(): Store {
  const playersNumber = DEFAULT_NAMES.length
  const bank = generateBank(playersNumber)
  const players = DEFAULT_NAMES.map(createPlayer)
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
    aristocrats: generateAristocrats(playersNumber),
    bank,
    players,
    gameState: { type: 'started' },
    currentPlayerIndex: 0,
    purchaseTokens: createTokensCollection()
  }
}

function pickCardFromDeck(deck: CardData[], cardId: number) {
  const pickedCardIndex = deck.findIndex(({ id }) => id === cardId)
  if(pickedCardIndex === -1) {
    throw new Error('Card with given id not found in deck')
  }
  const pickedCard = deck[pickedCardIndex]
  deck.splice(pickedCardIndex, 1)

  return pickedCard
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
