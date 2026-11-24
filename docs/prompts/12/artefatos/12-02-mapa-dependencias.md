# 12-02 — Mapa de dependências

## Fluxo de execução

```text
Cliente HTTP
  -> SchedulingController
  -> SchedulingService
  -> SCHEDULING_REPOSITORY
  -> TypeOrmSchedulingRepository
  -> TypeORM
  -> PostgreSQL
```

## Dependências de compilação

```text
SchedulingController -> SchedulingService
SchedulingService -> SchedulesRepository
SchedulingService -> MonthlyPaymentRepository
TypeOrmSchedulingRepository -> SchedulesRepository
TypeOrmSchedulingRepository -> SchedulingMapper
SchedulingMapper -> Scheduling
SchedulingMapper -> SchedulingEntity
SchedulingEntity -> TypeORM
```

A entidade de domínio não importa `typeorm`, HTTP ou infraestrutura.

## Composição no módulo

`SchedulingModule` registra:

- `SchedulingEntity` em `TypeOrmModule.forFeature`;
- `SchedulingService`;
- `TypeOrmSchedulingRepository`;
- o token `SCHEDULING_REPOSITORY` associado ao adaptador com `useExisting`;
- uma implementação `useValue` temporária para `MONTHLYPAYMENT_REPOSITORY`.

O provider mensal não está relacionado ao adaptador de agendamento, mas é uma composição do módulo que deve ser distinguida da persistência real desse repositório.

## Mapeadores

- `ConfirmReservationResponseMapper`: domínio identificado pela operação -> DTO HTTP;
- `SchedulingMapper`: domínio <-> entidade ORM.

As responsabilidades são distintas e não são misturadas.
