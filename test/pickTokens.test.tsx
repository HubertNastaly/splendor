import { render } from '@testing-library/react'
import { Game } from '@/components'
import { mockState } from '@/mocks'
import { reducer } from '@/store/reducer'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { Color } from '@/types'
import { pickTokens } from './utils/pickTokens'
import { expectTokensAmount } from './utils'

describe('pick tokens', () => {
  const preloadedState = mockState()

  const store = configureStore({
    preloadedState,
    reducer
  })

  test('can pick 3 different tokens', () => {
    render(
      <Provider store={store}>
        <Game />
      </Provider>
    )

    const tokenColors: Color[] = ['white', 'red', 'green']
    pickTokens(tokenColors)

    for(const tokenColor of tokenColors) {
      expectTokensAmount('bank', tokenColor, preloadedState.bank[tokenColor] - 1)
    }

    for(const tokenColor of tokenColors) {
      expectTokensAmount('playerPanel', tokenColor, 1)
    }
  })
})
