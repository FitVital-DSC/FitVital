import { MonthlyPayment } from '../../../modules/finances/entities/monthlypayment.entity.js';
import { MonthlyPaymentOrmEntity } from './monthlypayment.orm-entity.js';

export class MonthlyPaymentMapper {
  static toDomain(entity: MonthlyPaymentOrmEntity): MonthlyPayment {
    return new MonthlyPayment(
      entity.monthlyPaymentId,
      entity.clientId,
      entity.status,
      Number(entity.value),
      entity.datePayment,
      entity.createdAt,
      entity.updatedAt ?? entity.createdAt,
    );
  }

  static toPersistence(payment: MonthlyPayment): MonthlyPaymentOrmEntity {
    const entity = new MonthlyPaymentOrmEntity();
    entity.monthlyPaymentId = payment.monthlyPaymentId;
    entity.clientId = payment.clientId;
    entity.status = payment.status;
    entity.value = payment.value;
    entity.datePayment = payment.datePayment;
    entity.createdAt = payment.createdAt;
    entity.updatedAt = payment.updatedAt;
    return entity;
  }
}
