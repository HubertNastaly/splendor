import { useAppSelector } from '@/store/hooks'
import { GameSetup } from './GameSetup'
import { Tabletop } from './Tabletop'

export const Game = () => {
  const gameState = useAppSelector(({ gameState }) => gameState)

  switch(gameState) {
    case 'setup':
      return <GameSetup />
    case 'started':
      return <Tabletop />
    case 'ended':
      return null
  }
}
