import { createContext, useContext } from 'react';

interface IPreviewPlayer {
  previewPlayerIndex?: number
  setPreviewPlayerIndex: (playerIndex: number | undefined) => void
}

export const PreviewPlayerContext = createContext<IPreviewPlayer>({} as IPreviewPlayer)

export const usePreviewPlayer = () => useContext(PreviewPlayerContext)
