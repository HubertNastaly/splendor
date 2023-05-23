import { Provider } from 'react-redux'
import { store, useAppSelector } from './store'
import { Board, GameSetup, TokensPanel } from './components'
import { styled } from '@stitches/react'
import { useDevMode } from './hooks'
import { TurnPanel } from './components/TurnPanel'

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
  useDevMode()
  const gameState = useAppSelector(({ gameState }) => gameState)

  switch(gameState) {
    case 'setup':
      return <GameSetup />
    case 'started':
      return (
        <>
          <TokensPanel />
          <Board />
          <TurnPanelStyled />
        </>
      )
    case 'ended':
      return null
  }
}

export default App

const Page = styled('div', {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  paddingTop: 64,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 64,
  backgroundColor: '#faf1d7'
})

const TurnPanelStyled = styled(TurnPanel, {
  position: 'absolute',
  right: 32,
  bottom: 32
})
