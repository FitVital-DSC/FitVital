import 'dotenv/config';
import { DataSource } from 'typeorm';
import { SchedulingEntity } from '../infrastructure/persistence/scheduling/scheduling.orm-entity.js';
import { MonthlyPaymentOrmEntity } from '../infrastructure/persistence/finances/monthlypayment.orm-entity.js';
import { CreateScheduling1793106356872 } from './migrations/1793106356872-CreateScheduling.js';
import { CreateMonthlyPayment1793106356873 } from './migrations/1793106356873-CreateMonthlyPayment.js';
import { AlignSchedulingPrimaryKey1793106356874 } from './migrations/1793106356874-AlignSchedulingPrimaryKey.js';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [SchedulingEntity, MonthlyPaymentOrmEntity],
  migrations: [
    CreateScheduling1793106356872,
    CreateMonthlyPayment1793106356873,
    AlignSchedulingPrimaryKey1793106356874,
  ],
  synchronize: false,
});