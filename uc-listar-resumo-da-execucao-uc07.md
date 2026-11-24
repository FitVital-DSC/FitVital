# Resumo da execução — UC08 Listar Agendamentos

## Ponto de partida

O estudante solicitou reaproveitar o processo dos materiais de UC12 em uma entidade do projeto. Foram confirmados UC01 como referencia, `Scheduling` como entidade e UC07 como caso de uso alvo.

## Ajuste de codigo

UC07 ja estava ocupado no GitHub pelo cadastro de aluno. O UC de listagem foi confirmado como UC08.

## Decisoes do estudante

- Entidade: `Scheduling`.
- Campos HTTP aprovados: `schedulingId`, `status`, `createdAt` e `updatedAt`.
- `clientId`: usado internamente, nao exposto no DTO.
- Ator: aluno autenticado; somente seus agendamentos.
- Autenticacao: JWT Bearer com claim `clientId`.
- Sem autenticacao: `401 Unauthorized`.
- Sem autorizacao: `403 Forbidden`.
- Lista vazia: `404 Not Found`.
- Falha de persistencia: `503 Service Unavailable`.
- Paginacao, ordenacao e filtros: nao definidos.
- Rota: `GET /schedulings`.
- Artefatos: `docs/prompts/artefatos/`.
- Versionamento dos artefatos: somente working tree.

## Etapa 1

Foi verificado que o UC de listagem nao existia. Foram gravados o mapa de fontes, o diagnostico de existencia, a especificacao UC07 e o planejamento GitHub.

## Planejamento no GitHub

Foi preparada uma proposta de Epic e seis Sub-Issues. Nenhuma Issue, label, item de Project, branch remota ou PR foi criada pela execucao.

## Etapa 2

### Nucleo

Foi adicionada uma operacao aditiva `findByClientId(clientId)` ao contrato do Repository. O metodo permanece independente de HTTP e TypeORM.

O `SchedulingService` recebeu `listByClientId(clientId)`.

### Persistencia

O repository TypeORM recebeu a consulta por `clientId` e manteve o mapper existente para converter entidade ORM em dominio.

### HTTP

Foi criado `GET /schedulings`, um DTO de resposta com quatro campos e um mapper separado. Foi implementado guard JWT HMAC HS256 baseado na variavel `JWT_SECRET`; o teste usa `test-secret` ou `test-jwt-secret`, sem segredo real.

### Contrato

- `200 OK`: itens com `schedulingId`, `status`, `createdAt` e `updatedAt`.
- `404`: lista vazia.
- `401`: ausencia ou invalidade de autenticacao.
- `403`: token sem claim `clientId`.
- `503`: persistencia indisponivel.

### Cenarios HTTP

Foram criados em `fitvital-backend/http-rest-client/scheduling/uc07-listar-agendamentos/`.

O arquivo anterior `scheduling-controller.http` nao foi movido nem alterado para preservar o conteudo existente; mover arquivos foi considerado fora da autorizacao atual.

## O que deu errado ou ficou diferente

- A linha de base inicial falhou porque PostgreSQL nao estava ativo em 5432 e 5434.
- O RED inicial falhou pelo motivo correto: `listByClientId` nao existia.
- O guard JWT foi implementado localmente com `crypto`; nao havia biblioteca ou infraestrutura existente no projeto.
- Foram adicionados quatro testes E2E ao arquivo de Scheduling.
- Uma primeira aplicacao do guard na classe protegeu indevidamente `POST /schedulings/confirm`; o guard foi restringido ao metodo `GET` e a regressao passou.
- A suite geral passou apos iniciar `postgres_test`.

## Autorizacoes afetadas

- Foi autorizada a criacao da branch `feature/uc07-listar-agendamentos`.
- Foi autorizado iniciar o container `postgres_test`.
- Nao houve autorizacao para banco de desenvolvimento, migration, rebuild containerizado, commit, push, PR, merge ou fechamento de Issues.

## Resultados verificados

- Baseline: `pnpm install --frozen-lockfile`, `pnpm build` e `pnpm lint` passaram.
- RED: falha documentada em `SchedulingService.listByClientId`.
- GREEN focado: 11 testes passaram.
- Integracao: 1 teste passou contra `postgres_test`.
- E2E: 8 testes passaram contra `postgres_test`.
- Suite final: 10 arquivos e 27 testes passaram.
- `pnpm lint` continua com avisos conhecidos e um aviso novo sobre metodo nao vinculado no Controller.

## O que ainda nao tem prova

- Prova externa em API conteneirizada.
- CA04 contra falha real de persistencia.
- CA06 contra rota inexistente em ambiente HTTP real.
- Arquivo `run-checks.sh`; nao existe no workspace.
- Validadores `method/check-state.sh` e `check-links.mjs`; nao existem.
- O secret real de producao nao foi configurado.

## Onde esta tudo

- Artefatos: [docs/prompts/artefatos/](/C:/FitVital/docs/prompts/artefatos/)
- Resumo: [uc-listar-resumo-da-execucao-uc07.md](/C:/FitVital/uc-listar-resumo-da-execucao-uc07.md)
- Codigo: [fitvital-backend/src/modules/scheduling/](/C:/FitVital/fitvital-backend/src/modules/scheduling/)
- Colecao HTTP: [fitvital-backend/http-rest-client/scheduling/uc07-listar-agendamentos/](/C:/FitVital/fitvital-backend/http-rest-client/scheduling/uc07-listar-agendamentos/)
- Teste E2E: [scheduling.e2e-spec.ts](/C:/FitVital/fitvital-backend/test/scheduling/scheduling.e2e-spec.ts)
- Branch local: `feature/uc07-listar-agendamentos`.

Nenhum commit, PR ou Issue foi criado.

## O que ficou pendente

- Configurar segredo real `JWT_SECRET`.
- Confirmar mecanismo operacional de emissao de tokens.
- Executar contra API conteneirizada, com autorizacao do estudante.
- Criar Issue, Sub-Issues e Project no GitHub, se autorizado.
- Commitar e abrir PR, se autorizado.
