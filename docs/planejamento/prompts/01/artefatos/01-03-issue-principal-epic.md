# Artefato 3 — Issue principal (Epic)

## Título

`[UC01] Solicitar Agendamento de Treino`

## Objetivo

Planejar a implementação do primeiro slice do FitVital para permitir que um aluno autenticado solicite um horário e receba um agendamento confirmado somente quando RN01, RN02, RN03 e RN04 forem atendidas.

## Contexto e escopo

O slice pertence ao bounded context de Gestão de Agendamentos em um monólito modular. Abrange domínio, portas, serviço de aplicação, API HTTP, persistência, controle de concorrência, testes e documentação. Não abrange Gateway de Pagamento real, catraca física, notificações reais ou avaliação física.

**Referência formal:** [M4-Blueprint do Primeiro Slice](../../../../Trabalhos/M4-Blueprint%20do%20Primeiro%20Slice.md), especialmente a especificação do UC01 e as etapas 15–23.

## Requisitos contemplados

- Aluno autenticado informa personal, data e intervalo de horário.
- RN01 bloqueia aluno com atraso superior a 24h.
- RN02 impede exceder a lotação máxima.
- RN03 impede choque de horário do mesmo aluno.
- RN04 verifica o limite/disponibilidade do personal.
- Sucesso persiste agendamento confirmado e gera `AgendamentoConfirmado`.
- API prevê 201, 400, 409 e 422 conforme o motivo.

## Sub-Issues planejadas

- [ ] SUB-01 — Refinar domínio de agendamento
- [ ] SUB-02 — Definir comandos, DTOs e portas
- [ ] SUB-03 — Implementar serviço de aplicação
- [ ] SUB-04 — Planejar adaptador HTTP
- [ ] SUB-05 — Implementar persistência do agendamento
- [ ] SUB-06 — Proteger concorrência e capacidade
- [ ] SUB-07 — Validar automaticamente o slice
- [ ] SUB-08 — Consolidar documentação e rastreabilidade

## Critérios gerais de aceite

- O fluxo feliz confirma e persiste o agendamento.
- RN01–RN04 são verificadas sem acesso direto entre tabelas de bounded contexts.
- A entidade de domínio mantém invariantes e não depende de ORM.
- Entrada inválida e cada recusa possuem saída testável e explícita.
- Concorrência não permite exceder capacidade nem criar choque nominal.
- Testes futuros cobrem domínio, aplicação, HTTP e persistência.
- A documentação funcional e arquitetural fica alinhada às decisões implementadas.

## Dependências, bloqueios e prontidão

Dependem de confirmação: mecanismo de lock, limite numérico do personal e correção da referência RN03/RN04 na tabela de falhas. Financeiro e notificações reais serão substituídos por mock/log no slice. A Issue está pronta para planejamento quando essas pendências forem registradas e a equipe confirmar os contratos.
