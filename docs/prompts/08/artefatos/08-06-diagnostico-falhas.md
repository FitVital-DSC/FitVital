# 08-06 — Diagnóstico de falhas de integração

## Falha observada

Sintoma:

- Testes que usam `AppModule` entram em retentativas de conexão;
- A conexão termina em `ECONNREFUSED`;
- Hooks `beforeAll`/`beforeEach` excedem o timeout;
- Hooks de limpeza falham por aplicação/repository não inicializados.

Evidência real:

```text
connect ECONNREFUSED 127.0.0.1:5432
```

Componente localizado:

- `AppModule`;
- `TypeOrmModule.forRootAsync`;
- configuração PostgreSQL lida de `.env`;
- Docker Compose/PostgreSQL;
- arquivos E2E que importam `AppModule`.

## Diagnóstico

### Categoria 1 — Conexão

Hipótese confirmada: o serviço PostgreSQL não está acessível na porta configurada.

Causa imediata:

- Docker Desktop indisponível no ambiente atual;
- PostgreSQL não respondeu em `127.0.0.1:5432`.

Correção necessária:

- iniciar Docker Desktop e o serviço PostgreSQL;
- verificar `docker compose ps`;
- confirmar banco, usuário e credenciais sem publicar os segredos no repositório;
- executar novamente os testes E2E.

Não foram executados `down -v`, `DROP`, `TRUNCATE` ou qualquer comando destrutivo.

### Categoria 2 — Composição de módulo

O build compilou sem falhas. Os providers reais das funcionalidades foram encontrados:

- `SCHEDULING_REPOSITORY -> useExisting -> TypeOrmSchedulingRepository`;
- `MONTHLYPAYMENT_REPOSITORY -> useExisting -> TypeOrmMonthlyPaymentRepository`.

Não foi possível executar uma compilação isolada do container NestJS contra PostgreSQL inexistente para confirmar totalmente a resolução em runtime.

### Categoria 3 — Comportamento entre camadas

Os testes unitários passaram, confirmando a interação dos Services com repositories simulados em seu escopo isolado.

Ainda não foi comprovado o fluxo HTTP real, pois os módulos não iniciaram.

## Experimento isolado de DI

Não foi executado um teste isolado omitindo propositalmente o provider de repositório.

O resultado não será inventado como evidência. Em ambiente com PostgreSQL disponível, o contexto correto poderia verificar `UnknownDependenciesException` em `SchedulingService` ou `MonthlyPaymentService`, mas essa reprodução não foi realizada.
