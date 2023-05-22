import { Provider } from 'react-redux'
import { store } from './store'
import { Board } from './components'
import { styled } from '@stitches/react'

const App = () => {
  return (
    <Provider store={store}>
      <Page>
        <BoardStyled />
      </Page>
    </Provider>
  )
}

export default App

const Page = styled('div', {
  width: '100vw',
  height: '100vh',
  paddingTop: 128
})

const BoardStyled = styled(Board, {
  margin: '0 auto',
})
