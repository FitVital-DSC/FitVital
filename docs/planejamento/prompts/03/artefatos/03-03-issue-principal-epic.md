# Artefato 3 — Issue principal (Epic)

## Título

`[UC03] Processar Pagamento de Mensalidade`

## Objetivo

Implementar o callback do Gateway de Pagamento para registrar o pagamento aprovado de uma Mensalidade no contexto de Gestão Financeira.

## Escopo

- Receber `monthlyPaymentId` e `status`.
- Validar UUID e status aceitos.
- Atualizar `PENDING`/`OVERDUE` para `PAID` em aprovação.
- Registrar `datePayment`.
- Manter o estado atual em falha.
- Persistir o resultado com TypeORM/PostgreSQL.
- Cobrir o comportamento com testes unitários e E2E.

Integração real com provedor externo, autenticação do Gateway e retries distribuídos não fazem parte deste slice.

## Sub-Issues

- [ ] SUB-01 — Refinar domínio de Mensalidade
- [ ] SUB-02 — Definir contrato do callback
- [ ] SUB-03 — Implementar serviço de aplicação
- [ ] SUB-04 — Implementar persistência financeira
- [ ] SUB-05 — Integrar módulo e controller
- [ ] SUB-06 — Validar automaticamente o UC03
- [ ] SUB-07 — Documentar operação e migração

## Critérios gerais de aceite

- `POST /finances/monthly-payments/:monthlyPaymentId/payment` aceita `PAID` e `FAILED`.
- `PAID` persiste status e data de pagamento.
- `FAILED` responde `200` sem alterar o registro.
- Mensalidade inexistente e dados inválidos geram erros explícitos.
- A migration pode ser aplicada e revertida.
- Testes unitários e E2E do UC03 passam.
