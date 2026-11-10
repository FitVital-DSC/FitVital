# Artefato 4 — Sub-Issues completas

## `[SUB-01] Refinar domínio de agendamento`

**Objetivo:** modelar `Agendamento`, `Horario`, estados e comportamento que protege a confirmação.

**Descrição:** definir os dados necessários (`alunoId`, `personalId`, academia e horário), estados `Solicitado`, `Confirmado` e `Recusado`, validações de horário e o comportamento de confirmação. O domínio não recebe anotações de ORM.

**Origem:** pós-condição do UC01, RN03 e RN04; comportamento conceitual `Agendamento.confirmar(...)`.

**Escopo:** entidades, VO, invariantes e erros de domínio. Não inclui controller, banco ou integração real.

**Aceite:**
- [ ] `Horario` representa data, início e fim de forma imutável.
- [ ] O agendamento não é confirmado por atribuição direta de status.
- [ ] Estados e transições documentados são protegidos por comportamento de domínio.
- [ ] Parâmetros inválidos geram erro de domínio explícito.

**Dependências:** nenhuma. **Labels:** `feature`, `domain`, `priority:high`. **Responsável:** A definir. **Estado:** Ready. **Evidências:** modelo, testes unitários de domínio e revisão.

## `[SUB-02] Definir comandos, DTOs e portas do agendamento`

**Objetivo:** formalizar contratos entre HTTP, aplicação e bounded contexts.

**Descrição:** definir `SolicitarAgendamentoRequestDTO`, `SolicitarAgendamentoCommand`, `AgendamentoResponseDTO`, `FinanceiroPort`, `EspacoCapacidadePort`, `AgendaPersonalPort` e `AgendamentoRepository`, com as operações documentadas.

**Origem:** etapas 15–17 e fluxo do UC01.

**Escopo:** tipos, responsabilidades, entradas e saídas; sem adapters concretos.

**Aceite:**
- [ ] O aluno é obtido do contexto autenticado e não do corpo documentado.
- [ ] Os contratos expõem somente as operações necessárias.
- [ ] DTOs não expõem entidades de domínio.
- [ ] Ambiguidades de limite do personal e lock são marcadas para decisão.

**Dependências:** SUB-01. **Labels:** `feature`, `application`, `domain`, `documentation`. **Responsável:** A definir. **Estado:** Ready. **Evidências:** contratos tipados e decisão registrada.

## `[SUB-03] Implementar serviço de aplicação do UC01`

**Objetivo:** coordenar o fluxo na ordem definida sem decidir regras no controller.

**Descrição:** orquestrar adimplência, capacidade, disponibilidade do personal, choque nominal, criação/confirmação, persistência e evento/log. Falhas devem interromper o fluxo com erros explícitos.

**Origem:** fluxo principal, alternativos e sequência arquitetural.

**Aceite:**
- [ ] RN01 interrompe o fluxo antes das demais operações quando aplicável.
- [ ] RN02, RN04 e RN03 são consultadas pelas respectivas portas/contrato.
- [ ] Em sucesso, salva e retorna resultado do agendamento.
- [ ] Nenhum acesso direto a tabelas de outros contextos ocorre.

**Dependências:** SUB-01 e SUB-02. **Labels:** `feature`, `application`, `priority:high`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** serviço, testes com dublês e diagrama atualizado.

## `[SUB-04] Planejar adaptador HTTP do agendamento`

**Objetivo:** definir a fronteira HTTP documentada para o UC01.

**Descrição:** especificar POST `/api/v1/agendamentos`, desserialização, validação de data/horário, extração do JWT, conversão para command e mapeamento de 201, 400, 409 e 422.

**Origem:** etapa 16 e resultados esperados.

**Aceite:**
- [ ] Corpo aceita os campos documentados e não recebe `alunoId`.
- [ ] Formato inválido resulta em 400.
- [ ] Sucesso resulta em 201 com ticket/status/horário.
- [ ] Violações são traduzidas conforme RN e código documentado.

**Dependências:** SUB-02 e SUB-03. **Labels:** `feature`, `api`, `application`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** contrato HTTP, exemplos de request/response e testes de integração futuros.

## `[SUB-05] Implementar persistência do agendamento`

**Objetivo:** persistir e consultar agendamentos por meio da porta definida.

**Descrição:** implementar adapter ORM/SQL, mapper bidirecional e operações `salvar` e `existeAgendamentoAtivoParaAluno`, mantendo entidades livres de ORM.

**Origem:** etapas 15 e 18.

**Aceite:**
- [ ] Adapter implementa integralmente o contrato do repositório.
- [ ] Mapeamento preserva aluno, personal, academia, horário e status.
- [ ] Consulta identifica choque nominal no mesmo horário.
- [ ] Falha de banco é propagada como falha de infraestrutura explícita.

**Dependências:** SUB-02 e SUB-03. **Labels:** `feature`, `infra`, `persistence`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** mapper, migration/ORM e teste de repositório.

## `[SUB-06] Proteger concorrência e capacidade`

**Objetivo:** evitar corrida na última vaga e preservar RN02.

**Descrição:** decidir com a equipe lock otimista ou pessimista e aplicá-lo ao fluxo de capacidade/reserva, incluindo a interação com PostgreSQL documentada no Blueprint.

**Origem:** RN02, etapa 19 e pendência de governança de alta prioridade.

**Aceite:**
- [ ] A estratégia de lock é registrada e justificada.
- [ ] Duas solicitações concorrentes não ultrapassam a lotação.
- [ ] Conflito é traduzido para o resultado documentado.
- [ ] A solução não introduz acesso indevido entre bounded contexts.

**Dependências:** SUB-02 e SUB-05. **Labels:** `feature`, `infra`, `priority:high`, `risk`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** decisão arquitetural, teste concorrente e logs.

## `[SUB-07] Validar automaticamente o slice`

**Objetivo:** planejar a comprovação automatizada dos fluxos.

**Descrição:** cobrir domínio, serviço com mocks, controller HTTP e persistência com banco em memória ou container de teste, conforme a estratégia documentada.

**Origem:** etapa 23 e fluxos principal/alternativos.

**Aceite:**
- [ ] Há cenários para sucesso e RN01–RN04.
- [ ] Há cenários para 400, 409, 422 e falha de infraestrutura.
- [ ] Há verificação de choque e concorrência.
- [ ] Resposta de sucesso respeita o DTO documentado.

**Dependências:** SUB-01 a SUB-06, por camada. **Labels:** `test`, `domain`, `application`, `api`, `infra`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** suíte executável e relatório de cobertura dos comportamentos.

## `[SUB-08] Consolidar documentação e rastreabilidade`

**Objetivo:** manter UC01, linguagem ubíqua, contratos e planejamento coerentes.

**Descrição:** registrar o termo Command, estados do agendamento, decisão de lock, limite do personal e correção RN03/RN04, além de atualizar referências e evidências.

**Origem:** etapas 24–26.

**Aceite:**
- [ ] Pendências e decisões estão identificadas como confirmadas ou propostas.
- [ ] Cada requisito possui Sub-Issue e critério de aceite.
- [ ] Não há dependência circular nem tarefa sem justificativa.
- [ ] Documentos de governança refletem o escopo do slice.

**Dependências:** SUB-01 a SUB-07. **Labels:** `documentation`, `governance`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** documentos revisados e matriz de rastreabilidade atualizada.
