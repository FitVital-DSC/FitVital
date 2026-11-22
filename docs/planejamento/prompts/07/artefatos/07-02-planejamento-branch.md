# Artefato 07-02 - Planejamento da Branch e da Implementacao

## Topologia observada

- Branch principal: `main`
- Branch GREEN anterior: `test/uc03-idempotencia-red`
- Branch HTTP atual: `feature/issue-35-http-monthly-payment`
- Commit de implementacao GREEN: `e1b2be3`
- Commit documental da etapa 05: `a8416a7`
- Commit de revisao da etapa 06: `5b42054`
- Pull Request: ainda nao criado

## Codigo GREEN

A branch atual contem a implementacao da idempotencia UC03, mas o endpoint HTTP ja existe em `main`:

- `MonthlyPaymentController`
- `ProcessMonthlyPaymentDto`
- `FinancesModule`
- `ValidationPipe`
- Teste E2E mensalidade

O diff contra `main` nao adiciona nem modifica arquivos HTTP nesta branch. Portanto, o Material 07 nao deve reimplementar o controller.

## Estrategia recomendada

Branch criada:

```text
main
  |
  +-- test/uc03-idempotencia-red
        |
        +-- feature/issue-35-http-monthly-payment
```

Nome alternativo, caso haja Issue HTTP exclusiva:

```text
feature/issue-<id>-http-pagamento-mensalidade
```

## Regra da branch

- Nao desenvolver diretamente em `main`.
- Nao utilizar a branch atual como commit HTTP novo sem registrar separadamente o escopo.
- Derivar da branch que contem o servico GREEN.
- Preservar o teste unitario e a implementacao existentes.
- Evitar mesclar RED deliberadamente falhando.

## Pendencia de Issue

A Issue [#36](https://github.com/FitVital-DSC/FitVital/issues/36) esta identificada como SUB-06 e Validar automaticamente no planejamento, nao como uma Issue HTTP exclusiva claramente definida.

Antes de criar a branch HTTP, confirmar no GitHub:

1. se existe Issue separada para Controller/DTO;
2. quem sera o responsavel;
3. quem fara a revisao;
4. se a branch sera derivada da branch atual ou de outra consolidada.

## Escopo autorizado de implementacao HTTP

Somente apos a confirmacao da Issue e da configuracao PostgreSQL:

1. verificar o comportamento do endpoint existente;
2. executar o cen ario valido;
3. adicionar ou ajustar teste HTTP para cen ario invalido;
4. nao alterar regras de negocio no servico;
5. nao adicionar persistencia fora do contrato existente;
6. registrar os resultados reais em testes.
