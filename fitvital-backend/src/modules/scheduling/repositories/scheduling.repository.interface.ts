import { Scheduling } from '../entities/scheduling.entity.js';

export const SCHEDULING_REPOSITORY = 'SCHEDULING_REPOSITORY';

export interface SchedulesRepository {
  findById(schedulingId: string): Promise<Scheduling | null>;
  save(scheduling: Scheduling): Promise<Scheduling>;
}