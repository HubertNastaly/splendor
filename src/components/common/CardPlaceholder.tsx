import { CARD_HEIGHT, CARD_WIDTH } from '@/constants';
import { styled } from '@/theme';

export const CardPlaceholder = styled('div', {
  width: CARD_WIDTH.highResolution,
  height: CARD_HEIGHT.highResolution,
  '@lowResolution': {
    width: CARD_WIDTH.lowResolution,
    height: CARD_HEIGHT.lowResolution,
  },
  borderRadius: 8,
  border: '2px solid white',
  background: 'none'
})
