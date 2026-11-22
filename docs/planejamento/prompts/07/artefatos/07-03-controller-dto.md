# Artefato 07-03 - Controller e DTO

## Implementacao existente verificada

Controller:

- Arquivo: `fitvital-backend/src/modules/finances/controllers/monthlypayment.controller.ts`
- Rota: `POST /finances/monthly-payments/:monthlyPaymentId/payment`
- Status: `200 OK`
- Delegacao: `MonthlyPaymentService.processPayment(...)`

DTO:

- Arquivo: `fitvital-backend/src/modules/finances/dtos/process-monthly-payment.dto.ts`
- Campo: `status`
- Valores: `PAID` ou `FAILED`
- Validacao: `@IsEnum(PaymentGatewayStatus)`

Parametro:

- `monthlyPaymentId`
- Validacao: `@IsUUID()`

## Decisao

Nao reimplementar o controller ou o DTO nesta etapa. A fronteira ja existe em `main`, preserva os contratos e delega ao servico sem inserir regras de negocio.
