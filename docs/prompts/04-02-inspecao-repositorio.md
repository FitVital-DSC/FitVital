# 04-02 — Inspeção do Repositório

- **Repositório:** [FitVital-DSC/FitVital](https://github.com/FitVital-DSC/FitVital)
- **Branch principal:** `main`
- **Branch de trabalho:** `feat/issue-1-agendamento-treino`
- **Executante:** `VitorThome15`

## Comandos e evidências

```text
git fetch origin
git switch --track origin/feat/issue-1-agendamento-treino
```

Resultado observado:

```text
Switched to a new branch 'feat/issue-1-agendamento-treino'
branch 'feat/issue-1-agendamento-treino' set up to track 'origin/feat/issue-1-agendamento-treino'.
## feat/issue-1-agendamento-treino...origin/feat/issue-1-agendamento-treino
```

Antes da troca, a branch local estava em `main`, sincronizada com `origin/main`, no commit `aa0f1b8`.

O teste unitário direcionado executou com sucesso: **1 arquivo e 2 testes aprovados**. A suíte e2e ainda depende da configuração do PostgreSQL.

