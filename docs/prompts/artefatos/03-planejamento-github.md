# Planejamento GitHub do UC08 - Listar Agendamentos

**Estado:** **Proposta**, sem Issue, branch, Project, PR ou labels criados.

## Issue principal

`[UC08] Listar Agendamentos`

Responsavel: A definir.
Estado inicial proposto: `Backlog`.

## Sub-Issues propostas

| Sub-Issue | Objetivo | Dependencias | Estado inicial |
|---|---|---|---|
| SUB-01 - Contrato do Repository | Ampliar a operacao aditiva de consulta sem acoplar TypeORM | Nenhuma | Backlog |
| SUB-02 - Caso de uso no Service | Implementar consulta por `clientId` e lista vazia | SUB-01 | Backlog |
| SUB-03 - Implementacao de persistencia | Implementar adapter in-memory e adapter TypeORM com mapper | SUB-01 | Backlog |
| SUB-04 - Fronteira HTTP | Criar Controller, DTO de resposta e semantica dos erros confirmada | SUB-02, SUB-03 | Backlog |
| SUB-05 - Testes e contrato | Cobrir unitarios, integracao, E2E e vazamento de campos | SUB-02, SUB-03, SUB-04 | Backlog |
| SUB-06 - Cenarios REST e auditoria | Criar cenarios `.http`, run-checks, auditoria e rastreabilidade | SUB-04, SUB-05 | Backlog |

## Labels propostas

- `uc07`
- `backend`
- `domain`
- `application`
- `infrastructure`
- `http`
- `tests`
- `documentation`

## Estados do Project

`Backlog`, `Ready`, `In Progress`, `In Review`, `Done`.

## Dependencias

SUB-02 depende de SUB-01.
SUB-03 depende de SUB-01.
SUB-04 depende de SUB-02 e SUB-03.
SUB-05 depende de SUB-02, SUB-03 e SUB-04.
SUB-06 depende de SUB-05.

## Issues criadas

- Epic: [#69](https://github.com/FitVital-DSC/FitVital/issues/69)
- [#70](https://github.com/FitVital-DSC/FitVital/issues/70) - SUB-01, Contrato do Repository
- [#71](https://github.com/FitVital-DSC/FitVital/issues/71) - SUB-02, Service
- [#72](https://github.com/FitVital-DSC/FitVital/issues/72) - SUB-03, persistencia
- [#73](https://github.com/FitVital-DSC/FitVital/issues/73) - SUB-04, HTTP e JWT
- [#74](https://github.com/FitVital-DSC/FitVital/issues/74) - SUB-05, testes
- [#75](https://github.com/FitVital-DSC/FitVital/issues/75) - SUB-06, REST e auditoria

Todas foram verificadas como abertas e atribuídas a `marianaveigaa`.

## GitHub Project

- Project criado: [Planejamento - UC08 Listar Agendamentos](https://github.com/orgs/FitVital-DSC/projects/8)
- Número: Project 8.
- Itens: Epic #69 e Sub-Issues #70–#75.
- Estado inicial efetivo: `Todo`.
- Divergência: o template novo do GitHub criou `Todo`, `In Progress` e `Done`; não criou `Backlog`, `Ready` e `In Review`.
