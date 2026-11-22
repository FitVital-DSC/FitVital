# Artefato 09-04 - Entidade ORM e Migration

## Entidade ORM

`MonthlyPaymentOrmEntity` separa o modelo de persistencia da entidade de dominio.

Ajuste realizado:

- `monthlyPaymentId` usa `@PrimaryColumn({ type: 'uuid' })`
- nao usa `@PrimaryGeneratedColumn`
- o identificador continua sendo fornecido pela camada de dominio

## Migration

Tabela criada:

- Schema: `finances`
- Tabela: `monthly_payment`
- Chave primaria: `monthlyPaymentId`
- Enum: `PENDING`, `PAID`, `OVERDUE`

Resultado:

- `CreateScheduling1793106356872`: aplicada
- `CreateMonthlyPayment1793106356873`: aplicada
- Nenhuma migration foi revertida
