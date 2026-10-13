import { Agendamento } from '../entities/agendamento.entity.js';

export const AGENDAMENTOS_REPOSITORY = 'AGENDAMENTOS_REPOSITORY';

export interface AgendamentosRepository {
  findById(agendamentoId: string): Promise<Agendamento | null>;
  save(agendamento: Agendamento): Promise<Agendamento>;
}