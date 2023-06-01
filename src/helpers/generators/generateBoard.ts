import allCards from '@/data/cards.json'
import { CardData, CardLevel, CardsByLevel } from '@/types';
import { createCardsByLevelCollection } from '@/helpers';
import { CARDS_PER_LEVEL } from '@/constants';
import { shuffle } from '@/utils';

export function generateBoard(): { decksByLevel: CardsByLevel, boardCardsByLevel: CardsByLevel } {
  const decksByLevel = generateDecks()
  const shuffledDecks = shuffleDecks(decksByLevel)
  const [decksAfterDeal, boardCards] = dealCards(shuffledDecks)

  return {
    decksByLevel: decksAfterDeal,
    boardCardsByLevel: boardCards
  }
}

function generateDecks(): CardsByLevel {
  const decksByLevel: CardsByLevel = createCardsByLevelCollection()
  ;(allCards as CardData[]).forEach(card => decksByLevel[card.level].push(card))

  return decksByLevel
}

function dealCards(decks: CardsByLevel): [decks: CardsByLevel, boardCards: CardsByLevel] {
  const boardCards = createCardsByLevelCollection()

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

function shuffleDecks(decks: CardsByLevel) {
  for(const key in decks) {
    const level = parseInt(key) as CardLevel
    decks[level] = shuffle(decks[level])
  }

  return decks
}
