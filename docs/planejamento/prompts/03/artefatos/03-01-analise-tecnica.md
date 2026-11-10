# Artefato 1 — Análise técnica do caso de uso

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC03 — Processar Pagamento de Mensalidade
- **Ator principal:** Gateway de Pagamento
- **Contexto:** Gestão Financeira
- **Fonte:** [M4 — Blueprint do Primeiro Slice](../../../../Trabalhos/M4-Blueprint%20do%20Primeiro%20Slice.md)

## Objetivo e escopo

Receber do Gateway de Pagamento o resultado de uma cobrança e atualizar a Mensalidade para o estado `PAID` quando o pagamento for aprovado. A integração real com o Gateway permanece fora do escopo; o callback HTTP implementado representa o adapter de entrada do Gateway.

## Pré e pós-condições

- **Pré-condição:** a mensalidade identificada existe no contexto financeiro.
- **Pós-condição de sucesso:** a mensalidade fica `PAID` e recebe a data do pagamento.
- **Falha informada pelo Gateway:** a mensalidade permanece no estado atual e o callback responde `200`.

## Fluxo principal

1. O Gateway envia `monthlyPaymentId` e `status: PAID`.
2. O sistema localiza a Mensalidade.
3. O domínio executa a transição de pagamento.
4. O sistema persiste `status` e `datePayment`.
5. O sistema responde o identificador e o estado atualizado.

## Fluxos alternativos e exceções

- `status: FAILED`: não altera a Mensalidade e responde `200`.
- Identificador inexistente: responde erro de recurso não encontrado.
- Payload ou UUID inválido: responde erro de validação.

## Regras e validações

| Código | Regra |
|---|---|
| UC03-RN01 | Pagamento aprovado altera a Mensalidade para `PAID`. |
| UC03-RN02 | Pagamento aprovado registra a data do pagamento. |
| UC03-RN03 | Falha informada pelo Gateway não altera a Mensalidade. |

O documento M4 confirma apenas o resultado de negócio “Mensalidade alterada para Paga”. Endpoint, payload e tratamento de falha foram confirmados como decisões técnicas para esta implementação.

## Componentes e camadas

- **Domínio:** `MonthlyPayment` e comportamento `processPayment`.
- **Aplicação:** `MonthlyPaymentService`.
- **Apresentação:** `MonthlyPaymentController` e DTO validado.
- **Persistência:** entidade TypeORM, mapper, repositório e migration PostgreSQL.
- **Módulo:** `FinancesModule`.

## Contrato implementado

```http
POST /finances/monthly-payments/:monthlyPaymentId/payment
Content-Type: application/json

{ "status": "PAID" | "FAILED" }
```

## Restrições e decisões

- O Gateway real não é integrado neste slice.
- A persistência usa PostgreSQL e TypeORM.
- O callback é idempotente para pagamentos já persistidos como `PAID`.
- O UC01 continua usando dublê financeiro no módulo de agendamento, conforme o escopo do primeiro slice.
