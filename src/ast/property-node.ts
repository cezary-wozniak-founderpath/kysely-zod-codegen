import { ExpressionNode } from './expression-node';
import { NodeType } from './node-type';

export class PropertyNode {
  readonly key: string;
  readonly type = NodeType.PROPERTY;
  readonly value: ExpressionNode;
  readonly description?: string

  constructor(key: string, value: ExpressionNode, description?: string) {
    this.key = key;
    this.value = value;
    this.description = description
  }
}
