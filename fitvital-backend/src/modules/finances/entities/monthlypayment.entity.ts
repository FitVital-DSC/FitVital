import { MonthlyPaymentStats } from '../../../common/enum/monthlyPayment-stats.enum.js';

export class MonthlyPayment {
  constructor(
    public monthlyPaymentId: string,
    public clientId: string,
    public stats: MonthlyPaymentStats,
    public value: number,
    public datePayment: Date | null,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}