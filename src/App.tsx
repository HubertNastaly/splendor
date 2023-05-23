import { Provider } from 'react-redux'
import { store, useAppSelector } from './store'
import { Board, GameSetup, TokensPanel } from './components'
import { styled } from '@stitches/react'

const App = () => {
  return (
    <Provider store={store}>
      <Page>
        <AppContent />
      </Page>
    </Provider>
  )
}

const AppContent = () => {
  const gameState = useAppSelector(({ gameState }) => gameState)

  switch(gameState) {
    case 'setup':
      return <GameSetup />
    case 'started':
      return (
        <>
          <TokensPanel />
          <Board />
        </>
      )
    case 'ended':
      return null
  }
}

export default App

const Page = styled('div', {
  width: '100vw',
  height: '100vh',
  paddingTop: 64,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 64,
  backgroundColor: '#faf1d7'
})

