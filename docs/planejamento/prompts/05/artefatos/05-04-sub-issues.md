# Artefato 4 — Sub-Issues

## `[SUB-01] Refinar domínio de avaliação e histórico`

Definir `AvaliacaoFisica`, `HistoricoFisico`, vínculo com Aluno e invariantes, sem inventar métricas não aprovadas. **Aceite:** modelo aprovado, domínio sem ORM e histórico preservado. **Dependências:** nenhuma.

## `[SUB-02] Definir métricas e contratos`

Fechar campos, unidades, DTO, comando, resposta e autorização do Personal Trainer. **Aceite:** contrato aprovado e validações documentadas. **Dependência:** SUB-01.

## `[SUB-03] Implementar serviço de aplicação`

Orquestrar validação, criação da avaliação e atualização do histórico. **Aceite:** sucesso atualiza histórico; falhas não persistem avaliação parcial. **Dependências:** SUB-01, SUB-02.

## `[SUB-04] Implementar persistência do histórico`

Criar entidades ORM, mapper, repositórios e migration conforme contratos. **Aceite:** avaliação e histórico são persistidos sem acoplamento do domínio. **Dependências:** SUB-01, SUB-02.

## `[SUB-05] Integrar API do Personal Trainer`

Expor a fronteira HTTP após definir endpoint e DTO. **Aceite:** entrada válida é processada e inválida rejeitada. **Dependências:** SUB-02, SUB-03.

## `[SUB-06] Validar automaticamente o UC05`

Cobrir registro, histórico, dados inválidos e falhas de persistência. **Aceite:** testes de domínio, aplicação, API e banco passam. **Dependências:** SUB-01 a SUB-05.

## `[SUB-07] Consolidar documentação`

Registrar decisões, pendências, rastreabilidade e evidências. **Aceite:** documentação e Project refletem o escopo aprovado. **Dependências:** SUB-01 a SUB-06.
