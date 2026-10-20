import { SchedulingStatus } from '../../../common/enum/scheduling-status.enum.js';

export class ConfirmReservationResponseDto {
  schedulingId: string;
  status: SchedulingStatus;
  message: string;
}