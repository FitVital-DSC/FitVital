import { Scheduling } from '../../../domain/scheduling/scheduling.js';
import { SchedulingEntity } from './scheduling.orm-entity.js';

export class SchedulingMapper {
    static toDomain(schedulingEntity: SchedulingEntity): Scheduling {
        return new Scheduling(
            schedulingEntity.schedulingId,
            schedulingEntity.clientId,
            schedulingEntity.status,
            schedulingEntity.createdAt,
            schedulingEntity.updatedAt
        );
    }
    
    static toPersistence(scheduling: Scheduling): SchedulingEntity {
        const schedulingEntity = new SchedulingEntity();
        schedulingEntity.schedulingId = scheduling.schedulingId;
        schedulingEntity.clientId = scheduling.clientId;
        schedulingEntity.status = scheduling.getstatus;
        schedulingEntity.createdAt = scheduling.createdAt;
        schedulingEntity.updatedAt = scheduling.updatedAt;
        return schedulingEntity;
    }
}