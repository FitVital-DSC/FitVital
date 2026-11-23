# Artefato 04-01 — Verificação de Prontidão

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC01 — Solicitar Agendamento de Treino
- **Issue principal (Epic):** [#1 — feat: Implementar UC01 - Solicitar Agendamento de Treino](https://github.com/FitVital-DSC/FitVital/issues/1)
- **Sub-Issue avaliada:** SUB-01 — Refinar domínio de agendamento
- **Branch relacionada identificada:** `feat/issue-1-agendamento-treino`
- **Commit da branch remota:** `b7fb1e147884345659d52f53eb35c5cb3a64ff40`

## Evidências analisadas

- A branch principal local está em `main` e alinhada com `origin/main`.
- A Issue #1 está aberta e descreve o UC01, suas regras RN01–RN04 e critérios de aceitação.
- A Issue #1 possui `marianaveigaa` e `VitorThome15` como responsáveis, conforme evidência visual enviada.
- `VitorThome15` declarou assumir responsabilidade pela parte avaliada e concedeu a autorização de início.
- A Issue #1 não possui labels, milestone ou Sub-Issues registradas.
- A SUB-01 está descrita no planejamento local como sem dependências e com estado `Ready`.
- O arquivo não rastreado `docs/prompts/05-do-teste-red-a-implementacao-green-com-tdd.md` foi mantido fora do escopo.

## Matriz DoR

| Código | Condição de prontidão | Classificação | Evidência e pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | A SUB-01 define a modelagem de `Agendamento`, `Horario`, estados e comportamento de confirmação. |
| DoR-02 | Escopo delimitado | **Atende** | A SUB-01 inclui domínio, objetos de valor, invariantes e erros; controller, banco e integrações estão fora do escopo. |
| DoR-03 | Critérios de aceite verificáveis | **Atende** | Existem critérios para imutabilidade do horário, proteção de transições, validação de parâmetros e independência de ORM. |
| DoR-04 | Dependências identificadas | **Atende** | A SUB-01 não possui dependências; as dependências posteriores estão registradas nas Sub-Issues seguintes. |
| DoR-05 | Informações técnicas disponíveis | **Atende para a fase atual** | O domínio e as regras necessárias à modelagem estão documentados. Detalhes adicionais podem ser refinados dentro do escopo autorizado. |
| DoR-06 | Responsável definido | **Atende** | `marianaveigaa` e `VitorThome15` aparecem como responsáveis da Issue #1; `VitorThome15` assumiu formalmente a responsabilidade pela SUB-01 nesta autorização. |
| DoR-07 | Revisão de planejamento concluída | **Atende** | A revisão foi concluída por `VitorThome15`, que concedeu a aprovação explicitamente nesta etapa. |

## Pendências para autorização

1. Refinar os detalhes técnicos de `Horario`, estados e transições durante a execução da SUB-01.
2. Criar e vincular as Sub-Issues no GitHub, caso a equipe adote a decomposição local como rastreabilidade oficial.

## Resultado

A SUB-01 possui objetivo, escopo, critérios de aceite, responsável e revisão registrados e atende aos critérios essenciais da Definition of Ready para início desta etapa.

## Autorização

**Status: Authorized / Ready.**

- **Autorizado por:** `VitorThome15`
- **Responsáveis registrados:** `marianaveigaa`, `VitorThome15`
- **Data da autorização:** 22/11/2026
- **Unidade autorizada:** SUB-01 — Refinar domínio de agendamento
- **Escopo autorizado:** modelagem do domínio sem implementar controller, banco ou integrações nesta etapa.

O início da execução da SUB-01 está autorizado nesta etapa.
