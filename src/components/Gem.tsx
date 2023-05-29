import { styled } from '@/theme'
import { GemColor } from '@/types'
import { FaRegGem } from 'react-icons/fa'

type GemSize = 'small' | 'normal' | 'big'

interface Props {
  size: GemSize
  color: GemColor
  disabled?: boolean
  className?: string
}

export const Gem = ({ size, color, disabled, className }: Props) => {
  const deducedColor = disabled ? 'disabled' : color
  return (
    <GemBackground className={className} color={deducedColor} size={size}>
      <FaRegGem size={ICON_SIZES[size]} color={getIconColor(deducedColor)} />
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
      },
      gold: {
        backgroundColor: '$gold',
      },
      disabled: {
        backgroundColor: '$disabled'
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
        size: 72
      }
    }
  }
})

const ICON_SIZES: Record<GemSize, number> = {
  small: 12,
  normal: 16,
  big: 42
}

function getIconColor(color: GemColor | 'disabled') {
  switch(color) {
    case 'black':
    case 'blue':
    case 'green':
    case 'red':
    case 'gold':
    case 'disabled':
      return 'rgba(255,255,255,0.6)'
    case 'white':
      return '#888888'
  }
}
