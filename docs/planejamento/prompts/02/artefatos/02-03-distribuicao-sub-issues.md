# Artefato 03 — Matriz de distribuição das Sub-Issues

A distribuição abaixo é proposta. As Issues reais estão abertas no repositório; a revisão humana e a atribuição formal ainda não foram concluídas.

| ID / Issue | Título | Complexidade | Dependências | Responsável proposto | Revisor proposto | Estado metodológico observado | Recomendação DoR |
|---|---|---|---|---|---|---|---|
| SUB-01 / #22 | Refinar modelo de acesso e ocupação | Alta | — | Mariana | Vitor | Ready | Backlog |
| SUB-02 / #23 | Definir comando, DTOs e portas do check-in | Média | SUB-01 | Vitor | Mariana | Backlog | Backlog |
| SUB-03 / #24 | Implementar serviço de aplicação do UC02 | Alta | SUB-01, SUB-02 | Mariana | Vitor | Backlog | Backlog |
| SUB-04 / #25 | Implementar persistência da entrada e ocupação | Alta | SUB-02, SUB-03 | Vitor | Mariana | Backlog | Backlog |
| SUB-05 / #26 | Planejar adapter da catraca | Média | SUB-02, SUB-03 | Mariana | Vitor | Backlog | Backlog |
| SUB-06 / #27 | Proteger concorrência da capacidade | Alta | SUB-02, SUB-04 | Vitor | Mariana | Backlog | Backlog |
| SUB-07 / #28 | Validar automaticamente o caso de uso | Alta | SUB-01 a SUB-06 | Mariana | Vitor | Backlog | Backlog |
| SUB-08 / #29 | Consolidar documentação e rastreabilidade | Média | SUB-01 a SUB-07 | Vitor | Mariana | Backlog | Backlog |

O campo `Status Metodologia` do Project foi configurado com os cinco estados exigidos. Embora Epic e SUB-01 tenham sido posicionadas em `Ready`, a DoR recomenda mantê-las em `Backlog` até a revisão humana.
