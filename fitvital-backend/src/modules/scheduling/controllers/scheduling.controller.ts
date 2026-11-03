import { Controller, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, } from '@nestjs/common';
import { SchedulingService } from '../services/scheduling.service.js';
import { ConfirmReservationResponseDto } from '../dtos/confirm-reservation-response.dto.js';

@Controller("scheduling")
export class SchedulingController {
    constructor(private readonly schedulingService: SchedulingService) {}

    @Post(':id/confirm')
    @HttpCode(HttpStatus.OK)
    async confirm(@Param('id', new ParseUUIDPipe()) schedulingId: string): Promise<void> {
        await this.schedulingService.confirmReservation(schedulingId);
    }
}