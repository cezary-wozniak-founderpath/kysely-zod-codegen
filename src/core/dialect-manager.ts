
import {
  BigqueryDialect,
  BunSqliteDialect,
  LibsqlDialect,
  MysqlDialect,
  PostgresDialect,
  SqliteDialect,
} from '../dialects';
import { ClickhouseDialect } from '../dialects/clickhouse';
import type { Dialect } from './dialect';

export type DialectName =
  | 'bigquery'
  | 'bun-sqlite'
  | 'clickhouse'
  | 'libsql'
  | 'mysql'
  | 'postgres'
  | 'sqlite';

/**
 * Returns a dialect instance for a pre-defined dialect name.
 */
export class DialectManager {
  getDialect(name: DialectName): Dialect {
    switch (name) {
      case 'bigquery':
        return new BigqueryDialect();
      case 'clickhouse':
        return new ClickhouseDialect();
      case 'bun-sqlite':
        return new BunSqliteDialect();
      case 'libsql':
        return new LibsqlDialect();
      case 'mysql':
        return new MysqlDialect();
      case 'postgres':
        return new PostgresDialect();
      default:
        return new SqliteDialect();
    }
  }
}
