import { FinishTurnAction } from "./playerMove";
import { StartGameAction } from "./startGame";

export type Action = StartGameAction | FinishTurnAction
