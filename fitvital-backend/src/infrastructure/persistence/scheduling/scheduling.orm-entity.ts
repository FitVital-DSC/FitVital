import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { SchedulingStatus } from "../../../common/enum/scheduling-status.enum.js";

@Entity({ name: 'scheduling', schema: 'scheduling' })
export class SchedulingEntity {
    @PrimaryGeneratedColumn('uuid')
    schedulingId: string;

    @Column({ type: 'uuid' })
    clientId: string;

    @Column({ type: 'enum', enum: SchedulingStatus })
    status: SchedulingStatus;

    @CreateDateColumn({ type: 'timestamp with time zone' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone' })
    updatedAt: Date;
}