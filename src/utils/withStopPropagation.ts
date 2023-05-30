import { SyntheticEvent } from 'react';

export function withStopPropagation(callback?: () => void) {
  return (event: SyntheticEvent) => {
    event.stopPropagation()
    callback?.()
  }
}
