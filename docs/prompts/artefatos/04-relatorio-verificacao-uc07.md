# Relatorio de verificacao UC08

## Estado

**Efetivamente verificado** em 24/11/2026, com alteracoes no working tree e sem commit.

## Baseline

- `pnpm install --frozen-lockfile`: passou.
- `pnpm build`: passou antes e depois das alteracoes.
- `pnpm lint`: passou, com avisos preexistentes e um aviso novo em `scheduling.controller.ts` sobre metodo nao vinculado.
- `pnpm test`: baseline inicial falhou por PostgreSQL indisponivel em 5432/5434; suite apos iniciar `postgres_test`: 10 arquivos e 23 testes passaram.

## RED

- O teste de `SchedulingService.listByClientId` falhou em `TypeError: service.listByClientId is not a function`.
- Motivo confirmado: metodo ainda nao existia.

## GREEN

- Testes focados de Service, Controller e guard JWT: 11 testes passaram.
- Integracao PostgreSQL: 1 teste passou contra `postgres_test`.
- E2E de Scheduling: 8 testes passaram contra `postgres_test`.

## CAs cobertos

| CA | Evidencia |
|---|---|
| CA01 | E2E `retorna somente os agendamentos do clientId autenticado` |
| CA02 | E2E com isolamento entre dois `clientId` |
| CA03 | E2E para lista vazia |
| CA05 | E2E sem propriedade `clientId` no corpo |
| CA07 | E2E sem token |
| CA08 | E2E sem claim `clientId` |

## Evidencias pendentes

- CA04: retorno `503` coberto por teste unitario do Controller; nao houve verificacao externa em API contenedorizada.
- CA06: rota inexistente documentada na colecao HTTP, sem prova no contêiner.
- Autenticacao completa: guard JWT implementado localmente com HMAC `HS256`; nao foi fornecido segredo real.

## Consolidacao JWT

- O `JwtClientGuard` passou a implementar `CanActivate` e a ser provido pelo modulo Nest.
- O guard aplica-se somente ao metodo `GET /schedulings`; `POST /schedulings/confirm` nao foi protegido.
- O `clientId` do JWT foi propagado na requisicao como propriedade interna.
- `JWT_SECRET` foi acrescentado ao `.env.example` e ao ambiente do container Compose.
- A regressao verificou 28 testes passando apos restringir o guard ao endpoint correto.

## Validacao containerizada

Estado: **Efetivamente executado** em 24/11/2026.

| Cenario | Esperado | Obtido |
|---|---|---|
| API conteneirizada sem token em `GET /schedulings` | 401 | 401 |
| JWT sem claim `clientId` | 403 | 403 |
| JWT com `clientId` sem registros | 404 | 404 |
| Rota inexistente | 404 | 404 |
| JWT com `clientId` existente | 200 e itens sem `clientId` | 200; 1 item; campos `schedulingId`, `status`, `createdAt`, `updatedAt` |

Foi executada uma API temporaria na porta 3001, apontando para `postgres_test`. O contêiner temporario foi removido apos a verificacao. Nenhuma requisicao de escrita foi usada; nenhum migration foi aplicado; o banco de desenvolvimento nao foi consultado pela API temporaria.

## Regressao

- Suite geral: 10 arquivos e 23 testes passaram.
- A suite E2E continua registrando o erro esperado de agendamento inexistente em confirmacao.
