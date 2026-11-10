import { MonthlyPayment } from '../entities/monthlypayment.entity.js';

export const MONTHLYPAYMENT_REPOSITORY = 'MONTHLYPAYMENT_REPOSITORY';

export interface MonthlyPaymentRepository {
    findById(monthlyPaymentId: string): Promise<MonthlyPayment | null>;
    findBySchedulingId(schedulingId: string): Promise<MonthlyPayment | null>;
    save(monthlyPayment: MonthlyPayment): Promise<MonthlyPayment>;
}