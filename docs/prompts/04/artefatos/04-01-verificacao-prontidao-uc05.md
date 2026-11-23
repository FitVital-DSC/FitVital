# Artefato 04-01 — Verificação de Prontidão do UC05

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC05 — Registrar Avaliação Física
- **Issue principal (Epic):** [#46 — UC05: Registrar Avaliação Física](https://github.com/FitVital-DSC/FitVital/issues/46)
- **Sub-Issue avaliada:** [#47 — SUB-01: Refinar domínio de avaliação e histórico](https://github.com/FitVital-DSC/FitVital/issues/47)
- **Labels registradas:** `feature`, `domain`, `uc05-avaliacao-fisica`
- **Estado real observado:** `open`
- **Responsável registrado:** `marianaveigaa`, `VitorThome15`

## Evidências analisadas

- A Issue #47 está aberta e vinculada ao Epic #46.
- O objetivo, escopo e critério de aceite do domínio de avaliação e histórico estão descritos na Issue #47.
- A Issue #47 possui labels de feature, domínio e UC05.
- A Issue #47 possui `marianaveigaa` como assignee.
- A Issue #47 declara ausência de dependências.
- A API do GitHub não registra itens bloqueadores para a Issue #47.
- A Issue #47 possui dois comentários, mas o conteúdo da revisão não foi apresentado nesta evidência.
- Métricas, unidades, autorização, endpoint e regras de validação permanecem fora da SUB-01 e devem ser tratados nas etapas de contratos.
- `VitorThome15` declarou assumir responsabilidade pela parte avaliada e concedeu a autorização de início.

## Matriz DoR

| Código | Condição de prontidão | Classificação | Evidência e pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | A SUB-01 define `AvaliacaoFisica`, `HistoricoFisico`, vínculo com Aluno e invariantes. |
| DoR-02 | Escopo delimitado | **Atende** | O escopo limita-se ao domínio e não inventa métricas; contratos, API e persistência ficam para outras Sub-Issues. |
| DoR-03 | Critérios de aceite verificáveis | **Atende** | O aceite exige modelo aprovado, domínio sem ORM e preservação do histórico. |
| DoR-04 | Dependências identificadas | **Atende** | A Issue declara nenhuma dependência e a API não registra itens bloqueadores. |
| DoR-05 | Informações técnicas disponíveis | **Atende para a fase atual** | Os conceitos essenciais estão definidos; vínculos, invariantes e modelo mínimo podem ser refinados dentro do escopo autorizado. |
| DoR-06 | Responsável definido | **Atende** | `marianaveigaa` está atribuída à Issue #47 e `VitorThome15` assumiu formalmente a responsabilidade nesta autorização. |
| DoR-07 | Revisão de planejamento concluída | **Atende** | A revisão foi concluída por `VitorThome15`, que concedeu a aprovação explicitamente nesta etapa. |

## Pendências para autorização

1. Refinar as invariantes e o vínculo entre avaliação, histórico e Aluno.
2. Confirmar que métricas e unidades serão tratadas na SUB-02, sem bloquear indevidamente a modelagem inicial.
3. Registrar o assignee adicional no GitHub, caso a equipe adote a Issue como rastreabilidade oficial.
4. Manter endpoint, autorização e regras de validação como pendências da SUB-02, conforme o escopo.

## Resultado

A SUB-01 possui objetivo, escopo, critérios de aceite, responsável e revisão registrados. Os conceitos pendentes pertencem ao refinamento autorizado da modelagem e às etapas posteriores de contratos.

## Autorização

**Status: Authorized / Ready.**

- **Autorizado por:** `VitorThome15`
- **Responsáveis registrados:** `marianaveigaa`, `VitorThome15`
- **Data da autorização:** 22/11/2026
- **Unidade autorizada:** SUB-01 — Refinar domínio de avaliação e histórico
- **Escopo autorizado:** modelagem de AvaliacaoFisica, HistoricoFisico e vínculo com Aluno, sem implementar métricas, autorização, API ou persistência nesta etapa.

O início da execução da SUB-01 está autorizado nesta etapa.
