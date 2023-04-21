import type { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { MikroORM } from '@mikro-orm/core';
import { OrderEntity } from './src/entities/OrderEntity';
import { OrderSummaryEntity } from './src/entities/OrderSummaryEntity';


(async () => {
  const orm = await MikroORM.init<PostgreSqlDriver>({
    entities: ['./dist/src/entities'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
    dbName: 'dummy-test-db',
    password: 'password',
    user: 'postgres',
    allowGlobalContext: true,
    type: 'postgresql',
  });

  const entity = orm.em.create(OrderEntity, {
    id: 4,
    summary: orm.em.create(OrderSummaryEntity, {
      orderId: 4,
      prop: '123'
    })
  });
  orm.em.persist(entity);
  await orm.em.flush();
})();
