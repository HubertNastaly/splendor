import { DevModeAction } from './devMode';
import { GameAction } from './game';
import { HistoryAction } from './history';

export type Action = GameAction | HistoryAction | DevModeAction
