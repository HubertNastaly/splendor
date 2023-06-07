import { createContext, useContext } from 'react';

export const ResolutionContext = createContext<{ isHighResolution: boolean }>({
  isHighResolution: false
})

export const useResolution = () => useContext(ResolutionContext)
