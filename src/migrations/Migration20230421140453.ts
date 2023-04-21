import { Migration } from '@mikro-orm/migrations';

export class Migration20230421140453 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "orders" ("id" serial primary key);');

    this.addSql('create table "order_summaries" ("orderId" int not null, "prop" varchar(255) not null, constraint "order_summaries_pkey" primary key ("orderId"));');

    this.addSql('alter table "order_summaries" add constraint "order_summaries_orderId_foreign" foreign key ("orderId") references "orders" ("id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "order_summaries" drop constraint "order_summaries_orderId_foreign";');

    this.addSql('drop table if exists "orders" cascade;');

    this.addSql('drop table if exists "order_summaries" cascade;');
  }

}
