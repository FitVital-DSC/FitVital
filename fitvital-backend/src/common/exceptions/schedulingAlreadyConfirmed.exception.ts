export class SchedulingAlreadyConfirmedException extends Error {
  constructor(schedulingId: string) {
    super(`O agendamento "${schedulingId}" já se encontra confirmado.`);
    this.name = 'SchedulingAlreadyConfirmedException';
  }
}