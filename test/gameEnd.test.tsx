import { MISSING_POINT_CARD_ID, mockOnePointFromWinState } from '@/mocks'
import { toHistory } from '@/utils'
import { buyCard, expectCurrentPlayer, finishTurn, pickTokens, renderGame } from './utils'
import { screen } from '@testing-library/react'

describe('game end', () => {
  const state = toHistory(mockOnePointFromWinState())
  const { present: { state: { players }}} = state
  const playersNames = players.map(({ name }) => name)

  beforeEach(() => renderGame(state))

  test('game has one more round after points threshold is reached', () => {
    expectCurrentPlayer(playersNames[0])
    buyCard(MISSING_POINT_CARD_ID)
    finishTurn()

    playersNames.slice(1).forEach(() => {
      pickTokens(['white', 'red', 'black'])
      finishTurn()
    })

    expect(screen.getByText('Game ended')).toBeVisible()
  })
})
