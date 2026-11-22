# Artefato 08-03 - Verificacao de Modulos e Providers

## Modulo exercitado

O teste integrado importou `FinancesModule` e substituiu os providers de persistencia apenas no contexto do teste:

- `getRepositoryToken(MonthlyPaymentOrmEntity)` -> objeto vazio
- `TypeOrmMonthlyPaymentRepository` -> `InMemoryMonthlyPaymentRepository`
- `MONTHLYPAYMENT_REPOSITORY` -> `InMemoryMonthlyPaymentRepository`

Isso impede a tentativa de conexao PostgreSQL e preserva o token real usado pelo servico.

## Componentes reais

- `MonthlyPaymentController`
- `MonthlyPaymentService`
- `ProcessMonthlyPaymentDto`
- `ValidationPipe`
- `MonthlyPayment`
- `MonthlyPaymentRepository`
- `FinancesModule`

Nenhum Service ou Controller foi substituido por mock.

## Evidencia de composicao

O teste integrado compilou o modulo sem erros e iniciou o aplicativo Nest. A resolucao do token levou o servico real ao repositorio em memoria.
