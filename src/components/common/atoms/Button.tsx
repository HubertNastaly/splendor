import { styled } from '@/theme';
import { withStopPropagation } from '@/utils';
import { PropsWithChildren } from 'react';

interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  view?: 'primary' | 'secondary'
  className?: string
}

export const Button = ({ onClick, disabled, view, children, className }: PropsWithChildren<ButtonProps>) => (
  <ButtonComponent className={className} view={view} disabled={disabled} onClick={withStopPropagation(onClick)}>
    {children}
  </ButtonComponent>
)

type LinkButtonProps = Omit<ButtonProps, 'onClick'> & { link: string }

export const LinkButton = ({ link, children, className, ...buttonProps }: PropsWithChildren<LinkButtonProps>) => (
  <Link href={link} target="_blank" className={className}>
    <ButtonComponent {...buttonProps}>
      {children}
    </ButtonComponent>
  </Link>
)

const ButtonComponent = styled('button', {
  height: 36,
  paddingLeft: '$tiny',
  paddingRight: '$tiny',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',

  fontSize: '$normal',
  '@lowResolution': {
    fontSize: '$small'
  },

  '&[disabled]': {
    background: '$disabled',
    cursor: 'not-allowed'
  },

  variants: {
    view: {
      primary: {
        color: 'white',
        background: 'black',
      },
      secondary: {
        color: 'black',
        background: 'none',
        border: '2px solid black'
      }
    }
  },

  defaultVariants: {
    view: 'primary'
  }
})

const Link = styled('a', {
  '& button': {
    width: '100%'
  }
})
