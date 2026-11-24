# 09-07 — Testes Automatizados com PostgreSQL

## Banco exclusivo

O banco `fitvital_test_db` roda no contêiner `fitvital-postgres-test`, publicado em `5434:5432`.

Identidade validada:

```text
fitvital_test_db / fitvital_test_user
```

## Configuração

- `vitest.config.integration.ts`;
- script `test:integration`;
- `DataSource` com `synchronize: false`;
- migrations reais registradas;
- conexão encerrada em `afterAll`.

## Teste real

Arquivo: `fitvital-backend/test/scheduling/scheduling-postgresql.integration-spec.ts`.

O teste gera UUID real, chama `TypeOrmSchedulingRepository.save`, consulta `SchedulingEntity` diretamente e verifica todos os campos relevantes.

## Resultados

Execução inicial de integração: falha real por ausência da extensão `uuid-ossp` no banco novo.

Correção aplicada: `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"` na migration de criação.

Nova execução:

- 1 arquivo aprovado;
- 1 teste aprovado.

Suíte principal após alinhamento:

- 8 arquivos aprovados;
- 13 testes aprovados;
- nenhuma falha na suíte principal.
