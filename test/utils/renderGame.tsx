import { Game } from "@/components"
import { mainReducer } from "@/store/mainReducer"
import { Store, History } from "@/types"
import { configureStore } from "@reduxjs/toolkit"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"

export const renderGame = (state: History<Store>) => {
  const store = configureStore({
    preloadedState: state,
    reducer: mainReducer
  })

  render(
    <Provider store={store}>
      <Game />
    </Provider>
  )
}
