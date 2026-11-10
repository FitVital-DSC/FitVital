import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { Repository } from 'typeorm';
import { AppModule } from '../../src/app.module.js';
import { MonthlyPaymentStatus } from '../../src/common/enum/monthlyPayment-status.enum.js';
import { MonthlyPaymentOrmEntity } from '../../src/infrastructure/persistence/finances/monthlypayment.orm-entity.js';

describe('POST /finances/monthly-payments/:monthlyPaymentId/payment (e2e)', () => {
  let app: INestApplication<App>;
  let paymentRepository: Repository<MonthlyPaymentOrmEntity>;
  const monthlyPaymentId = randomUUID();

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
    paymentRepository = app.get(getRepositoryToken(MonthlyPaymentOrmEntity));

    await paymentRepository.save(
      paymentRepository.create({
        monthlyPaymentId,
        clientId: randomUUID(),
        status: MonthlyPaymentStatus.PENDING,
        value: 120,
        datePayment: null,
      }),
    );
  });

  afterAll(async () => {
    await paymentRepository.delete(monthlyPaymentId);
    await app.close();
  });

  it('marks the monthly payment as paid', async () => {
    await request(app.getHttpServer())
      .post(`/finances/monthly-payments/${monthlyPaymentId}/payment`)
      .send({ status: 'PAID' })
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual({
          monthlyPaymentId,
          status: MonthlyPaymentStatus.PAID,
        });
      });

    const persisted = await paymentRepository.findOneByOrFail({
      monthlyPaymentId,
    });
    expect(persisted.status).toBe(MonthlyPaymentStatus.PAID);
    expect(persisted.datePayment).not.toBeNull();
  });
});
