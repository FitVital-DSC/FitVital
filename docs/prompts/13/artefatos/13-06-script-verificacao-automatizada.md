# 13-06 - Script de verificacao automatizada

## Script

`fitvital-backend/http-rest-client/containerizado/run-checks.sh`

## Blocos

- Estado da API.
- Saude do PostgreSQL.
- Smoke `GET /` e rota inexistente.
- Migrations somente leitura.
- UC08 sem autenticacao, sem claim e com registros.
- Rota inexistente.
- Opcionalmente, durabilidade apos reiniciar somente a API.

## Executado

- `bash -n`: passou.
- `shellcheck`: nao instalado.
- Porta 9: `6 falha(s)`, exit `1`.
- Ambiente normal: `9 ok, 0 falha(s)`, exit `0`.
- `--durability`: `11 ok, 0 falha(s)`, exit `0`.

## Riscos

- Leitura de dados existentes no banco de desenvolvimento.
- Nao usa banco de teste no script Compose principal.
- Nao cria nem remove registros.
