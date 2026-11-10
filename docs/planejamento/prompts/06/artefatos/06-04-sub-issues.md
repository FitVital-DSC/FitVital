# Artefato 4 — Sub-Issues

## `[SUB-01] Refinar domínio da ficha de treino`

Definir ficha, exercícios, vínculo com Aluno e Personal Trainer e invariantes, sem inventar campos. **Aceite:** modelo aprovado, independente de ORM e coerente com o M4. **Dependências:** nenhuma.

## `[SUB-02] Definir contratos e autorização`

Definir DTOs, comando, resposta, origem do Aluno e autorização do Personal Trainer. **Aceite:** contrato aprovado e validações documentadas. **Dependência:** SUB-01.

## `[SUB-03] Implementar serviço de montagem`

Orquestrar validação, criação e vínculo da ficha. **Aceite:** fluxo válido produz ficha consistente e falhas não persistem estado parcial. **Dependências:** SUB-01, SUB-02.

## `[SUB-04] Implementar persistência da ficha`

Criar entidades ORM, mapper, repositório e migration conforme contratos. **Aceite:** ficha e vínculos são persistidos sem acoplar o domínio ao ORM. **Dependências:** SUB-01, SUB-02.

## `[SUB-05] Expor a interface do caso de uso`

Expor a fronteira definida pela equipe, após aprovação do contrato. **Aceite:** entrada válida é processada e inválida rejeitada explicitamente. **Dependências:** SUB-02, SUB-03.

## `[SUB-06] Validar automaticamente o UC06`

Cobrir montagem, vínculos, dados inválidos e falhas de persistência. **Aceite:** testes de domínio, aplicação, interface e infraestrutura passam. **Dependências:** SUB-01 a SUB-05.

## `[SUB-07] Consolidar decisões e rastreabilidade`

Registrar decisões, pendências, rastreabilidade e evidências. **Aceite:** documentação e Project refletem o escopo aprovado. **Dependências:** SUB-01 a SUB-06.
