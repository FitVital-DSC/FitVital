# Artefato 09-03 - Configuracao do TypeORM

## Configuracoes verificadas

- `AppModule`: `TypeOrmModule.forRootAsync`
- `synchronize: false`
- `autoLoadEntities: true`
- CLI: `src/database/data-source.ts`
- Entidades registradas: `SchedulingEntity` e `MonthlyPaymentOrmEntity`
- Migrations: `src/database/migrations/*.ts`

## Scripts adicionados

- `migration:show`
- `migration:run`
- `migration:revert`

## Banco de destino

As migrations foram executadas explicitamente com o banco isolado:

```text
127.0.0.1:5434/fitvital_test
```
