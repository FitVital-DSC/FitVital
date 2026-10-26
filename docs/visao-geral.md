# Visão Geral do Sistema — FitVital

## 1. O Problema e o Contexto
O FitVital resolve dois problemas centrais do negócio de academias de pequeno e médio porte:
1. **Evasão de alunos:** Causada pela falta de acompanhamento individualizado, uma vez que as informações estão espalhadas em planilhas, WhatsApp e cadernos.
2. **Superlotação:** Causada pela falta de controle em tempo real da quantidade de pessoas frequentando a academia em um dado momento.

A perda de receita (inadimplência) é tratada como uma consequência direta da falta de gerenciamento organizado. O sistema visa centralizar os dados e automatizar o controle de acesso/agendamento para reter alunos e organizar o espaço.

## 2. Atores Principais
- **Aluno:** Agenda treinos, realiza check-in e paga mensalidades.
- **Personal Trainer:** Prescreve treinos e gerencia sua agenda.
- **Administrador:** Acompanha relatórios financeiros e de ocupação.
- **Recepcionista:** Realiza matrículas e liberações manuais (contingência).
- **Sistemas Externos:** Gateway de Pagamento e Sistema de Controle de Acesso (Catraca).

## 3. Fronteiras Arquiteturais (Bounded Contexts)
O sistema adota um **Monólito Modular** dividido em 4 contextos principais:
- **Gestão Financeira:** Cuida do ciclo de vida das mensalidades e define se o aluno está adimplente (RN01, RN05).
- **Gestão de Agendamentos:** Emissor de tickets nominais de tempo, garantindo que o aluno não tenha choque de horários (RN03).
- **Gestão de Espaço:** Isolado para controlar a capacidade física e a catraca, mitigando a superlotação (RN02).
- **Prescrição de Treino:** Focado na ficha de exercícios e no limite de alunos por Personal Trainer (RN04).

## 4. O Primeiro Slice (Recorte Inicial)
- **Caso de Uso:** UC01 — Solicitar Agendamento de Treino.
- **Regra Central:** Garantir que um agendamento só seja confirmado se o aluno for adimplente (RN01), houver vaga física na academia (RN02), o aluno não tiver choque de horário (RN03) e o personal tiver disponibilidade (RN04).
- **Limites do Recorte:** Não inclui integração com a catraca física (UC02) nem com o Gateway de Pagamento real (UC03).