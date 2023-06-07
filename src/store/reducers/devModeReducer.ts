import { Store } from '@/types';
import { DevModeAction, loadState } from '@/store/actions/devMode';

export function devModeReducer(state: Store, action: DevModeAction): Store {
  switch(action.type) {
    case 'LOAD_STATE':
      return loadState(action)
    default:
      return state
  }
}
