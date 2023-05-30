import { useAppSelector } from '@/store';

export function useCurrentPlayer() {
  const currentPlayer = useAppSelector(({ players, currentPlayerIndex }) => players[currentPlayerIndex])
  return currentPlayer
}
