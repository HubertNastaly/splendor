import allAristocrats from '@/data/aristocrats.json'
import { DEFAULT_NAMES } from '@/constants';
import { createPlayer, createTokensCollection, generateBank, generateBoard } from '@/helpers';
import { Aristocrat, BASIC_COLORS, CARD_LEVELS, CardData, Store } from '@/types';
import { shuffle } from '@/utils';

// 0: 3 blues, 3 greens, 3 reds
// 5: 3 blues, 3 greens, 3 whites
export const COLLECTABLE_ARISTOCRAT_IDS = [0, 5]

// 2: 4 whites, 4 blacks
export const UNCOLLECTABLE_ARISTOCRAT_ID = 2

export const mockCollectableAristocratState = (): Store => {
  const { decksByLevel, boardCardsByLevel } = generateBoard()
  const players = DEFAULT_NAMES.map(createPlayer)
  const aristocrats = generateAristocrats(players.length + 1)
  const favourizedPlayer = players[0]

  for(const requiredColor of BASIC_COLORS) {
    const cardsInColor: CardData[] = []

    for(const level of CARD_LEVELS) {
      const deck = decksByLevel[level]
      const cardIndex = deck.findIndex(({ color }) => color === requiredColor)
      cardsInColor.push(deck[cardIndex])
      deck.splice(cardIndex, 1)
    }

    favourizedPlayer.cards[requiredColor].push(...cardsInColor)
  }

  favourizedPlayer.movePhase = { type: 'CARD_BOUGHT' }

  return {
    decksByLevel,
    boardCardsByLevel,
    aristocrats,
    bank: generateBank(players.length),
    players,
    gameState: { type: 'started' },
    currentPlayerIndex: 0,
    purchaseTokens: createTokensCollection()
  }
}

function generateAristocrats(aristocratsNumber: number) {
  const { collectableAristocrats, otherAristocrats } = pickCollectableAristocrats(allAristocrats as Aristocrat[])
  const uncollectableAristocrat = pickAristocratById(otherAristocrats, UNCOLLECTABLE_ARISTOCRAT_ID)
  const fixedAristocrats = [...collectableAristocrats, uncollectableAristocrat]
  const shuffledAristocrats = shuffle(otherAristocrats)
  return [...fixedAristocrats, ...shuffledAristocrats.slice(0, aristocratsNumber - fixedAristocrats.length)]
}

function pickCollectableAristocrats(aristocrats: Aristocrat[]): { collectableAristocrats: Aristocrat[], otherAristocrats: Aristocrat [] } {
  const collectableAristocrats: Aristocrat[] = []
  const otherAristocrats: Aristocrat[] = [...aristocrats]

  for(const collectableAristocratId of COLLECTABLE_ARISTOCRAT_IDS) {
    const collectableAristocrat = pickAristocratById(aristocrats, collectableAristocratId)
    collectableAristocrats.push(collectableAristocrat)
  }

  return { collectableAristocrats, otherAristocrats }
}

function pickAristocratById(aristocrats: Aristocrat[], aristocratId: number) {
  const collectableAristocratIndex = aristocrats.findIndex(({ id }) => id === aristocratId)
  const collectableAristocrat = aristocrats[collectableAristocratIndex]
  aristocrats.splice(collectableAristocratIndex, 1)
  return collectableAristocrat
}
