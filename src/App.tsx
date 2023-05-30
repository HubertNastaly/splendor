import { Provider } from 'react-redux'
import { store } from '@/store'
import { Game } from './components'

const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}

export default App
