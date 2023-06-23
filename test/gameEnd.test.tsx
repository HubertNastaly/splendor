import { screen } from '@testing-library/react'
import { mockOnePointFromWinState } from '@/mocks'
import { buyCard, expectCurrentPlayer, finishTurn, pickTokens, renderGame } from './utils'

describe('game end', () => {
  const { mockState, missingPointCardId } = mockOnePointFromWinState
  const state = mockState()
  const playersNames = state.players.map(({ name }) => name)

  beforeEach(() => renderGame(state))

  test('game has one more round after points threshold is reached', () => {
    expectCurrentPlayer(playersNames[0])
    buyCard(missingPointCardId)
    finishTurn()

    playersNames.slice(1).forEach(() => {
      pickTokens(['white', 'red', 'black'])
      finishTurn()
    })

    expect(screen.getByText('Game ended')).toBeVisible()
  })
})
