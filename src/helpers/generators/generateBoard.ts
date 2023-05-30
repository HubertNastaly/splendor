import allCards from '@/data/cards.json'
import { CardData, CardLevel, CardsCollection } from '@/types';
import { createCardsCollection } from '@/helpers';
import { CARDS_PER_LEVEL } from '@/constants';
import { shuffle } from '@/utils';

export function generateBoard(): { decksByLevel: CardsCollection, boardCardsByLevel: CardsCollection } {
  const decksByLevel = generateDecks()
  const shuffledDecks = shuffleDecks(decksByLevel)
  const [decksAfterDeal, boardCards] = dealCards(shuffledDecks)

  return {
    decksByLevel: decksAfterDeal,
    boardCardsByLevel: boardCards
  }
}

function generateDecks(): CardsCollection {
  const decksByLevel: CardsCollection = createCardsCollection()
  ;(allCards as CardData[]).forEach(card => decksByLevel[card.level].push(card))

  return decksByLevel
}

function dealCards(decks: CardsCollection): [decks: CardsCollection, boardCards: CardsCollection] {
  const boardCards = createCardsCollection()

  for(const key in decks) {
    const level = parseInt(key) as CardLevel
    const deck = decks[level]

    const newBoardCards = deck.slice(0, CARDS_PER_LEVEL)
    const newDeck = deck.slice(CARDS_PER_LEVEL)
    
    decks[level] = newDeck
    boardCards[level] = newBoardCards
  }

  return [decks, boardCards]
}

function shuffleDecks(decks: CardsCollection) {
  for(const key in decks) {
    const level = parseInt(key) as CardLevel
    decks[level] = shuffle(decks[level])
  }

  return decks
}
