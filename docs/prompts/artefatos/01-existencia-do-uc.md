# Verificacao da existencia do UC de listagem

Estado: **Evidencia efetivamente coletada** em 24/11/2026.

| O que procurei | Onde | O que encontrei |
|---|---|---|
| Especificacao de listagem de agendamento | `docs/`, `prompts/`, `fitvital-backend/` | Nao foi encontrada especificacao documentada para listar `Scheduling` |
| UC01 documentado | `docs/Trabalhos/M4-Blueprint do Primeiro Slice.md` | Existe o UC01, Solicitar Agendamento de Treino; nao existe UC de listagem |
| Entidade implementada | `fitvital-backend/src/modules/scheduling/entities/scheduling.entity.ts` | Classe `Scheduling` com `schedulingId`, `clientId`, `status`, `createdAt` e `updatedAt` |
| Operacao de listagem no codigo | `src/modules/scheduling/`, `test/` | Nao existe `@Get` nem `findAll`/`listScheduling` no modulo |
| Contrato do Repository | `fitvital-backend/src/modules/scheduling/repositories/scheduling.repository.interface.ts` | Existe `findById` e `save`; nao existe operacao de listagem |
| Issues no GitHub | `gh issue list --state all --limit 50 --search "listar agendamento OR list scheduling OR GET /schedulings"` | Nenhuma Issue correspondente retornada; autenticacao/numeros nao comprovados |

## Decisao

**Decisao A — Nao existe.**

Nao foi encontrada especificacao, Issue, endpoint, metodo de servico ou Repository para listar agendamentos. A implementacao nao sera presumida como UC existente.
