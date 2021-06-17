import { Maybe, tryCatch } from 'fputils';
import * as typeorm from 'typeorm';
import { Connection } from 'typeorm';

export async function createConnection(): Promise<Maybe<Connection>>;
export async function createConnection(name: string): Promise<Maybe<Connection>>;
export async function createConnection(options: typeorm.ConnectionOptions): Promise<Maybe<Connection>>;
export async function createConnection(optionsOrName?: any): Promise<Maybe<Connection>> {
  return tryCatch(() => typeorm.createConnection(optionsOrName));
}
