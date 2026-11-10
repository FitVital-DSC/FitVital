import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MonthlyPaymentStatus } from '../../../common/enum/monthlyPayment-status.enum.js';
import { MONTHLYPAYMENT_REPOSITORY } from '../repositories/monthlypayment.repository.interface.js';
import type { MonthlyPaymentRepository } from '../repositories/monthlypayment.repository.interface.js';
import { PaymentGatewayStatus } from '../dtos/process-monthly-payment.dto.js';

@Injectable()
export class MonthlyPaymentService {
  constructor(
    @Inject(MONTHLYPAYMENT_REPOSITORY)
    private readonly repository: MonthlyPaymentRepository,
  ) {}

  async processPayment(
    monthlyPaymentId: string,
    gatewayStatus: PaymentGatewayStatus,
  ): Promise<{ monthlyPaymentId: string; status: MonthlyPaymentStatus }> {
    const payment = await this.repository.findById(monthlyPaymentId);
    if (!payment) {
      throw new NotFoundException(`Monthly payment ${monthlyPaymentId} not found`);
    }

    if (gatewayStatus === PaymentGatewayStatus.PAID) {
      payment.processPayment();
      await this.repository.save(payment);
    }

    return {
      monthlyPaymentId: payment.monthlyPaymentId,
      status: payment.status,
    };
  }
}
