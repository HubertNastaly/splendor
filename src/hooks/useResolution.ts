import { HIGH_RESOLUTION_BREAKPOINT } from '@/constants';
import { useEffect, useState } from 'react';

export function useResolution() {
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

  return { isHighResolution: rootWidth > HIGH_RESOLUTION_BREAKPOINT }
}
