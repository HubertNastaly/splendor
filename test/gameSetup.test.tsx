import { getDefaultState } from '@/store/defaultState'
import { clickButton, expectTokensAmount, fillPlayerNames, renderGame } from './utils'
import { BASIC_COLORS } from '@/types'
import { screen } from '@testing-library/react'
import { testIds } from '@/constants'

describe('game setup', () => {
  const allPlayersNames = ['Adam', 'Bob', 'Cindy', 'David']
  const playersNumbers = [2, 3, 4] as const
  type PlayersNumber = typeof playersNumbers[number]

  const state = getDefaultState()
  beforeEach(() => renderGame(state))

  function testForEachPlayer(callback: (playersNumber: PlayersNumber) => void) {
    for(const playersNumber of playersNumbers) {
      test(`${playersNumber} players`, () => {
        callback(playersNumber)
      })
    }
  }

  function startGame(playersNumber: PlayersNumber) {
    const playersNames = allPlayersNames.slice(0, playersNumber)
    fillPlayerNames(playersNames)
    clickButton('Play')
  }

  describe('sets right tokens number for:', () => {
    const expectedGoldAmount = 5
    const expectedTokensAmount: Record<PlayersNumber, number> = {
      2: 4,
      3: 5,
      4: 7
    }

    testForEachPlayer((playersNumber) => {
      startGame(playersNumber)

      for(const color of BASIC_COLORS) {
        expectTokensAmount('bank', color, expectedTokensAmount[playersNumber])
      }
      expectTokensAmount('bank', 'gold', expectedGoldAmount)
    })
  })

  describe('sets right aristocrats number for:', () => {
    const expectedAristocrats: Record<PlayersNumber, number> = {
      2: 3,
      3: 4,
      4: 5
    }

    testForEachPlayer((playersNumber) => {
      startGame(playersNumber)
      const aristocrats = screen.getByTestId(testIds.boardAristocrats)
      expect(aristocrats.children.length).toEqual(expectedAristocrats[playersNumber])
    })
  })
})
