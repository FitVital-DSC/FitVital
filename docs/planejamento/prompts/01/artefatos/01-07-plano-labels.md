# Artefato 7 — Plano de labels

| Label | Cor sugerida | Finalidade | Aplicação |
|---|---|---|---|
| `uc01-agendamento` | `#1D76DB` | Identifica o slice UC01 | Epic e SUB-01–SUB-08 |
| `feature` | `#A2EEEF` | Entrega funcional | SUB-01–SUB-06 |
| `test` | `#7057FF` | Validação automatizada | SUB-07 |
| `documentation` | `#0075CA` | Documentação e contratos | SUB-02, SUB-08 |
| `governance` | `#5319E7` | Governança/rastreabilidade | SUB-08 |
| `domain` | `#B60205` | Camada de domínio | SUB-01, SUB-02, SUB-07 |
| `application` | `#D93F0B` | Casos de uso e portas | SUB-02–SUB-04, SUB-07 |
| `api` | `#FBCA04` | Fronteira HTTP | SUB-04, SUB-07 |
| `infra` | `#C2E0C6` | Adapters e ambiente | SUB-05–SUB-07 |
| `persistence` | `#0E8A16` | ORM, mapper e banco | SUB-05, SUB-07 |
| `priority:high` | `#B60205` | Risco/valor alto | Epic, SUB-01, SUB-03, SUB-06 |
| `risk` | `#D93F0B` | Pendência ou risco técnico | SUB-06 |

As cores são sugestões. Aplicar `uc01-agendamento` em todas as Issues do slice; combinar labels de tipo e camada conforme a tabela, sem criar labels para fases artificiais de TDD.

