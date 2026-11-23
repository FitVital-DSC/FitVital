import { ConfirmReservationResponseDto } from '../dtos/confirm-reservation-response.dto.js';

export class ConfirmReservationResponseMapper {
  static toResponse(schedulingId: string): ConfirmReservationResponseDto {
    return {
      schedulingId,
      message: 'Scheduling confirmed successfully',
    };
  }
}
