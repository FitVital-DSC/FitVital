import { Body, Controller, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { IsUUID } from 'class-validator';
import { ProcessMonthlyPaymentDto } from '../dtos/process-monthly-payment.dto.js';
import { MonthlyPaymentService } from '../services/monthlypayment.service.js';

class MonthlyPaymentIdParam {
  @IsUUID()
  monthlyPaymentId: string;
}

@Controller('finances/monthly-payments')
export class MonthlyPaymentController {
  constructor(private readonly service: MonthlyPaymentService) {}

  @Post(':monthlyPaymentId/payment')
  @HttpCode(HttpStatus.OK)
  processPayment(
    @Param() params: MonthlyPaymentIdParam,
    @Body() dto: ProcessMonthlyPaymentDto,
  ) {
    return this.service.processPayment(params.monthlyPaymentId, dto.status);
  }
}
