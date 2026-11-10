# Artefato 1 — Análise técnica

- **Caso de uso:** UC05 — Registrar Avaliação Física
- **Ator:** Personal Trainer
- **Contexto:** Prescrição de Treino
- **Fonte:** [M4 — Blueprint do Primeiro Slice](../../../../Trabalhos/M4-Blueprint%20do%20Primeiro%20Slice.md)

## Objetivo e escopo

Permitir que o Personal Trainer registre métricas de evolução do Aluno, atualizando seu histórico físico.

## Pré e pós-condições

- **Pré-condição documentada:** Personal Trainer realiza o registro para um Aluno.
- **Pós-condição:** histórico físico atualizado.

## Fluxo confirmado

1. Personal Trainer informa a avaliação do Aluno.
2. Sistema valida os dados conforme contrato aprovado.
3. Sistema registra as métricas.
4. Sistema atualiza o histórico físico.

O M4 não detalha campos, unidade de medida, endpoint, autorização, periodicidade, edição ou regras de validação. Esses pontos permanecem pendentes.

## Arquitetura proposta

Domínio `AvaliacaoFisica` e `HistoricoFisico`; serviço de aplicação para orquestração; controller/DTO para a fronteira; repositórios e migration na persistência. O domínio não deve depender de ORM.
