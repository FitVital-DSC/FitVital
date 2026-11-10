import { Injectable, Inject } from '@nestjs/common';
import { SCHEDULING_REPOSITORY } from '../repositories/scheduling.repository.interface.js';
import type { MonthlyPaymentRepository } from '../../finances/repositories/monthlypayment.repository.interface.js';
import { MONTHLYPAYMENT_REPOSITORY } from '../../finances/repositories/monthlypayment.repository.interface.js';
import type { SchedulesRepository } from '../repositories/scheduling.repository.interface.js';

export class SchedulingNotFoundException extends Error {
  constructor(schedulingId: string) {
    super(`Scheduling ${schedulingId} not found`);
    this.name = 'SchedulingNotFoundException';
  }
}

export class MonthlyPaymentNotFoundException extends Error {
  constructor(schedulingId: string) {
    super(`Monthly payment not found for scheduling ${schedulingId}`);
    this.name = 'MonthlyPaymentNotFoundException';
  }
}

@Injectable()
export class SchedulingService { 
  constructor(
    @Inject(SCHEDULING_REPOSITORY)
    private readonly schedulingRepository: SchedulesRepository,
    @Inject(MONTHLYPAYMENT_REPOSITORY)
    private readonly monthlyPaymentRepository: MonthlyPaymentRepository,
  ) {}

  async confirmReservation(schedulingId: string): Promise<void> {
    const scheduling = await this.schedulingRepository.findById(schedulingId);
    if (!scheduling) {
      throw new SchedulingNotFoundException(schedulingId);
    }

    const monthlyPayment = await this.monthlyPaymentRepository.findBySchedulingId(schedulingId);
    if (!monthlyPayment) {
      throw new MonthlyPaymentNotFoundException(schedulingId);
    }

    scheduling.confirm(monthlyPayment.status);
    await this.schedulingRepository.save(scheduling);
  }
}