import { MonthlyPaymentStatus } from '../../../common/enum/monthlyPayment-status.enum.js';
import { MonthlyPayment } from '../entities/monthlypayment.entity.js';
import {
  MonthlyPaymentRepository,
} from '../repositories/monthlypayment.repository.interface.js';
import {
  MonthlyPaymentService,
} from './monthlypayment.service.js';
import { PaymentGatewayStatus } from '../dtos/process-monthly-payment.dto.js';

describe('MonthlyPaymentService', () => {
  const payment = () =>
    new MonthlyPayment(
      'f6c1a8b7-2f08-4b6b-bf74-9c2c2d5a91b2',
      '4f7f5a1d-40c7-4e31-bd8e-5d4b8c5c6e8b',
      MonthlyPaymentStatus.PENDING,
      120,
      null,
      new Date('2026-11-10T12:00:00.000Z'),
      new Date('2026-11-10T12:00:00.000Z'),
    );

  it('marks a pending payment as paid', async () => {
    const stored = payment();
    const repository: MonthlyPaymentRepository = {
      findById: vi.fn().mockResolvedValue(stored),
      findBySchedulingId: vi.fn(),
      save: vi.fn().mockImplementation(async (value) => value),
    };

    const result = await new MonthlyPaymentService(repository).processPayment(
      stored.monthlyPaymentId,
      PaymentGatewayStatus.PAID,
    );

    expect(result.status).toBe(MonthlyPaymentStatus.PAID);
    expect(stored.datePayment).not.toBeNull();
    expect(repository.save).toHaveBeenCalledWith(stored);
  });

  it('keeps the payment pending when the gateway reports a failure', async () => {
    const stored = payment();
    const repository: MonthlyPaymentRepository = {
      findById: vi.fn().mockResolvedValue(stored),
      findBySchedulingId: vi.fn(),
      save: vi.fn(),
    };

    const result = await new MonthlyPaymentService(repository).processPayment(
      stored.monthlyPaymentId,
      PaymentGatewayStatus.FAILED,
    );

    expect(result.status).toBe(MonthlyPaymentStatus.PENDING);
    expect(repository.save).not.toHaveBeenCalled();
  });

  it('rejects an unknown monthly payment', async () => {
    const repository: MonthlyPaymentRepository = {
      findById: vi.fn().mockResolvedValue(null),
      findBySchedulingId: vi.fn(),
      save: vi.fn(),
    };

    await expect(
      new MonthlyPaymentService(repository).processPayment(
        'f6c1a8b7-2f08-4b6b-bf74-9c2c2d5a91b2',
        PaymentGatewayStatus.PAID,
      ),
    ).rejects.toThrow('Monthly payment');
  });
});
