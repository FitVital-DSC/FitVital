import { SchedulingStatus } from '../../../common/enum/scheduling-status.enum.js';
import { MonthlyPaymentStatus } from '../../../common/enum/monthlyPayment-status.enum.js';
import { SchedulingAlreadyConfirmedException } from '../../../common/exceptions/schedulingAlreadyConfirmed.exception.js';
import { StudentDefaulterException } from '../../../common/exceptions/studentDefaulter.exception.js';

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

  confirm(monthlyPaymentStatus: MonthlyPaymentStatus): void {
    if (this.status === SchedulingStatus.CONFIRMED) {
      throw new SchedulingAlreadyConfirmedException(this.schedulingId);
    }

    if (monthlyPaymentStatus !== MonthlyPaymentStatus.PAID) {
      throw new StudentDefaulterException();
    }

    this.status = SchedulingStatus.CONFIRMED;
    this.updatedAt = new Date();
  }
}