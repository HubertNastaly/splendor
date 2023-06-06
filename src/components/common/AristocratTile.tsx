import { ARISTOCRAT_TILE_SIZE, ARISTOCRAT_VALUE } from '@/constants'
import { styled } from '@/theme'
import { Aristocrat, BasicColor } from '@/types'
import { Column, Row } from './atoms'

interface Props {
  aristocrat: Aristocrat
}

export const AristocratTile = ({ aristocrat: { requiredCards } }: Props) => {
  const requiredCardsEntries = Object.entries(requiredCards) as [BasicColor, number][]

  return (
    <Tile justify="spaceBetween">
      <AristocratValue>{ARISTOCRAT_VALUE}</AristocratValue>
      <Row gap="microscopic">
        {requiredCardsEntries.map(([color, amount]) => (
          <CardIndicator key={`card-indicator-${color}`} color={color}>{amount}</CardIndicator>
        ))}
      </Row>
    </Tile>
  )
}

const Tile = styled(Column, {
  size: ARISTOCRAT_TILE_SIZE.highResolution,
  padding: '$tiny',
  '@lowResolution': {
    size: ARISTOCRAT_TILE_SIZE.lowResolution
  },
  background: '$aristocrat',
  borderRadius: 8
})

const AristocratValue = styled('div', {
  flex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$normal',
  fontWeight: 'bold',

  '@lowResolution': {
    fontSize: '$small'
  }
})

const CardIndicator = styled('div', {
  width: 20,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,

  variants: {
    color: {
      white: {
        background: '$white',
        color: getCardIndicatorTextColor('white')
      },
      blue: {
        background: '$blue',
        color: getCardIndicatorTextColor('blue')
      },
      green: {
        background: '$green',
        color: getCardIndicatorTextColor('green')
      },
      red: {
        background: '$red',
        color: getCardIndicatorTextColor('red')
      },
      black: {
        background: '$black',
        color: getCardIndicatorTextColor('black')
      }
    }
  }
})

function getCardIndicatorTextColor(color: BasicColor) {
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
