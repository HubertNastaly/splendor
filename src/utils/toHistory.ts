import { Store, History } from '@/types';

export const toHistory = (state: Store): History<Store> => ({
  past: [],
  present: { state },
  future: []
})
