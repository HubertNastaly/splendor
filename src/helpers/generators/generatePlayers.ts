import { Player } from '@/types';
import { createPlayer } from '..';

export function generatePlayers(names: string[]): Player[] {
  return names.map(createPlayer)
}
