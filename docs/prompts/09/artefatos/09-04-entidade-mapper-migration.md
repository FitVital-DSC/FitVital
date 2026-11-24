# 09-04 — Entidade ORM, Mapper e Migration

## Entidade ORM

Arquivo: `fitvital-backend/src/infrastructure/persistence/scheduling/scheduling.orm-entity.ts`.

A entidade permanece separada da entidade de domínio `Scheduling`. `schedulingId` usa `PrimaryColumn('uuid')`, pois o UUID é gerado pela aplicação. `clientId` e `status` são colunas obrigatórias; datas usam timestamp com fuso horário.

## Mapper

Arquivo: `fitvital-backend/src/infrastructure/persistence/scheduling/scheduling.orm-mapper.ts`.

O mapper realiza conversão bidirecional sem regras de negócio:

- `toPersistence(Scheduling)` cria `SchedulingEntity`;
- `toDomain(SchedulingEntity)` reconstrói `Scheduling`;

## Migration

Migrations existentes:

- `CreateScheduling1793106356872`;
- `CreateMonthlyPayment1793106356873`;
- `AlignSchedulingPrimaryKey1793106356874`.

A última migration remove o default UUID da tabela de agendamento para concordar com `PrimaryColumn`.

## Evidência SQL

Histórico confirmado:

```text
1793106356872 | CreateScheduling1793106356872
1793106356873 | CreateMonthlyPayment1793106356873
1793106356874 | AlignSchedulingPrimaryKey1793106356874
```

Esquema confirmado:

```text
schedulingId uuid NOT NULL, sem default
clientId uuid NOT NULL
status enum NOT NULL
createdAt timestamp with time zone NOT NULL
updatedAt timestamp with time zone NOT NULL
```
