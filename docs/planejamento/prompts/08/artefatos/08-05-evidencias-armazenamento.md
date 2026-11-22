# Artefato 08-05 - Evidencias de Armazenamento

## Evidencia HTTP

O teste integrou a resposta do endpoint:

- status HTTP: `200`
- corpo: `monthlyPaymentId` e `status: PAID`

## Evidencia direta do repositório

A mesma instancia em memoria foi consultada apos a resposta:

- status armazenado: `PAID`
- `datePayment`: nao nulo

## Delimitacao

A resposta HTTP confirma apenas o retorno do fluxo. A consulta direta confirma o estado interno da implementacao em memoria. Nao existe evidência neste teste de persistencia em PostgreSQL, migration, constraint SQL ou recuperacao após reinicio.
