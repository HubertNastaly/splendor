import { Game } from '@/components'
import { mainReducer } from '@/store/mainReducer'
import { Store } from '@/types'
import { toHistory } from '@/utils'
import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

export const renderGame = (state: Store) => {
  const store = configureStore({
    preloadedState: toHistory(state),
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ immutableCheck: false })]
  })

  render(
    <Provider store={store}>
      <Game />
    </Provider>
  )
}
