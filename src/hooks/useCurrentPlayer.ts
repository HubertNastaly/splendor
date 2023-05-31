import { useAppSelector } from '@/store/hooks';

export function useCurrentPlayer() {
  const currentPlayer = useAppSelector(({ players, currentPlayerIndex }) => players[currentPlayerIndex])
  return currentPlayer
}
