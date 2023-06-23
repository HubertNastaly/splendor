import { ReactNode, useEffect, useState } from 'react';
import { ResolutionContext } from './ResolutionContext';
import { HIGH_RESOLUTION_BREAKPOINT } from '@/constants';

interface Props {
  children?: ReactNode
}

export const ResolutionProvider = ({ children }: Props) => {
  const [rootWidth, setRootWidth] = useState(0)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([rootEntry]) => {
      const width = rootEntry.borderBoxSize[0].inlineSize
      setRootWidth(width)
    })

    const root = document.getElementById('root')
    if(!root) return

    resizeObserver.observe(root)

    return () => resizeObserver.unobserve(root)
  }, [])

  const isHighResolution = rootWidth > HIGH_RESOLUTION_BREAKPOINT

  return (
    <ResolutionContext.Provider value={{ isHighResolution }}>
      {children}
    </ResolutionContext.Provider>
  )
}
