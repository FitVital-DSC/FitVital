# 08-03 — Verificação de módulos e providers

## Configuração encontrada

### AppModule

`fitvital-backend/src/app.module.ts` registra:

- `ConfigModule.forRoot` com `.env`;
- `TypeOrmModule.forRootAsync`;
- `SchedulingModule`;
- `FinancesModule`;
- `AppController` e `AppService`;
- filtro global `DomainHttpExceptionFilter`.

A configuração atual usa `autoLoadEntities: true` e `synchronize: false`.

### SchedulingModule

`SchedulingModule` importa:

- `TypeOrmModule.forFeature([SchedulingEntity])`;
- `FinancesModule`.

Providers encontrados:

- `SchedulingService`;
- `SchedulingMapper`;
- `TypeOrmSchedulingRepository`;
- token `SCHEDULING_REPOSITORY` associado via `useExisting`;
- um `MONTHLYPAYMENT_REPOSITORY` temporariamente associado a `useValue`.

Controller: `SchedulingController`.

### FinancesModule

`FinancesModule` importa `TypeOrmModule.forFeature([MonthlyPaymentOrmEntity])`.

Providers encontrados:

- `MonthlyPaymentService`;
- `TypeOrmMonthlyPaymentRepository`;
- token `MONTHLYPAYMENT_REPOSITORY` associado via `useExisting`.

Controller: `MonthlyPaymentController`.

## Cadeia de resolução observada

Para agendamento:

1. `SchedulingController` recebe `SchedulingService`.
2. `SchedulingService` recebe `SCHEDULING_REPOSITORY`.
3. `SchedulingModule` resolve o token com `TypeOrmSchedulingRepository`.
4. O adapter recebe `Repository<SchedulingEntity>` por `@InjectRepository`.
5. Uma dependência adicional `MONTHLYPAYMENT_REPOSITORY` recebe um objeto `useValue` dentro de `SchedulingModule`.

Para financeiro:

1. `MonthlyPaymentController` recebe `MonthlyPaymentService`.
2. `MonthlyPaymentService` recebe `MONTHLYPAYMENT_REPOSITORY`.
3. `FinancesModule` resolve o token com `TypeOrmMonthlyPaymentRepository`.
4. O adapter recebe `Repository<MonthlyPaymentOrmEntity>` por `@InjectRepository`.

## Verificação prática

Comandos executados:

```powershell
pnpm run build
```

Resultado: compilação concluída com código de saída 0.

```powershell
pnpm test --run
```

Resultado: os testes que iniciam `AppModule` não conseguiram resolver uma conexão PostgreSQL ativa.

## Divergência do objetivo da fase

Não foram encontrados os seguintes pontos exigidos pelo Material 08:

- Repositório em memória concreto;
- associação do token a `useClass: InMemory...Repository`;
- teste integrado consolidado com módulo real e repositório em memória.

Além disso, o provider `MONTHLYPAYMENT_REPOSITORY` dentro de `SchedulingModule` é uma substituição `useValue` para uma resposta fixa; isso não representa o repositório de finanças real fornecido pelo `FinancesModule`.

## Condição para prosseguir

A aplicação compila, mas não inicializa os módulos de teste sem PostgreSQL. Antes de implementar o teste integrado em memória, é necessário confirmar se o objetivo da equipe é:

1. restaurar uma implementação em memória já realizada em uma branch anterior; ou
2. adaptar esta atividade ao estado atual que já usa TypeORM, apesar da incompatibilidade nominal com o texto do Material 08.
