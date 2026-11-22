# Artefato 05-01 - Diagnostico RED

## Identificacao

- Sistema: FitVital
- Caso de uso candidato: UC03 - Processar Pagamento de Mensalidade
- Epic: [#30](https://github.com/FitVital-DSC/FitVital/issues/30)
- Issue de testes: [#36 - SUB-06](https://github.com/FitVital-DSC/FitVital/issues/36)
- Responsavel registrado: VitorThome15
- Branch atual observada: `Prompt-4-Finalizacao`
- Runner: Vitest
- Comando direcionado executado:

```powershell
npm test -- --run src/modules/finances/services/monthlypayment.service.spec.ts
```

## Teste candidato

O teste mais adequado para uma eventual fase GREEN do UC03 e:

- Arquivo: `fitvital-backend/src/modules/finances/services/monthlypayment.service.spec.ts`
- Comportamento coberto:
  - muda pagamento pendente para `PAID`;
  - registra a data de processamento;
  - persiste a entidade;
  - mantem `PENDING` quando o gateway informa falha;
  - rejeita mensalidade inexistente.

## Evidencia observada

Durante o diagnostico, a primeira execucao foi bloqueada por dependencias nao instaladas:

```text
Cannot find package 'class-validator'
```

Apos `npm install`, o teste direcionado passou:

```text
Test Files  1 passed (1)
Tests       3 passed (3)
Duration    1.05s
```

## RED confirmado nesta etapa

Foi criado um novo teste unitario na branch `test/uc03-idempotencia-red`:

- Arquivo: `fitvital-backend/src/modules/finances/services/monthlypayment.service.spec.ts`
- Cenario: pagamento ja `PAID` recebe novamente o status `PAID`
- Contrato esperado:
  - manter `datePayment` original;
  - nao chamar o metodo `save` do repositorio.
- Resultado real:

```text
Test Files  1 failed (1)
Tests       1 failed | 3 passed (4)
FAIL: does not reprocess a payment that is already paid
AssertionError: datePayment changed from the original payment date
```

A falha e de comportamento: o metodo substituiu a data original por uma data atual e chamou o fluxo de persistencia. Nao houve erro de sintaxe, importacao ou dependencia.

## Causa tecnica da situacao

Nao foi encontrado um RED original recuperavel do Material 04. Porem, a lacuna de idempotencia foi confirmada por um novo teste criado nesta etapa.

Componentes envolvidos:

- `MonthlyPaymentService.processPayment`
- `MonthlyPayment.processPayment`
- `MonthlyPaymentRepository`
- `PaymentGatewayStatus`
- `MonthlyPaymentStatus`
- `monthlypayment.service.spec.ts`

O estado atual ja contem o comportamento necessario no servico e na entidade; portanto, o teste nao falha sem uma modificacao artificial.

## Validacao do RED

- Falha RED anterior: nao recuperada
- Novo RED criado nesta etapa: confirmado
- Erro inicial atual: ambiente/dependencias, nao comportamento
- RED legitimo do novo teste: confirmado
- Codigo GREEN atual para o novo teste: nao confirmado
- Transicao RED -> GREEN executavel nesta sessao: autorizada

## Evidencias validadas

- Branch limpa antes da restauracao de dependencias
- Teste direcionado aprovado apos restaurar dependencias
- Resultado RED novo registrado nesta sessao
- Commit RED ainda nao registrado
- Draft PR ainda nao registrado
- Nao foi recuperado um RED anterior do Material 04

## Autorizacao para prosseguir

Existe agora um RED valido criado para uma lacuna real de idempotencia do UC03. O planejamento GREEN pode prosseguir para corrigir apenas esse cenario.

Para prosseguir de forma legitima, a equipe precisa fornecer:

1. os oito artefatos completos do Material 04;
2. o teste RED original e o resultado RED do terminal;
3. a branch usada no RED;
4. o commit do RED;
5. o Draft PR, se existir;
6. a Issue de implementacao separada, caso exista.
