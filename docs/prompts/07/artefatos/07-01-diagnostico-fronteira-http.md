# 07-01 — Diagnóstico da Fronteira HTTP

## Situação da análise

- **Repositório:** `FitVital-DSC/FitVital`
- **Branch analisada:** `main`
- **Caso de uso:** UC01 — Solicitar Agendamento de Treino
- **Epic:** [#12 — UC01 Solicitar Agendamento de Treino](https://github.com/FitVital-DSC/FitVital/issues/12)
- **Sub-Issue HTTP:** [#16 — SUB-04 Planejar adaptador HTTP do agendamento](https://github.com/FitVital-DSC/FitVital/issues/16)
- **Responsável/revisor:** a documentação do UC01 registra ambos como a definir.
- **Diretório de destino:** `prompts/07/artefatos/`

## Artefatos anteriores recuperados

O diretório `docs/prompts/01/artefatos` contém o planejamento do UC01, incluindo objetivo, fluxos, regras, contratos propostos, Sub-Issues, dependências e evidências de execução no GitHub.

Os arquivos esperados pelo roteiro do Material 07 (`06-01-diagnostico-green.md` a `06-08-checklist-consistencia.md`) não foram localizados no diretório informado originalmente. Os documentos disponíveis não comprovam a conclusão de uma etapa GREEN específica do UC01 nem a existência de um serviço de aplicação pronto para ser delegado por um Controller HTTP. Essa ausência permanece registrada como pendência.

## Mapeamento de responsabilidades

| Sub-Issue | Responsabilidade | Estado/documentação | Relação com a fronteira |
|---|---|---|---|
| #13 / SUB-01 | Refinar domínio de agendamento | `Ready` no planejamento; responsável a definir | Define entidades e invariantes |
| #14 / SUB-02 | Definir comandos, DTOs e portas | `Ready` no planejamento; responsável a definir | Define o contrato de entrada e saída |
| #15 / SUB-03 | Implementar serviço de aplicação do UC01 | `Backlog` no planejamento | Dependência direta da interface |
| #16 / SUB-04 | Planejar adaptador HTTP do agendamento | `Backlog` no planejamento | Escopo desta etapa |
| #17 / SUB-05 | Implementar persistência do agendamento | `Backlog` no planejamento | Não deve ser implementada dentro do Controller |
| #18 / SUB-06 | Proteger concorrência e capacidade | `Backlog` no planejamento | Regra/infraestrutura fora do Controller |
| #19 / SUB-07 | Validar automaticamente o slice | `Backlog` no planejamento | Deve incluir testes da fronteira |
| #20 / SUB-08 | Consolidar documentação e rastreabilidade | `Backlog` no planejamento | Documentação final |

O planejamento informa que a #16 depende das #14 e #15. Portanto, a fronteira não deve ser implementada antes da aprovação do contrato e da disponibilidade verificável do serviço.

## Contratos recuperados do UC01

O planejamento define os seguintes contratos propostos:

- **Rota:** `POST /api/v1/agendamentos`;
- **Entrada:** `personalTrainerId`, `data`, `horaInicio` e `horaFim`;
- **Origem do aluno:** contexto autenticado/JWT, não o corpo;
- **Aplicação:** `SolicitarAgendamentoService` e `SolicitarAgendamentoCommand`;
- **Resposta:** `AgendamentoResponseDTO`, contendo ticket/status/horário;
- **Status esperados:** `201` no sucesso, `400` para formato inválido, `409` para conflito e `422` para violações de regras de negócio;
- **Portas:** `FinanceiroPort`, `EspacoCapacidadePort`, `AgendaPersonalPort` e `AgendamentoRepository`.

Esses elementos ainda estão descritos como contratos de planejamento, não como contratos implementados e aprovados no código.

O backend atual contém `SchedulingController`, `SchedulingService` e repositórios para o fluxo de confirmação de agendamento, mas não contém `SolicitarAgendamentoService`, `SolicitarAgendamentoCommand`, `AgendamentoResponseDTO` ou um Controller para `POST /api/v1/agendamentos`. O fluxo existente não pode ser tratado como implementação do UC01 completo sem validar a correspondência arquitetural.

## Dependências técnicas verificadas

Em `fitvital-backend/package.json`, estão disponíveis:

- NestJS (`@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`, `@nestjs/testing`);
- `class-validator` e `class-transformer`;
- `supertest` e `@types/supertest`;
- Vitest;
- TypeORM e PostgreSQL.

`fitvital-backend/src/main.ts` configura `ValidationPipe` global com `whitelist: true`. `transform: true` não está configurado atualmente. Não há evidência de DTO do contrato planejado do UC01 conectado à aplicação.

## Definition of Ready

| Código | Condição | Classificação | Evidência ou pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | O UC01 e o objetivo de solicitar agendamento estão documentados |
| DoR-02 | Escopo delimitado | **Atende parcialmente** | A #16 delimita a interface, mas alguns contratos ainda são propostos |
| DoR-03 | Critérios de aceite verificáveis | **Atende parcialmente** | Há rota, entradas e status previstos; faltam contratos implementados e exemplos aprovados |
| DoR-04 | Dependências identificadas | **Atende** | #16 depende de #14 e #15 |
| DoR-05 | Informações necessárias disponíveis | **Não atende** | O serviço e os contratos tipados do UC01 não foram localizados no código |
| DoR-06 | Responsável definido | **Não atende** | O planejamento do UC01 registra responsável a definir para a Sub-Issue |
| DoR-07 | Revisão de planejamento concluída | **Não foi possível verificar** | Não foi localizada evidência de revisão humana concluída para a #16 |

**Resultado da DoR:** a implementação de produção está bloqueada até que #14 e #15 estejam aprovadas e disponíveis, o responsável/revisor sejam confirmados e os contratos sejam reconciliados com o código atual.

## Testes e build verificados no ambiente atual

Comandos executados em `fitvital-backend`:

```text
npm run build
```

Resultado: concluído com código de saída 0.

```text
npm test
npm run test:e2e
```

Resultado: falharam os testes que importam `AppModule` porque o PostgreSQL não estava disponível em `127.0.0.1:5432` (`ECONNREFUSED`). Os hooks de inicialização excederam o timeout e houve falhas consequentes na limpeza. Isso não comprova testes HTTP do UC01.

## Branches e Pull Requests

Foram verificadas as branches `main`, `Branch-4-testes`, `feat/issue-1-agendamento-treino` e `feat/issue-3-pagamento-mensalidade`, além das correspondentes remotas. Não foi localizada uma branch específica do UC01 HTTP nem um Pull Request para a #16.

O PR #2 (`feat/issue-1-agendamento-treino` → `main`) está merged e o PR #62 para a mesma branch está closed; nenhum deles representa um PR novo da Sub-Issue #16 nesta etapa. Nenhum merge, push ou alteração de branch foi realizado durante este diagnóstico.

## Pendências e decisão de prosseguimento

1. Confirmar/aprovar os contratos da #14, incluindo DTO, command, portas e autenticação.
2. Disponibilizar e testar o serviço de aplicação da #15.
3. Reconciliar a implementação existente de confirmação com o fluxo planejado de solicitação, sem alterar contratos arbitrariamente.
4. Confirmar responsável e revisor da #16.
5. Disponibilizar PostgreSQL ou uma configuração de teste suportada antes dos testes E2E com `AppModule`.

**Decisão:** não criar Controller, DTO, provider, teste HTTP ou branch dependente nesta fase. O próximo artefato só deve ser elaborado após a confirmação dos contratos reais e da branch que contém o serviço GREEN do UC01.
