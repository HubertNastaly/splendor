import { useAppSelector } from '@/store/hooks'
import { GameSetup } from './GameSetup'
import { Tabletop } from './Tabletop'

export const Game = () => {
  const gameState = useAppSelector(({ gameState }) => gameState)

  switch(gameState) {
    case 'setup':
      return <GameSetup />
    case 'started':
    case 'lastRound':
      return <Tabletop />
    case 'ended':
      return <span>Game ended</span>
  }
}
