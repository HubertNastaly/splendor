import { MAX_TOKENS_LIMIT } from '@/constants';
import { Player } from '@/types';
import { sum } from '@/utils';

export function isOverTokensLimit(player: Player) {
  return sum(Object.values(player.tokens)) > MAX_TOKENS_LIMIT
}
