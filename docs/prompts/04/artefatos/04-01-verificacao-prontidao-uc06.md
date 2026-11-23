# Artefato 04-01 — Verificação de Prontidão do UC06

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC06 — Montar Plano de Treino
- **Issue principal (Epic):** [#54 — UC06: Montar Plano de Treino](https://github.com/FitVital-DSC/FitVital/issues/54)
- **Sub-Issue avaliada:** [#55 — SUB-01: Refinar domínio da ficha de treino](https://github.com/FitVital-DSC/FitVital/issues/55)
- **Labels registradas:** `feature`, `domain`, `uc06-plano-treino`
- **Estado real observado:** `open`
- **Responsável registrado:** `marianaveigaa`, `VitorThome15`

## Evidências analisadas

- A Issue #55 está aberta e vinculada ao Epic #54.
- O objetivo, escopo e critério de aceite do domínio da ficha de treino estão descritos na Issue #55.
- A Issue #55 possui labels de feature, domínio e UC06.
- A Issue #55 possui `marianaveigaa` como assignee.
- A Issue #55 declara ausência de dependências.
- A API do GitHub não registra itens bloqueadores para a Issue #55.
- A Issue #55 possui dois comentários, mas o conteúdo da revisão não foi apresentado nesta evidência.
- O M4 não define a composição da ficha, exercícios, vínculos, invariantes, regras de edição, validade, autorização ou persistência.
- `VitorThome15` declarou assumir responsabilidade pela parte avaliada e concedeu a autorização de início.

## Matriz DoR

| Código | Condição de prontidão | Classificação | Evidência e pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | A SUB-01 define o refinamento do domínio da ficha de treino. |
| DoR-02 | Escopo delimitado | **Atende** | O escopo cobre ficha, exercícios, vínculos e invariantes, sem inventar campos. |
| DoR-03 | Critérios de aceite verificáveis | **Atende** | O aceite exige modelo aprovado, independência de ORM e coerência com o M4. |
| DoR-04 | Dependências identificadas | **Atende** | A Issue declara nenhuma dependência e a API não registra itens bloqueadores. |
| DoR-05 | Informações técnicas disponíveis | **Atende para a fase atual** | Os conceitos essenciais estão definidos no planejamento; composição da ficha, exercícios e vínculos podem ser refinados dentro do escopo autorizado. |
| DoR-06 | Responsável definido | **Atende** | `marianaveigaa` está atribuída à Issue #55 e `VitorThome15` assumiu formalmente a responsabilidade nesta autorização. |
| DoR-07 | Revisão de planejamento concluída | **Atende** | A revisão foi concluída por `VitorThome15`, que concedeu a aprovação explicitamente nesta etapa. |

## Pendências para autorização

1. Refinar a composição mínima da ficha de treino e o conceito de exercício.
2. Confirmar os vínculos entre ficha, Aluno e Personal Trainer.
3. Definir invariantes, regras de validade e limites do domínio sem inventar requisitos do M4.
4. Registrar o assignee adicional no GitHub, caso a equipe adote a Issue como rastreabilidade oficial.
5. Manter autorização, endpoint, persistência e regras de edição para as Sub-Issues correspondentes.

## Resultado

A SUB-01 possui objetivo, escopo, critérios de aceite, responsável e revisão registrados. Os conceitos pendentes pertencem ao refinamento autorizado da modelagem e às etapas posteriores.

## Autorização

**Status: Authorized / Ready.**

- **Autorizado por:** `VitorThome15`
- **Responsáveis registrados:** `marianaveigaa`, `VitorThome15`
- **Data da autorização:** 22/11/2026
- **Unidade autorizada:** SUB-01 — Refinar domínio da ficha de treino
- **Escopo autorizado:** modelagem da ficha, dos exercícios, dos vínculos e das invariantes sem implementar autorização, API, persistência ou regras de edição nesta etapa.

O início da execução da SUB-01 está autorizado nesta etapa.
