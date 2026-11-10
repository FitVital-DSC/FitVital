# Artefato 4 — Sub-Issues completas

## `[SUB-01] Refinar domínio de Mensalidade`

**Objetivo:** encapsular a transição de pagamento.

**Escopo:** implementar `processPayment`, atualizar `status`, `datePayment` e `updatedAt`, sem dependência de ORM.

**Aceite:**
- [ ] Pagamento aprovado termina em `PAID`.
- [ ] Data do processamento é registrada.
- [ ] O comportamento não depende do Controller.

**Dependências:** nenhuma. **Labels:** `uc03-pagamento`, `domain`, `feature`. **Estado:** Ready.

## `[SUB-02] Definir contrato do callback`

**Objetivo:** formalizar a entrada do Gateway.

**Escopo:** rota, parâmetro UUID, DTO e enum `PAID`/`FAILED`.

**Aceite:**
- [ ] Rota e payload estão documentados.
- [ ] Status fora do enum é rejeitado.
- [ ] UUID inválido é rejeitado.

**Dependências:** SUB-01. **Labels:** `uc03-pagamento`, `api`, `documentation`. **Estado:** Ready.

## `[SUB-03] Implementar serviço de aplicação`

**Objetivo:** coordenar o processamento.

**Escopo:** buscar a mensalidade, lançar erro para inexistência, processar apenas aprovação, salvar quando necessário e retornar resultado.

**Aceite:**
- [ ] `PAID` chama o domínio e o repositório.
- [ ] `FAILED` não salva nem altera.
- [ ] Recurso inexistente gera erro explícito.

**Dependências:** SUB-01 e SUB-02. **Labels:** `uc03-pagamento`, `application`, `feature`. **Estado:** Ready.

## `[SUB-04] Implementar persistência financeira`

**Objetivo:** persistir o ciclo de vida da Mensalidade.

**Escopo:** entidade TypeORM, mapper, repositório e migration no schema `finances`.

**Aceite:**
- [ ] A tabela contém identificador, aluno, valor, status e datas.
- [ ] O enum PostgreSQL contempla `PENDING`, `PAID` e `OVERDUE`.
- [ ] A migration é reversível.

**Dependências:** SUB-01. **Labels:** `uc03-pagamento`, `infra`, `persistence`. **Estado:** Ready.

## `[SUB-05] Integrar módulo e controller`

**Objetivo:** disponibilizar o callback no NestJS.

**Escopo:** `FinancesModule`, controller, injeção do repositório e registro no `AppModule`.

**Aceite:**
- [ ] A rota retorna o DTO de resultado.
- [ ] O módulo usa o repositório TypeORM.
- [ ] Validação global é aplicada.

**Dependências:** SUB-02, SUB-03 e SUB-04. **Labels:** `uc03-pagamento`, `api`, `application`. **Estado:** Ready.

## `[SUB-06] Validar automaticamente o UC03`

**Objetivo:** comprovar o fluxo implementado.

**Escopo:** testes unitários do serviço e E2E do endpoint com PostgreSQL.

**Aceite:**
- [ ] Sucesso atualiza e persiste `PAID`.
- [ ] Falha mantém o estado.
- [ ] Mensalidade inexistente é rejeitada.
- [ ] Build e testes direcionados passam.

**Dependências:** SUB-01 a SUB-05. **Labels:** `uc03-pagamento`, `test`. **Estado:** Ready.

## `[SUB-07] Documentar operação e migração`

**Objetivo:** tornar a entrega reproduzível.

**Escopo:** README, migration aplicada e evidências de validação.

**Aceite:**
- [ ] README documenta método, rota e payload.
- [ ] O estado da migration é verificável.
- [ ] O planejamento referencia os arquivos implementados.

**Dependências:** SUB-05 e SUB-06. **Labels:** `uc03-pagamento`, `documentation`, `governance`. **Estado:** Backlog.
