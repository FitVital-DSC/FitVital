# 12-04 — Evidências e priorização

## Evidências

1. Antes da correção, `SchedulingModule` continha `useValue` para `MONTHLYPAYMENT_REPOSITORY`.
2. A implementação retornava `{ status: 'PAID' }` sem consultar banco.
3. `FinancesModule` já exportava `MONTHLYPAYMENT_REPOSITORY` ligado ao `TypeOrmMonthlyPaymentRepository`.
4. O Service real chama `findBySchedulingId`, e a persistência mensal real implementa essa consulta.

## Hipóteses descartadas

- Não foi encontrada violação de domínio: a entidade não importa TypeORM.
- Não foi encontrada violação no adapter de agendamento: ele implementa o contrato e usa mapper.
- Não foi necessário recriar DTO, Controller ou Service.

## Priorização

Prioridade alta:

- restaurar a composição real do repositório mensal.

Prioridade média:

- corrigir o tratamento HTTP de agendamento inexistente;
- eliminar o arquivo vazio `schedulingNotFound.ts`, se confirmado como recurso não usado.

Prioridade baixa:

- revisar avisos de testes sobre métodos não vinculados.

Nenhuma melhoria cosmética foi aplicada.
