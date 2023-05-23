import { createStitches } from '@stitches/react'

const { styled, theme } = createStitches({
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
      disabled: '#999999'
    },
    fontSizes: {
      normal: '18px',
      big: '32px'
    }, 
    zIndices: {
      highest: 3,
      high: 2
    },
    space: {
      tiny: '8px',
      small: '16px',
      medium: '24px',
      big: '32px'
    }
  },
  utils: {
    size: (value: number) => ({
      width: value,
      height: value
    })
  }
})

export { styled, theme }
