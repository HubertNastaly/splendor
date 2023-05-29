import { DeselectCardAction, FinishTurnAction, PickTokenAction, SelectCardAction } from './playerMove';
import { StartGameAction } from './startGame';

export type Action = 
  StartGameAction |
  PickTokenAction |
  SelectCardAction |
  DeselectCardAction |
  FinishTurnAction
