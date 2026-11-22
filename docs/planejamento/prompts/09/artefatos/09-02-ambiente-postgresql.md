# Artefato 09-02 - Ambiente PostgreSQL

## Inspecao

- O banco Docker existente esta declarado no `compose.yaml`.
- A porta host 5432 ja esta ocupada por um processo PostgreSQL local.
- O volume Docker existente nao sera removido.
- Nenhum banco, tabela ou volume sera apagado.

## Banco de testes isolado

Um segundo servico PostgreSQL sera configurado na porta 5434, com banco exclusivo e volume exclusivo.

Mapeamento esperado:

```text
Host 5434 -> Contêiner 5432
```

Variaveis esperadas:

- `TEST_DB_HOST`
- `TEST_DB_PORT`
- `TEST_DB_USERNAME`
- `TEST_DB_PASSWORD`
- `TEST_DB_NAME`

Estas variaveis nao substituem as configuracoes de desenvolvimento existentes.

## Evidencias reais

- Container: `fitvital-postgres-test`
- Porta publicada: `5434`
- Porta interna: `5432`
- Banco: `fitvital_test`
- Conexao Node via host: confirmada
- Banco inicial: sem tabelas
- Migrations aplicadas: 2
- Processo PostgreSQL local na porta 5432 preservado
