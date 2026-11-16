# Artefato 04-01 — Verificação de Prontidão do UC06

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC06 — Montar Plano de Treino
- **Issue principal (Epic):** [#54 — UC06: Montar Plano de Treino](https://github.com/FitVital-DSC/FitVital/issues/54)
- **Sub-Issue avaliada:** [#55 — SUB-01: Refinar domínio da ficha de treino](https://github.com/FitVital-DSC/FitVital/issues/55)
- **Labels registradas:** `feature`, `domain`, `uc06-plano-treino`
- **Estado real observado:** `open`
- **Responsável registrado:** `marianaveigaa`

## Evidências analisadas

- A Issue #55 está aberta e vinculada ao Epic #54.
- O objetivo, escopo e critério de aceite do domínio da ficha de treino estão descritos na Issue #55.
- A Issue #55 possui labels de feature, domínio e UC06.
- A Issue #55 possui `marianaveigaa` como assignee.
- A Issue #55 declara ausência de dependências.
- A API do GitHub não registra itens bloqueadores para a Issue #55.
- A Issue #55 possui dois comentários, mas o conteúdo da revisão não foi apresentado nesta evidência.
- O M4 não define a composição da ficha, exercícios, vínculos, invariantes, regras de edição, validade, autorização ou persistência.

## Matriz DoR

| Código | Condição de prontidão | Classificação | Evidência e pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | A SUB-01 define o refinamento do domínio da ficha de treino. |
| DoR-02 | Escopo delimitado | **Atende** | O escopo cobre ficha, exercícios, vínculos e invariantes, sem inventar campos. |
| DoR-03 | Critérios de aceite verificáveis | **Atende** | O aceite exige modelo aprovado, independência de ORM e coerência com o M4. |
| DoR-04 | Dependências identificadas | **Atende** | A Issue declara nenhuma dependência e a API não registra itens bloqueadores. |
| DoR-05 | Informações técnicas disponíveis | **Pendente de ajuste** | A ficha, os exercícios, os vínculos e as invariantes ainda não possuem definição aprovada; o M4 registra apenas o resultado geral. |
| DoR-06 | Responsável definido | **Atende** | `marianaveigaa` está atribuída à Issue #55. |
| DoR-07 | Revisão de planejamento concluída | **Pendente de comprovação** | Há dois comentários registrados, mas seus conteúdos não foram apresentados; não é possível confirmar aprovação apenas pelo contador. |

## Pendências para autorização

1. Aprovar a composição mínima da ficha de treino e o conceito de exercício.
2. Confirmar os vínculos entre ficha, Aluno e Personal Trainer.
3. Definir invariantes, regras de validade e limites do domínio sem inventar requisitos do M4.
4. Confirmar o conteúdo dos comentários e registrar a revisão/aprovação da SUB-01.
5. Manter autorização, endpoint, persistência e regras de edição para as Sub-Issues correspondentes.

## Resultado

A SUB-01 possui objetivo, escopo, critérios de aceite, responsável e dependências documentados, mas **não atende formalmente à Definition of Ready** porque DoR-05 permanece pendente e DoR-07 não foi comprovado.

## Autorização

**Início do desenvolvimento: não autorizado nesta etapa.**

A autorização deverá ser reavaliada após a aprovação do modelo de domínio e a comprovação da revisão humana.
