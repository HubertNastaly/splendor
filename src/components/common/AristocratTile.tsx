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
import { PointsIndicator } from './PointsIndicator'

interface Props {
  aristocrat: Aristocrat
}

export const AristocratTile = ({ aristocrat }: Props) => {
  const { isHighResolution } = useResolution()
  const currentPlayer = useCurrentPlayer()
  const dispatch = useAppDispatch()
  const requiredCardsEntries = Object.entries(aristocrat.requiredCards) as [BasicColor, number][]

  const isCollectable = useMemo(() => (
    canCollectAristocrat(currentPlayer) &&
    isAristocratCollectable(currentPlayer, aristocrat)
  ), [currentPlayer, aristocrat])

  const collect = () => {
    if(isCollectable) {
      dispatch(collectAristocratAction(aristocrat))
    }
  }

  return (
    <Tile justify="spaceBetween" outlined={isCollectable} onClick={collect}>
      <AristocratValue>
        <GiQueenCrown size={isHighResolution ? 32 : 16} />
        {ARISTOCRAT_VALUE}
      </AristocratValue>
      <Row gap="microscopic">
        {requiredCardsEntries.map(([color, amount]) => (
          <PointsIndicator
            type="card"
            key={`card-indicator-${color}`}
            color={color}
            size={{ '@initial': 'big', '@lowResolution': 'small' }}
          >
            {amount}
          </PointsIndicator>
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
        cursor: 'pointer',
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
