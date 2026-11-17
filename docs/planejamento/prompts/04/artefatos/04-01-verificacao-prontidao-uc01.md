# Artefato 04-01 — Verificação de Prontidão do UC01

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
- A Issue #1 possui `marianaveigaa` como responsável, conforme evidência visual enviada.
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
| DoR-05 | Informações técnicas disponíveis | **Pendente de ajuste** | O domínio e as regras estão documentados, mas `Horario`, os estados completos e os contratos ainda precisam ser confirmados no código e no planejamento técnico. |
| DoR-06 | Responsável definido | **Atende** | `marianaveigaa` está atribuída à Issue #1; a atribuição específica da SUB-01 ainda deve ser mantida na rastreabilidade local. |
| DoR-07 | Revisão de planejamento concluída | **Não atende** | Não foi apresentada evidência de revisão humana aprovada especificamente para a SUB-01. |

## Pendências para autorização

1. Confirmar se a atribuição de `marianaveigaa` à Issue #1 também representa a responsabilidade pela SUB-01.
2. Confirmar os detalhes técnicos pendentes do domínio, especialmente `Horario` e os estados do agendamento.
3. Registrar a revisão do planejamento e a aprovação da SUB-01.
4. Criar e vincular as Sub-Issues no GitHub, caso a equipe adote a decomposição local como rastreabilidade oficial.

## Resultado

A SUB-01 possui objetivo, escopo, critérios de aceite e dependências suficientemente descritos, mas **não atende formalmente à Definition of Ready** porque os critérios DoR-05 e DoR-07 permanecem pendentes ou não atendidos.

## Autorização

**Início do desenvolvimento: não autorizado nesta etapa.**

A autorização deverá ser reavaliada após a definição do responsável, a resolução das pendências técnicas e o registro da revisão de planejamento.
