import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module.js'; // Ajustado com ../../ 
import { getRepositoryToken } from '@nestjs/typeorm';
import { SchedulingEntity } from '../../src/infrastructure/persistence/scheduling/scheduling.orm-entity.js'; // Ajustado com ../../
import { randomUUID } from 'crypto';
import { SchedulingStatus } from '../../src/common/enum/scheduling-status.enum.js'; // Ajustado com ../../

describe('SchedulingController (E2E)', () => {
  let app: INestApplication;
  let repository: any;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], 
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    
    await app.init();
    
    repository = moduleFixture.get(getRepositoryToken(SchedulingEntity));
  });

  afterAll(async () => {
    await repository.clear({});
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

    it('deve retornar erro quando o agendamento não existir', async () => {
      await request(app.getHttpServer())
        .post('/schedulings/confirm')
        .send({ schedulingId: randomUUID() })
        .expect(500); 
    });
  });
});