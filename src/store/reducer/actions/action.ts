import { FinishTurnAction, PickTokenAction } from "./playerMove";
import { StartGameAction } from "./startGame";

export type Action = 
  StartGameAction |
  PickTokenAction |
  FinishTurnAction
