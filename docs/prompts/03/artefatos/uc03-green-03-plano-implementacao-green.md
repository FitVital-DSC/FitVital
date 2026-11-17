# UC03 GREEN 03 — Plano de implementação

## Implementação observada

O código existente fornece o fluxo de processamento da mensalidade e os testes cobrem:

1. pagamento `PAID`, atualizando o estado e a data;
2. pagamento `FAILED`, preservando o estado;
3. mensalidade inexistente, rejeitando a operação;
4. endpoint HTTP de pagamento com persistência.

## Critério GREEN retrospectivo

O teste unitário existente usa `MonthlyPaymentService.processPayment` com um repositório dublado e verifica o resultado e as chamadas de persistência. A execução atual confirmou os três testes unitários aprovados.
