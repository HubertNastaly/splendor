import { Provider } from 'react-redux'
import { store } from '@/store'
import { Game } from './components'
import { ResolutionProvider } from './providers'

const App = () => {
  return (
    <Provider store={store}>
      <ResolutionProvider>
        <Game />
      </ResolutionProvider>
    </Provider>
  )
}

export default App
