export interface SyncPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
