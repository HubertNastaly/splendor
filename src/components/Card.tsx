import { css } from "@stitches/react";
import { styled } from "../theme";
import { CardData, Color } from "../types";

interface Props {
  card: CardData
}

export const Card = ({ card }: Props) => {
  const { color, white, blue, green, red, black } = card

  const prices: Record<Color, number> = {
    white,
    blue,
    green,
    red,
    black
  }

  return (
    <Container color={color}>
      <TopSection>
        <TopSectionBackground />
        <CardValue>
          {card.value || ''}
        </CardValue>
        <Gem color={color} size='big' />
      </TopSection>
      <Prices>
        {(Object.entries(prices) as [Color, number][]).map(([color, price], index) => (
          !!price && (
            <Price key={`price-${index}`}>
              <Gem color={color} />
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
  background: "$white",
  opacity: 0.3
})

const colorStyles = css({
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
    }
  }
})

const Gem = styled('div', colorStyles, {
  width: 24,
  height: 24,
  zIndex: '$highest',
  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    size: {
      big: {
        width: 32,
        height: 32,
      }
    }
  }
})

const CardValue = styled('span', {
  zIndex: '$highest',
  color: '#000',
  fontSize: '$big',
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
