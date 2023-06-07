import { FaRegGem } from 'react-icons/fa'
import { MdStar } from 'react-icons/md'
import { TOKEN_SIZE } from '@/constants'
import { useResolution } from '@/providers'
import { styled } from '@/theme'
import { Color } from '@/types'

type GemSize = 'small' | 'normal' | 'big'

interface Props {
  size: GemSize
  color: Color
  disabled?: boolean
  outlined?: boolean
  className?: string
}

export const Gem = ({ size, color, disabled, outlined, className }: Props) => {
  const deducedColor = disabled ? 'disabled' : color
  const { isHighResolution } = useResolution()
  const iconSize = isHighResolution ? HIGH_RESOLUTION_ICON_SIZES[size] : LOW_RESOLUTION_ICON_SIZES[size]

  return (
    <GemBackground className={className} color={deducedColor} size={size} outlined={outlined}>
      {color === 'gold' ? (
        <MdStar size={iconSize} color={getIconColor('gold')} />
      ) : (
        <FaRegGem size={iconSize} color={getIconColor(deducedColor)} />
      )}
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
        size: 24,
        '@lowResolution': {
          size: 16
        }
      },
      normal: {
        size: 32,
        '@lowResolution': {
          size: 24
        }
      },
      big: {
        size: TOKEN_SIZE.highResolution,
        '@lowResolution': {
          size: TOKEN_SIZE.lowResolution
        }
      }
    },

    outlined: {
      true: {
        border: '4px solid white',
        outline: '2px solid gray',

        '@lowResolution': {
          border: '2px solid white',
        }
      }
    }
  }
})

const HIGH_RESOLUTION_ICON_SIZES: Record<GemSize, number> = {
  small: 12,
  normal: 16,
  big: 42
}

const LOW_RESOLUTION_ICON_SIZES: Record<GemSize, number> = {
  small: 8,
  normal: 12,
  big: 22
}

function getIconColor(color: Color | 'disabled') {
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
