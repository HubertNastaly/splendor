import allAristocrats from '@/data/aristocrats.json'
import { DEFAULT_NAMES } from '@/constants';
import { createPlayer, createTokensCollection, generateBank, generateBoard } from '@/helpers';
import { Aristocrat, BasicColor, CARD_LEVELS, CardData, Store } from '@/types';
import { shuffle } from '@/utils';

const COLLECTABLE_ARISTOCRAT_ID = 0 // 3 blues, 3 greens, 3 reds
const REQUIRED_COLORS = ['blue', 'green', 'red'] as BasicColor[]

export const mockCollectableAristocratState = (): Store => {
  const { decksByLevel, boardCardsByLevel } = generateBoard()
  const players = DEFAULT_NAMES.map(createPlayer)
  const aristocrats = generateAristocrats(players.length + 1)
  const favourizedPlayer = players[0]

  for(const requiredColor of REQUIRED_COLORS) {
    const cardsInColor: CardData[] = []

    for(const level of CARD_LEVELS) {
      const deck = decksByLevel[level]
      const cardIndex = deck.findIndex(({ color }) => color === requiredColor)
      cardsInColor.push(deck[cardIndex])
      deck.splice(cardIndex, 1)
    }

    favourizedPlayer.cards[requiredColor].push(...cardsInColor)
  }

  return {
    decksByLevel,
    boardCardsByLevel,
    aristocrats,
    bank: generateBank(players.length),
    players,
    gameState: 'started',
    currentPlayerIndex: 0,
    purchaseTokens: createTokensCollection()
  }
}

function generateAristocrats(aristocratsNumber: number) {
  const shuffledAristocrats = shuffle(allAristocrats as Aristocrat[])
  const collectableAristocratIdx = shuffledAristocrats.findIndex(({ id }) => id === COLLECTABLE_ARISTOCRAT_ID)
  const collectableAristocrat = shuffledAristocrats[collectableAristocratIdx]
  shuffledAristocrats.splice(collectableAristocratIdx, 1)
  return [collectableAristocrat, ...shuffledAristocrats.slice(0, aristocratsNumber - 1)]
}
