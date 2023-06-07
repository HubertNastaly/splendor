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
import { AdditionalOptions } from './AdditionalOptions'
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
  <FullSizeRow gap="big" align="stretch">
    <Row wide gap="big" justify="center">
      <Bank />
      <Board />
      <PlayerPanel />
    </Row>
    <SideSection />
  </FullSizeRow>
)

const BigScreenLayout = () => (
  <FullSizeRow gap="big">
    <Column wide gap="enormous" align="center">
      <Row gap="enormous" align="stretch">
        <Bank />
        <Board />
        <PurchasePanel />
      </Row>
      <PlayerPanel />
    </Column>
    <SideSection />
  </FullSizeRow>
)

const SideSection = () => (
  <SideSectionColumn gap="small" align="stretch" justify="end">
    <ActionsPanelStretched />
    <PurchasePanelStretched />
    <TurnPanel />
    <AdditionalOptions />
  </SideSectionColumn>
)

const SideSectionColumn = styled(Column, {
  width: '100%',
  height: '100%',
  maxWidth: 256,

  '@lowResolution': {
    maxWidth: 192
  }
})

const FullSizeRow = styled(Row, {
  height: '100%',
  width: '100%'
})

const PurchasePanelStretched = styled(PurchasePanel, {
  flex: 1
})

const ActionsPanelStretched = styled(ActionsPanel, {
  flex: 1
})
