import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { Repository } from 'typeorm';
import { AppModule } from '../../src/app.module.js';
import { SchedulingStatus } from '../../src/common/enum/scheduling-status.enum.js';
import { MonthlyPaymentStatus } from '../../src/common/enum/monthlyPayment-status.enum.js';
import { SchedulingEntity } from '../../src/infrastructure/persistence/scheduling/scheduling.orm-entity.js';

// UC01 - POST /scheduling/:id/confirm-reservation

describe('POST /scheduling/:id/confirm-reservation (e2e)', async () => {
    let app: INestApplication<App>;
    let schedulingRepository: Repository<SchedulingEntity>;

    const createdSchedulingIds: string[] = [];

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        schedulingRepository = app.get(getRepositoryToken(SchedulingEntity));
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
                status: SchedulingStatus.PENDING,
            }),
        );
        createdSchedulingIds.push(scheduling.schedulingId);

        const response = await request(app.getHttpServer())
            .post(`/scheduling/${scheduling.schedulingId}/confirm`)
            .expect(200);

        expect(response.body).toEqual({
            schedulingId: scheduling.schedulingId,
            status: SchedulingStatus.CONFIRMED,
            message: 'Reservation confirmed successfully.',
        });

        const persisted = await schedulingRepository.findOneByOrFail({
            schedulingId: scheduling.schedulingId,
        });
        expect(persisted.status).toBe(SchedulingStatus.CONFIRMED);
    });
});
