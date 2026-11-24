import { SchedulingStatus } from '../../../common/enum/scheduling-status.enum.js';

export class ListSchedulingResponseDto {
  schedulingId!: string;
  status!: SchedulingStatus;
  createdAt!: Date;
  updatedAt!: Date;
}
