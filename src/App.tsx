import { Provider } from 'react-redux'
import { store } from '@/store'
import { Game } from './components'
import { PreviewPlayerProvider, ResolutionProvider } from './providers'

const App = () => {
  return (
    <Provider store={store}>
      <PreviewPlayerProvider>
        <ResolutionProvider>
          <Game />
        </ResolutionProvider>
      </PreviewPlayerProvider>
    </Provider>
  )
}

export default App
