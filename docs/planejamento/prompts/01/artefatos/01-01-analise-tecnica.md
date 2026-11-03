# Artefato 1 — Análise técnica do caso de uso

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC01 — Solicitar Agendamento de Treino
- **Atores:** Aluno (principal); Personal Trainer e Gateway de Pagamento (secundários documentados)
- **Primeiro slice:** UC01, no contexto de Gestão de Agendamentos
- **Fonte:** [M4-Blueprint do Primeiro Slice](../../../../Trabalhos/M4-Blueprint%20do%20Primeiro%20Slice.md)

## Objetivo e escopo

Permitir que um aluno autenticado solicite um horário de treino e obtenha um ticket de agendamento confirmado quando estiver adimplente, houver capacidade física e o personal possuir disponibilidade. O slice inclui a validação das regras RN01, RN02, RN03 e RN04, a persistência do agendamento e a geração do evento `AgendamentoConfirmado`.

Não fazem parte do slice a integração real com Gateway de Pagamento, a integração com a catraca física, notificações reais por WhatsApp/e-mail e gestão de avaliações físicas.

## Pré e pós-condições

**Pré-condição:** aluno autenticado.

**Pós-condição:** ticket de agendamento criado, vaga reservada e evento `AgendamentoConfirmado` gerado.

## Fluxos

### Principal

1. O aluno informa data e horário.
2. O sistema verifica a adimplência do aluno (RN01).
3. O sistema verifica a disponibilidade do personal (RN04).
4. O sistema verifica a lotação máxima da academia (RN02).
5. O sistema verifica a existência de agendamento ativo do aluno no mesmo horário (RN03).
6. O sistema grava o agendamento confirmado e notifica as partes; no slice, a notificação real é substituída por log.

### Alternativos e exceções

- Mensalidade atrasada há mais de 24 horas: solicitação cancelada e bloqueio informado (RN01).
- Horário ou lotação indisponível: reserva negada e horários alternativos sugeridos.
- Concorrência: se outra reserva ocorrer simultaneamente, a duplicidade é impedida.
- Limite da sessão do personal excedido: reserva negada (RN04, pendência de explicitação no documento funcional).
- Banco indisponível: falha de infraestrutura, com tradução HTTP futura documentada como 500.

## Regras e validações

| Código | Regra documentada |
|---|---|
| RN01 | Aluno com mensalidade atrasada há mais de 24h não pode agendar. |
| RN02 | Agendamentos não podem exceder a lotação máxima da academia. |
| RN03 | O aluno não pode reservar dois treinos no mesmo horário. |
| RN04 | Deve ser respeitado o limite de alunos por sessão/disponibilidade do personal. |

Entradas documentadas: `personalTrainerId`, `data`, `horaInicio` e `horaFim`; `alunoId` é extraído do JWT. Formato inválido deve resultar em 400. Sucessos e violações devem ser traduzidos, respectivamente, para 201, 409 ou 422 conforme a especificação HTTP.

## Entidades, contratos e componentes

- Domínio: `Aluno`, `PersonalTrainerParticular`, `Agendamento` e VO `Horario`.
- Portas: `FinanceiroPort`, `EspacoCapacidadePort`, `AgendaPersonalPort` e `AgendamentoRepository`.
- Aplicação: `SolicitarAgendamentoService` e `SolicitarAgendamentoCommand`.
- Fronteira HTTP: `AgendamentoController`, `SolicitarAgendamentoRequestDTO` e `AgendamentoResponseDTO`.
- Infraestrutura: adapter de persistência, ORM, PostgreSQL, mapeadores e Docker.
- Evento: `AgendamentoConfirmado`, com notificação real fora do slice.

## Considerações arquiteturais preliminares

O documento define monólito modular, quatro bounded contexts e camadas de Apresentação, Aplicação, Domínio e Persistência. O contexto de Agendamentos não deve acessar tabelas de outros contextos; deve usar as portas. O domínio não deve conter anotações de ORM. A proteção contra corrida na última vaga exige definição posterior de lock otimista ou pessimista.

## Restrições, riscos e dúvidas

- O mecanismo de lock para RN02 ainda não foi decidido.
- A atualização do documento funcional para explicitar a falha RN04 está pendente.
- A tabela de resultados e falhas contém uma referência a RN04 para o choque nominal, enquanto as demais seções definem esse comportamento como RN03. Este planejamento adota RN03 para choque do aluno e RN04 para limite do personal, aguardando confirmação.
- O limite numérico do personal não foi informado; não deve ser inventado.
- Mocks/dublês para Financeiro e integrações externas são uma decisão documentada do slice; os contratos concretos permanecem a definir.
