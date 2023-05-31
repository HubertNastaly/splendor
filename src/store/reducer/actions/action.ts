import { DeselectCardAction, FinishTurnAction, PickTokenAction, ReserveCardAction, ReturnTokenAction, SelectCardAction, StartPurchaseAction } from './playerMove';
import { StartGameAction } from './startGame';

export type Action = 
  StartGameAction |
  PickTokenAction |
  SelectCardAction |
  DeselectCardAction |
  ReserveCardAction |
  StartPurchaseAction |
  ReturnTokenAction |
  FinishTurnAction
