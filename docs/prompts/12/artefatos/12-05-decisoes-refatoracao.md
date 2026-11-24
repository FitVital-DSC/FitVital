# 12-05 — Decisão de refatoração

## Cenário

A auditoria concluiu pelo Cenário A apenas para o achado confirmado do provider mensal. O restante da arquitetura foi preservado.

## Alteração mínima

Removido de `SchedulingModule`:

```typescript
{
  provide: MONTHLYPAYMENT_REPOSITORY,
  useValue: { ... }
}
```

Mantida a composição real de `FinancesModule`:

```typescript
{
  provide: MONTHLYPAYMENT_REPOSITORY,
  useExisting: TypeOrmMonthlyPaymentRepository,
}
```

Os testes E2E passaram a criar `MonthlyPaymentOrmEntity` real antes da confirmação.

## Contratos preservados

- `SchedulesRepository`;
- `SCHEDULING_REPOSITORY`;
- método `SchedulingService.confirmReservation`;
- rota e DTO HTTP;
- entidade de domínio;
- adaptador de agendamento.
