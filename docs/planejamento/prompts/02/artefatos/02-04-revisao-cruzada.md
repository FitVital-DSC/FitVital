# Artefato 04 — Relatório de revisão cruzada das Issues

Esta é uma **pré-análise técnica** baseada nos artefatos locais. Nenhuma revisão humana foi concluída ou registrada no GitHub.

| Issue | Elemento | Resultado | Apontamento | Correção recomendada | Responsável / revisor | Situação |
|---|---|---|---|---|---|---|
| SUB-01/#13 | Título, objetivo e escopo | Conforme | Delimitação coerente com domínio | Confirmar estados e invariantes com a equipe | Mariana / Vitor | Pré-análise; aguarda humano |
| SUB-01/#13 | Aceite e dependências | Ajuste necessário | Limite exato de validação de horário e erros ainda depende de decisão | Registrar exemplos de inválidos e exceções antes de Ready | Mariana / Vitor | Aguardando ajuste |
| SUB-02/#14 | Contratos e escopo | Ajuste necessário | Limite do personal e estratégia de lock estão pendentes | Confirmar assinaturas e marcar decisões aprovadas | Vitor / Mariana | Aguardando ajuste |
| SUB-03/#15 | Fluxo e aceite | Conforme | Ordem das portas e interrupção RN01 estão descritas | Confirmar ordem no comentário humano | Mariana / Vitor | Pré-análise; aguarda humano |
| SUB-04/#16 | HTTP e critérios | Conforme | Rota e códigos estão documentados | Confirmar fonte do aluno no JWT e formato de resposta | Vitor / Mariana | Pré-análise; aguarda humano |
| SUB-05/#17 | Persistência | Ajuste necessário | Schema/migration concreta não está definida no planejamento | Confirmar campos, mapper e estratégia de falha | Mariana / Vitor | Aguardando ajuste |
| SUB-06/#18 | Concorrência | Ajuste necessário | Lock otimista/pessimista ainda não escolhido | Registrar decisão técnica e cenário concorrente | Vitor / Mariana | Aguardando ajuste |
| SUB-07/#19 | Testes | Ajuste necessário | Depende de decisões e componentes; não há revisão humana | Separar cobertura por camada e confirmar ferramenta | Mariana / Vitor | Aguardando ajuste |
| SUB-08/#20 | Governança | Ajuste necessário | Requer resultados das demais Issues e correção RN03/RN04 | Atualizar documentos após validação da equipe | Vitor / Mariana | Aguardando fechamento |

## Apontamentos transversais

O Blueprint possui inconsistência de referência entre RN03/RN04 na tabela de falhas; o planejamento adotou RN03 para choque nominal e RN04 para limite do personal. O Project ainda apresenta `Todo`, não os cinco estados metodológicos. Essas pendências devem ser corrigidas ou formalmente aceitas pela equipe antes da prontidão.

