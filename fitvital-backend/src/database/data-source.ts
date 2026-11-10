import 'dotenv/config';
import { DataSource } from 'typeorm';
import { SchedulingEntity } from '../infrastructure/persistence/scheduling/scheduling.orm-entity.js';
import { MonthlyPaymentOrmEntity } from '../infrastructure/persistence/finances/monthlypayment.orm-entity.js';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [SchedulingEntity, MonthlyPaymentOrmEntity],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});