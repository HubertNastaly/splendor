import { render } from '@testing-library/react'
import { Game } from '@/components'
import { mockHistory } from '@/mocks'
import { mainReducer } from '@/store/mainReducer'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { Color } from '@/types'
import { pickTokens } from './utils/pickTokens'
import { expectTokensAmount } from './utils'

jest.mock('@/hooks', () => ({
  ...jest.requireActual('@/hooks'),
  useResolution: () => ({ isHighResolution: true })
}))

describe('pick tokens', () => {
  const defaultState = mockHistory()
  const { present } = defaultState

  const renderGame = (preloadedState = defaultState) => {
    const store = configureStore({
      preloadedState,
      reducer: mainReducer
    })

    render(
      <Provider store={store}>
        <Game />
      </Provider>
    )
  }

  test('can pick 3 different tokens', () => {
    renderGame()

    const tokenColors: Color[] = ['white', 'red', 'green']
    pickTokens(tokenColors)

    for(const tokenColor of tokenColors) {
      expectTokensAmount('bank', tokenColor, present.state.bank[tokenColor] - 1)
    }

    for(const tokenColor of tokenColors) {
      expectTokensAmount('player', tokenColor, 1)
    }
  })

  test('can pick 2 same tokens', () => {
    renderGame()

    const tokenColor: Color = 'green'
    pickTokens([tokenColor, tokenColor])

    expectTokensAmount('bank', 'green', present.state.bank.green - 2)
    expectTokensAmount('player', 'green', 2)
  })

  test('cannot pick 3 tokens with 2 of same color', () => {
    renderGame()

    pickTokens(['green', 'red', 'green'])

    expectTokensAmount('bank', 'green', present.state.bank.green - 1)
    expectTokensAmount('player', 'green', 1)

    expectTokensAmount('bank', 'red', present.state.bank.red - 1)
    expectTokensAmount('player', 'red', 1)
  })

  test('cannot pick 4 different tokens', () => {
    renderGame()

    const tokenColors: Color[] = ['white', 'red', 'green', 'blue']
    pickTokens(tokenColors)

    for(const tokenColor of tokenColors.slice(0, -1)) {
      expectTokensAmount('bank', tokenColor, present.state.bank[tokenColor] - 1)
    }

    for(const tokenColor of tokenColors.slice(0, -1)) {
      expectTokensAmount('player', tokenColor, 1)
    }

    const lastColor = tokenColors[tokenColors.length - 1]
    expectTokensAmount('bank', lastColor, present.state.bank[lastColor])
    expectTokensAmount('player', lastColor, 0)
  })

  test('cannot pick gold', () => {
    renderGame()

    const tokenColor: Color = 'gold'
    pickTokens([tokenColor])

    expectTokensAmount('bank', tokenColor, present.state.bank.gold)
    expectTokensAmount('player', tokenColor, 0)
  })
})
