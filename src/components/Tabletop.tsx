import { styled } from '@/theme'
import { Board } from './Board'
import { Column, Page, Row } from './common'
import { Bank } from './Bank'
import { TurnPanel } from './TurnPanel'
import { useAppDispatch } from '@/store/hooks'
import { PlayerPanel } from './PlayerPanel'
import { ActionsPanel } from './ActionsPanel'
import { PurchasePanel } from './PurchasePanel'
import { deselectCardAction } from '@/store/actions'
import { HistoryNavigation } from './HistoryNavigation'
import { useResolution } from '@/providers'

export const Tabletop = () => {
  const dispatch = useAppDispatch()
  const { isHighResolution } = useResolution()

  return (
    <Page onClick={() => dispatch(deselectCardAction())}>
      {isHighResolution ? <BigScreenLayout /> : <SmallScreenLayout />}
    </Page>
  )
}

const SmallScreenLayout = () => (
  <>
    <RowStyled gap="big" align="stretch">
      <Bank />
      <Board />
      <PlayerPanel />
      <Column gap="small" align="end" justify="spaceBetween">
        <ActionsPanel />
        <PurchasePanelStyled />
        <TurnPanel />
      </Column>
    </RowStyled>
    <HistoryNavigationStyled />
  </>
)

const BigScreenLayout = () => (
  <>
    <ActionsPanelStyled />
    <Row gap="enormous" align="stretch">
      <Bank />
      <Board />
      <PurchasePanel />
    </Row>
    <PlayerPanel />
    <HistoryNavigationStyled />
    <TurnPanelStyled />
  </>
)

const RowStyled = styled(Row, {
  height: '100%'
})

const PurchasePanelStyled = styled(PurchasePanel, {
  flex: 1
})

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
