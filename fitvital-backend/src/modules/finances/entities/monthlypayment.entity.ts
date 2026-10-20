import { MonthlyPaymentStatus } from '../../../common/enum/monthlyPayment-status.enum.js';

export class MonthlyPayment {
  constructor(
    public monthlyPaymentId: string,
    public clientId: string,
    public status: MonthlyPaymentStatus,
    public value: number,
    public datePayment: Date | null,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}