# Artefato 13 — Execução e evidências

## Implementação local

- **Caso de uso:** UC03 — Processar Pagamento de Mensalidade
- **Backend:** `fitvital-backend`
- **Endpoint:** `POST /finances/monthly-payments/:monthlyPaymentId/payment`
- **Persistência:** PostgreSQL/TypeORM
- **Migration:** `CreateMonthlyPayment1793106356873`

## Evidências técnicas

- `pnpm build`: passou.
- Testes unitários do serviço: 3 passaram.
- Teste E2E do endpoint: 1 passou.
- Migration `CreateMonthlyPayment1793106356873`: aplicada e confirmada.
- `git diff --check`: sem problemas.

## Arquivos principais

- `fitvital-backend/src/modules/finances/entities/monthlypayment.entity.ts`
- `fitvital-backend/src/modules/finances/services/monthlypayment.service.ts`
- `fitvital-backend/src/modules/finances/controllers/monthlypayment.controller.ts`
- `fitvital-backend/src/infrastructure/persistence/finances/`
- `fitvital-backend/src/database/migrations/1793106356873-CreateMonthlyPayment.ts`
- `fitvital-backend/test/finances/monthly-payment.e2e-spec.ts`

## GitHub

- **Epic:** [#30 — UC03 Processar Pagamento de Mensalidade](https://github.com/FitVital-DSC/FitVital/issues/30)
- **Project:** [#4 — Planejamento - UC03 Processar Pagamento de Mensalidade](https://github.com/orgs/FitVital-DSC/projects/4)

| ID | Issue | Título | Project |
|---|---:|---|---|
| SUB-01 | [#31](https://github.com/FitVital-DSC/FitVital/issues/31) | Refinar domínio de Mensalidade | Project #4 |
| SUB-02 | [#32](https://github.com/FitVital-DSC/FitVital/issues/32) | Definir contrato do callback | Project #4 |
| SUB-03 | [#33](https://github.com/FitVital-DSC/FitVital/issues/33) | Implementar serviço de aplicação | Project #4 |
| SUB-04 | [#34](https://github.com/FitVital-DSC/FitVital/issues/34) | Implementar persistência financeira | Project #4 |
| SUB-05 | [#35](https://github.com/FitVital-DSC/FitVital/issues/35) | Integrar módulo e controller | Project #4 |
| SUB-06 | [#36](https://github.com/FitVital-DSC/FitVital/issues/36) | Validar automaticamente o UC03 | Project #4 |
| SUB-07 | [#37](https://github.com/FitVital-DSC/FitVital/issues/37) | Documentar operação e migração | Project #4 |

As Issues foram criadas como Sub-Issues da Epic, receberam comentários técnicos e dependências bloqueadoras. No momento, os oito itens aparecem no estado padrão `Todo` do Project; a conversão para os cinco estados metodológicos (`Backlog`, `Ready`, `In Progress`, `In Review`, `Done`) ainda requer configuração manual do campo protegido `Status` na interface do GitHub.
