import { Scheduling } from '../entities/scheduling.entity.js';
import { ListSchedulingResponseDto } from '../dtos/list-scheduling-response.dto.js';

export class ListSchedulingResponseMapper {
  static toResponse(scheduling: Scheduling): ListSchedulingResponseDto {
    return {
      schedulingId: scheduling.schedulingId,
      status: scheduling.getStatus(),
      createdAt: scheduling.createdAt,
      updatedAt: scheduling.updatedAt,
    };
  }
}
