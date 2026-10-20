import { SchedulingStatus } from '../../../common/enum/scheduling-status.enum.js';
import { MonthlyPaymentStatus } from '../../../common/enum/monthlyPayment-status.enum.js';

export class Scheduling {
  private status: SchedulingStatus;

  constructor(
    public readonly schedulingId: string,
    public readonly clientId: string,
    status: SchedulingStatus,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {
    this.status = status;
  }

  getStatus(): SchedulingStatus {
    return this.status;
  }

  confirmar(mensalidadeStatus: MonthlyPaymentStatus): void {
    if (this.status === SchedulingStatus.CONFIRMED) {
      // agendamento já confirmado
      return;
    }

    if (mensalidadeStatus !== MonthlyPaymentStatus.PAID) {
      // mensalidade não paga (inadimplente)
    }

    this.status = SchedulingStatus.CONFIRMED;
    this.updatedAt = new Date();
  }
}