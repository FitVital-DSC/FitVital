# Artefato 3 — Issue principal (Epic)

## Título

`[UC02] Realizar Check-in (Controle de Acesso)`

## Objetivo

Planejar a implementação do check-in do FitVital para que o acesso seja liberado somente após a validação financeira e de capacidade, com registro da entrada e incremento da ocupação em caso de sucesso.

## Contexto e escopo

O caso de uso pertence ao contexto de Gestão da Capacidade de Espaço. Abrange domínio, serviço de aplicação, contratos, persistência, ocupação, adapter da catraca e testes futuros. A integração física real, o protocolo do dispositivo e o processo de saída permanecem dependências ou dúvidas documentais.

**Referência formal:** [Blueprint do Primeiro Slice](../../../../Trabalhos/M4-Blueprint%20do%20Primeiro%20Slice.md), seção 6, UC02, e seções 7–9.

## Requisitos contemplados

- Receber a identificação do aluno pela catraca/cartão/biometria.
- Consultar o status financeiro em tempo real.
- Bloquear aluno com mensalidade atrasada há mais de 24 horas (RN01).
- Verificar e preservar a lotação máxima (RN02).
- Liberar a catraca, registrar a entrada e incrementar a ocupação no sucesso.
- Bloquear e exibir orientação quando houver inadimplência ou lotação.

## Sub-Issues planejadas

- [ ] SUB-01 — Refinar modelo de acesso e ocupação
- [ ] SUB-02 — Definir comando, DTOs e portas do check-in
- [ ] SUB-03 — Implementar serviço de aplicação do UC02
- [ ] SUB-04 — Implementar persistência da entrada e ocupação
- [ ] SUB-05 — Planejar adapter da catraca
- [ ] SUB-06 — Proteger concorrência da capacidade
- [ ] SUB-07 — Validar automaticamente o caso de uso
- [ ] SUB-08 — Consolidar documentação e rastreabilidade

## Critérios gerais de aceite

- Aluno autorizado e academia com capacidade resultam em liberação, registro e incremento.
- RN01 e RN02 bloqueiam o acesso com motivos distinguíveis.
- O contexto de Espaço não acessa diretamente tabelas do Financeiro.
- A atualização de ocupação não permite exceder a lotação, inclusive em concorrência.
- A integração da catraca permanece isolada por contrato.
- Os testes futuros cobrem fluxo principal, bloqueios, falhas técnicas e consistência.

## Dependências e prontidão

Dependem de confirmação o contrato da catraca, o identificador de entrada, a fonte do status financeiro, o mecanismo de concorrência e a forma de decrementar ocupação. A Issue só deve ser movida para `Ready` após essas decisões ou seu registro explícito como hipóteses técnicas.
