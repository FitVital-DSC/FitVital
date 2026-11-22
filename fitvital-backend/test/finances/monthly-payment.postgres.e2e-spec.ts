import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { Repository } from 'typeorm';
import { AppModule } from '../../src/app.module.js';
import { MonthlyPaymentStatus } from '../../src/common/enum/monthlyPayment-status.enum.js';
import { MonthlyPaymentOrmEntity } from '../../src/infrastructure/persistence/finances/monthlypayment.orm-entity.js';

describe('POST /finances/monthly-payments/:monthlyPaymentId/payment (PostgreSQL)', () => {
  let app: INestApplication<App>;
  let repository: Repository<MonthlyPaymentOrmEntity>;

  const paymentId = 'f6c1a8b7-2f08-4b6b-bf74-9c2c2d5a91b2';

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
    repository = app.get(getRepositoryToken(MonthlyPaymentOrmEntity));
  });

  beforeEach(async () => {
    await repository.delete({ monthlyPaymentId: paymentId });
    await repository.save(
      repository.create({
        monthlyPaymentId: paymentId,
        clientId: '4f7f5a1d-40c7-4e31-bd8e-5d4b8c5c6e8b',
        status: MonthlyPaymentStatus.PENDING,
        value: 120,
        datePayment: null,
      }),
    );
  });

  afterAll(async () => {
    await repository.delete({ monthlyPaymentId: paymentId });
    await app.close();
  });

  it('persists PAID in PostgreSQL', async () => {
    await request(app.getHttpServer())
      .post(`/finances/monthly-payments/${paymentId}/payment`)
      .send({ status: 'PAID' })
      .expect(200)
      .expect({
        monthlyPaymentId: paymentId,
        status: MonthlyPaymentStatus.PAID,
      });

    const persisted = await repository.findOneByOrFail({
      monthlyPaymentId: paymentId,
    });
    expect(persisted.status).toBe(MonthlyPaymentStatus.PAID);
    expect(persisted.datePayment).not.toBeNull();
  });

  it('rejects an invalid UUID', async () => {
    await request(app.getHttpServer())
      .post('/finances/monthly-payments/not-a-uuid/payment')
      .send({ status: 'PAID' })
      .expect(400);
  });

  it('rejects an invalid gateway status', async () => {
    await request(app.getHttpServer())
      .post(`/finances/monthly-payments/${paymentId}/payment`)
      .send({ status: 'UNKNOWN' })
      .expect(400);
  });
});
