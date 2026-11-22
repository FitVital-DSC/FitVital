import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { MonthlyPaymentStatus } from '../../src/common/enum/monthlyPayment-status.enum.js';
import { FinancesModule } from '../../src/modules/finances/finances.module.js';
import { MONTHLYPAYMENT_REPOSITORY } from '../../src/modules/finances/repositories/monthlypayment.repository.interface.js';
import { InMemoryMonthlyPaymentRepository } from '../../src/infrastructure/persistence/finances/in-memory-monthlypayment.repository.js';
import { MonthlyPayment } from '../../src/modules/finances/entities/monthlypayment.entity.js';
import { TypeOrmMonthlyPaymentRepository } from '../../src/infrastructure/persistence/finances/typeorm-monthlypayment.repository.js';
import { MonthlyPaymentOrmEntity } from '../../src/infrastructure/persistence/finances/monthlypayment.orm-entity.js';

describe('UC03 integrated backend', () => {
  let app: INestApplication<App>;
  let repository: InMemoryMonthlyPaymentRepository;

  beforeAll(async () => {
    repository = new InMemoryMonthlyPaymentRepository();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FinancesModule],
    })
      .overrideProvider(getRepositoryToken(MonthlyPaymentOrmEntity))
      .useValue({})
      .overrideProvider(TypeOrmMonthlyPaymentRepository)
      .useValue(repository)
      .overrideProvider(MONTHLYPAYMENT_REPOSITORY)
      .useValue(repository)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
  });

  beforeEach(() => {
    repository.clear();
  });

  afterAll(async () => {
    await app.close();
  });

  it('processes PAID through the real controller, service and in-memory repository', async () => {
    const payment = new MonthlyPayment(
      'f6c1a8b7-2f08-4b6b-bf74-9c2c2d5a91b2',
      '4f7f5a1d-40c7-4e31-bd8e-5d4b8c5c6e8b',
      MonthlyPaymentStatus.PENDING,
      120,
      null,
      new Date('2026-11-10T12:00:00.000Z'),
      new Date('2026-11-10T12:00:00.000Z'),
    );
    repository.seed(payment);

    await request(app.getHttpServer())
      .post(`/finances/monthly-payments/${payment.monthlyPaymentId}/payment`)
      .send({ status: 'PAID' })
      .expect(200)
      .expect({
        monthlyPaymentId: payment.monthlyPaymentId,
        status: MonthlyPaymentStatus.PAID,
      });

    const stored = await repository.findById(payment.monthlyPaymentId);
    expect(stored?.status).toBe(MonthlyPaymentStatus.PAID);
    expect(stored?.datePayment).not.toBeNull();
  });

  it('rejects an invalid UUID before invoking the service', async () => {
    await request(app.getHttpServer())
      .post('/finances/monthly-payments/not-a-uuid/payment')
      .send({ status: 'PAID' })
      .expect(400);
  });

  it('rejects an invalid gateway status', async () => {
    await request(app.getHttpServer())
      .post('/finances/monthly-payments/f6c1a8b7-2f08-4b6b-bf74-9c2c2d5a91b2/payment')
      .send({ status: 'UNKNOWN' })
      .expect(400);
  });
});
