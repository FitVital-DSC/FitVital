import { SchedulingStats } from '../../../common/enum/scheduling-stats.enum.js';

export class ConfirmReservationResponseDto {
  schedulingId: string;
  stats: SchedulingStats;
  message: string;
}