import { SchedulingStats } from '../../../common/enum/scheduling-stats.enum.js';
import { MonthlyPaymentStats } from '../../../common/enum/monthlyPayment-stats.enum.js';

export class Scheduling {
  private status: SchedulingStats;

  constructor(
    public readonly schedulingId: string,
    public readonly clientId: string,
    status: SchedulingStats,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {
    this.status = status;
  }

  getStatus(): SchedulingStats {
    return this.status;
  }

  confirmar(mensalidadeStatus: MonthlyPaymentStats): void {
    if (this.status === SchedulingStats.CONFIRMED) {
      // agendamento já confirmado
      return;
    }

    if (mensalidadeStatus !== MonthlyPaymentStats.PAID) {
      // mensalidade não paga (inadimplente)
    }

    this.status = SchedulingStats.CONFIRMED;
    this.updatedAt = new Date();
  }
}