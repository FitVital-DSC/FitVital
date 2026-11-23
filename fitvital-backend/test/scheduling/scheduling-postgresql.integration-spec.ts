import 'dotenv/config';
import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { DataSource, Repository } from 'typeorm';
import { SchedulingEntity } from '../../src/infrastructure/persistence/scheduling/scheduling.orm-entity.js';
import { SchedulingMapper } from '../../src/infrastructure/persistence/scheduling/scheduling.orm-mapper.js';
import { TypeOrmSchedulingRepository } from '../../src/infrastructure/persistence/scheduling/typeorm-scheduling.repository.js';
import { Scheduling } from '../../src/modules/scheduling/entities/scheduling.entity.js';
import { SchedulingStatus } from '../../src/common/enum/scheduling-status.enum.js';
import { CreateScheduling1793106356872 } from '../../src/database/migrations/1793106356872-CreateScheduling.js';
import { AlignSchedulingPrimaryKey1793106356874 } from '../../src/database/migrations/1793106356874-AlignSchedulingPrimaryKey.js';

describe('Scheduling PostgreSQL integration', () => {
  let dataSource: DataSource | undefined;
  let ormRepository: Repository<SchedulingEntity>;

  beforeAll(async () => {
    dataSource = new DataSource({
      type: 'postgres',
      host: process.env.TEST_DB_HOST ?? 'localhost',
      port: Number(process.env.TEST_DB_PORT ?? 5434),
      username: process.env.TEST_DB_USERNAME ?? 'fitvital_test_user',
      password: process.env.TEST_DB_PASSWORD ?? 'fitvital_test_password',
      database: process.env.TEST_DB_NAME ?? 'fitvital_test_db',
      entities: [SchedulingEntity],
      migrations: [
        CreateScheduling1793106356872,
        AlignSchedulingPrimaryKey1793106356874,
      ],
      synchronize: false,
    });

    await dataSource.initialize();
    await dataSource.runMigrations();
    ormRepository = dataSource.getRepository(SchedulingEntity);
  });

  afterAll(async () => {
    if (dataSource?.isInitialized) {
      await dataSource.destroy();
    }
  });

  it('persists and retrieves a scheduling through the real TypeORM adapter', async () => {
    const identity = await dataSource!.query(
      'SELECT current_database() AS name, current_user AS usuario',
    );
    expect(identity[0]).toEqual({
      name: 'fitvital_test_db',
      usuario: 'fitvital_test_user',
    });

    const repository = new TypeOrmSchedulingRepository(ormRepository);
    const scheduling = new Scheduling(
      randomUUID(),
      randomUUID(),
      SchedulingStatus.PENDING,
      new Date(),
      new Date(),
    );

    const saved = await repository.save(scheduling);
    const persisted = await ormRepository.findOneByOrFail({
      schedulingId: scheduling.schedulingId,
    });

    expect(saved.schedulingId).toBe(scheduling.schedulingId);
    expect(persisted.schedulingId).toBe(scheduling.schedulingId);
    expect(persisted.clientId).toBe(scheduling.clientId);
    expect(persisted.status).toBe(scheduling.getStatus());
    expect(SchedulingMapper.toDomain(persisted).schedulingId).toBe(scheduling.schedulingId);
  });
});
