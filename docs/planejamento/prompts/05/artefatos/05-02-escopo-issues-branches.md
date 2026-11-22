# Artefato 05-02 - Escopo, Issues e Branches

## Relacao entre teste e implementacao

- Epic: [#30 - UC03](https://github.com/FitVital-DSC/FitVital/issues/30)
- Issue de testes existente: [#36 - SUB-06](https://github.com/FitVital-DSC/FitVital/issues/36)
- Issue de dominio: [#31 - SUB-01](https://github.com/FitVital-DSC/FitVital/issues/31)
- Responsavel informado: VitorThome15
- Cenario adotado: novo teste RED criado para uma lacuna idempotente nao coberta anteriormente.

## Verificacao DoR da implementacao

- Objetivo: tornar repeticoes do pagamento `PAID` idempotentes.
- Escopo: impedir reprocessamento e nova persistencia quando o pagamento ja estiver pago.
- Dependencias: `MonthlyPaymentService`, `MonthlyPaymentRepository` e entidade `MonthlyPayment`.
- Criterio verificavel: o teste novo deve passar sem alterar o teste existente.
- Classificacao: Ready para a implementacao minima.

## Estrategia de branch

- Branch atual: `test/uc03-idempotencia-red`
- Origem: branch local atual antes da criacao da branch
- Estrategia: manter o teste e a implementacao GREEN na mesma branch, pois o planejamento não separou oficialmente testes de implementacao para esta lacuna.
- Branch destino de Pull Request: `main`

## Estrategia de PR

- Nao existe Draft PR recuperavel desta lacuna.
- O commit GREEN sera realizado nesta branch.
- Um Draft PR pode ser aberto ou criado depois da verificacao GREEN, sem merge.

## Riscos

- Evitar adicionar comportamentos além da idempotencia.
- Nao alterar assercoes do teste RED.
- Preservar os comportamentos atuais de `PAID`, `FAILED` e mensalidade inexistente.
