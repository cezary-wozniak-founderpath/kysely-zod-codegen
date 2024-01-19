import {
  ArrayExpressionNode,
  ColumnType,
  IdentifierNode,
  ObjectExpressionNode,
  PropertyNode,
  UnionExpressionNode,
} from '../../ast';
import { Adapter } from '../../core';
import {
  JSON_ARRAY_DEFINITION,
  JSON_OBJECT_DEFINITION,
  JSON_PRIMITIVE_DEFINITION,
  JSON_VALUE_DEFINITION,
} from '../../transformer';

export class BigqueryAdapter extends Adapter {
  override readonly defaultSchema = 'default';
  override readonly defaultScalar = new IdentifierNode('string');
  override readonly definitions = {
    Decimal: new ColumnType(
      new IdentifierNode('string'),
      new UnionExpressionNode([
        new IdentifierNode('string'),
        new IdentifierNode('number'),
      ]),
    ),
    Geometry: new UnionExpressionNode([
      new IdentifierNode('LineString'),
      new IdentifierNode('Point'),
      new IdentifierNode('Polygon'),
      new ArrayExpressionNode(new IdentifierNode('Geometry')),
    ]),
    Json: new ColumnType(
      new IdentifierNode('JsonValue'),
      new IdentifierNode('string'),
      new IdentifierNode('string'),
    ),
    JsonArray: JSON_ARRAY_DEFINITION,
    JsonObject: JSON_OBJECT_DEFINITION,
    JsonPrimitive: JSON_PRIMITIVE_DEFINITION,
    JsonValue: JSON_VALUE_DEFINITION,
    LineString: new ArrayExpressionNode(new IdentifierNode('Point')),
    Point: new ObjectExpressionNode([
      new PropertyNode('x', new IdentifierNode('number')),
      new PropertyNode('y', new IdentifierNode('number')),
    ]),
    Polygon: new ArrayExpressionNode(new IdentifierNode('LineString')),
  };
  // These types have been found through experimentation in Adminer.
  override readonly scalars = {
    array: new IdentifierNode('JsonArray'),
    bignumeric: new IdentifierNode('number'),
    bool: new IdentifierNode('number'),
    bytes: new IdentifierNode('Buffer'),
    date: new IdentifierNode('Date'),
    datetime: new IdentifierNode('Date'),
    float64: new IdentifierNode('number'),
    geography: new IdentifierNode('Geometry'),
    int64: new IdentifierNode('number'),
    interval: new IdentifierNode('number'),
    json: new IdentifierNode('Json'),
    numeric: new IdentifierNode('number'),
    string: new IdentifierNode('string'),
    struct: new IdentifierNode('string'),
    time: new IdentifierNode('Date'),
    timestamp: new IdentifierNode('Date'),
  };
}
