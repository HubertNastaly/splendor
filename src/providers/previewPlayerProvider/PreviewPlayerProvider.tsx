import { ReactNode, useState } from 'react';
import { PreviewPlayerContext } from './PreviewPlayerContext';

interface Props {
  children?: ReactNode
}

export const PreviewPlayerProvider = ({ children }: Props) => {
  const [previewPlayerIndex, setPreviewPlayerIndex] = useState<number>()

  return (
    <PreviewPlayerContext.Provider value={{ previewPlayerIndex, setPreviewPlayerIndex }}>
      {children}
    </PreviewPlayerContext.Provider>
  )
} 
