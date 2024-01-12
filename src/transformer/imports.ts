import { ModuleReferenceNode } from '../ast';

export const GLOBAL_IMPORTS = {
  ColumnType: new ModuleReferenceNode('kysely'),
  Zod: new ModuleReferenceNode('zod'),
};
