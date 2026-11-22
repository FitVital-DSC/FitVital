# Artefato 09-05 - Mapper e Adaptador TypeORM

## Mapper existente

`MonthlyPaymentMapper` realiza:

- dominio -> ORM
- ORM -> dominio

A conversao inclui status, valor numerico, datas e identificadores.

## Adaptador existente

`TypeOrmMonthlyPaymentRepository` implementa `MonthlyPaymentRepository` e preserva:

- `findById`
- `findBySchedulingId`
- `save`

O provider `MONTHLYPAYMENT_REPOSITORY` continua apontando para o adaptador no modulo de financas.

Nenhum contrato de Controller ou Service foi alterado nesta fase.
