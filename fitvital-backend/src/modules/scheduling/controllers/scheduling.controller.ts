import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  UseGuards,
  HttpCode,
  HttpStatus,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { SchedulingService } from '../services/scheduling.service.js';
import { IsUUID } from 'class-validator';
import { ConfirmReservationResponseDto } from '../dtos/confirm-reservation-response.dto.js';
import { ConfirmReservationResponseMapper } from '../mappers/confirm-reservation-response.mapper.js';
import { JwtClientGuard } from '../guards/jwt-client.guard.js';
import { ListSchedulingResponseDto } from '../dtos/list-scheduling-response.dto.js';
import { ListSchedulingResponseMapper } from '../mappers/list-scheduling-response.mapper.js';

export class ConfirmSchedulingDto {
  @IsUUID()
  schedulingId: string;
}

@Controller('schedulings')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Get()
  @UseGuards(JwtClientGuard)
  async list(
    @Req() request: { clientId: string },
  ): Promise<ListSchedulingResponseDto[]> {
    const clientId = request.clientId;

    try {
      const schedulings = await this.schedulingService.listByClientId(clientId);
      if (schedulings.length === 0) {
        throw new NotFoundException('No schedulings found');
      }
      return schedulings.map((scheduling) =>
        ListSchedulingResponseMapper.toResponse(scheduling),
      );
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new ServiceUnavailableException('Scheduling service unavailable');
    }
  }

  @Post('confirm')
  @HttpCode(HttpStatus.OK)
  async confirm(
    @Body() dto: ConfirmSchedulingDto,
  ): Promise<ConfirmReservationResponseDto> {
    await this.schedulingService.confirmReservation(dto.schedulingId);
    return ConfirmReservationResponseMapper.toResponse(dto.schedulingId);
  }
}