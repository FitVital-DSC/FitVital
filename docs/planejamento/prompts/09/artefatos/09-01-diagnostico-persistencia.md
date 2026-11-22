# Artefato 09-01 - Diagnostico da Persistencia e Linha de Base

## Identificacao

- Projeto: FitVital
- Caso de uso: UC03 - Processar Pagamento de Mensalidade
- Epic: [#30](https://github.com/FitVital-DSC/FitVital/issues/30)
- Sub-Issue de persistencia: [#34 - SUB-04](https://github.com/FitVital-DSC/FitVital/issues/34)
- Sub-Issue HTTP: [#35 - SUB-05](https://github.com/FitVital-DSC/FitVital/issues/35)
- Sub-Issue de testes: [#36 - SUB-06](https://github.com/FitVital-DSC/FitVital/issues/36)
- Branch atual: `feature/issue-34-postgresql-monthly-payment`

## Contratos preservados

- Entidade de dominio: `MonthlyPayment`
- Metodo de aplicacao: `MonthlyPaymentService.processPayment`
- Contrato: `MonthlyPaymentRepository`
- Token: `MONTHLYPAYMENT_REPOSITORY`
- Controller: `MonthlyPaymentController`
- DTO: `ProcessMonthlyPaymentDto`
- Repositorio em memoria: `InMemoryMonthlyPaymentRepository`

## Infraestrutura existente

- Docker Compose: um banco PostgreSQL na porta 5432
- TypeORM: `AppModule` e `src/database/data-source.ts`
- Entidade ORM: `MonthlyPaymentOrmEntity`
- Mapper: `MonthlyPaymentMapper`
- Adaptador: `TypeOrmMonthlyPaymentRepository`
- Migrations:
  - `1793106356872-CreateScheduling`
  - `1793106356873-CreateMonthlyPayment`

## Linha de base

Comando executado:

```powershell
npm test
```

Resultado:

```text
Test Files  4 failed | 4 passed (8)
Tests       1 failed | 10 passed | 5 skipped (16)
```

Os testes unitarios e integrados em memoria passaram. Os testes existentes que iniciam `AppModule` falharam ao tentar autenticar no PostgreSQL pela porta host.

Depois da implementação, o teste PostgreSQL isolado passou com 3 testes.

## DoR da persistencia

| Condicao | Estado |
|---|---|
| Objetivo definido | Atende |
| Escopo delimitado | Atende |
| Criterios verificaveis | Atende |
| Dependencias identificadas | Atende |
| Informacoes tecnicas disponiveis | Atende |
| Responsavel atribuido | Atende no planejamento |
| Revisao concluida | Pendente no GitHub |

## Riscos

- Existe um PostgreSQL local que ja ocupa a porta 5432 no host.
- Nao alterar nem remover o banco ou volume existente.
- A migration atual usa `uuid_generate_v4()` sem criar a extensao necessaria.
- A entidade ORM usa geracao PostgreSQL implicita, contrariando o identificador gerado pela camada de dominio.

## Condicoes para prosseguir

1. Usar banco isolado na porta 5434.
2. Corrigir o mapeamento UUID sem alterar o contrato de dominio.
3. Aplicar migrations somente no banco de testes identificado.
