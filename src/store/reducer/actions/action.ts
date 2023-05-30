import { DeselectCardAction, FinishTurnAction, PickTokenAction, ReserveCardAction, SelectCardAction } from './playerMove';
import { StartGameAction } from './startGame';

export type Action = 
  StartGameAction |
  PickTokenAction |
  SelectCardAction |
  DeselectCardAction |
  ReserveCardAction |
  FinishTurnAction
