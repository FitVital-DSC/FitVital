# Mapa de fontes do UC de listagem

Estado: **Efetivamente localizado** por busca somente leitura em 24/11/2026.

| Fonte esperada | Encontrada? | Caminho real |
|---|---|---|
| Modelo UC12 | Não | Não existe `docs/planejamento/uc12-cadastrar-produto/uc-12.md` neste workspace |
| `REF` informado: UC01 | Sim, parcialmente | `docs/Trabalhos/M4-Blueprint do Primeiro Slice.md`, seção 6 |
| Materiais `prompts/01` a `prompts/13` | Sim | `docs/prompts/01-planejamento-de-Implementação-a-partir-de-casos-de-uso.md` até `docs/prompts/13-prompt-uc-listar.md` |
| `docs/uc/` | Não | Ausente |
| `docs/adr/` | Não | Ausente |
| `project-profile.md` | Não | Ausente |
| `method/` | Não | Ausente |
| Estrutura HTTP REST | Sim | `fitvital-backend/http-rest-client/` |
| Docker Compose | Sim | `fitvital-backend/compose.yaml` |
| Manifesto do backend | Sim | `fitvital-backend/package.json` |

## Observacao

- O modelo UC12 nao bloqueia o processo porque o estudante informou UC01 como `REF`.
- ADRs, estado dos UCs e playbooks nao puderam ser verificados.
- A especificacao do UC01 encontrada no blueprint contem identificacao parcial, atores, precondicoes, pos-condicoes e fluxos, mas nao deve ser usada para inventar regras da listagem.
