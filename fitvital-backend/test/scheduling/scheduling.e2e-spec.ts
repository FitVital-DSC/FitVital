import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module.js'; // Ajustado com ../../ 
import { getRepositoryToken } from '@nestjs/typeorm';
import { SchedulingEntity } from '../../src/infrastructure/persistence/scheduling/scheduling.orm-entity.js'; // Ajustado com ../../
import { randomUUID } from 'crypto';
import { SchedulingStatus } from '../../src/common/enum/scheduling-status.enum.js'; // Ajustado com ../../
import { Repository } from 'typeorm';
import { MonthlyPaymentOrmEntity } from '../../src/infrastructure/persistence/finances/monthlypayment.orm-entity.js';
import { MonthlyPaymentStatus } from '../../src/common/enum/monthlyPayment-status.enum.js';

describe('SchedulingController (E2E)', () => {
  let app: INestApplication;
  let repository: Repository<SchedulingEntity>;
  let monthlyPaymentRepository: Repository<MonthlyPaymentOrmEntity>;
  const createdSchedulingIds: string[] = [];
  const createdMonthlyPaymentIds: string[] = [];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], 
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    
    await app.init();
    
    repository = moduleFixture.get(getRepositoryToken(SchedulingEntity));
    monthlyPaymentRepository = moduleFixture.get(
      getRepositoryToken(MonthlyPaymentOrmEntity),
    );
  });

  afterAll(async () => {
    if (createdMonthlyPaymentIds.length > 0) {
      await monthlyPaymentRepository.delete(createdMonthlyPaymentIds);
    }
    if (createdSchedulingIds.length > 0) {
      await repository.delete(createdSchedulingIds);
    }
    await app.close();
  });

  describe('POST /schedulings/confirm', () => {
    it('deve retornar 200 ao confirmar um agendamento válido e persistir no banco', async () => {
      const schedulingId = randomUUID();
      
      await repository.save({
        schedulingId: schedulingId,
        clientId: randomUUID(),
        status: SchedulingStatus.PENDING,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      createdSchedulingIds.push(schedulingId);

      const monthlyPayment = await monthlyPaymentRepository.save({
        monthlyPaymentId: randomUUID(),
        clientId: schedulingId,
        status: MonthlyPaymentStatus.PAID,
        value: 100,
        datePayment: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      createdMonthlyPaymentIds.push(monthlyPayment.monthlyPaymentId);

      const response = await request(app.getHttpServer())
        .post('/schedulings/confirm')
        .send({ schedulingId: schedulingId })
        .expect(200);

      expect(response.body.message).toBe('Scheduling confirmed successfully');

      const persistedData = await repository.findOne({ where: { schedulingId } });
      expect(persistedData.status).toBe(SchedulingStatus.CONFIRMED);
    });

    it('deve retornar 400 para UUID malformado', async () => {
      await request(app.getHttpServer())
        .post('/schedulings/confirm')
        .send({ schedulingId: 'id-invalido-123' })
        .expect(400);
    });

    it('deve rejeitar propriedade extra e devolver apenas o contrato público', async () => {
      const schedulingId = randomUUID();
      const scheduling = await repository.save({
        schedulingId,
        clientId: randomUUID(),
        status: SchedulingStatus.PENDING,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      createdSchedulingIds.push(scheduling.schedulingId);

      const monthlyPayment = await monthlyPaymentRepository.save({
        monthlyPaymentId: randomUUID(),
        clientId: scheduling.schedulingId,
        status: MonthlyPaymentStatus.PAID,
        value: 100,
        datePayment: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      createdMonthlyPaymentIds.push(monthlyPayment.monthlyPaymentId);

      const response = await request(app.getHttpServer())
        .post('/schedulings/confirm')
        .send({ schedulingId, internalNote: 'não deve vazar' })
        .expect(200);

      expect(response.body).toEqual({
        schedulingId,
        message: 'Scheduling confirmed successfully',
      });
      expect(response.body).not.toHaveProperty('status');
      expect(response.body).not.toHaveProperty('internalNote');
    });

    it('deve retornar erro quando o agendamento não existir', async () => {
      await request(app.getHttpServer())
        .post('/schedulings/confirm')
        .send({ schedulingId: randomUUID() })
        .expect(500); 
    });
  });
});