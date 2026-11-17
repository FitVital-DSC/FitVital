# Artefato 3 — Issue principal

## Título

`[UC05] Registrar Avaliação Física`

## Objetivo

Implementar o registro de métricas físicas pelo Personal Trainer e a atualização do histórico de evolução do Aluno.

## Escopo

Modelar avaliação e histórico, definir métricas e contratos, persistir o registro, expor a API e validar o fluxo. Campos, endpoint, autorização e regras de medição dependem de aprovação da equipe.

## Sub-Issues

- [ ] SUB-01 — Refinar domínio de avaliação e histórico
- [ ] SUB-02 — Definir métricas e contratos
- [ ] SUB-03 — Implementar serviço de aplicação
- [ ] SUB-04 — Implementar persistência do histórico
- [ ] SUB-05 — Integrar API do Personal Trainer
- [ ] SUB-06 — Validar automaticamente o UC05
- [ ] SUB-07 — Consolidar documentação

## Aceite geral

Uma avaliação válida deve ser registrada e refletida no histórico físico do Aluno; dados inválidos devem ser rejeitados de forma explícita.
