import { BasicColor } from '.';

export interface Aristocrat {
  id: number,
  requiredCards: Partial<Record<BasicColor, number>>
}
