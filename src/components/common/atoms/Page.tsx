import { styled } from '@/theme';

export const Page = styled('div', {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  minHeight: '100vh',
  paddingTop: '$large',
  paddingBottom: '$large',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '$large',
  backgroundColor: '#faf1d7',

  '@lowResolution': {
    paddingTop: '$big',
    paddingBottom: '$big',
    rowGap: '$big'
  }
})
