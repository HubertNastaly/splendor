import { FaRegGem } from 'react-icons/fa'
import { styled } from "../theme"
import { Color } from "../types"

type GemSize = 'small' | 'normal' | 'big'

interface Props {
  size: GemSize
  color: Color
}

export const Gem = ({ size, color }: Props) => {
  return (
    <GemBackground color={color} size={size}>
      <FaRegGem size={ICON_SIZES[size]} color={getIconColor(color)} />
    </GemBackground>
  )
}

const GemBackground = styled('div', {
  zIndex: '$highest',
  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    color: {
      white: {
        backgroundColor: '$white'
      },
      blue: {
        backgroundColor: '$blue'
      },
      green: {
        backgroundColor: '$green'
      },
      red: {
        backgroundColor: '$red'
      },
      black: {
        backgroundColor: '$black'
      }
    },
    size: {
      small: {
        size: 24
      },
      normal: {
        size: 32
      },
      big: {
        size: 96
      }
    }
  }
})

const ICON_SIZES: Record<GemSize, number> = {
  small: 12,
  normal: 16,
  big: 96
}

function getIconColor(color: Color) {
  switch(color) {
    case 'black':
    case 'blue':
    case 'green':
    case 'red':
      return 'rgba(255,255,255,0.6)'
    case 'white':
      return '#888888'
  }
}
