import { ARISTOCRAT_VALUE } from '@/constants';
import { Aristocrat } from '@/types';

export function sumAristocratsPoints(aristocrats: Aristocrat[]) {
  return aristocrats.length * ARISTOCRAT_VALUE
}
