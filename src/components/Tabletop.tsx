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
import { HistoryNavigation } from './HistoryNavigation'

export const Tabletop = () => {
  const dispatch = useAppDispatch()

  return (
    <Page onClick={() => dispatch(deselectCardAction())}>
      <ActionsPanelStyled />
      <Row gap={{ '@initial': 'enormous', '@lowResolution': 'big' }} align="stretch">
        <Board />
        <Bank />
        <PurchasePanel />
      </Row>
      <PlayerPanel />
      <HistoryNavigationStyled />
      <TurnPanelStyled />
    </Page>
  )
}

const TurnPanelStyled = styled(TurnPanel, {
  position: 'fixed',
  right: 32,
  bottom: 32
})

const ActionsPanelStyled = styled(ActionsPanel, {
  position: 'fixed',
  top: 32,
  right: 32,
})

const HistoryNavigationStyled = styled(HistoryNavigation, {
  position: 'fixed',
  left: 32,
  bottom: 32
})
