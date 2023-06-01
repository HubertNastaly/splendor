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
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
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
  height: CARD_TOPBAR_HEIGHT,
  padding: '0 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
})

const Prices = styled('div', {
  padding: '0 0 8px 8px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8
})

const Price = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8
})
