import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { SCHEDULING_REPOSITORY } from '../repositories/scheduling.repository.interface.js';
import type { MonthlyPaymentRepository } from '../../finances/repositories/monthlypayment.repository.interface.js';
import type { SchedulesRepository } from '../repositories/scheduling.repository.interface.js';

export class SchedulingNotFoundException extends Error {
  constructor(schedulingId: string) {
    super(`Scheduling ${schedulingId} not found`);
    this.name = 'SchedulingNotFoundException';
  }
}

@Injectable()
export class SchedulingService { 
  constructor(
    @Inject(SCHEDULING_REPOSITORY)
    private readonly schedulingRepository: SchedulesRepository,
  ) {}

  async confirmReservation(schedulingId: string): Promise<void> {
    // busca no repositorio
    const scheduling = await this.schedulingRepository.findById(schedulingId);
    // tratar ausencia do agendamento
    if (!scheduling) {
      throw new SchedulingNotFoundException(schedulingId);
    }

    throw new Error('Not implemented');
  }
}