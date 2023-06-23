import { usePreviewPlayer } from '@/providers'
import { useAppSelector } from '@/store/hooks'

export function useDisplayedPlayer() {
  const { previewPlayerIndex } = usePreviewPlayer()
  const { players, currentPlayer } = useAppSelector(({ players, currentPlayerIndex }) => ({
    players,
    currentPlayer: players[currentPlayerIndex]
  }))

  return previewPlayerIndex !== undefined ? players[previewPlayerIndex] : currentPlayer
}
