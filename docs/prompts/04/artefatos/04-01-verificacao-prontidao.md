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
| DoR-02 | Escopo delimitado | **Atende para o primeiro slice** | O primeiro slice é unitário e não inclui endpoint HTTP; rollback e integração completa permanecem fora dele |
| DoR-03 | Critérios de aceite verificáveis | **Atende para o primeiro slice** | Dados válidos devem produzir matrícula ativa com mensalidade; conflito e rollback permanecem critérios posteriores |
| DoR-04 | Dependências identificadas | **Atende** | #40/#41 dependem de #39; #42/#43 dependem de contratos e serviço; #44 depende das camadas anteriores |
| DoR-05 | Informações técnicas disponíveis | **Atende para o primeiro slice** | Entrada, resposta, portas, identificadores `string`, status `ACTIVE` e unidade transacional foram definidos; endpoint permanece fora do slice |
| DoR-06 | Responsável definido | **Atende** | `@marianaveigaa` é responsável e revisora registrada na Issue #40 |
| DoR-07 | Revisão de planejamento concluída | **Atende para o primeiro slice** | A aprovação do contrato foi registrada em comentário na Issue #40 |

## Estado das Issues e do Project

As Issues #38–#45 estão abertas. A SUB-02 foi marcada como `Ready` após a aprovação do contrato. O restante do UC04 continua dependente das camadas seguintes; ainda não há teste RED, commit ou Draft Pull Request específico do UC04.

## Stack técnica observada

O backend usa TypeScript/NestJS, Vitest, Supertest, class-validator, TypeORM e PostgreSQL, conforme `fitvital-backend/package.json`. O código existente contém módulos de agendamento e mensalidades, mas não contém o fluxo de matrícula do UC04 nem seus contratos planejados.

## Decisão de prontidão

O UC04 completo **não está pronto para implementação integral**, mas o primeiro slice unitário está autorizado para a execução do Material 04. A criação do teste RED pode começar para:

1. dados válidos produzirem matrícula ativa;
2. o serviço delegar a criação do Aluno e da primeira Mensalidade pelas portas aprovadas;
3. o endpoint HTTP, persistência real e demais fluxos permanecerem fora deste RED.

O teste RED ainda não foi criado. A branch de trabalho existente deve receber apenas o teste unitário nesta etapa, sem implementação de produção.

## Decisões de refinamento informadas pela equipe

As seguintes decisões foram fornecidas para desbloquear o refinamento inicial:

- **Dados de entrada:** `nome`, `email`, `telefone`, `endereço` e `cpf`;
- **Endpoint HTTP:** ainda não definido; o primeiro teste será unitário do serviço;
- **Retorno mínimo:** objeto de matrícula com `id`, `studentId`, `status` e `monthlyPaymentId`;
- **Portas mínimas:** `StudentsRepository.create` e `MonthlyPaymentsRepository.create`;
- **Rollback:** unidade transacional da aplicação;
- **Primeiro critério RED:** dados válidos produzem matrícula ativa com mensalidade;
- **Identificadores:** `string`;
- **Status de matrícula ativa:** `ACTIVE`;
- **Revisão:** aprovação registrada na Issue #40 por `@marianaveigaa`.

Essas decisões fecham apenas o recorte do primeiro teste. Endpoint HTTP, persistência real e integração completa continuam pendentes para as Sub-Issues posteriores.
