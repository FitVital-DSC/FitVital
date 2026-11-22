# Artefato 05-03 - Plano da Implementacao GREEN

## Comportamento minimo

Ao receber `PaymentGatewayStatus.PAID`, o `MonthlyPaymentService` deve verificar se a mensalidade ja esta com status `PAID`.

- Se ja estiver `PAID`, retornar o estado atual sem chamar `processPayment` na entidade e sem chamar `save`.
- Caso contrario, manter o fluxo atual: processar o pagamento e persistir.

## Arquivos afetados

- `fitvital-backend/src/modules/finances/services/monthlypayment.service.ts`

Nenhuma alteracao sera feita no controller, DTO, repositorio ou em outros testes.

## Contratos preservados

- Mensalidade inexistente continua rejeitada com `NotFoundException`.
- Gateway `FAILED` continua mantendo `PENDING`.
- Gateway `PAID` continua mudando pagamento pendente para `PAID`.
- Nenhuma assercao existente sera alterada.

## Sequencia

1. Implementar a guarda minima no servico.
2. Executar apenas o teste unitario do UC03.
3. Confirmar que os 4 testes passam.
4. Executar a suite unitario aplicavel e registrar regressoes.
