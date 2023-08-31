import { WebPlugin } from '@capacitor/core';

import type { SyncPlugin } from './definitions';

export class SyncWeb extends WebPlugin implements SyncPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
