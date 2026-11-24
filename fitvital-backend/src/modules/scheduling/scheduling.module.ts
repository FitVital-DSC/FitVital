import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedulingService } from './services/scheduling.service.js';
import { SCHEDULING_REPOSITORY } from './repositories/scheduling.repository.interface.js';
import { SchedulingEntity } from '../../infrastructure/persistence/scheduling/scheduling.orm-entity.js';
import { TypeOrmSchedulingRepository } from '../../infrastructure/persistence/scheduling/typeorm-scheduling.repository.js';
import { SchedulingMapper } from '../../infrastructure/persistence/scheduling/scheduling.orm-mapper.js'; 
import { SchedulingController } from './controllers/scheduling.controller.js';
import { FinancesModule } from '../finances/finances.module.js';
import { JwtClientGuard } from './guards/jwt-client.guard.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([SchedulingEntity]),
    FinancesModule,
  ],
  controllers: [SchedulingController],
  providers: [
    SchedulingService,
    SchedulingMapper, 
    JwtClientGuard,
    TypeOrmSchedulingRepository,
    {
      provide: SCHEDULING_REPOSITORY,
      useExisting: TypeOrmSchedulingRepository, 
    },
  ],
  exports: [SchedulingService],
})
export class SchedulingModule {}