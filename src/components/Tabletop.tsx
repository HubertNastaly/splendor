import { styled } from '@/theme'
import { Board } from './Board'
import { Page, Row } from './common'
import { Bank } from './Bank'
import { TurnPanel } from './TurnPanel'
import { useAppDispatch } from '@/store/hooks'
import { PlayerPanel } from './PlayerPanel'
import { ActionsPanel } from './ActionsPanel'
import { PurchasePanel } from './PurchasePanel'
import { deselectCardAction } from '@/store/actions'

export const Tabletop = () => {
  const dispatch = useAppDispatch()

  return (
    <Page onClick={() => dispatch(deselectCardAction())}>
      <ActionsPanelStyled />
      <Row gap="large" align="stretch">
        <Board />
        <Bank />
        <PurchasePanel />
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

const ActionsPanelStyled = styled(ActionsPanel, {
  position: 'absolute',
  top: 32,
  right: 32,
})
