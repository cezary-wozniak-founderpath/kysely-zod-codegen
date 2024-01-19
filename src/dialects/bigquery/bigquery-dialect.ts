
import { CreateKyselyDialectOptions, Dialect } from '../../core';
import { BigqueryAdapter } from './bigquery-adapter';
import { BigqueryIntrospector } from './bigquery-introspector';

export class BigqueryDialect extends Dialect {
  readonly adapter = new BigqueryAdapter();
  readonly introspector = new BigqueryIntrospector();

  async createKyselyDialect(options: CreateKyselyDialectOptions) {
    const { BigQueryDialect } = await import('@maktouch/kysely-bigquery');

    return new BigQueryDialect();
  }
}
