import { CardData, CardsCollection, Level, Store } from '@/types';
import allCards from '@/data/cards.json'
import { shuffle, createCardsCollection } from '@/utils';
import { CARDS_PER_LEVEL } from '@/constants';

export function generateBoard(state: Store): Store {
  const decksByLevel: CardsCollection = createCardsCollection()
  ;(allCards as CardData[]).forEach(card => decksByLevel[card.level].push(card))

  const shuffledDecks = shuffleDecks(decksByLevel)
  const [decksAfterDeal, boardCards] = dealCards(shuffledDecks)

  return {
    ...state,
    decksByLevel: decksAfterDeal,
    boardCardsByLevel: boardCards
  }
}

function shuffleDecks(decks: CardsCollection) {
  for(const key in decks) {
    const level = parseInt(key) as Level
    decks[level] = shuffle(decks[level])
  }

  return decks
}

function dealCards(decks: CardsCollection) {
  const boardCards = createCardsCollection()

  for(const key in decks) {
    const level = parseInt(key) as Level
    const deck = decks[level]

    const newBoardCards = deck.slice(0, CARDS_PER_LEVEL)
    const newDeck = deck.slice(CARDS_PER_LEVEL)
    
    decks[level] = newDeck
    boardCards[level] = newBoardCards
  }

  return [decks, boardCards]
}
