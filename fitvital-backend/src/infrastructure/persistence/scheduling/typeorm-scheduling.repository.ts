import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Scheduling } from '../../../modules/scheduling/entities/scheduling.entity.js';
import { SchedulesRepository } from '../../../modules/scheduling/repositories/scheduling.repository.interface.js'; 
import { SchedulingEntity } from './scheduling.orm-entity.js';
import { SchedulingMapper } from './scheduling.orm-mapper.js';

@Injectable()
export class TypeOrmSchedulingRepository implements SchedulesRepository {
    constructor(
        @InjectRepository(SchedulingEntity)
        private readonly repository: Repository<SchedulingEntity>,
    ) {}

    async findById(schedulingId: string): Promise<Scheduling | null> {
        const entity = await this.repository.findOne({ 
            where: { schedulingId: schedulingId } 
        });
        
        if (!entity) return null;
        return SchedulingMapper.toDomain(entity);
    }

    async save(scheduling: Scheduling): Promise<Scheduling> {
        const entity = SchedulingMapper.toPersistence(scheduling);
        const savedEntity = await this.repository.save(entity);
        return SchedulingMapper.toDomain(savedEntity);
    }

    async softDelete(schedulingId: string): Promise<void> {
        await this.repository.softDelete(schedulingId);
    }
}