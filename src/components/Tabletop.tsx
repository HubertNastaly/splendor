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

export const Tabletop = () => {
  const dispatch = useAppDispatch()
  const deselectCard = () => dispatch(deselectCardAction())

  return (
    <Page onClick={deselectCard}>
      <FullSizeRow gap="big">
        <MainSection />
        <SideSection />
      </FullSizeRow>
    </Page>
  )
}

const MainSection = () => (
  <MainSectionWrapper gap={{ '@initial': 'enormous', '@lowResolution': 'big' }} justify="center">
    <Bank />
    <Board />
    <PlayerPanel />
  </MainSectionWrapper>
)

const SideSection = () => (
  <SideSectionColumn gap="small" align="stretch" justify="end">
    <ActionsPanelStretched />
    <PurchasePanelStretched />
    <TurnPanel />
    <AdditionalOptions />
  </SideSectionColumn>
)

const MainSectionWrapper = styled(Row, {
  flex: 1,
})

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
