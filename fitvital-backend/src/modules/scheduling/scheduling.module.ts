import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedulingService } from './services/scheduling.service.js';
import { SCHEDULING_REPOSITORY } from './repositories/scheduling.repository.interface.js';
import { MONTHLYPAYMENT_REPOSITORY } from '../finances/repositories/monthlypayment.repository.interface.js';
import { SchedulingEntity } from '../../infrastructure/persistence/scheduling/scheduling.orm-entity.js';
import { TypeOrmSchedulingRepository } from '../../infrastructure/persistence/scheduling/typeorm-scheduling.repository.js';
import { SchedulingMapper } from '../../infrastructure/persistence/scheduling/scheduling.orm-mapper.js'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([SchedulingEntity]),
  ],
  providers: [
    SchedulingService,
    SchedulingMapper, 
    TypeOrmSchedulingRepository,
    {
      provide: SCHEDULING_REPOSITORY,
      useExisting: TypeOrmSchedulingRepository, 
    },
    {
      provide: MONTHLYPAYMENT_REPOSITORY,
      useValue: {
        findBySchedulingId: async () => ({ status: 'PAID' }), 
      },
    },
  ],
  exports: [SchedulingService],
})
export class SchedulingModule {}