# 08-05 — Testes integrados e evidência de armazenamento

## Objetivo e estado atual

O objetivo original de um teste integrado em memória não pode ser aplicado literalmente ao estado atual, pois não existe implementação em memória em `main`.

O código atual já utiliza adaptadores TypeORM nos módulos de agendamento e finanças. Por isso, o exercício foi adaptado para diagnóstico de testes HTTP integrados com componentes reais e banco relacional.

## Arquivos existentes

- `test/app.e2e-spec.ts`;
- `test/scheduling/scheduling.e2e-spec.ts`;
- `test/scheduling/confirm-reservation.e2e-spec.ts`;
- `test/finances/monthly-payment.e2e-spec.ts`.

Os testes existentes importam `AppModule` e consultam repositories TypeORM diretamente. Eles não são testes em memória e não substituem o serviço por mock.

## Suite executada

Comandos executados:

```powershell
pnpm test --run
pnpm vitest run test/scheduling/scheduling.e2e-spec.ts test/scheduling/confirm-reservation.e2e-spec.ts test/finances/monthly-payment.e2e-spec.ts test/app.e2e-spec.ts
```

Resultados:

- 3 arquivos unitários passaram;
- 6 testes unitários passaram;
- Os 4 arquivos E2E falharam ou ficaram skipped;
- A inicialização encontrou `ECONNREFUSED 127.0.0.1:5432`;
- Um teste falhou por timeout e outros hooks falharam por cleanup consequente.

## Novo teste integrado consolidado

Nenhum novo arquivo de teste integrado foi criado nesta etapa porque o repositório em memória não existe e o PostgreSQL não está disponível.

Não foi feito mock do Service ou do Repository em um novo teste integrado.

## Comparação da linha de base

Antes desta documentação:

- 3 arquivos de teste unitários passaram;
- 6 testes unitários passaram;
- 4 arquivos E2E falharam na inicialização.

A execução isolada confirmou o mesmo resultado para unitários.

## Evidência de armazenamento

Não foi confirmada uma gravação real. Os testes E2E não alcançaram o fluxo HTTP nem conseguiram consultar os dados persistidos.

Não foi adotado um método de consulta artificial no contrato de domínio. Nenhum endpoint `GET` foi criado.

## Limitações

- Não há evidência de persistência real nesta fase;
- Não há repositório em memória disponível no estado atual;
- Não há Docker/PostgreSQL ativo;
- Não existe implementação de teste integrado consolidado aprovada.
