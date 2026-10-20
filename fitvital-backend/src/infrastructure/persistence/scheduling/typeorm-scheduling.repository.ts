import { SchedulingRepository } from "../../../domain/scheduling/scheduling.repository.js";
import { Injectable } from "injection-js";
import { Scheduling } from "../../../domain/scheduling/scheduling.js";

@Injectable()
export class TypeOrmSchedulingRepository implements SchedulingRepository {
    findById(schedulingId: string): Promise<Scheduling | null> {
        throw new Error("Method not implemented.");
    }
    save(scheduling: Scheduling): Promise<Scheduling> {
        throw new Error("Method not implemented.");
    }
    softDelete(schedulingId: string): Promise<void> {

    }
}