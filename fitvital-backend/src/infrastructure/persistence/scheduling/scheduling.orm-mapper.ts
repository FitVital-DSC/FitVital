import { Scheduling } from '../../../modules/scheduling/entities/scheduling.entity.js';
import { SchedulingEntity } from './scheduling.orm-entity.js';
import { SchedulingStatus } from '../../../common/enum/scheduling-status.enum.js';

export class SchedulingMapper {
  static toDomain(schedulingEntity: SchedulingEntity): Scheduling {
    return new Scheduling(
      schedulingEntity.schedulingId,
      schedulingEntity.clientId,
      schedulingEntity.status as unknown as SchedulingStatus,
      schedulingEntity.createdAt,
      schedulingEntity.updatedAt ?? schedulingEntity.createdAt,
    );
  }

  static toPersistence(scheduling: Scheduling): SchedulingEntity {
    const schedulingEntity = new SchedulingEntity();

    schedulingEntity.schedulingId = scheduling.schedulingId;
    schedulingEntity.clientId = scheduling.clientId;
    schedulingEntity.status = scheduling.getStatus() as SchedulingEntity['status'];
    schedulingEntity.createdAt = scheduling.createdAt;
    schedulingEntity.updatedAt = scheduling.updatedAt;

    return schedulingEntity;
  }
}