# UC08 - Listar Agendamentos

**Estado:** **Proposto a partir do UC01 confirmado pelo estudante**; aguardando validação para entrar na Etapa 2.

## 1. Identificacao

| Item | Valor |
|---|---|
| Codigo | UC08 |
| Nome | Listar Agendamentos |
| Sistema | FitVital |
| Modulo | Agendamento (`scheduling`) |
| Entidade | `Scheduling` |
| Tipo | Caso de uso de consulta |
| Sistema de origem | UC01 - Solicitar Agendamento de Treino |
| Operacao HTTP proposta | `GET /schedulings` |

## 2. Objetivo

Permitir que um aluno autenticado consulte os seus agendamentos registrados no sistema.

## 3. Atores

| Ator | Participacao | Confirmacao |
|---|---|---|
| Aluno autenticado | Principal | Confirmado pelo estudante |
| Sistema de autenticacao | Secundario | Confirmado para o UC; o mecanismo concreto ainda nao existe no codigo atual |

**Restricao confirmada:** a listagem deve conter somente os agendamentos do aluno solicitante.
**Decisao confirmada:** obter o identificador do aluno no contexto autenticado e consultar por `clientId`, sem aceitar `clientId` como parametro da requisicao. Ausencia de autenticacao resulta em `401 Unauthorized`; falta de autorizacao resulta em `403 Forbidden`.

## 4. Pre-condicoes

- O aluno esta autenticado.
- Existe uma identidade do aluno que possa ser usada para filtrar os agendamentos por `clientId`.

Pre-condicoes nao confirmadas: mecanismo concreto de autenticacao e obtencao do identificador do aluno autenticado no contexto de requisicao.

## 5. Pos-condicoes

### Sucesso

- A API retorna somente agendamentos associados ao aluno autenticado.
- Cada item contem os campos aprovados pelo estudante.

### Falha

- Nenhum registro atende a consulta: a API retorna `404 Not Found`.
- Falha de autenticacao: `401 Unauthorized`.
- Falha de persistencia: `503 Service Unavailable`, sem expor detalhes internos.
- Falha de autorizacao: `403 Forbidden`.

## 6. Fluxo principal

1. O aluno envia `GET /schedulings`.
2. O sistema identifica o aluno autenticado.
3. O sistema consulta os agendamentos cujo `clientId` corresponda ao aluno autenticado.
4. O sistema encontra um ou mais agendamentos.
5. O sistema retorna `200 OK` com os campos aprovados.

## 7. Fluxos alternativos e de excecao

| Codigo | Tipo | Descricao |
|---|---|---|
| FA01 | Alternativo | O aluno nao possui agendamentos. A API retorna `404 Not Found`. |
| FA02 | Alternativo | A consulta retorna agendamentos em estados diferentes. O campo `status` deve ser preservado sem filtragem adicional. |
| FE01 | Excecao | Falha ao consultar a persistencia. Retorna `503 Service Unavailable`, sem detalhes internos. |
| FE02 | Excecao | Autenticacao invalida ou ausente. Retorna `401 Unauthorized`. |
| FE03 | Excecao | Identidade autenticada sem permissao para realizar a consulta. Retorna `403 Forbidden`. |

## 8. Regras de negocio

| Codigo | Regra | Estado |
|---|---|---|
| RN01 | A listagem deve retornar somente agendamentos cujo `clientId` corresponda ao aluno autenticado. | Confirmada pelo estudante |
| RN02 | Uma lista sem agendamentos corresponde a `404 Not Found`. | Confirmada pelo estudante |
| RN03 | O campo `status` nao determina um filtro de inatividade ou remocao neste UC. | Proposta; o conceito de soft delete nao foi confirmado |
| RN04 | Nao existe conceito confirmado de agendamento inativo/removido para excluir da listagem. | Confirmado como fora do dominio atual |
| RN05 | Ausencia de autenticacao impede o acesso e resulta em `401 Unauthorized`. | Confirmada pelo estudante |
| RN06 | Autenticacao sem autorizacao resulta em `403 Forbidden`. | Confirmada pelo estudante |
| RN07 | Indisponibilidade da persistencia resulta em `503 Service Unavailable`, sem vazamento de detalhes internos. | Confirmada pelo estudante |

## 9. Validacoes e restricoes

- Nao existe paginacao confirmada.
- Nao existe limite maximum confirmado.
- Nao existem parametros de busca, filtro ou ordenacao confirmados.
- Nao foi confirmada ordenacao da lista.
- O identificador usado deve permanecer como `schedulingId`, nao `id`.
- O campo `clientId` existe na entidade e pode ser usado como filtro interno.
- O `clientId` nao sera recebido como parametro HTTP nem exposto no DTO de listagem.
- O aluno autenticado sera identificado por uma identidade externa a ser integrada; o mecanismo concreto nao existe no codigo atual.
- A resposta de erro sugerida segue o formato existente do projeto: `statusCode`, `message` e `error`, sem detalhes internos da persistencia.
- Campos atuais:

| Campo | Tipo no dominio | Tipo ORM | Retornado? | Justificativa |
|---|---|---|---|---|
| `schedulingId` | `string` | `uuid` | Sim | Identificador de dominio confirmado |
| `clientId` | `string` | `uuid` | Não | Confirmado pelo estudante como dado interno para filtro |
| `status` | `SchedulingStatus` | enum | Sim | Campo atual confirmado |
| `createdAt` | `Date` | `timestamp with time zone` | Sim | Campo atual confirmado |
| `updatedAt` | `Date` | `timestamp with time zone` | Sim | Campo atual confirmado |

## 10. Requisitos funcionais

| Codigo | Requisito |
|---|---|
| RF01 | O sistema deve permitir ao aluno autenticado solicitar a listagem por `GET /schedulings`. |
| RF02 | O sistema deve consultar agendamentos associados ao aluno autenticado por `clientId`. |
| RF03 | O sistema deve retornar `200 OK` com registros que contenham exatamente `schedulingId`, `status`, `createdAt` e `updatedAt`. |
| RF04 | O sistema deve retornar `404 Not Found` quando nao houver agendamentos. |
| RF05 | O sistema nao deve exigir nem definir paginacao, ordenacao ou filtros nao confirmados nesta versao. |

## 11. Consideracoes arquiteturais

- O contrato do Repository deve ganhar uma operacao aditiva de consulta sem expor TypeORM.
- O `SchedulingService` deve implementar a consulta sem depender de HTTP ou TypeORM.
- A implementacao em memoria deve manter o comportamento testavel.
- A implementacao TypeORM deve usar um mapper separado para conversao entre entidade de dominio e entidade ORM.
- O Controller deve retornar um DTO de resposta contendo somente os quatro campos HTTP aprovados.
- A autenticacao sera implementada conforme o UC aprovado.

## 12. Criterios de aceite

| Codigo | Criterio verificavel | Vinculo |
|---|---|---|
| CA01 | Uma consulta autenticada com agendamentos existentes retorna `200 OK` e itens contendo apenas os quatro campos aprovados. | RF02, RF03 |
| CA02 | Os itens retornados pertencem somente ao aluno autenticado identificado por `clientId`. | RN01, RF02 |
| CA03 | Uma consulta sem agendamentos retorna `404 Not Found`. | RN02, RF04 |
| CA04 | Uma falha de persistencia retorna `503 Service Unavailable` sem vazamento de entidade ORM, SQL ou detalhes internos. | FE01 |
| CA05 | A resposta nao contem campos internos ou atributos nao aprovados. | RF03 |
| CA06 | A rota inexistente continua retornando `404 Not Found`. | Restricao regressiva; FE02 |
| CA07 | Uma requisicao sem identidade autenticada retorna `401 Unauthorized`. | FE02 |
| CA08 | Uma identidade autenticada sem autorizacao retorna `403 Forbidden`. | FE03 |

## 13. Escopo

### Incluido

- Consulta de agendamentos;
- restricao aos agendamentos do aluno autenticado;
- DTO de resposta com os quatro campos HTTP aprovados;
- testes unitarios, integrados, de contrato e cenarios HTTP;
- persistencia real por TypeORM;
- regressao do UC de confirmacao existente.

### Fora do escopo

- Criar agendamento;
- confirmar agendamento;
- paginacao;
- ordenacao;
- filtro por status;
- busca textual;
- soft delete;
- implementacao do guard JWT especifico para este UC;
- notificacoes;
- integracao real de catraca ou gateway.

## Rastreabilidade

| Origem | Criterio de aceite |
|---|---|
| RF01 | CA01, CA02 |
| RF02 | CA01, CA02 |
| RF03 | CA01, CA05 |
| RF04 | CA03 |
| RN01 | CA02 |
| RN02 | CA03 |
| FE01 | CA04 |
| FE02 | CA07 |
| FE03 | CA08 |

## Perguntas em aberto

1. Qual componente fornecera a identidade autenticada no Service/Controller: middleware, guard, JWT ou outro mecanismo?
2. Qual credencial ou token sera usado para confirmar a identidade do aluno?
3. Existe um criterio adicional que distingue `401` de `403` no contexto atual?
