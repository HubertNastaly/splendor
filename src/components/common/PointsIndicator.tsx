import { styled } from '@/theme'
import { BasicColor } from '@/types'

export const PointsIndicator = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,

  variants: {
    type: {
      card: {},
      tile: {}
    },

    size: {
      small: {},
      big: {},
      large: {}
    },
    
    color: {
      white: {
        background: '$white',
        color: getPointsIndicatorTextColor('white')
      },
      blue: {
        background: '$blue',
        color: getPointsIndicatorTextColor('blue')
      },
      green: {
        background: '$green',
        color: getPointsIndicatorTextColor('green')
      },
      red: {
        background: '$red',
        color: getPointsIndicatorTextColor('red')
      },
      black: {
        background: '$black',
        color: getPointsIndicatorTextColor('black')
      },
      neutral: {
        background: 'none',
        color: '$pink',
        border: '2px solid $pink'
      }
    },
    column: {
      true: {
        flexDirection: 'column',
        rowGap: '$microscopic'
      }
    }
  },

  compoundVariants: [
    {
      type: 'card',
      size: 'small',
      css: {
        width: 20,
        height: 30,
      }
    },
    {
      type: 'card',
      size: 'big',
      css: {
        width: 30,
        height: 45,
      }
    },
    {
      type: 'card',
      size: 'large',
      css: {
        width: 60,
        height: 90,
      }
    },
    {
      type: 'tile',
      size: 'large',
      css: {
        width: 60,
        height: 60
      }
    }
  ],

  defaultVariants: {
    type: 'card'
  }
})

function getPointsIndicatorTextColor(color: BasicColor) {
  switch(color) {
    case 'blue':
    case 'green':
    case 'red':
    case 'black':
      return 'white'
    case 'white':
      return 'black'
  }
}
