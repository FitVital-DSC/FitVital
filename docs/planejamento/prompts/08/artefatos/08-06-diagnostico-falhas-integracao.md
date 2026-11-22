# Artefato 08-06 - Diagnostico de Falhas de Integracao

## Primeira falha

Ao importar `FinancesModule` isoladamente, o provider `MonthlyPaymentOrmEntityRepository` tentou resolver `DataSource`.

Diagnostico:

- o modulo financeiro esta acoplado ao provider TypeORM;
- o modulo raiz nao estava importado no teste;
- nao existe banco real necessario para o teste integrado em memoria.

## Correcao do teste

Foram sobrescritos no contexto isolado:

- provider da entidade ORM;
- provider concreto TypeORM;
- token `MONTHLYPAYMENT_REPOSITORY`.

O teste passou sem mocks dos componentes de dominio ou HTTP.
