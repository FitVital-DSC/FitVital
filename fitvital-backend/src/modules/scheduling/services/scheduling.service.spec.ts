import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    SchedulingNotFoundException,
    SchedulingService,
} from './scheduling.service.js';
import { SCHEDULING_REPOSITORY } from '../repositories/scheduling.repository.interface.js';
import { MONTHLYPAYMENT_REPOSITORY } from '../../finances/repositories/monthlypayment.repository.interface.js';

describe('SchedulingService', () => {
    let service: SchedulingService;
    let schedulingRepository: {
        findById: ReturnType<typeof vi.fn>;
        save: ReturnType<typeof vi.fn>;
    };
    let monthlyPaymentRepository: {
        findBySchedulingId: ReturnType<typeof vi.fn>;
    };

    beforeEach(async () => {
        const schedulingRepositoryMock = {
            findById: vi.fn(),
            save: vi.fn(),
        };
        const monthlyPaymentRepositoryMock = {
            findBySchedulingId: vi.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SchedulingService,
                {
                    provide: SCHEDULING_REPOSITORY,
                    useValue: schedulingRepositoryMock,
                },
                {
                    provide: MONTHLYPAYMENT_REPOSITORY,
                    useValue: monthlyPaymentRepositoryMock,
                },
            ],
        }).compile();

        service = module.get<SchedulingService>(SchedulingService);
        schedulingRepository = module.get(SCHEDULING_REPOSITORY);
        monthlyPaymentRepository = module.get(MONTHLYPAYMENT_REPOSITORY);
    });

    it('deve lancar excecao quando o agendamento nao existir', async () => {
        schedulingRepository.findById.mockResolvedValueOnce(null);

        await expect(
            service.confirmReservation('schedulingId'),
        ).rejects.toThrow(SchedulingNotFoundException);
    });

    it('deve lancar excecao quando a mensalidade nao existir', async () => {
        schedulingRepository.findById.mockResolvedValueOnce({ id: 'scheduling-1' });
        monthlyPaymentRepository.findBySchedulingId.mockResolvedValueOnce(null);

        await expect(
            service.confirmReservation('scheduling-1'),
        ).rejects.toThrow(Error);
    });
});