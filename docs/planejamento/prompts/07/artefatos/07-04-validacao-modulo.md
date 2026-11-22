# Artefato 07-04 - Validacao e Composicao do Modulo

## ValidationPipe

Configurado globalmente em `main.ts`:

```typescript
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
```

O modulo de financas registra:

- `MonthlyPaymentController`
- `MonthlyPaymentService`
- `TypeOrmMonthlyPaymentRepository`
- Token `MONTHLYPAYMENT_REPOSITORY`

## Separacao de responsabilidades

- DTO: formato e enum do payload.
- Parametro: formato UUID.
- Controller: delegacao HTTP.
- Servico: coordenacao da aplicacao.
- Entidade: transicao de dominio.
- Repositorio: persistencia.

Nenhuma regra de dominio adicional foi criada nesta fase.
