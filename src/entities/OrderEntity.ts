import { Cascade, Entity, OneToOne, PrimaryKey } from '@mikro-orm/core';
import { OrderSummaryEntity } from './OrderSummaryEntity';


@Entity({ tableName: 'orders' })
export class OrderEntity {
  @PrimaryKey()
  id: number;

  @OneToOne(() => OrderSummaryEntity, 'orderId', {
    cascade: [Cascade.ALL],
    eager: true
  })
  public summary!: OrderSummaryEntity;
}