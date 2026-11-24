# Colecao REST Containerizada - UC08

## Finalidade

Esta colecao verifica a API em execucao no Docker Compose e usa a mesma porta publicada que a API local.

## Pre-requisitos

```bash
docker compose up -d --build api
docker compose ps
```

## Conteudo

| Arquivo | Uso |
|---|---|
| `00-smoke.http` | Smoke da raiz e rota inexistente |
| `01-scheduling-listar.http` | Cenarios UC08 de listagem |
| `run-checks.sh` | Verificacao automatizada Esperado x Obtido |

Os arquivos `.http` exigem a extensao REST Client e nao fazem assercao.

## Verificacao automatizada

```bash
./http-rest-client/containerizado/run-checks.sh
./http-rest-client/containerizado/run-checks.sh --durability
BASE_URL=http://localhost:3001 ./http-rest-client/containerizado/run-checks.sh
```

O script confere servicos, smoke, migrations pendentes, autenticacao UC08 e durabilidade. Use codigo de saida zero como sucesso.

## O que o script grava

Nenhum registro. O script usa somente GET e consultas SQL somente leitura.

Nao remove volumes, nao usa `down -v` e nao altera migrations.

## Consulta SQL manual

As consultas devem usar as variaveis de ambiente do contêiner:

```bash
docker compose exec -T postgres sh -c 'psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "SELECT count(*) FROM \"scheduling\".\"scheduling\";"'
```

## Fora desta pasta

Cenarios dependentes de seed nao existem. Testes Vitest sao outro nivel de evidencia.
