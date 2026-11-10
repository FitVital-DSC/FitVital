import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthlyPaymentOrmEntity } from '../../infrastructure/persistence/finances/monthlypayment.orm-entity.js';
import { TypeOrmMonthlyPaymentRepository } from '../../infrastructure/persistence/finances/typeorm-monthlypayment.repository.js';
import { MonthlyPaymentController } from './controllers/monthlypayment.controller.js';
import { MonthlyPaymentService } from './services/monthlypayment.service.js';
import { MONTHLYPAYMENT_REPOSITORY } from './repositories/monthlypayment.repository.interface.js';

@Module({
  imports: [TypeOrmModule.forFeature([MonthlyPaymentOrmEntity])],
  controllers: [MonthlyPaymentController],
  providers: [
    MonthlyPaymentService,
    TypeOrmMonthlyPaymentRepository,
    {
      provide: MONTHLYPAYMENT_REPOSITORY,
      useExisting: TypeOrmMonthlyPaymentRepository,
    },
  ],
  exports: [MONTHLYPAYMENT_REPOSITORY],
})
export class FinancesModule {}
