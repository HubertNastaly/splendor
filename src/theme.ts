import { createStitches } from '@stitches/react'
import { HIGH_RESOLUTION_BREAKPOINT } from './constants'

const { styled, theme } = createStitches({
  media: {
    lowResolution: `(max-width: ${HIGH_RESOLUTION_BREAKPOINT}px)`
  },
  theme: {
    colors: {
      white: '#f7f7f7',
      bgWhite: '#d5d5d5',
      blue: '#0045db',
      bgBlue: '#89b1ff;',
      green: '#029e52',
      bgGreen: '#96e8c0',
      red: '#bf0000',
      bgRed: '#f78692',
      black: '#210b00',
      bgBlack: '#998174',
      gold: '#de9102',
      panel: '#f9e5ce',
      disabled: '#999999',
      violet: '#b500bb',
      bgViolet: '#e997f0',
      pink: '#d00089'
    },
    fontSizes: {
      tiny: '12px',
      small: '16px',
      normal: '18px',
      big: '32px'
    }, 
    zIndices: {
      highest: 3,
      high: 2
    },
    space: {
      microscopic: '4px',
      tiny: '8px',
      small: '16px',
      medium: '24px',
      big: '32px',
      large: '64px',
      enormous: '96px'
    },
  },
  utils: {
    size: (value: number) => ({
      width: value,
      height: value
    })
  }
})

export { styled, theme }
