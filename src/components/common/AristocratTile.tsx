import { GiQueenCrown } from 'react-icons/gi'
import { ARISTOCRAT_TILE_SIZE, ARISTOCRAT_VALUE } from '@/constants'
import { styled } from '@/theme'
import { Aristocrat, BasicColor } from '@/types'
import { Column, Row } from './atoms'
import { useResolution } from '@/providers'
import { isAristocratCollectable } from '@/helpers'
import { useMemo } from 'react'
import { useCurrentPlayer } from '@/hooks'
import { useAppDispatch } from '@/store/hooks'
import { collectAristocratAction } from '@/store/actions'

interface Props {
  aristocrat: Aristocrat
}

export const AristocratTile = ({ aristocrat }: Props) => {
  const { isHighResolution } = useResolution()
  const currentPlayer = useCurrentPlayer()
  const dispatch = useAppDispatch()
  const requiredCardsEntries = Object.entries(aristocrat.requiredCards) as [BasicColor, number][]

  const collect = () => dispatch(collectAristocratAction(aristocrat))

  const isCollectable = useMemo(() => (
    isAristocratCollectable(currentPlayer, aristocrat)
  ), [currentPlayer, aristocrat])

  return (
    <Tile justify="spaceBetween" outlined={isCollectable} onClick={collect}>
      <AristocratValue>
        <GiQueenCrown size={isHighResolution ? 32 : 16} />
        {ARISTOCRAT_VALUE}
      </AristocratValue>
      <Row gap="microscopic">
        {requiredCardsEntries.map(([color, amount]) => (
          <CardIndicator
            key={`card-indicator-${color}`}
            color={color}
            size={{ '@initial': 'big', '@lowResolution': 'small' }}
          >
            {amount}
          </CardIndicator>
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
  background: '$bgViolet',
  borderRadius: 8,

  variants: {
    outlined: {
      true: {
        outline: '2px solid $violet'
      }
    }
  }
})

const AristocratValue = styled('div', {
  flex: 1,
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '$tiny',

  fontSize: '$normal',
  fontWeight: 'bold',

  '@lowResolution': {
    fontSize: '$small'
  }
})

const CardIndicator = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,

  variants: {
    size: {
      small: {
        width: 20,
        height: 30,
      },
      big: {
        width: 30,
        height: 45
      }
    },
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
