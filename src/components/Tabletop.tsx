import { styled } from '@/theme'
import { Board } from './Board'
import { Page } from './common'
import { TokensBank } from './TokensBank'
import { TurnPanel } from './TurnPanel'
import { useAppDispatch } from '@/store'

export const Tabletop = () => {
  const dispatch = useAppDispatch()

  return (
    <Page onClick={() => dispatch({ type: 'DESELECT_CARD' })}>
      <TokensBank />
      <Board />
      <TurnPanelStyled />
    </Page>
  )
}

const TurnPanelStyled = styled(TurnPanel, {
  position: 'absolute',
  right: 32,
  bottom: 32
})
