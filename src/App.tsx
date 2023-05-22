import { Provider } from 'react-redux'
import { store } from './store'
import { Board } from './components'

const App = () => {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  )
}

export default App
