import { PlayerTokens } from './PlayerTokens'
import { Panel } from '@/components/common'

export const PlayerPanel = () => {
  return (
    <Panel data-testid="player-panel">
      <PlayerTokens />
    </Panel>
  )
}
