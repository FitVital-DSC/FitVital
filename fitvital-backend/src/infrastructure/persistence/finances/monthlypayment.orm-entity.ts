import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MonthlyPaymentStatus } from '../../../common/enum/monthlyPayment-status.enum.js';

@Entity({ name: 'monthly_payment', schema: 'finances' })
export class MonthlyPaymentOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  monthlyPaymentId: string;

  @Column({ type: 'uuid' })
  clientId: string;

  @Column({ type: 'enum', enum: MonthlyPaymentStatus })
  status: MonthlyPaymentStatus;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  value: number;

  @Column({ type: 'timestamp with time zone', nullable: true })
  datePayment: Date | null;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;
}
