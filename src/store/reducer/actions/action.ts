import { DeselectCardAction, FinishTurnAction, PickTokenAction, ReserveCardAction, ReturnTokenAction, SelectCardAction } from './playerMove';
import { StartGameAction } from './startGame';

export type Action = 
  StartGameAction |
  PickTokenAction |
  SelectCardAction |
  DeselectCardAction |
  ReserveCardAction |
  ReturnTokenAction |
  FinishTurnAction
