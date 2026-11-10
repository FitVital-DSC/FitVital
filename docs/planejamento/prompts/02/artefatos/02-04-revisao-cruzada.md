# Artefato 04 — Relatório de revisão cruzada das Issues

Esta é uma **pré-análise técnica** dos artefatos do UC02. Nenhuma revisão humana foi concluída ou registrada no GitHub.

| Issue | Elemento | Resultado preliminar | Apontamento | Correção recomendada | Responsável / revisor | Situação |
|---|---|---|---|---|---|---|
| SUB-01 / #22 | Modelo e invariantes | Conforme com ressalvas | Identificador e estados de acesso ainda não foram detalhados | Confirmar modelo e erros de domínio | Mariana / Vitor | Aguarda revisão humana |
| SUB-02 / #23 | Contratos e portas | Ajuste necessário | Fonte financeira, identificador e protocolo da catraca pendentes | Registrar contratos aprovados e hipóteses | Vitor / Mariana | Backlog |
| SUB-03 / #24 | Serviço de aplicação | Conforme com ressalvas | Ordem das consultas e transação precisam de confirmação | Validar bloqueio antes de registro/liberação | Mariana / Vitor | Aguarda revisão humana |
| SUB-04 / #25 | Persistência | Ajuste necessário | Campos do registro e operação do contador não estão fechados | Confirmar mapper, atomicidade e falhas | Vitor / Mariana | Backlog |
| SUB-05 / #26 | Adapter da catraca | Ajuste necessário | Protocolo físico não documentado | Definir contrato do adapter e falha segura | Mariana / Vitor | Backlog |
| SUB-06 / #27 | Concorrência | Ajuste necessário | Estratégia de lock/consistência não escolhida | Registrar decisão e cenário da última vaga | Vitor / Mariana | Backlog |
| SUB-07 / #28 | Testes | Ajuste necessário | Cenários dependem dos contratos e decisões | Organizar cobertura por camada | Mariana / Vitor | Backlog |
| SUB-08 / #29 | Governança | Ajuste necessário | Depende das decisões e revisões anteriores | Consolidar evidências e aplicar DoR novamente | Vitor / Mariana | Backlog |

## Apontamentos transversais

O UC02 depende de informações financeiras do UC03 e compartilha a capacidade física relacionada ao UC01. O processo de saída/decremento da ocupação não foi especificado e não deve ser inventado. O usuário de Vitor e os assignees ainda precisam ser confirmados.
