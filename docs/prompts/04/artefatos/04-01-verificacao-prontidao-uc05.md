# Artefato 04-01 — Verificação de Prontidão do UC05

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC05 — Registrar Avaliação Física
- **Issue principal (Epic):** [#46 — UC05: Registrar Avaliação Física](https://github.com/FitVital-DSC/FitVital/issues/46)
- **Sub-Issue avaliada:** [#47 — SUB-01: Refinar domínio de avaliação e histórico](https://github.com/FitVital-DSC/FitVital/issues/47)
- **Labels registradas:** `feature`, `domain`, `uc05-avaliacao-fisica`
- **Estado real observado:** `open`
- **Responsável registrado:** `marianaveigaa`

## Evidências analisadas

- A Issue #47 está aberta e vinculada ao Epic #46.
- O objetivo, escopo e critério de aceite do domínio de avaliação e histórico estão descritos na Issue #47.
- A Issue #47 possui labels de feature, domínio e UC05.
- A Issue #47 possui `marianaveigaa` como assignee.
- A Issue #47 declara ausência de dependências.
- A API do GitHub não registra itens bloqueadores para a Issue #47.
- A Issue #47 possui dois comentários, mas o conteúdo da revisão não foi apresentado nesta evidência.
- Métricas, unidades, autorização, endpoint e regras de validação permanecem fora da SUB-01 e devem ser tratados nas etapas de contratos.

## Matriz DoR

| Código | Condição de prontidão | Classificação | Evidência e pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | A SUB-01 define `AvaliacaoFisica`, `HistoricoFisico`, vínculo com Aluno e invariantes. |
| DoR-02 | Escopo delimitado | **Atende** | O escopo limita-se ao domínio e não inventa métricas; contratos, API e persistência ficam para outras Sub-Issues. |
| DoR-03 | Critérios de aceite verificáveis | **Atende** | O aceite exige modelo aprovado, domínio sem ORM e preservação do histórico. |
| DoR-04 | Dependências identificadas | **Atende** | A Issue declara nenhuma dependência e a API não registra itens bloqueadores. |
| DoR-05 | Informações técnicas disponíveis | **Pendente de ajuste** | O contexto e os conceitos estão definidos, mas as invariantes, o vínculo com Aluno e o modelo mínimo ainda precisam de aprovação explícita. |
| DoR-06 | Responsável definido | **Atende** | `marianaveigaa` está atribuída à Issue #47. |
| DoR-07 | Revisão de planejamento concluída | **Pendente de comprovação** | Há dois comentários registrados, mas seus conteúdos não foram apresentados; não é possível confirmar aprovação apenas pelo contador. |

## Pendências para autorização

1. Aprovar explicitamente as invariantes e o vínculo entre avaliação, histórico e Aluno.
2. Confirmar que métricas e unidades serão tratadas na SUB-02, sem bloquear indevidamente a modelagem inicial.
3. Confirmar o conteúdo dos comentários e registrar a revisão/aprovação da SUB-01.
4. Manter endpoint, autorização e regras de validação como pendências da SUB-02, conforme o escopo.

## Resultado

A SUB-01 possui objetivo, escopo, critérios de aceite, responsável e dependências documentados, mas **não atende formalmente à Definition of Ready** porque DoR-05 permanece pendente e DoR-07 não foi comprovado.

## Autorização

**Início do desenvolvimento: não autorizado nesta etapa.**

A autorização deverá ser reavaliada após a aprovação do modelo de domínio e a comprovação da revisão humana.
