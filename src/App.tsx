import { Provider } from 'react-redux'
import { store } from './store'
import { Board, TokensPanel } from './components'
import { styled } from '@stitches/react'

const App = () => {
  return (
    <Provider store={store}>
      <Page>
        <TokensPanel />
        <Board />
      </Page>
    </Provider>
  )
}

export default App

const Page = styled('div', {
  width: '100vw',
  height: '100vh',
  paddingTop: 64,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 64
})

