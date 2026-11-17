# Artefato 04-01 — Verificação de Prontidão do UC02

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC02 — Realizar Check-in (Controle de Acesso)
- **Issue principal (Epic):** [#21 — UC02](https://github.com/FitVital-DSC/FitVital/issues/21)
- **Sub-Issue avaliada:** [#22 — SUB-01: Refinar modelo de acesso e ocupação](https://github.com/FitVital-DSC/FitVital/issues/22)
- **Labels registradas:** `uc02-check-in`, `feature`, `domain`, `priority:high`
- **Estado registrado:** `Ready`
- **Responsável registrado:** A definir

## Evidências analisadas

- A Issue #22 está aberta e vinculada ao Epic #21.
- O objetivo, escopo, origem, critérios de aceite e ausência de dependências estão descritos na Issue #22.
- A Issue #22 possui as labels de UC02, feature, domínio e prioridade alta.
- A Issue #22 não possui assignee, milestone ou Sub-Issues.
- O planejamento local descreve o mesmo objetivo e os mesmos critérios para a SUB-01.
- O protocolo da catraca, o identificador de entrada, a fonte do status financeiro e a estratégia de concorrência ainda não estão definidos.

## Matriz DoR

| Código | Condição de prontidão | Classificação | Evidência e pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | A SUB-01 define a modelagem de autorização, registro de entrada e ocupação. |
| DoR-02 | Escopo delimitado | **Atende** | O escopo inclui domínio, invariantes e erros; o protocolo da catraca está explicitamente fora da SUB-01. |
| DoR-03 | Critérios de aceite verificáveis | **Atende** | A Issue #22 possui quatro critérios verificáveis para autorização, capacidade, registro, incremento e independência de infraestrutura. |
| DoR-04 | Dependências identificadas | **Atende** | A Issue #22 declara não possuir dependências; as incertezas técnicas estão registradas como pendências. |
| DoR-05 | Informações técnicas disponíveis | **Pendente de ajuste** | Ainda precisam ser confirmados o identificador do aluno, o contrato da catraca, a fonte financeira e a estratégia de concorrência. |
| DoR-06 | Responsável definido | **Não atende** | A Issue #22 informa `Responsável: A definir` e não possui assignee. |
| DoR-07 | Revisão de planejamento concluída | **Não atende** | Não foi apresentada evidência de revisão humana aprovada especificamente para a SUB-01. |

## Pendências para autorização

1. Definir e registrar o responsável pela Issue #22.
2. Confirmar quais decisões técnicas pertencem à SUB-01 e quais serão tratadas nas Sub-Issues posteriores.
3. Registrar o identificador do aluno, o contrato mínimo da catraca, a fonte do status financeiro e a estratégia de concorrência como decisões ou hipóteses explícitas.
4. Registrar a revisão do planejamento e a aprovação da SUB-01.

## Resultado

A SUB-01 possui objetivo, escopo, critérios de aceite e dependências documentados, mas **não atende formalmente à Definition of Ready** porque DoR-05 permanece pendente e DoR-06 e DoR-07 não atendem.

## Autorização

**Início do desenvolvimento: não autorizado nesta etapa.**

A autorização deverá ser reavaliada após a definição do responsável, o registro das decisões técnicas pendentes e a aprovação formal do planejamento.
