# 04-01 — Verificação de Prontidão

## Contexto

- **Sistema:** FitVital
- **Caso de uso:** UC01 — Solicitar Agendamento de Treino
- **Issue:** [#1](https://github.com/FitVital-DSC/FitVital/issues/1)
- **Repositório:** [FitVital-DSC/FitVital](https://github.com/FitVital-DSC/FitVital)
- **Primeiro slice:** validação de adimplência (RN01), capacidade (RN02), choque de horário (RN03) e disponibilidade do personal (RN04).
- **Destino dos artefatos:** `docs/prompts/`

## Matriz DoR

| Código | Condição | Classificação | Evidência ou pendência |
|---|---|---|---|
| DoR-01 | Objetivo claramente definido | Atende | O UC01 e o cenário válido estão definidos no Blueprint do Primeiro Slice. |
| DoR-02 | Escopo delimitado | Atende | O slice não inclui integração real com catraca ou gateway de pagamento. |
| DoR-03 | Critério de aceite verificável | Atende | O cenário válido exige confirmação do agendamento para aluno adimplente e horário disponível. |
| DoR-04 | Dependências identificadas | Pendente de ajuste | A execução e2e depende de PostgreSQL configurado e acessível. |
| DoR-05 | Informações técnicas disponíveis | Atende | Backend NestJS 12, TypeScript, Vitest e pnpm estão documentados e presentes. |
| DoR-06 | Responsável definido | Atende | Vitor Thomé (`VitorThome15`) confirmou a execução. |
| DoR-07 | Revisão de planejamento concluída | Pendente de ajuste | O revisor técnico ainda está `A definir`. |

## Autorização

O trabalho pode prosseguir somente na preparação da branch e na correção da infraestrutura de testes. A validação formal da fase RED e a abertura do Draft PR ficam condicionadas à configuração do banco e à designação do revisor.

