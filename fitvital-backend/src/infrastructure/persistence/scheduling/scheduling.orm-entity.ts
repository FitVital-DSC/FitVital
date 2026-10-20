import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm/browser";

enum schedulingStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
}

@Entity({ name: 'scheduling', schema: 'scheduling' })

export class SchedulingEntity {
    @PrimaryGeneratedColumn('uuid')
    schedulingId: string;

    @Column({ type: 'uuid' })
    clientId: string;

    @Column({ type: 'enum', enum: schedulingStatus })
    status: schedulingStatus;

    @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @DeleteDateColumn({ type: 'timestamp with time zone', nullable: true })
    updatedAt: Date | null;
}

