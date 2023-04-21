import { Entity, OneToOne, Property } from '@mikro-orm/core';
import { OrderEntity } from './OrderEntity';


@Entity({ tableName: 'order_summaries' })
export class OrderSummaryEntity {
  @OneToOne({
    entity: () => OrderEntity,
    fieldName: 'orderId',
    onDelete: 'cascade',
    primary: true,
    mapToPk: true
  })
  public orderId!: number;

  @Property()
  prop: string;
}