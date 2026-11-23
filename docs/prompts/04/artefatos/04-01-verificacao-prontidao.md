# 04-01 — Verificação de Prontidão do UC04

## Identificação

- **Projeto:** FitVital
- **Caso de uso:** UC04 — Realizar Matrícula de Aluno
- **Epic:** [#38 — UC04 Realizar Matrícula de Aluno](https://github.com/FitVital-DSC/FitVital/issues/38)
- **Sub-Issue de testes prevista:** [#44 — SUB-06 Validar automaticamente](https://github.com/FitVital-DSC/FitVital/issues/44)
- **Sub-Issue de implementação candidata:** [#41 — SUB-03 Implementar serviço transacional](https://github.com/FitVital-DSC/FitVital/issues/41)
- **Diretório dos artefatos:** `docs/prompts/04/artefatos/`

## Escopo recuperado

O planejamento do UC04 define o fluxo de matrícula de um aluno, incluindo criação do Aluno, geração da primeira Mensalidade, vínculo opcional com Personal Trainer e rollback quando a cobrança falhar. A regra RN05 exige que um Aluno `Ativo` possua ao menos uma Mensalidade.

As Sub-Issues planejadas são:

- #39 / SUB-01 — Refinar domínio de matrícula;
- #40 / SUB-02 — Definir dados e contratos;
- #41 / SUB-03 — Implementar serviço transacional;
- #42 / SUB-04 — Implementar persistência;
- #43 / SUB-05 — Integrar API da Recepcionista;
- #44 / SUB-06 — Validar automaticamente;
- #45 / SUB-07 — Consolidar documentação.

## Definition of Ready

| Código | Condição | Classificação | Evidência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | O objetivo e o fluxo geral do UC04 estão documentados |
| DoR-02 | Escopo delimitado | **Atende parcialmente** | O rollback e o vínculo opcional estão descritos, mas campos e transação ainda são pendentes |
| DoR-03 | Critérios de aceite verificáveis | **Atende parcialmente** | Há critérios para sucesso, rollback e vínculo, mas faltam contratos executáveis |
| DoR-04 | Dependências identificadas | **Atende** | #40/#41 dependem de #39; #42/#43 dependem de contratos e serviço; #44 depende das camadas anteriores |
| DoR-05 | Informações técnicas disponíveis | **Não atende** | DTO, command, resposta, portas, endpoint e estratégia transacional não foram definidos |
| DoR-06 | Responsável definido | **Não atende** | As Issues #40, #42 e #44 não possuem assignee; a documentação registra responsáveis a definir |
| DoR-07 | Revisão de planejamento concluída | **Não foi possível verificar** | O checklist registra revisão humana e confirmação da equipe como pendentes |

## Estado das Issues e do Project

As Issues #38–#45 estão abertas. A documentação do UC04 registra todos os itens no estado `Backlog` do Project #5, pois a DoR não foi atendida integralmente. Não foi localizada branch de trabalho, teste RED, commit ou Draft Pull Request específico do UC04.

## Stack técnica observada

O backend usa TypeScript/NestJS, Vitest, Supertest, class-validator, TypeORM e PostgreSQL, conforme `fitvital-backend/package.json`. O código existente contém módulos de agendamento e mensalidades, mas não contém o fluxo de matrícula do UC04 nem seus contratos planejados.

## Decisão de prontidão

O UC04 **não está pronto para a execução do Material 04**. A criação do teste RED deve aguardar:

1. conclusão do refinamento do domínio (#39);
2. aprovação dos contratos, DTO, command, resposta e portas (#40);
3. definição do serviço transacional e da estratégia de rollback (#41);
4. confirmação do responsável e revisor da Sub-Issue de testes (#44);
5. definição do critério de aceite que será coberto pelo primeiro teste.

Não foram criados código, teste, branch, commit ou Pull Request. Esta decisão evita inventar contratos e evita registrar uma falha de ambiente como RED funcional.

## Decisões de refinamento informadas pela equipe

As seguintes decisões foram fornecidas para desbloquear o refinamento inicial:

- **Dados de entrada:** `nome`, `email`, `telefone`, `endereço` e `cpf`;
- **Endpoint HTTP:** ainda não definido; o primeiro teste será unitário do serviço;
- **Retorno mínimo:** objeto de matrícula com `id`, `studentId`, `status` e `monthlyPaymentId`;
- **Portas mínimas:** `StudentsRepository.create` e `MonthlyPaymentsRepository.create`;
- **Rollback:** unidade transacional da aplicação;
- **Primeiro critério RED:** dados válidos produzem matrícula ativa com mensalidade.

Essas decisões fecham apenas o recorte do primeiro teste. Ainda é necessário registrar os tipos exatos, as assinaturas das portas, a origem do identificador do Aluno, a política de unicidade do CPF/e-mail e o responsável/revisor antes da execução da branch.
# Artefato 04-01 — Verificação de Prontidão

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC01 — Solicitar Agendamento de Treino
- **Issue principal (Epic):** [#1 — feat: Implementar UC01 - Solicitar Agendamento de Treino](https://github.com/FitVital-DSC/FitVital/issues/1)
- **Sub-Issue avaliada:** SUB-01 — Refinar domínio de agendamento
- **Branch relacionada identificada:** `feat/issue-1-agendamento-treino`
- **Commit da branch remota:** `b7fb1e147884345659d52f53eb35c5cb3a64ff40`

## Evidências analisadas

- A branch principal local está em `main` e alinhada com `origin/main`.
- A Issue #1 está aberta e descreve o UC01, suas regras RN01–RN04 e critérios de aceitação.
- A Issue #1 possui `marianaveigaa` e `VitorThome15` como responsáveis, conforme evidência visual enviada.
- `VitorThome15` declarou assumir responsabilidade pela parte avaliada e concedeu a autorização de início.
- A Issue #1 não possui labels, milestone ou Sub-Issues registradas.
- A SUB-01 está descrita no planejamento local como sem dependências e com estado `Ready`.
- O arquivo não rastreado `docs/prompts/05-do-teste-red-a-implementacao-green-com-tdd.md` foi mantido fora do escopo.

## Matriz DoR

| Código | Condição de prontidão | Classificação | Evidência e pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | **Atende** | A SUB-01 define a modelagem de `Agendamento`, `Horario`, estados e comportamento de confirmação. |
| DoR-02 | Escopo delimitado | **Atende** | A SUB-01 inclui domínio, objetos de valor, invariantes e erros; controller, banco e integrações estão fora do escopo. |
| DoR-03 | Critérios de aceite verificáveis | **Atende** | Existem critérios para imutabilidade do horário, proteção de transições, validação de parâmetros e independência de ORM. |
| DoR-04 | Dependências identificadas | **Atende** | A SUB-01 não possui dependências; as dependências posteriores estão registradas nas Sub-Issues seguintes. |
| DoR-05 | Informações técnicas disponíveis | **Atende para a fase atual** | O domínio e as regras necessárias à modelagem estão documentados. Detalhes adicionais podem ser refinados dentro do escopo autorizado. |
| DoR-06 | Responsável definido | **Atende** | `marianaveigaa` e `VitorThome15` aparecem como responsáveis da Issue #1; `VitorThome15` assumiu formalmente a responsabilidade pela SUB-01 nesta autorização. |
| DoR-07 | Revisão de planejamento concluída | **Atende** | A revisão foi concluída por `VitorThome15`, que concedeu a aprovação explicitamente nesta etapa. |

## Pendências para autorização

1. Refinar os detalhes técnicos de `Horario`, estados e transições durante a execução da SUB-01.
2. Criar e vincular as Sub-Issues no GitHub, caso a equipe adote a decomposição local como rastreabilidade oficial.

## Resultado

A SUB-01 possui objetivo, escopo, critérios de aceite, responsável e revisão registrados e atende aos critérios essenciais da Definition of Ready para início desta etapa.

## Autorização

**Status: Authorized / Ready.**

- **Autorizado por:** `VitorThome15`
- **Responsáveis registrados:** `marianaveigaa`, `VitorThome15`
- **Data da autorização:** 22/11/2026
- **Unidade autorizada:** SUB-01 — Refinar domínio de agendamento
- **Escopo autorizado:** modelagem do domínio sem implementar controller, banco ou integrações nesta etapa.

O início da execução da SUB-01 está autorizado nesta etapa.
