
import { type CreateKyselyDialectOptions, Dialect } from '../../core';
import { ClickhouseAdapter } from './clickhouse-adapter';
import { ClickhouseIntrospector } from './clickhouse-introspector';

export class ClickhouseDialect extends Dialect {
  readonly adapter = new ClickhouseAdapter();
  readonly introspector = new ClickhouseIntrospector();

  async createKyselyDialect(options: CreateKyselyDialectOptions) {
    const { ClickhouseDialect } = await import('@founderpath/kysely-clickhouse');

    const { origin: url, username, password, pathname } = new URL(options.connectionString)
    const database = pathname.replace(/^\//, '')

    return new ClickhouseDialect({
      options: {
        url, username, password, database
      }
    });
  }
}
