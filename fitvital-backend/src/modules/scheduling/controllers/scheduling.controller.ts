import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { SchedulingService } from '../services/scheduling.service.js';
import { IsUUID } from 'class-validator';

export class ConfirmSchedulingDto {
  @IsUUID()
  schedulingId: string;
}

@Controller('schedulings')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Post('confirm')
  @HttpCode(HttpStatus.OK)
  async confirm(@Body() dto: ConfirmSchedulingDto) {
    await this.schedulingService.confirmReservation(dto.schedulingId);
    
    return { 
      message: 'Scheduling confirmed successfully',
      schedulingId: dto.schedulingId 
    };
  }
}