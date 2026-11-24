# 09-05 — Repositório TypeORM e Providers

## Adaptador

Arquivo: `fitvital-backend/src/infrastructure/persistence/scheduling/typeorm-scheduling.repository.ts`.

O adaptador implementa `SchedulesRepository`, usa `@InjectRepository(SchedulingEntity)` e `Repository<SchedulingEntity>`, converte com `SchedulingMapper`, executa `findOne`/`save` e reconverte o resultado para domínio.

O provider mantém o token existente:

```typescript
{
  provide: SCHEDULING_REPOSITORY,
  useExisting: TypeOrmSchedulingRepository,
}
```

## Módulo

`SchedulingModule` registra `SchedulingEntity` em `TypeOrmModule.forFeature` e preserva `SchedulingController` e `SchedulingService`.

O provider de pagamento mensal permanece uma substituição de teste localizada no módulo; não foi usado como implementação simulada da persistência de agendamento.

## Evidências

- `nest build`: aprovado.
- Aplicação NestJS reiniciada com sucesso.
- Rota real registrada: `POST /schedulings/confirm`.
- Testes em memória/HTTP mantidos separados da suíte PostgreSQL real.
