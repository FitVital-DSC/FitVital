# 09-02 — Ambiente PostgreSQL

## Infraestrutura existente

O projeto possui um serviço PostgreSQL no `compose.yaml`:

```yaml
services:
  postgres:
    image: postgres:17
    container_name: fitvital-postgres
    restart: unless-stopped
    ports:
      - "5432:5432"
    volumes:
      - fitvital_postgres_data:/var/lib/postgresql/data
```

Esse volume existente não será removido.

## Banco de desenvolvimento

O arquivo `.env` local utiliza a porta host `5432` e aponta para `127.0.0.1`.

Os nomes das variáveis são:

- `DB_HOST`;
- `DB_PORT`;
- `DB_USERNAME`;
- `DB_PASSWORD`;
- `DB_NAME`.

Credenciais reais foram protegidas e não são reproduzidas neste artefato.

## Banco de testes

Ainda não foi configurado um banco exclusivo de testes.

Não foram criadas:

- variáveis `TEST_DB_*`;
- porta dedicada;
- usuário dedicado;
- serviço Docker exclusivo.

Não serão reutilizados o banco de desenvolvimento ou um ambiente de produção para testes destrutivos.

## Comandos executados

Comando solicitado ao estudante:

```powershell
docker compose up -d postgres
```

Saída real recebida:

```text
failed to connect to the docker API at npipe:////./pipe/dockerDesktopLinuxEngine
check if the path is correct and if the daemon is running
The system cannot find the file specified
```

Verificação anterior de serviços:

```powershell
docker compose ps
docker compose config --services
```

Resultado: a API Docker não estava acessível.

## Conexão

Não foi possível comprovar:

- `docker compose ps`;
- porta publicada no host;
- status healthcheck;
- conexão via `psql`;
- identidade `current_database()`;
- identidade `current_user`;
- porta interna `inet_server_port()`.

## Salvaguardas

Não foram executados:

- `docker compose down -v`;
- `TRUNCATE`;
- `DROP`;
- `migration:revert`;
- migrations.

Nenhum volume foi removido e nenhuma credencial foi enviada a arquivos ou comandos Git.

## Evidência atualizada

O Docker ficou disponível durante esta execução. Foram confirmados dois contêineres:

- Desenvolvimento: `fitvital-postgres`, saudável, publicação `5432:5432`, banco `fitvital_db`;
- Testes: `fitvital-postgres-test`, saudável, publicação `5434:5432`, banco `fitvital_test_db`.

Identidade confirmada no banco de testes:

```text
fitvital_test_db | fitvital_test_user
```

Nenhum volume existente foi removido. As credenciais usadas em exemplos locais não são reproduzidas aqui.
