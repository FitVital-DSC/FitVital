export class AgendamentoJaConfirmadoException extends Error {
  constructor(agendamentoId: string) {
    super(`O agendamento "${agendamentoId}" já se encontra confirmado.`);
    this.name = 'AgendamentoJaConfirmadoException';
  }
}