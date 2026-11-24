# 08-07 — Preparação conceitual para persistência real

## Estado atual observado

O projeto já contém persistência real baseada em PostgreSQL/TypeORM, apesar de o objetivo nominal do Material 08 citar migração de repositório em memória:

```text
Controller
  |
  v
Service
  |
  v
Contrato de Repositório
  |
  v
Adaptador TypeORM
  |
  v
PostgreSQL
```

Componentes concretos encontrados:

- `SchedulingController`;
- `MonthlyPaymentController`;
- `SchedulingService`;
- `MonthlyPaymentService`;
- `SchedulesRepository`;
- `MonthlyPaymentRepository`;
- `TypeOrmSchedulingRepository`;
- `TypeOrmMonthlyPaymentRepository`;
- entidades ORM e mappers.

## Componentes a preservar

A evolução futura ou adaptações arquiteturais devem preservar:

- Controllers existentes;
- DTOs e decoradores de validação;
- Services de aplicação;
- Entidades de domínio;
- contratos e tokens de repositório;
- assinaturas dos métodos de aplicação.

## Mapeamento ORM atual

O projeto já possui entidades TypeORM separadas das entidades de domínio:

- `scheduling.orm-entity.ts`;
- `monthlypayment.orm-entity.ts`;
- `scheduling.orm-mapper.ts`;
- `monthlypayment.orm-mapper.ts`.

Os módulos usam `TypeOrmModule.forFeature(...)` e o `AppModule` usa `TypeOrmModule.forRootAsync`.

A configuração atual já contém `synchronize: false`.

## Limitações da persistência em memória

Como não existe implementação em memória no estado atual, esta análise é retrospectiva:

1. Volatilidade: registros se perdem ao reiniciar o processo.
2. Escala: dados não são compartilhados entre instâncias.
3. Concorrência: ausência de locks e isolamento transacional do SGBD.
4. Transações: ausência de commit/rollback ACID nativo.
5. Integridade: ausência de constraints relacionais gerenciadas pelo PostgreSQL.
6. Auditoria/durabilidade: insuficiente para operação persistente em produção.

No estado atual, os adaptores TypeORM oferecem uma direção arquitetural adequada para endereçar esses pontos.

## Próximas ações técnicas

1. Disponibilizar PostgreSQL via Docker;
2. separar banco de desenvolvimento e banco exclusivo de testes;
3. revisar DataSource e migrations;
4. verificar esquema e histórico de migrations;
5. executar os testes E2E com banco real;
6. corrigir testes que dependem de banco e limpeza segura;
7. manter testes unitários independentes de PostgreSQL;
8. adicionar testes integrados reais por caso de uso autorizado.

## Rastreabilidade

O Material 09 corresponde à continuidade da persistência real já parcialmente implementada no estado atual.

Não foram movidas Issues no GitHub Project e nenhuma branch de persistência foi criada ou concluída nesta análise.
