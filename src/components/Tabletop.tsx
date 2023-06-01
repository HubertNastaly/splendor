import { styled } from '@/theme'
import { Board } from './Board'
import { Page, Row } from './common'
import { Bank } from './Bank'
import { TurnPanel } from './TurnPanel'
import { useAppDispatch } from '@/store/hooks'
import { PlayerPanel } from './PlayerPanel'
import { ActionsPanel } from './ActionsPanel'
import { PurchasePanel } from './PurchasePanel'

export const Tabletop = () => {
  const dispatch = useAppDispatch()

  return (
    <Page onClick={() => dispatch({ type: 'DESELECT_CARD' })}>
      <ActionsPanelStyled />
      <MainSection gap="large">
        <Board />
        <Bank />
        <PurchasePanel />
      </MainSection>
      <PlayerPanel />
      <TurnPanelStyled />
    </Page>
  )
}

const MainSection = styled(Row, {
  alignItems: 'stretch'
})

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
