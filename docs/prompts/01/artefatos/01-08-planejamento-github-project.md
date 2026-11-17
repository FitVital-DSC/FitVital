# Artefato 8 — Planejamento do GitHub Project

## Configuração do board

Criar um GitHub Project Kanban para o UC01 com o campo **Status** contendo exatamente:

1. `Backlog`
2. `Ready`
3. `In Progress`
4. `In Review`
5. `Done`

Não utilizar `Todo`, `No Status` ou outros estados. A mudança para `Done` somente ocorrerá após implementação, revisão e evidências futuras; neste planejamento nenhuma entrega é declarada pronta.

## Distribuição inicial

| Item | Status inicial | Justificativa |
|---|---|---|
| Epic `[UC01] Solicitar Agendamento de Treino` | Ready | Escopo e critérios gerais documentados |
| SUB-01 | Ready | Não depende de outra Sub-Issue |
| SUB-02 | Backlog | Depende do refinamento do domínio; será movida para `Ready` após SUB-01 e confirmação dos contratos |
| SUB-03 | Backlog | Aguarda SUB-01 e SUB-02 |
| SUB-04 | Backlog | Aguarda contratos e serviço |
| SUB-05 | Backlog | Aguarda contratos e serviço |
| SUB-06 | Backlog | Aguarda persistência e decisão de lock |
| SUB-07 | Backlog | Aguarda componentes e decisões |
| SUB-08 | Backlog | Consolida o trabalho |

## Definition of Ready proposta

Uma Issue pode ir para `Ready` quando possuir objetivo, escopo, origem documental, critérios testáveis, dependências e responsável definidos. A equipe ainda deve confirmar os campos marcados como pendência no Blueprint.
