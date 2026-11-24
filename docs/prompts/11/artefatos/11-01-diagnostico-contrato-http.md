# 11-01 — Diagnóstico do contrato HTTP

## Identificação

- Projeto: FitVital;
- Repositório: `FitVital-DSC/FitVital`;
- Caso de uso: UC01 — confirmar agendamento;
- Branch analisada nesta execução: `feature/material-09-10-containerizacao`;
- Diretório dos artefatos: `docs/prompts/11/artefatos/`.

## Artefatos anteriores

Os oito artefatos do Material 10 foram recuperados em `docs/prompts/10/artefatos/`. O Material 11 não havia sido executado anteriormente.

## Contrato observado inicialmente

Rota:

```text
POST /schedulings/confirm
```

Entrada:

```json
{"schedulingId":"<UUID>"}
```

Resposta observada antes da estabilização:

```json
{"message":"Scheduling confirmed successfully","schedulingId":"<UUID>"}
```

Status: `200 OK`.

## Contratos e implementação encontrados

- DTO de entrada: `ConfirmSchedulingDto`;
- DTO de resposta existente: `ConfirmReservationResponseDto`;
- Controller: `SchedulingController`;
- Service: `SchedulingService`;
- Entidade de domínio: `Scheduling`;
- Repository: `SCHEDULING_REPOSITORY` e `TypeOrmSchedulingRepository`;
- ValidationPipe real: `whitelist: true` em `main.ts`, sem `transform: true` inicialmente.

## Achados

O DTO de resposta existia, mas não era usado pelo Controller e não representava fielmente o contrato observado: continha `status` no lugar do corpo efetivamente devolvido.

Não havia mapper HTTP explícito de resposta.

## Linha de base

Executado:

```powershell
pnpm test --run
pnpm run build
pnpm lint
```

Resultado inicial:

- testes: 8 arquivos e 13 testes aprovados;
- build: aprovado;
- lint: um erro real em `verify-persistence.ts` por promise não controlada e avisos menores.

Após correção focada:

- testes: 8 arquivos e 14 testes aprovados;
- build: aprovado;
- lint: aprovado, com avisos menores.
