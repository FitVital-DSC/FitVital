# 13-05 - Colecao containerizada

## Arquivos

- `00-smoke.http`
- `01-scheduling-listar.http`
- `run-checks.sh`
- `README.md`

## Ambiente

- API Compose: porta `3000`.
- Banco Compose de desenvolvimento: `postgres`, porta publicada `5432`.
- Banco de teste: `postgres_test`, porta publicada `5434`.
- API temporaria UC08: porta `3001`, apontando para `postgres_test`, removida apos a verificacao.

## Evidencia containerizada

- Script normal: `9 ok, 0 falha(s)`, exit `0`.
- Script `--durability`: `11 ok, 0 falha(s)`, exit `0`.
- Durabilidade: quantidade de agendamentos permaneceu inalterada.
- Nenhum volume foi removido.
- Nenhuma migration foi executada.
- Somente a API foi reiniciada.
