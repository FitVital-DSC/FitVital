import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { SchedulingService } from '../services/scheduling.service.js';
import { IsUUID } from 'class-validator';
import { ConfirmReservationResponseDto } from '../dtos/confirm-reservation-response.dto.js';
import { ConfirmReservationResponseMapper } from '../mappers/confirm-reservation-response.mapper.js';

export class ConfirmSchedulingDto {
  @IsUUID()
  schedulingId: string;
}

@Controller('schedulings')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Post('confirm')
  @HttpCode(HttpStatus.OK)
  async confirm(
    @Body() dto: ConfirmSchedulingDto,
  ): Promise<ConfirmReservationResponseDto> {
    await this.schedulingService.confirmReservation(dto.schedulingId);
    return ConfirmReservationResponseMapper.toResponse(dto.schedulingId);
  }
}