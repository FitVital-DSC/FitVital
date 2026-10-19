export const MONTHLYPAYMENT_REPOSITORY = 'MONTHLYPAYMENT_REPOSITORY';

export interface MonthlyPaymentRepository {

    findBySchedulingId(schedulingId: string): Promise<any>;

}