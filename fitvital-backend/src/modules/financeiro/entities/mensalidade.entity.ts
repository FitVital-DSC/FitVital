import { MensalidadeStatus } from '../../../common/enum/mensalidade-status.enum.js';

export class Mensalidade {
  constructor(
    public mensalidadeId: string,
    public alunoId: string,
    public status: MensalidadeStatus,
    public valor: number,
    public dataPagamento: Date | null,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}