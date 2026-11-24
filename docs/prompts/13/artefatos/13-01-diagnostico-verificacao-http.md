# 13-01 - Diagnostico da verificacao HTTP

## Estado efetivamente observado

**Branch:** `feature/uc08-http-rest-client-verification`

**Base:** `feature/uc07-listar-agendamentos`, sincronizada com `origin`.

## Artefatos do Material 12

Os oito artefatos existentes foram encontrados em `docs/prompts/12/artefatos/`:

- `12-01-diagnostico-arquitetura.md`
- `12-02-mapa-dependencias.md`
- `12-03-auditoria-responsabilidades.md`
- `12-04-evidencias-priorizacao.md`
- `12-05-decisoes-refatoracao.md`
- `12-06-verificacao-regressoes.md`
- `12-07-registro-arquitetural.md`
- `12-08-versionamento-checklist.md`

## Estado da colecao

A pasta `fitvital-backend/http-rest-client/` existe e contem:

- `scheduling-controller.http`
- `scheduling/uc07-listar-agendamentos/scheduling-controller.http`
- `scheduling/uc07-listar-agendamentos/test-scenarios.http`

Nao existe `containerizado/`, `tests/hello-world.http`, README da colecao ou `run-checks.sh`.

## Contrato real do UC08

- Porta local: `3000`.
- Base URL containerizada ja utilizada: `http://localhost:3001` em verificacao temporaria.
- Contrato: `GET /schedulings`.
- Producao do `clientId`: JWT com claim `clientId`.
- Sucesso: `200 OK`.
- Lista vazia: `404 Not Found`.
- Sem autenticacao: `401 Unauthorized`.
- JWT sem `clientId`: `403 Forbidden`.
- Falha de persistencia: `503 Service Unavailable`.
- Corpo da resposta: `schedulingId`, `status`, `createdAt`, `updatedAt`.
- `clientId` nao aparece no corpo.

## Ambiente

- Docker Compose disponivel.
- Banco de desenvolvimento `postgres` publicado em `5432`.
- Banco de teste `postgres_test` publicado em `5434`.
- API temporaria UC08 validada na porta `3001` apontando para `postgres_test`.
- API Compose principal ainda aponta para `postgres`.

## Lacunas

- README da colecao ausente.
- Script automatizado ausente.
- Arquivos containerizados ausentes.
- Smoke test ausente.
- Recurso de apoio do UC08 nao esta implementado como parte deste material.
- Nenhum seed foi encontrado no projeto.

## Plano

1. Criar a estrutura obrigatoria da colecao.
2. Adaptar cenarios de UC08 sem inventar UUIDs ou credenciais.
3. Criar arquivos containerizados somente leitura/GET para os cenarios UC08.
4. Criar script com assercoes seguras contra o banco de desenvolvimento ou testar somente se o destino estiver confirmado.
5. Executar sintaxe, smoke, script e prova de falha.
