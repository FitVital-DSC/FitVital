# Artefato 1 — Análise técnica do caso de uso

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC02 — Realizar Check-in (Controle de Acesso)
- **Atores:** Aluno (principal) e Sistema de Controle de Acesso/Catraca (secundário)
- **Contexto:** Gestão da Capacidade de Espaço
- **Fonte:** [Blueprint do Primeiro Slice](../../../../Trabalhos/M4-Blueprint%20do%20Primeiro%20Slice.md)

## Objetivo e escopo

Permitir que um aluno se apresente na catraca e tenha o acesso liberado somente quando sua situação financeira permitir a entrada e a academia estiver abaixo da lotação máxima. O caso de uso registra a entrada e incrementa o contador de ocupação após a liberação.

O escopo documentado inclui cartão/biometria, consulta financeira em tempo real, verificação de capacidade, bloqueio com mensagem nos fluxos alternativos, registro da entrada e incremento da ocupação. A integração física real com a catraca não foi detalhada e deve ser tratada como dependência externa ou adapter futuro.

## Pré e pós-condições

- **Pré-condição:** o aluno se apresenta na catraca física.
- **Pós-condição de sucesso:** catraca liberada, entrada registrada e contador de ocupação incrementado.

## Fluxos

### Principal

1. O aluno passa cartão ou biometria.
2. O sistema consulta o status financeiro em tempo real (RN01).
3. O sistema verifica se a academia está abaixo da lotação máxima (RN02).
4. A catraca é liberada, a entrada é registrada e a ocupação é incrementada.

### Alternativos

- **Inadimplente:** a catraca bloqueia e exibe mensagem para procurar a recepção.
- **Academia lotada:** a catraca bloqueia a entrada até que alguém saia.

## Regras e validações

| Código | Regra documentada |
|---|---|
| RN01 | Aluno com mensalidade atrasada há mais de 24 horas não pode acessar a academia. |
| RN02 | O limite físico de ocupação não pode ser violado. |

O identificador proveniente do cartão ou biometria, a situação financeira, a lotação atual e a lotação máxima são informações necessárias ao processamento. O formato exato do identificador, os códigos HTTP e o contrato da catraca não foram definidos na documentação.

## Entidades, contratos e componentes

- **Domínio:** `Aluno`, `Mensalidade`, `Academia` e estado de ocupação.
- **Aplicação:** serviço de realização do check-in, coordenando as consultas e a decisão de acesso.
- **Portas propostas:** consulta financeira, capacidade/ocupação e controle de acesso; os nomes e operações concretos dependem de confirmação.
- **Infraestrutura:** persistência do registro de entrada, contador de ocupação e adapter do dispositivo.
- **Apresentação/integração:** adapter para a catraca física ou uma interface equivalente de entrada.

## Considerações arquiteturais preliminares

O sistema utiliza monólito modular, com camadas de Apresentação, Aplicação, Domínio e Persistência. O contexto de Gestão de Espaço deve preservar o isolamento em relação ao Financeiro e consultar a situação da mensalidade por contrato, sem acesso direto às tabelas de cobrança. A atualização de ocupação e o registro da entrada devem ser consistentes com a liberação.

As decisões sobre mecanismo de concorrência, transação, protocolo físico e formato de resposta são **propostas técnicas**, não requisitos confirmados.

## Restrições e dúvidas

- A integração real com a catraca foi mencionada, mas não especificada em protocolo.
- O documento não informa o formato do identificador de cartão/biometria.
- Não foi definido se a consulta financeira usará mock, banco ou integração com UC03.
- Não foi definido o mecanismo para impedir duas entradas simultâneas na última vaga.
- O procedimento de saída/decremento da ocupação não está especificado; não deve ser inventado neste planejamento.
- O UC02 depende de informações de UC03 e compartilha a capacidade física com UC01.
