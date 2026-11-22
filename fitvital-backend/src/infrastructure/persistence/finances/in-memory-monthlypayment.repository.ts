import { Injectable } from '@nestjs/common';
import { MonthlyPayment } from '../../../modules/finances/entities/monthlypayment.entity.js';
import { MonthlyPaymentRepository } from '../../../modules/finances/repositories/monthlypayment.repository.interface.js';

@Injectable()
export class InMemoryMonthlyPaymentRepository implements MonthlyPaymentRepository {
  private readonly payments = new Map<string, MonthlyPayment>();

  seed(payment: MonthlyPayment): void {
    this.payments.set(payment.monthlyPaymentId, payment);
  }

  clear(): void {
    this.payments.clear();
  }

  async findById(monthlyPaymentId: string): Promise<MonthlyPayment | null> {
    return this.payments.get(monthlyPaymentId) ?? null;
  }

  async findBySchedulingId(schedulingId: string): Promise<MonthlyPayment | null> {
    for (const payment of this.payments.values()) {
      if (payment.clientId === schedulingId) {
        return payment;
      }
    }
    return null;
  }

  async save(payment: MonthlyPayment): Promise<MonthlyPayment> {
    this.payments.set(payment.monthlyPaymentId, payment);
    return payment;
  }
}
