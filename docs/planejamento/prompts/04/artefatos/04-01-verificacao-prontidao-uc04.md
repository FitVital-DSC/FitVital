# Artefato 04-01 — Verificação de Prontidão do UC04

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC04 — Realizar Matrícula de Aluno
- **Issue principal (Epic):** [#38 — UC04: Realizar Matrícula de Aluno](https://github.com/FitVital-DSC/FitVital/issues/38)
- **Sub-Issue avaliada:** [#39 — SUB-01: Refinar domínio de matrícula](https://github.com/FitVital-DSC/FitVital/issues/39)
- **Labels registradas:** `feature`, `domain`, `uc04-matricula`
- **Estado real observado:** `open`
- **Estado declarado no corpo:** `Backlog`
- **Responsável registrado:** `marianaveigaa`, `VitorThome15`

## Evidências analisadas

- A Issue #39 está aberta e vinculada ao Epic #38.
- O objetivo, escopo e critérios de aceite da proteção da invariante de matrícula estão descritos na Issue #39.
- A Issue #39 possui labels de feature, domínio e UC04.
- A Issue #39 possui `marianaveigaa` como assignee.
- O corpo da Issue declara ausência de dependências.
- A API do GitHub registra cinco itens bloqueados pela Issue #39, em divergência com o corpo que declara ausência de dependências.
- A Issue #39 possui dois comentários, mas o conteúdo da revisão não foi apresentado nesta evidência.
- `VitorThome15` declarou assumir responsabilidade pela parte avaliada e concedeu a autorização de início.

## Matriz DoR

| Código | Condição de prontidão | Classificação | Evidência e pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | A SUB-01 define a proteção da invariante de matrícula. |
| DoR-02 | Escopo delimitado | **Atende** | O escopo cobre status do Aluno, estado ativo e relação obrigatória com Mensalidade, sem inventar campos. |
| DoR-03 | Critérios de aceite verificáveis | **Atende** | Existem critérios para Mensalidade obrigatória, estados documentados e independência de ORM. |
| DoR-04 | Dependências identificadas | **Pendente de ajuste** | O corpo declara nenhuma dependência, mas a API registra cinco itens bloqueados pela Issue; a divergência precisa ser resolvida. |
| DoR-05 | Informações técnicas disponíveis | **Atende para a fase atual** | Estados e conceitos essenciais estão documentados; campos do Aluno, contrato da Mensalidade e transação podem ser refinados dentro do escopo autorizado. |
| DoR-06 | Responsável definido | **Atende** | `marianaveigaa` está atribuída à Issue #39 e `VitorThome15` assumiu formalmente a responsabilidade nesta autorização. |
| DoR-07 | Revisão de planejamento concluída | **Atende** | A revisão foi concluída por `VitorThome15`, que concedeu a aprovação explicitamente nesta etapa. |

## Pendências para autorização

1. Investigar os cinco itens registrados como bloqueados e alinhar essa informação com a declaração de nenhuma dependência.
2. Refinar os estados e campos do Aluno sem inventar requisitos.
3. Definir o contrato da primeira Mensalidade e a estratégia de transação/rollback durante a execução da SUB-01 e das Sub-Issues dependentes.

## Resultado

A SUB-01 possui objetivo, escopo, critérios de aceite, responsável e revisão registrados. A divergência de dependências permanece registrada como pendência operacional, mas não bloqueia a modelagem inicial autorizada.

## Autorização

**Status: Authorized / Ready.**

- **Autorizado por:** `VitorThome15`
- **Responsáveis registrados:** `marianaveigaa`, `VitorThome15`
- **Data da autorização:** 22/11/2026
- **Unidade autorizada:** SUB-01 — Refinar domínio de matrícula
- **Escopo autorizado:** modelagem de status do Aluno, Estados da Mensalidade e invariantes sem implementar serviços, banco ou API nesta etapa.

O início da execução da SUB-01 está autorizado nesta etapa.
