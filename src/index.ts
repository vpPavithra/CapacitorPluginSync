import { registerPlugin } from '@capacitor/core';

import type { SyncPlugin } from './definitions';

const Sync = registerPlugin<SyncPlugin>('Sync', {
  web: () => import('./web').then(m => new m.SyncWeb()),
});

export * from './definitions';
export { Sync };
