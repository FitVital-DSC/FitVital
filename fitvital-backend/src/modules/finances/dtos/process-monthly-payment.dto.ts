import { IsEnum } from 'class-validator';

export enum PaymentGatewayStatus {
  PAID = 'PAID',
  FAILED = 'FAILED',
}

export class ProcessMonthlyPaymentDto {
  @IsEnum(PaymentGatewayStatus)
  status: PaymentGatewayStatus;
}
