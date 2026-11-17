# 05-01 — Diagnóstico RED

## Identificação

- **Repositório:** `FitVital-DSC/FitVital`
- **Caso de uso documentado no Material 04:** UC04 — Realizar Matrícula de Aluno
- **Epic:** [#38 — UC04 Realizar Matrícula de Aluno](https://github.com/FitVital-DSC/FitVital/issues/38)
- **Issue candidata à implementação GREEN:** [#41 — SUB-03 Implementar serviço transacional](https://github.com/FitVital-DSC/FitVital/issues/41)
- **Diretório de destino:** `docs/prompts/05/artefatos/`

## Artefatos anteriores encontrados

O diretório `docs/prompts/04/artefatos` contém os documentos de planejamento do UC04, incluindo análise técnica, decomposição, Sub-Issues, DoR, dependências, checklist e evidências do GitHub.

Os oito arquivos esperados pelo roteiro do Material 05 (`04-01-verificacao-prontidao.md` a `04-08-revisao-acompanhamento.md`) não estão presentes com esses nomes. Os documentos disponíveis não comprovam a criação de um teste RED para o UC04, a execução de uma falha funcional, a branch de trabalho ou um Draft Pull Request.

## Estado do RED

**RED legítimo não foi localizado.**

O artefato `04-13-execucao-github-evidencias.md` registra que o UC04 foi apenas documentado para planejamento e que não houve implementação de código. Também registra que as Issues #38 a #45 permaneceram em `Backlog`, pois a DoR e os contratos não estavam completos.

O arquivo `04-05-comentarios-github.md` e os demais artefatos consultados não fornecem:

- caminho de um teste RED do UC04;
- comando de execução do teste;
- saída real demonstrando falha de comportamento;
- causa raiz da falha;
- commit da fase RED;
- branch exclusiva do UC04;
- Draft PR correspondente.

Não é tecnicamente válido criar uma falha artificial ou alterar um teste existente de outro caso de uso para simular a fase RED.

## Contratos e componentes do UC04

O planejamento define, mas não implementa:

- domínio `Aluno` e a invariante de que um aluno `Ativo` deve possuir ao menos uma Mensalidade;
- serviço transacional de matrícula;
- portas/repositórios de Aluno, Mensalidade e vínculo opcional com Personal;
- DTO, comando, resposta e Controller da Recepcionista;
- estratégia de transação/rollback;
- endpoint e códigos HTTP.

Como os campos, contratos e estratégia transacional ainda estão pendentes, não há componente de produção identificado para receber uma implementação GREEN mínima.

## Stack verificada

O backend usa TypeScript/NestJS, Vitest, Supertest, class-validator, TypeORM e PostgreSQL, conforme `fitvital-backend/package.json`. O código atualmente localizado implementa módulos de agendamento e mensalidades, mas não implementa o fluxo de matrícula do UC04.

## Situação da prontidão

| Item | Situação |
|---|---|
| Teste RED recuperado | **Pendente** |
| Comando e saída RED | **Pendente** |
| Causa raiz da falha | **Não foi possível verificar** |
| Contrato do serviço | **Pendente** |
| Branch da fase RED | **Não foi possível verificar** |
| Commit RED | **Não foi possível verificar** |
| Draft PR | **Não foi localizado** |
| DoR da implementação | **Não atende**; contratos e responsável permanecem pendentes |

## Decisão

O Material 05 não pode avançar para planejamento ou implementação GREEN do UC04 enquanto a equipe não fornecer:

1. o teste RED real e sua saída de execução;
2. a branch e o commit da fase RED, caso existam;
3. o contrato aprovado da matrícula;
4. a Issue de implementação e seus critérios de aceite prontos;
5. a estratégia de transação e rollback;
6. o responsável e o revisor confirmados.

Nenhum arquivo de produção foi alterado e nenhum teste foi criado para fabricar a transição RED → GREEN.
