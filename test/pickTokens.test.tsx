import { mockInitialState, mockNearTokensLimitState } from '@/mocks'
import { Color } from '@/types'
import { sum } from '@/utils'
import { expectTokensAmount, renderGame, pickTokens, returnTokens } from './utils'
import { screen } from '@testing-library/react'

jest.mock('@/hooks', () => ({
  ...jest.requireActual('@/hooks'),
  useResolution: () => ({ isHighResolution: true })
}))

describe('pick tokens', () => {
  const initialState = mockInitialState.mockState()

  const fixture = () => renderGame(initialState)

  test('can pick 3 different tokens', () => {
    fixture()

    const tokenColors: Color[] = ['white', 'red', 'green']
    pickTokens(tokenColors)

    for(const tokenColor of tokenColors) {
      expectTokensAmount('bank', tokenColor, initialState.bank[tokenColor] - 1)
    }

    for(const tokenColor of tokenColors) {
      expectTokensAmount('player', tokenColor, 1)
    }
  })

  test('can pick 2 same tokens', () => {
    fixture()

    const tokenColor: Color = 'green'
    pickTokens([tokenColor, tokenColor])

    expectTokensAmount('bank', 'green', initialState.bank.green - 2)
    expectTokensAmount('player', 'green', 2)
  })

  test('cannot pick 3 tokens with 2 of same color', () => {
    fixture()

    pickTokens(['green', 'red', 'green'])

    expectTokensAmount('bank', 'green', initialState.bank.green - 1)
    expectTokensAmount('player', 'green', 1)

    expectTokensAmount('bank', 'red', initialState.bank.red - 1)
    expectTokensAmount('player', 'red', 1)
  })

  test('cannot pick 4 different tokens', () => {
    fixture()

    const tokenColors: Color[] = ['white', 'red', 'green', 'blue']
    pickTokens(tokenColors)

    for(const tokenColor of tokenColors.slice(0, -1)) {
      expectTokensAmount('bank', tokenColor, initialState.bank[tokenColor] - 1)
    }

    for(const tokenColor of tokenColors.slice(0, -1)) {
      expectTokensAmount('player', tokenColor, 1)
    }

    const lastColor = tokenColors[tokenColors.length - 1]
    expectTokensAmount('bank', lastColor, initialState.bank[lastColor])
    expectTokensAmount('player', lastColor, 0)
  })

  test('cannot pick gold', () => {
    fixture()

    const tokenColor: Color = 'gold'
    pickTokens([tokenColor])

    expectTokensAmount('bank', tokenColor, initialState.bank.gold)
    expectTokensAmount('player', tokenColor, 0)
  })

  test('can return tokens when over a tokens limit', () => {
    const { mockState, playerTokens } = mockNearTokensLimitState
    renderGame(mockState())
    const totalTokens = sum(Object.values(playerTokens))
    expect(totalTokens).toEqual(9)

    pickTokens(['black', 'blue', 'green'])
    expect(screen.getByText('Finish turn')).toBeDisabled()

    returnTokens(['black', 'blue'])
    expect(screen.getByText('Finish turn')).toBeEnabled()
  })
})
