import { RedoAction } from './redo';
import { UndoAction } from './undo';


export type HistoryAction = UndoAction | RedoAction
