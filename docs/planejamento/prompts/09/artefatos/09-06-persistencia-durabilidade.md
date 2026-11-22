# Artefato 09-06 - Persistencia Real e Durabilidade

## Requisicao HTTP real

`POST /finances/monthly-payments/f6c1a8b7-2f08-4b6b-bf74-9c2c2d5a91b2/payment`

Resposta observada:

```text
monthlyPaymentId: f6c1a8b7-2f08-4b6b-bf74-9c2c2d5a91b2
status: PAID
```

## Consulta SQL

O banco registrou:

- status `PAID`
- `datePayment` preenchida
- `updatedAt` preenchido

## Reinicio

A API foi encerrada e iniciada novamente contra o banco de testes. A consulta confirmou que o registro continuava `PAID`, com as mesmas datas.

## Validacoes

- UUID invalido: HTTP 400
- Status invalido: HTTP 400
