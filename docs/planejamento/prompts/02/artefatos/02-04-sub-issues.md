# Artefato 4 — Sub-Issues completas

## `[SUB-01] Refinar modelo de acesso e ocupação`

**Objetivo:** modelar o comportamento de autorização, registro de entrada e ocupação.

**Descrição:** definir os conceitos mínimos de check-in, identificação do aluno, resultado de acesso e estado de ocupação, preservando RN01 e RN02 sem depender de ORM ou hardware.

**Origem:** fluxo principal, pós-condição, RN01 e RN02.

**Escopo:** entidades/objetos de domínio, invariantes e erros de acesso. Não inclui protocolo da catraca.

**Aceite:**
- [ ] O domínio representa acesso liberado e bloqueado com motivo.
- [ ] O sucesso exige as condições financeiras e de capacidade documentadas.
- [ ] O registro e o incremento pertencem ao fluxo de sucesso.
- [ ] Nenhuma anotação de infraestrutura é necessária no domínio.

**Dependências:** nenhuma. **Labels:** `uc02-check-in`, `feature`, `domain`, `priority:high`. **Responsável:** A definir. **Estado:** Ready. **Evidências:** modelo revisado e testes unitários futuros.

## `[SUB-02] Definir comando, DTOs e portas do check-in`

**Objetivo:** formalizar as fronteiras entre catraca, aplicação, Financeiro e Espaço.

**Descrição:** definir contratos para identificar o aluno, consultar situação financeira, consultar/atualizar capacidade, registrar entrada e comandar liberação ou bloqueio. Os nomes e campos não documentados devem ser marcados como proposta.

**Origem:** atores, fluxo principal e dependências UC03.

**Aceite:**
- [ ] O contrato distingue entrada do dispositivo e decisão da aplicação.
- [ ] RN01 é consultada por uma porta, sem acesso direto ao Financeiro.
- [ ] A capacidade possui operação compatível com verificação e atualização.
- [ ] Campos e protocolo não definidos permanecem pendências explícitas.

**Dependências:** SUB-01. **Labels:** `uc02-check-in`, `feature`, `application`, `documentation`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** contratos e decisões registradas.

## `[SUB-03] Implementar serviço de aplicação do UC02`

**Objetivo:** coordenar o fluxo de autorização sem concentrar regras no adapter.

**Descrição:** orquestrar identificação, consulta financeira, consulta de capacidade, registro da entrada, incremento e comando de liberação. Em bloqueios, deve evitar registro/incremento e retornar motivo explícito.

**Origem:** fluxo principal e fluxos alternativos do UC02.

**Aceite:**
- [ ] Inadimplência interrompe o fluxo antes da liberação.
- [ ] Lotação impede entrada e não incrementa o contador.
- [ ] Sucesso executa registro, incremento e liberação conforme contrato.
- [ ] Falhas de dependências não são convertidas em sucesso.

**Dependências:** SUB-01 e SUB-02. **Labels:** `uc02-check-in`, `feature`, `application`, `priority:high`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** serviço e testes com dublês.

## `[SUB-04] Implementar persistência da entrada e ocupação`

**Objetivo:** armazenar o check-in e manter o estado de ocupação.

**Descrição:** implementar adapters de persistência para registro de entrada e atualização do contador/estado de ocupação, mantendo o domínio independente do mecanismo de banco.

**Origem:** pós-condição e RN02.

**Aceite:**
- [ ] O registro contém as informações definidas no contrato aprovado.
- [ ] A atualização de ocupação é consistente com a autorização.
- [ ] A implementação respeita as portas internas.
- [ ] Falhas de persistência são propagadas explicitamente.

**Dependências:** SUB-02 e SUB-03. **Labels:** `uc02-check-in`, `feature`, `infra`, `persistence`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** mapper, migration/adapters e testes de persistência.

## `[SUB-05] Planejar adapter da catraca`

**Objetivo:** isolar a comunicação com o Sistema de Controle de Acesso.

**Descrição:** especificar o adapter que recebe cartão/biometria, encaminha a solicitação e executa a liberação ou o bloqueio com mensagem. Como o protocolo físico não está documentado, a implementação concreta depende de confirmação.

**Origem:** atores, pré-condição e fluxos alternativos.

**Aceite:**
- [ ] O adapter não decide RN01 ou RN02.
- [ ] Liberação e bloqueio são comandos distintos.
- [ ] A falha do dispositivo é identificável e não gera autorização falsa.
- [ ] Protocolo e formato de mensagem pendentes estão registrados.

**Dependências:** SUB-02 e SUB-03. **Labels:** `uc02-check-in`, `feature`, `infra`, `integration`, `risk`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** contrato de integração e testes com dublê.

## `[SUB-06] Proteger concorrência da capacidade`

**Objetivo:** preservar RN02 quando múltiplas entradas disputarem a última vaga.

**Descrição:** propor e validar mecanismo transacional/lock para verificar e incrementar a ocupação como operação consistente. A escolha de lock é hipótese técnica até aprovação da equipe.

**Origem:** RN02 e problema de controle em tempo real da ocupação.

**Aceite:**
- [ ] A estratégia de concorrência é documentada e justificada.
- [ ] Entradas simultâneas não ultrapassam a lotação máxima.
- [ ] Uma entrada rejeitada não altera o contador.
- [ ] A solução respeita os limites do monólito modular.

**Dependências:** SUB-02 e SUB-04. **Labels:** `uc02-check-in`, `feature`, `infra`, `priority:high`, `risk`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** decisão arquitetural e teste concorrente futuro.

## `[SUB-07] Validar automaticamente o caso de uso`

**Objetivo:** planejar a comprovação dos comportamentos do UC02.

**Descrição:** cobrir domínio, aplicação com dublês, persistência e adapter da catraca conforme contratos aprovados.

**Aceite:**
- [ ] Há cenário de sucesso com registro e incremento.
- [ ] Há cenário de inadimplência e de academia lotada.
- [ ] Há cenário de concorrência e falha de dependência.
- [ ] O teste confirma que bloqueios não incrementam ocupação.

**Dependências:** SUB-01 a SUB-06, por camada. **Labels:** `uc02-check-in`, `test`, `domain`, `application`, `infra`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** suíte futura e matriz de cobertura.

## `[SUB-08] Consolidar documentação e rastreabilidade`

**Objetivo:** manter o UC02, contratos e dependências coerentes.

**Descrição:** registrar decisões sobre identificação, Financeiro, catraca, ocupação, concorrência e relação com UC01/UC03, sem transformar hipóteses em requisitos.

**Aceite:**
- [ ] Todo requisito do UC02 possui cobertura.
- [ ] Dúvidas estão separadas de decisões confirmadas.
- [ ] Não há dependências circulares ou tarefas redundantes.
- [ ] As referências ao UC01 e UC03 são apenas as documentadas.

**Dependências:** SUB-01 a SUB-07. **Labels:** `uc02-check-in`, `documentation`, `governance`. **Responsável:** A definir. **Estado:** Backlog. **Evidências:** documentos revisados e matriz atualizada.
