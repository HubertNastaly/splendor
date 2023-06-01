import {
  CancelPurchaseAction,
  DeselectCardAction,
  FinishTurnAction,
  PickTokenAction,
  ReserveCardAction,
  ReturnTokenAction,
  SelectCardAction,
  StartPurchaseAction,
  PayTokenAction,
  FinalizePurchaseAction
} from './playerMove';
import { StartGameAction } from './startGame';

export type Action = 
  StartGameAction |
  PickTokenAction |
  SelectCardAction |
  DeselectCardAction |
  ReserveCardAction |
  StartPurchaseAction |
  PayTokenAction |
  CancelPurchaseAction |
  FinalizePurchaseAction |
  ReturnTokenAction |
  FinishTurnAction
