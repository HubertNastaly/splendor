import { CardData, Color } from '@/types';
import { styled } from '@/theme';
import { Gem } from './common';
import { MouseEvent } from 'react';

interface Props {
  card: CardData
  isSelected: boolean
  onSelect: () => void
}

export const Card = ({ card, isSelected, onSelect }: Props) => {
  const { color, price: { white, blue, green, red, black } } = card

  const prices: Record<Color, number> = {
    white,
    blue,
    green,
    red,
    black
  }

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    onSelect()
  }

  return (
    <Container color={color} selected={isSelected} onClick={handleClick}>
      <TopSection>
        <TopSectionBackground />
        <CardValue>
          {card.value || ''}
        </CardValue>
        <Gem color={color} size="normal" />
      </TopSection>
      <Prices>
        {(Object.entries(prices) as [Color, number][]).map(([color, price], index) => (
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
  width: 128,
  height: 196,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',

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
    }
  }
})

const TopSection = styled('div', {
  position: 'relative',
  width: '100%',
  height: 48,
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
