import { DeselectCardAction, FinishTurnAction, PickTokenAction, ReserveCardAction, ReturnTokenAction, SelectCardAction, StartPurchaseAction } from './playerMove';
import { PayTokenAction } from './playerMove/payToken';
import { StartGameAction } from './startGame';

export type Action = 
  StartGameAction |
  PickTokenAction |
  SelectCardAction |
  DeselectCardAction |
  ReserveCardAction |
  StartPurchaseAction |
  PayTokenAction |
  ReturnTokenAction |
  FinishTurnAction
