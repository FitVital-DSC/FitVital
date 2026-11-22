# Artefato 08-01 - Diagnostico da Arquitetura e Linha de Base

## Projeto e caso de uso

- Projeto: FitVital
- Caso de uso: UC03 - Processar Pagamento de Mensalidade
- Epic: [#30](https://github.com/FitVital-DSC/FitVital/issues/30)
- Sub-Issue HTTP: [#35 - SUB-05](https://github.com/FitVital-DSC/FitVital/issues/35)
- Sub-Issue de testes: [#36 - SUB-06](https://github.com/FitVital-DSC/FitVital/issues/36)
- Sub-Issue de persistencia: [#34 - SUB-04](https://github.com/FitVital-DSC/FitVital/issues/34)

## Documentos recuperados

Os oito artefatos 07-01 a 07-08 foram recuperados de `docs/planejamento/prompts/07/artefatos`.

Conclusao principal: o Material 07 confirmou o Controller, DTO, ValidationPipe e a branch HTTP, mas registrou que requisicoes HTTP reais nao foram executadas devido ao ambiente PostgreSQL.

## Arquitetura real

Fluxo atual:

```text
HTTP -> MonthlyPaymentController -> MonthlyPaymentService
     -> MONTHLYPAYMENT_REPOSITORY -> TypeOrmMonthlyPaymentRepository
     -> PostgreSQL
```

Componentes:

- Entidade: `MonthlyPayment`
- Servico: `MonthlyPaymentService.processPayment`
- Contrato: `MonthlyPaymentRepository`
- Token: `MONTHLYPAYMENT_REPOSITORY`
- Implementacao real atual: `TypeOrmMonthlyPaymentRepository`
- Controller: `MonthlyPaymentController`
- DTO: `ProcessMonthlyPaymentDto`
- Modulo: `FinancesModule`
- Modulo raiz: `AppModule`

Nao existe implementacao de repositório em memoria do UC03 no estado atual.

## Linha de base

Comando geral:

```powershell
npm test
```

Resultado:

```text
Test Files  4 failed | 3 passed (7)
Tests       1 failed | 7 passed | 5 skipped (13)
```

Falha: os testes que criam o `AppModule` tentam conectar ao PostgreSQL e recebem erro de autenticacao do usuario `fitvital_user`.

Comando unitario isolado:

```powershell
npx vitest run src
```

Resultado:

```text
Test Files  3 passed (3)
Tests       7 passed (7)
```

## Branch e PR

- Branch atual: `feature/issue-35-http-monthly-payment`
- Branch remota: `origin/feature/issue-35-http-monthly-payment`
- Commit da etapa anterior: `b507423`
- Pull Request HTTP: ainda nao criado
- Nenhum merge realizado

## Condicao para prosseguir

Nao e seguro declarar o backend integrado aprovado. Para o teste integrado sem banco real sera necessaria uma implementacao de repositório em memoria compatível com `MonthlyPaymentRepository`, usada somente em um modulo de teste isolado.
