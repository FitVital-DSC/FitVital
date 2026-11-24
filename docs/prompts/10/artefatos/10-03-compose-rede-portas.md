# 10-03 — Compose, rede e portas

## Compose

Arquivo alterado: `fitvital-backend/compose.yaml`.

Serviços confirmados:

- `postgres`: banco de desenvolvimento;
- `postgres_test`: banco isolado de testes;
- `api`: backend NestJS containerizado.

## Rede

O serviço da API usa o nome `postgres` como host da rede interna do Compose e `5432` como porta interna.

Variáveis de API configuradas:

```text
DB_HOST=postgres
DB_PORT=5432
DB_NAME=fitvital_db
DB_USERNAME=fitvital_user
PORT=3000
```

## Portas

- API: `3000:3000`;
- PostgreSQL desenvolvimento: `5432:5432`;
- PostgreSQL testes: `5434:5432`.

O contêiner da API não acessa diretamente `localhost` do PostgreSQL; a comunicação ocorre pela rede Docker pelo serviço `postgres`.

## Validação

```powershell
docker compose config --quiet
```

Retornou código de saída zero.
