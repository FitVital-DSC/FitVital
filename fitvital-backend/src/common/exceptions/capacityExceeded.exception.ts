export class CapacityExceededException extends Error {
    constructor() {
        super('Gym capacity exceeded for this time slot.');
        this.name = 'CapacityExceededException';
    }
}