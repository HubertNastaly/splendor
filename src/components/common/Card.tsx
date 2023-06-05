import { CardData, BasicColor } from '@/types';
import { styled } from '@/theme';
import { Gem } from './Gem';
import { withStopPropagation } from '@/utils';
import { CARD_HEIGHT, CARD_TOPBAR_HEIGHT, CARD_WIDTH } from '@/constants';

interface Props {
  card: CardData
  isSelected?: boolean
  onSelect?: () => void
  className?: string
}

export const Card = ({ card, isSelected, onSelect, className }: Props) => {
  const { color, price: { white, blue, green, red, black } } = card

  const prices: Record<BasicColor, number> = {
    white,
    blue,
    green,
    red,
    black
  }

  return (
    <Container className={className} color={color} selected={isSelected} clickable={!!onSelect} onClick={withStopPropagation(onSelect)}>
      <TopSection>
        <TopSectionBackground />
        <CardValue>
          {card.value || ''}
        </CardValue>
        <Gem color={color} size="normal" />
      </TopSection>
      <Prices>
        {(Object.entries(prices) as [BasicColor, number][]).map(([color, price], index) => (
          !!price && (
            <Price key={`price-${index}`}>
              <Gem size="small" color={color} />
              {price}
            </Price>
          )
        ))}
      </Prices>
    </Container>
  )
}

const Container = styled('div', {
  width: CARD_WIDTH.highResolution,
  height: CARD_HEIGHT.highResolution,
  '@lowResolution': {
    width: CARD_WIDTH.lowResolution,
    height: CARD_HEIGHT.lowResolution
  },
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  variants: {
    color: {
      white: {
        backgroundColor: '$bgWhite'
      },
      blue: {
        backgroundColor: '$bgBlue'
      },
      green: {
        backgroundColor: '$bgGreen'
      },
      red: {
        backgroundColor: '$bgRed'
      },
      black: {
        backgroundColor: '$bgBlack'
      }
    },

    selected: {
      true: {
        outline: '2px solid black'
      }
    },

    clickable: {
      true: {
        cursor: 'pointer'
      }
    }
  }
})

const TopSection = styled('div', {
  position: 'relative',
  width: '100%',
  height: CARD_TOPBAR_HEIGHT.highResolution,
  paddingRight: '$tiny',
  paddingLeft: '$tiny',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  '@lowResolution': {
    height: CARD_TOPBAR_HEIGHT.lowResolution,
    paddingRight: '$microscopic',
    paddingLeft: '$microscopic',
  },
})

const TopSectionBackground = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: '$high',
  width: '100%',
  height: '100%',
  background: 'white',
  opacity: 0.3
})

const CardValue = styled('span', {
  zIndex: '$highest',
  color: '#000',
  fontSize: '$normal',
  fontWeight: 'bold',

  '@lowResolution': {
    fontSize: '$small'
  }
})

const Prices = styled('div', {
  padding: '0 0 8px 8px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$tiny',
  '@lowResolution': {
    padding: '0 0 4px 4px',
    rowGap: '$microscopic'
  }
})

const Price = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$tiny',
  '@lowResolution': {
    gap: '$microscopic',
    fontSize: '$tiny'
  }
})
