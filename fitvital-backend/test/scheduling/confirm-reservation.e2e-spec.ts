import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { Repository } from 'typeorm';
import { AppModule } from '../../src/app.module.js';
import { SchedulingStatus } from '../../src/common/enum/scheduling-status.enum.js';
import { SchedulingEntity } from '../../src/infrastructure/persistence/scheduling/scheduling.orm-entity.js';
import { MonthlyPaymentOrmEntity } from '../../src/infrastructure/persistence/finances/monthlypayment.orm-entity.js';
import { MonthlyPaymentStatus } from '../../src/common/enum/monthlyPayment-status.enum.js';

// UC01 - POST /schedulings/confirm

describe('POST /scheduling/:id/confirm-reservation (e2e)', async () => {
    let app: INestApplication<App>;
    let schedulingRepository: Repository<SchedulingEntity>;
    let monthlyPaymentRepository: Repository<MonthlyPaymentOrmEntity>;

    const createdSchedulingIds: string[] = [];

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        schedulingRepository = app.get(getRepositoryToken(SchedulingEntity));
        monthlyPaymentRepository = app.get(getRepositoryToken(MonthlyPaymentOrmEntity));
    });

    afterAll(async () => {
        if (createdSchedulingIds.length > 0) {
            await schedulingRepository.delete(createdSchedulingIds);
        }
        await app.close();
    });

    it('confirm reservation with valid scheduling ID and paid monthly payment', async () => {
        const scheduling = await schedulingRepository.save(
            schedulingRepository.create({
                schedulingId: randomUUID(),
                clientId: randomUUID(),
                status: SchedulingStatus.PENDING,
            }),
        );
        createdSchedulingIds.push(scheduling.schedulingId);

        await monthlyPaymentRepository.save({
            monthlyPaymentId: randomUUID(),
            clientId: scheduling.schedulingId,
            status: MonthlyPaymentStatus.PAID,
            value: 100,
            datePayment: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const response = await request(app.getHttpServer())
            .post('/schedulings/confirm')
            .send({ schedulingId: scheduling.schedulingId })
            .expect(200);

        expect(response.body).toEqual({
            schedulingId: scheduling.schedulingId,
            message: 'Scheduling confirmed successfully',
        });

        const persisted = await schedulingRepository.findOneByOrFail({
            schedulingId: scheduling.schedulingId,
        });
        expect(persisted.status).toBe(SchedulingStatus.CONFIRMED);
    });
});
