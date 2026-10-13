import { AgendamentoStatus } from '../../../common/enum/agendamento-status.enum.js';
import { MensalidadeStatus } from '../../../common/enum/mensalidade-status.enum.js';

export class Agendamento {
  private status: AgendamentoStatus;

  constructor(
    public readonly agendamentoId: string,
    public readonly alunoId: string,
    status: AgendamentoStatus,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {
    this.status = status;
  }

  getStatus(): AgendamentoStatus {
    return this.status;
  }

  confirmar(mensalidadeStatus: MensalidadeStatus): void {
    if (this.status === AgendamentoStatus.CONFIRMADO) {
      // agendamento já confirmado
      return;
    }

    if (mensalidadeStatus !== MensalidadeStatus.PAGA) {
      // mensalidade não paga (inadimplente)
    }

    this.status = AgendamentoStatus.CONFIRMADO;
    this.updatedAt = new Date();
  }
}