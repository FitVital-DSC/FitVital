# 09-03 — Configuração do TypeORM

## Pacotes encontrados

No `package.json` existem:

- `@nestjs/typeorm`;
- `typeorm`;
- `pg`;
- `@nestjs/config`;
- `dotenv`;
- `ts-node`.

## AppModule

`src/app.module.ts` usa `TypeOrmModule.forRootAsync`.

A configuração usa:

- variáveis de ambiente `DB_*`;
- `autoLoadEntities: true`;
- `synchronize: false`.

Nenhum ajuste foi aplicado para não sobrescrever módulos existentes.

## DataSource da CLI

Arquivo: `src/database/data-source.ts`.

Configurações:

- `entities`: `SchedulingEntity`, `MonthlyPaymentOrmEntity`;
- `migrations`: `src/database/migrations/*.ts`;
- `synchronize: false`;
- conexão lida das variáveis `.env`.

## Scripts TypeORM

Scripts encontrados no `package.json`:

- `typeorm: typeorm-ts-node-esm -d src/database/data-source.ts`.

Não foram encontrados scripts dedicados de migration ou integração PostgreSQL.

## Migração não executada

Não foi possível determinar qual banco está efetivamente ativo no ambiente local, pois PostgreSQL não está acessível.

Por segurança:

- não foi aplicado `pnpm typeorm migration:run`;
- não foi consultado o histórico de migrations;
- não foi consultado o esquema atual;
- não foi executada nenhuma operação sobre banco desconhecido.

## Pendências

1. Disponibilizar Docker/PostgreSQL;
2. confirmar banco de desenvolvimento;
3. confirmar migration table;
4. criar banco separado de testes;
5. adicionar DataSource de testes com migrations reais;
6. adicionar script separado de integração.

## Evidência atualizada

- Foi criado `test:integration` com Vitest separado.
- Foi criado `vitest.config.integration.ts`.
- O DataSource da CLI passou a registrar explicitamente as três classes de migration.
- `synchronize: false` permanece em desenvolvimento e testes.
- A migration `AlignSchedulingPrimaryKey1793106356874` removeu o default gerado pelo banco para alinhar o UUID fornecido pela aplicação.
