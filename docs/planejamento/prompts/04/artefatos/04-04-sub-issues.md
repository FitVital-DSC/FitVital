# Artefato 4 — Sub-Issues completas

## `[SUB-01] Refinar domínio de matrícula`

**Objetivo:** proteger a invariante de matrícula.

**Escopo:** modelar status do Aluno, estado ativo e relação obrigatória com ao menos uma Mensalidade. Não definir campos não documentados.

**Aceite:**
- [ ] Aluno ativo não pode finalizar sem Mensalidade.
- [ ] Estados e transições estão documentados.
- [ ] Domínio não depende de ORM.

**Dependências:** nenhuma. **Labels:** `uc04-matricula`, `domain`, `feature`. **Estado:** Backlog.

## `[SUB-02] Definir dados e contratos`

**Objetivo:** fechar os contratos necessários à matrícula.

**Escopo:** DTO, comando, resposta e portas de Aluno, Mensalidade e vínculo opcional.

**Aceite:**
- [ ] Campos obrigatórios são confirmados pela equipe.
- [ ] Falta de Personal é representada como vínculo opcional.
- [ ] Contrato de geração da primeira Mensalidade está definido.

**Dependências:** SUB-01. **Labels:** `uc04-matricula`, `documentation`, `application`. **Estado:** Backlog.

## `[SUB-03] Implementar serviço transacional`

**Objetivo:** executar a matrícula sem criar Aluno fantasma.

**Escopo:** coordenar criação do Aluno, Mensalidade e Personal, com rollback quando a cobrança falhar.

**Aceite:**
- [ ] Sucesso persiste Aluno ativo e primeira Mensalidade.
- [ ] Falha na cobrança reverte o Aluno.
- [ ] Vínculo opcional não impede matrícula sem Personal.

**Dependências:** SUB-01 e SUB-02. **Labels:** `uc04-matricula`, `application`, `feature`, `risk`. **Estado:** Backlog.

## `[SUB-04] Implementar persistência`

**Objetivo:** persistir o agregado de matrícula e garantir atomicidade.

**Escopo:** entidades, mappers, repositórios, migration e transação, conforme contratos aprovados.

**Aceite:**
- [ ] Repositórios implementam as portas definidas.
- [ ] Rollback remove o Aluno quando a cobrança falha.
- [ ] Relação opcional com Personal é preservada.

**Dependências:** SUB-01 e SUB-02. **Labels:** `uc04-matricula`, `infra`, `persistence`. **Estado:** Backlog.

## `[SUB-05] Integrar API da Recepcionista`

**Objetivo:** disponibilizar a matrícula pela fronteira de entrada.

**Escopo:** controller, DTO, validação e mapeamento de respostas, após definição do contrato.

**Aceite:**
- [ ] Endpoint e payload aprovados estão documentados.
- [ ] Entrada inválida é rejeitada explicitamente.
- [ ] Sucesso e falha de transação têm respostas distintas.

**Dependências:** SUB-02 e SUB-03. **Labels:** `uc04-matricula`, `api`, `application`. **Estado:** Backlog.

## `[SUB-06] Validar automaticamente`

**Objetivo:** comprovar o fluxo e a invariante RN05.

**Escopo:** testes de domínio, aplicação, persistência e API.

**Aceite:**
- [ ] Fluxo feliz cria Aluno ativo e Mensalidade.
- [ ] Falha da cobrança não deixa registro órfão.
- [ ] Matrícula sem Personal funciona.
- [ ] RN05 e validações de entrada são testadas.

**Dependências:** SUB-01 a SUB-05. **Labels:** `uc04-matricula`, `test`. **Estado:** Backlog.

## `[SUB-07] Consolidar documentação`

**Objetivo:** registrar decisões e evidências do UC04.

**Escopo:** atualizar contratos, dependências, riscos, Issue e evidências do Project.

**Aceite:**
- [ ] Campos e transação confirmados ou marcados como pendências.
- [ ] Matriz de rastreabilidade está completa.
- [ ] Project e Issues refletem o escopo aprovado.

**Dependências:** SUB-01 a SUB-06. **Labels:** `uc04-matricula`, `documentation`, `governance`. **Estado:** Backlog.
