import { styled } from '@/theme'
import { Board } from './Board'
import { Page, Row } from './common'
import { Bank } from './Bank'
import { TurnPanel } from './TurnPanel'
import { useAppDispatch } from '@/store'
import { PlayerPanel } from './PlayerPanel'

export const Tabletop = () => {
  const dispatch = useAppDispatch()

  return (
    <Page onClick={() => dispatch({ type: 'DESELECT_CARD' })}>
      <Row gap="large">
        <Board />
        <Bank />
      </Row>
      <PlayerPanel />
      <TurnPanelStyled />
    </Page>
  )
}

const TurnPanelStyled = styled(TurnPanel, {
  position: 'absolute',
  right: 32,
  bottom: 32
})
