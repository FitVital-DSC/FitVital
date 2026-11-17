# Artefato 05 — Comentários técnicos para o GitHub

Os textos abaixo são modelos para publicação pelos revisores humanos.

## SUB-01 — Revisor: Vitor a confirmar

> Validar a transição encapsulada de `MonthlyPayment` para `PAID`, o registro de `datePayment` e o comportamento idempotente. A Issue só deve ir para `Ready` após a confirmação humana.

## SUB-02 — Revisor: Mariana

> Confirmar o contrato `POST /finances/monthly-payments/:monthlyPaymentId/payment`, o UUID da rota e os status `PAID`/`FAILED`. Registrar explicitamente os erros de validação e recurso inexistente.

## SUB-03 — Revisor: Vitor a confirmar

> Confirmar que `PAID` busca, altera e salva a Mensalidade; `FAILED` mantém o estado e não salva; e uma mensalidade inexistente gera erro explícito.

## SUB-04 — Revisor: Mariana

> Revisar schema `finances`, enum PostgreSQL, campos obrigatórios, mapper e reversibilidade da migration. Confirmar que o domínio não depende de TypeORM.

## SUB-05 — Revisor: Vitor a confirmar

> Validar a composição do `FinancesModule`, a injeção do repositório TypeORM e a aplicação da validação do DTO na fronteira HTTP.

## SUB-06 — Revisor: Mariana

> Confirmar cobertura dos cenários `PAID`, `FAILED`, pagamento inexistente, payload inválido e persistência do resultado. Diferenciar testes unitários de teste E2E.

## SUB-07 — Revisor: Vitor a confirmar

> Conferir README, migration aplicada e evidências de build/testes. Não declarar integração real com Gateway, pois ela está fora do escopo.

## Template de conclusão humana

```markdown
### Registro de Revisão de Planejamento

**Revisor:** @[usuario_github]
**Issue:** [SUB-XX] - [Título]
**Data:** [DD/MM/AAAA]
**Resultado:** [ ] Aprovada sem ressalvas | [ ] Aprovada com ajustes menores | [ ] Ajustes necessários

**Observações Técnicas:**
- [Pontos verificados]

**Ajustes Solicitados:**
- [Ajustes, se houver]

**Conclusão e Prontidão:**
- [ ] DoR-01 a DoR-07 atendidos; promover para Ready
- [ ] Manter em Backlog
```
