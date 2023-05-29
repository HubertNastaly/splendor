import { Provider } from 'react-redux'
import { store, useAppSelector } from '@/store'
import { GameSetup, Tabletop } from '@/components'
import { useDevMode } from '@/hooks'

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

const AppContent = () => {
  useDevMode()
  const gameState = useAppSelector(({ gameState }) => gameState)

  switch(gameState) {
    case 'setup':
      return <GameSetup />
    case 'started':
      return <Tabletop />
    case 'ended':
      return null
  }
}

export default App
