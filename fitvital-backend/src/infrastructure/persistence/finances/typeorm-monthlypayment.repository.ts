import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MonthlyPayment } from '../../../modules/finances/entities/monthlypayment.entity.js';
import { MonthlyPaymentRepository } from '../../../modules/finances/repositories/monthlypayment.repository.interface.js';
import { MonthlyPaymentOrmEntity } from './monthlypayment.orm-entity.js';
import { MonthlyPaymentMapper } from './monthlypayment.orm-mapper.js';

@Injectable()
export class TypeOrmMonthlyPaymentRepository implements MonthlyPaymentRepository {
  constructor(
    @InjectRepository(MonthlyPaymentOrmEntity)
    private readonly repository: Repository<MonthlyPaymentOrmEntity>,
  ) {}

  async findById(monthlyPaymentId: string): Promise<MonthlyPayment | null> {
    const entity = await this.repository.findOne({ where: { monthlyPaymentId } });
    return entity ? MonthlyPaymentMapper.toDomain(entity) : null;
  }

  async findBySchedulingId(schedulingId: string): Promise<MonthlyPayment | null> {
    const entity = await this.repository.findOne({
      where: { clientId: schedulingId },
    });
    return entity ? MonthlyPaymentMapper.toDomain(entity) : null;
  }

  async save(payment: MonthlyPayment): Promise<MonthlyPayment> {
    const entity = await this.repository.save(
      MonthlyPaymentMapper.toPersistence(payment),
    );
    return MonthlyPaymentMapper.toDomain(entity);
  }
}
