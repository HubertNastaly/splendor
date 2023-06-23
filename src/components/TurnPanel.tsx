import { useMemo, memo, useDeferredValue } from 'react'
import { Button, Column, Row } from './common'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { styled } from '@/theme'
import { canFinishTurn, getCurrentScore } from '@/helpers'
import { finishTurnAction } from '@/store/actions'
import { testIds } from '@/constants'
import { usePreviewPlayer } from '@/providers'

interface Props {
  className?: string
}

export const TurnPanel = ({ className }: Props) => {
  const { setPreviewPlayerIndex } = usePreviewPlayer()
  const dispatch = useAppDispatch()
  const { players, aristocrats, currentPlayerIndex } = useAppSelector(({ players, currentPlayerIndex, aristocrats }) => ({
    players,
    aristocrats,
    currentPlayerIndex
  }))
  const currentPlayer = players[currentPlayerIndex]

  const { playersPoints, currentWinnerIndex } = useMemo(() => getCurrentScore(players), [players])

  const stopPlayerPreview = () => setPreviewPlayerIndex(undefined)
  const finishTurn = () => dispatch(finishTurnAction())
  const isFinishTurnDisabled = !canFinishTurn(currentPlayer, aristocrats)

  return (
    <Container align="stretch" gap="none" className={className} onMouseOut={stopPlayerPreview}>
      {players.map((player, index) => (
        <PlayerInfo
          key={`player-info-${index}`}
          data-testid={index === currentPlayerIndex ? testIds.currentPlayerInfo : testIds.playerInfo(player.name)}
          justify="spaceBetween"
          currentPlayer={index === currentPlayerIndex}
          currentWinner={index === currentWinnerIndex}
          onMouseOver={() => setPreviewPlayerIndex(index)}
        >
          <span>{player.name}</span>
          <span>{playersPoints[index]}</span>
        </PlayerInfo>
      ))}
      <FinishTurnButton onClick={finishTurn} disabled={isFinishTurnDisabled}>
        Finish turn
      </FinishTurnButton>
    </Container>
  )
}

const Container = styled(Column, {
  width: '100%'
})

const PlayerInfo = styled(Row, {
  padding: '$tiny',
  '@lowResolution': {
    fontSize: '$small'
  },
  borderRadius: 4,

  variants: {
    currentPlayer: {
      true: {
        border: '1px solid black',
      }
    },
    currentWinner: {
      true: {
        color: '$pink'
      }
    }
  },

  '&:hover': {
    background: '$white'
  }
})

const FinishTurnButton = styled(Button, {
  marginTop: '$tiny'
})
