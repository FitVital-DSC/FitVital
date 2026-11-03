## Sistema de Gestão de Academias e Personal Trainers

**Grupo:** *Eu Quero, Eu Posso*.
**Integrantes:** Mariana Veiga e Vitor Thomé.
**Tema escolhido:** Sistema de gestão de academias e personal trainers.
**Disciplina:** Desenvolvimento de Sistemas Corporativos.
**Data:** 05/10/2026.

## Parte 1 - Retomada do domínio

1. Problema central que o sistema resolve: evitar a desistência de alunos ao realizar um acompanhamento mais específico para cada aluno e estancar a perda de receita através do bloqueio de inadimplentes, além de organizar a ocupação física do espaço para evitar a superlotação.
2. Principais atores: Aluno, Personal Trainer (Particular), Personal Trainer (Geral), Administrador e Recepcionista.
3. Principais fluxos ou capacidades:
- Agendar sessão de treinamento;
- Controlar a entrada física baseada no status da mensalidade do aluno;
- Prescrever treino personalizado para o aluno (personal trainer particular);
- Monitorizar a disponibilidade de vagas para garantir o limite de lotação máxima do espaço físico. 
4. Conceitos centrais do domínio: Aluno, Personal Trainer (Particular) e Administrador; Academia; Agendamento e Mensalidade. 
5. Principais Regras de Negócio e invariantes: RN01 (Bloqueio de Inadimplência), RN02 (Limite de lotação máxima) e RN03 (Concorrência de agenda do aluno).
6. Agregados identificados até o momento: Aluno, Agendamento e Academia.

---

## Parte 2 - Descoberta das áreas de responsabilidade

| Área candidata | Propósito | Principais responsabilidades | Conceitos envolvidos | Regras relevantes |
|----------------|-----------|------------------------------|----------------------|-------------------|
| Gestão Financeira | Garantir a saúde financeira da academia gerindo a arrecadação das receitas, o ciclo de vida das cobranças e o status financeiro de cada aluno. | Emitir e acompanhar o status das mensalidades (pendente, pago, atrasado) e determinar a situação de adimplência do aluno para autorizar ou reter o seu acesso físico. | Aluno, Mensalidade | RN01, RN05 |
| Gestão de Agendamento | Organizar a alocação de tempo no sistema, realizando o controle da emissão e cancelamento de tickets de reserva de treino para alunos. | Criar as sessões de treino nominais, garantir que não existam conflitos de horário na agenda individual do aluno e consultar outros contextos antes de confirmar a reserva. | Agendamento, Horário | RN03 |
| Gestão de Espaço | Garantir que o espaço da academia não exceda sua capacidade máxima permitida. | Permitir ou negar o agendamento e a entrada de pessoas (alunos e personais) no espaço físico da academia a depender da sua capacidade no momento. | Academia | RN02 |
| Prescrição de Treino | Gerir o acompanhamento esportivo individualizado, suportando a criação de treinos e o vínculo exclusivo entre o aluno e o profissional.| Registrar fichas de treino específicas e controlar a capacidade de atendimento do profissional, garantindo que não ultrapasse o limite de alunos acompanhados por sessão | Personal Trainer (Particular), Aluno | RN04 |

---

## Parte 3 - Investigação dos Bounded Contexts


### Nome do contexto 1: Gestão Financeira

### Propósito
Garantir a saúde financeira da academia gerindo a arrecadação das receitas, o ciclo de vida das cobranças e o status financeiro de cada aluno.

### Responsabilidades
Emitir e acompanhar o status das mensalidades (pendente, pago, atrasado) e determinar a situação de adimplência do aluno para autorizar ou reter o seu acesso físico.

### O que não pertence
Saber qual o treino do aluno, controlar se a academia está lotada ou gerenciar a agenda dos profissionais.

### Vocabulário
Mensalidade, Inadimplência, Status de Pagamento, Vencimento, Pagador.

### Regras e invariantes
RN01, RN05.

### Agregados relacionados
Aluno (como Pagador), Mensalidade.

### Justificativa da fronteira
Agrupa exclusivamente as lógicas de ciclo financeiro e bloqueio por inadimplência. Separar esta responsabilidade garante que alterações nas regras de dinheiro (como multas ou isenções) não interfiram nem poluam a mecânica de reserva de horários ou o controle da catraca física.

### Nome do contexto 2: Gestão de Agendamentos

### Propósito
Organizar a alocação de tempo no sistema, realizando o controle da emissão e cancelamento de tickets de reserva de treino para alunos.

### Responsabilidades
Criar reservas nominais, cancelar reservas e garantir sumariamente que não existam conflitos de horário na agenda individual do próprio aluno.

### O que não pertence
Verificar saldos financeiros do aluno, auditar a capacidade física do prédio ou definir os exercícios do treino.

### Vocabulário
Agendamento, Ticket, Horário, Sessão de Treino, Confirmação, Conflito de Agenda.

### Regras e invariantes
RN03 (Concorrência Nominal de Agenda do Aluno).

### Agregados relacionados
Agendamento, Horário.

### Justificativa da fronteira
Isola o controle de tempo e a emissão de tickets nominais. Deve estar separado das demais áreas porque um choque de horário na agenda individual (RN03) é um problema estritamente temporal. Se misturado com outras áreas, o sistema exigiria consultar regras financeiras ou de espaço apenas para saber se o aluno tem duas aulas marcadas para a mesma hora.

---

### Nome do contexto 3: Gestão da Capacidade de Espaço

### Propósito
Garantir que o espaço da academia não exceda a sua capacidade máxima permitida em nenhum momento.

### Responsabilidades
Monitorar o total de ocupantes por período, aprovar ou rejeitar o consumo de vagas, e permitir ou negar a entrada física.

### O que não pertence
Identificar se o ocupante pagou com cartão ou boleto, saber o histórico de lesões do ocupante ou organizar as agendas nominais.

### Vocabulário
Lotação Máxima, Vaga, Capacidade, Ocupante, Catraca, Disponibilidade.

### Regras e invariantes
RN02 (Limite de Lotação Máxima).

### Agregados relacionados
Academia, Disponibilidade da Academia.

### Justificativa da fronteira 
Foca inteiramente na barreira física e na quantidade de pessoas no edifício. Manter esta responsabilidade isolada assegura que a regra de lotação global (RN02) trate cada ator apenas como "uma vaga consumida", protegendo o sistema de ficar lento ou complexo ao separar a identidade do aluno do seu impacto no espaço físico.

---

## Parte 4 - Mudanças de significado entre contextos

| Conceito | Contexto A | Significado | Contexto B | Significado |
|----------|------------|-------------|------------|-------------|
| Aluno | Gestão financeira | Visto como pagador e cliente. | Prescrição de Treino | Visto como atleta ou praticante. |
| Agendamento | Gestão de Agendamentos | Percebido como recurso de tempo limitado. | Prescrição de Treino | Considerado como uma unidade de ocupação. |
| Personal Trainer | Gestão de Agendamentos | Visto como um recurso de tempo limitado. | Prescrição de Treino | Especialista ou autor. |

> *Seria adequado utilizar exatamente o mesmo modelo para representar esse conceito em todos os contextos? Por quê?*
Não seria adequado, pois, ao utilizar um mesmo conceito para representar todos os contextos possíveis precede um problema ao implementar esse conceito futuramente. 
---

## Parte 5 - Mapa das fronteiras
Diagrama representando os Contextos Limitados ou fronteiras arquiteturais propostas e suas relações:


```mermaid
flowchart LR
    A[Gestão Financeira]
    B[Gestão de Agendamentos]
    C[Prescrição de Treino]
    D[Gestão de Espaço]

    C -->|valida limite de alunos na agenda| B
    B -->|solicita status de pagamento| A
    B -->|consulta e reserva vaga física| D
    D -->|valida adimplência na catraca| A
```

**Principais fronteiras:**
Gestão Financeira, Gestão de Agendamentos, Prescrição de Treino e Gestão de Espaço.

**Quem depende de quem:**
* A **Prescrição de Treino** depende da Gestão de Agendamentos.
* A **Gestão de Agendamentos** depende da Gestão Financeira e da Gestão de Espaço.
* A **Gestão de Espaço** depende da Gestão Financeira.
* A **Gestão Financeira** é o núcleo mais independente, não dependendo de nenhuma outra área para existir.

**Direção das interações:**
O fluxo de dependência move-se das áreas mais periféricas (Prescrição e Agendamento) em direção às áreas centrais de validação (Espaço e Financeiro). As setas representam o fluxo de requisição, indicando qual contexto precisa de fazer uma pergunta ou enviar um comando para outro.

**Finalidade básica das relações:**
* **Prescrição ➔ Agendamentos:** Garantir que o Personal Particular tem espaço na sua agenda para não ultrapassar o limite de alunos na mesma sessão (RN04).
* **Agendamentos ➔ Financeiro:** Impedir que alunos inadimplentes (RN01) consigam reservar horários.
* **Agendamentos ➔ Espaço:** Perguntar se o prédio possui capacidade física disponível (RN02) antes de confirmar a emissão do ticket de reserva.
* **Espaço ➔ Financeiro:** Consultar o status de pagamento do aluno no momento exato em que ele passa o cartão na catraca física (RN01).

---

## Parte 6 - Conhecimento que atravessa as fronteiras

**3 relações relevantes** do diagrama corrigido:

**Relação 1: Prescrição de Treino → Gestão de Agendamentos (Validação de Limite na Agenda)**

1. **Quem inicia a interação?**
O contexto de Prescrição de Treino.
2. **Por que a interação é necessária?**
Para garantir que o Personal Trainer Particular tem disponibilidade de horário e não ultrapassa o limite máximo de alunos atendidos simultaneamente na mesma sessão (RN04).
3. **Quais informações precisam atravessar a fronteira?**
ID do Personal Trainer, ID do Aluno e a Data/Horário pretendida.
4. **Quais informações não deveriam atravessar?**
Ficha de exercícios, séries, repetições, cargas, objetivos fisiológicos ou avaliações do aluno.
5. **A fronteira consumidora precisa conhecer detalhes internos da outra?**
Não. O contexto de Prescrição só precisa receber um "Aprovado/Rejeitado" informando se o horário pode ser vinculado, ignorando como o Agendamento organiza internamente a sua grade.
6. **Existe risco de acoplamento excessivo?**
Sim, caso a Prescrição de Treino tente acessar diretamente o banco de dados do Agendamento para "contar" quantos alunos já estão marcados naquele horário.
7. **Como esse risco pode ser reduzido?**
Definindo um contrato formal de API onde o Agendamento expõe uma validação encapsulada (ex: um endpoint que já faz a contagem e devolve apenas o resultado final).

---

**Relação 2: Gestão de Agendamentos → Gestão Financeira (Verificação de Status de Pagamento)**

1. **Quem inicia a interação?**
O contexto de Gestão de Agendamentos.
2. **Por que a interação é necessária?**
Para garantir que o aluno não possui pendências financeiras (RN01) antes de permitir a emissão de um ticket de reserva de treino.
3. **Quais informações precisam atravessar a fronteira?**
Apenas o ID do Aluno.
4. **Quais informações não deveriam atravessar?**
Histórico de faturas, valores devidos, dados de cartão de crédito, chave PIX, multas ou juros.
5. **A fronteira consumidora precisa conhecer detalhes internos da outra?**
Não. Agendamentos necessita apenas de uma resposta booleana ou um status simples (Apto / Bloqueado).
6. **Existe risco de acoplamento excessivo?**
Sim, se o Agendamento tentar calcular regras de cobrança ou verificar datas de vencimento diretamente em sua própria lógica.
7. **Como esse risco pode ser reduzido?**
Encapsulando a decisão financeira dentro de um serviço no domínio de Gestão Financeira, que expõe apenas um endpoint simples (Open Host Service) informando o direito de acesso do cliente.

---

**Relação 3: Gestão de Agendamentos → Gestão de Espaço (Consulta e Reserva de Vaga Física)**

1. **Quem inicia a interação?**
O contexto de Gestão de Agendamentos.
2. **Por que a interação é necessária?**
Para perguntar se o prédio possui capacidade física disponível (RN02) naquele horário específico antes de confirmar definitivamente a reserva do aluno.
3. **Quais informações precisam atravessar a fronteira?**
Data/Horário pretendido e a quantidade de vagas solicitadas (neste caso, 1 vaga).
4. **Quais informações não deveriam atravessar?**
Nome do aluno, ID do Personal Trainer, tipo de treino ou se o aluno é pagante/bolsista. Para a Gestão de Espaço, a pessoa é apenas um "ocupante genérico" consumindo espaço físico.
5. **A fronteira consumidora precisa conhecer detalhes internos da outra?**
Não. Agendamentos não precisa saber qual é a metragem do prédio ou a capacidade máxima configurada no momento; só precisa saber se o pedido de vaga foi aceito ou negado.
6. **Existe risco de acoplamento excessivo?**
Sim, se o Agendamento tentar controlar a contagem global de lotação, misturando regras de bilhetagem com regras de infraestrutura física.
7. **Como esse risco pode ser reduzido?**
Forçando o Agendamento a ser um "cliente" da Gestão de Espaço, onde o Espaço atua como um sistema autoritativo que apenas responde requisições de reserva de vaga.

---

## Parte 7 - Comunicação entre fronteiras

Para cada uma das relações selecionadas na Parte 6, determine se a comunicação deveria ser, conceitualmente:

- **Síncrona** ou **Assíncrona**.

| Origem | Destino | Necessidade | Tipo | Justificativa |
|--------|---------|-------------|------|---------------|
| Prescrição de Treino | Gestão de Agendamentos | Validar limite de alunos na agenda (RN04) | Síncrona | O sistema requer confirmação imediata da disponibilidade para garantir que o limite de alunos do Personal não seja ultrapassado no exato momento da tentativa de vinculação. |
| Gestão de Agendamentos | Gestão Financeira | Verificação de status de pagamento (RN01) | Síncrona | É necessário confirmar instantaneamente se o aluno está adimplente; avançar e confirmar o ticket sem esta verificação violaria a regra de bloqueio do serviço. |
| Gestão de Agendamentos | Gestão de Espaço | Consulta e reserva de vaga física (RN02) | Síncrona | A reserva nominal só pode ser confirmada para o aluno se houver garantia em tempo real de que o limite do prédio não será excedido, evitando superlotação. |


---
## Parte 8 - Contratos entre fronteiras

Escolha **duas interações importantes** e descreva seus contratos conceituais.

### Contrato 1: Validação de Limite na Agenda do Personal

**Origem:** Prescrição de Treino.

**Destino:** Gestão de Agendamentos.

**Objetivo:** Validar se o Personal Trainer Particular tem vaga na sua agenda para incluir o aluno na sessão, garantindo que o limite máximo de atendimentos simultâneos não seja ultrapassado (RN04).

### Informações enviadas

- ID do Personal Trainer.
- ID do Aluno.
- Data e Horário pretendidos.

### Resultado esperado

- Confirmação de vinculação (Aprovado com a devolução de um ID de Sessão validado) ou Rejeição com o motivo da impossibilidade.

### Semântica importante

- **Limite por Sessão:** O Agendamento atua como o controlador de "slots" de tempo do profissional. A requisição não envia o limite; ela apenas pede o espaço, e o Agendamento aplica a regra (RN04) para dizer sim ou não.
- **Isolamento de Domínio:** O Agendamento não precisa saber *o que* vai ser treinado, apenas *quem* vai treinar e *quando*.

### Possíveis falhas

- O Personal Trainer já atingiu o limite máximo de alunos permitidos para aquele horário (Violação da RN04).
- O Aluno já possui outra sessão confirmada para o mesmo horário exato (Violação da RN03).

### Informações que não devem fazer parte do contrato

- Lista de exercícios, séries, repetições, cargas ou metodologias.
- Histórico de avaliações físicas do aluno.
- Objetivos fisiológicos ou de saúde do aluno.

---

### Contrato 2: Verificação de Status de Pagamento (Adimplência)

**Origem:** Gestão de Agendamentos.

**Destino:** Gestão Financeira.

**Objetivo:** Confirmar se o aluno está em situação regular (adimplente) para ter permissão de consumir um novo horário na agenda da academia (RN01).

### Informações enviadas

- ID do Aluno.

### Resultado esperado

- Estado de autorização simples (Apto / Bloqueado) e, em caso de rejeição, o motivo limitante.

### Semântica importante

- **Apto:** Significa exclusivamente que o aluno não tem mensalidades atrasadas há mais de 24 horas (RN01) e cumpriu as regras de carência inicial (RN05).
- **Apenas Leitura (Idempotente):** Esta chamada é uma mera verificação de "sinal verde". Ela não debita saldo, não gera nova cobrança e não altera o estado financeiro do aluno.

### Possíveis falhas

- Aluno bloqueado devido a inadimplência (mensalidade atrasada).
- Cadastro do aluno inativo ou cancelado.

### Informações que não devem fazer parte do contrato

- Dados de métodos de pagamento (cartão de crédito, PIX, IBAN).
- Extrato financeiro, histórico de faturas antigas ou quantidade de parcelas pagas.
- Valores em dinheiro (multas, juros, valor da mensalidade em atraso).

---

## Parte 9 - Teste crítico das fronteiras

Agora, em vez de defender imediatamente sua solução, **tente encontrar problemas em cada fronteira**:

### Problema 1: Gestão Financeira com responsabilidades demais (Scope Creep)

- **Hipótese inicial:** O contexto de Gestão Financeira controlaria todo o dinheiro da academia, incluindo o pagamento de mensalidades dos alunos, mas também as despesas operacionais, contas a pagar (água, luz) e o repasse de comissões aos personais.
- **Problema identificado:** Possui responsabilidades demais. O sistema foca em evitar a evasão e gerenciar o acesso físico de alunos. Incluir a contabilidade corporativa completa polui o domínio com conceitos desnecessários e não atende a nenhuma das Regras de Negócio principais (RN01 a RN05).
- **Decisão de revisão:** Reduzir drasticamente o escopo. A fronteira passa a focar apenas no ciclo de receita do aluno (emissão de mensalidade, status de pagamento e cálculo de adimplência/inadimplência). Tudo o que for "despesa" fica de fora do sistema.

### Problema 2: Gestão de Agendamentos sobrecarregada com regras de infraestrutura

- **Hipótese inicial:** A Gestão de Agendamentos seria responsável por garantir que a academia não lotasse (RN02), contando quantos tickets de reserva existiam para uma determinada hora e barrando novos agendamentos se o limite fosse atingido.
- **Problema identificado:** Mistura de conceitos e comunicação excessiva. O Agendamento lida com a identidade do aluno e seu tempo. O espaço físico lida com "vagas" e "catracas". Além disso, se um aluno possuir um plano de "livre acesso" (sem necessidade de agendar) e passar na catraca, o Agendamento não saberia contar essa pessoa, causando superlotação.
- **Decisão de revisão:** Extração de contexto. Foi criada a fronteira Gestão da Capacidade de Espaço. O Agendamento deixa de calcular a lotação e passa a ser apenas um "cliente" que solicita uma reserva de vaga à Gestão de Espaço antes de confirmar o ticket.

### Problema 3: Prescrição de Treino controlando calendários

- **Hipótese inicial:** A Prescrição de Treino gerenciaria a agenda do Personal Trainer para garantir que ele não atendesse mais do que 3 alunos ao mesmo tempo (RN04).
- **Problema identificado:** Regras de negócio duplicadas. A Gestão de Agendamentos já é especialista em lidar com tempo, blocos de horários e conflitos (RN03). Fazer a Prescrição lidar com isso criaria duas lógicas de calendário no sistema que inevitavelmente entrariam em conflito.
- **Decisão de revisão:** A Prescrição de Treino foca apenas em quem treina o quê e aprova/rejeita o vínculo (RN04). O controle do "slot" de tempo propriamente dito e a montagem do calendário são delegados para a Gestão de Agendamentos.

---

## Parte 10 - Monólito modular ou distribuição?

Considerando o estágio atual do projeto do grupo Eu Quero, Eu Posso, a organização arquitetural mais coerente neste momento é o **Monólito Modular** (uma única aplicação, mas com o código rigorosamente separado em pacotes/módulos internos baseados nos contextos definidos).

**Justificativa detalhada:**

- Tamanho e organização da equipe: A equipe possui apenas dois integrantes. Adotar microsserviços exigiria gerir infraestrutura complexa (Kubernetes, APIs Gateways, mensageria, CI/CD múltiplos), o que reduziria drasticamente a velocidade de entrega e sobrecarregaria os desenvolvedores com DevOps em vez de focar no problema de negócio.
- Maturidade das fronteiras: Como visto na Parte 9, os contextos limitados ainda estão sofrendo refatorações (ex: separação da Gestão de Espaço). Em um monólito, mover uma classe ou entidade de um módulo para outro é simples. Em microsserviços, um erro de fronteira exige reescrever contratos de rede e migrar bases de dados distribuídas.
- Dependências e Comunicação Síncrona: Atualmente, a Gestão de Agendamentos e a Gestão de Espaço dependem de verificações síncronas e em tempo real do Financeiro (RN01). Em um ambiente distribuído, isso geraria latência de rede considerável (a catraca poderia demorar a abrir). Num monólito modular, essa "chamada de API" é apenas uma invocação de método em memória, garantindo alta performance na liberação da entrada física.
- Necessidade de escalabilidade e deploy independente: Uma academia possui um volume de acessos previsível e focado em horários de pico geolocalizados. Não há demanda de escala global (como um e-commerce) que justifique escalar o módulo de agendamento independentemente do módulo financeiro. Um único servidor moderno suporta facilmente as requisições de uma academia.

**Conclusão:** Nenhuma parte do sistema deve ser um microsserviço agora. A modularidade lógica (isolamento de código) é suficiente para garantir a organização sem pagar o custo da complexidade distribuída prematura.

---

## Parte 11 - Hipótese de evolução arquitetural

```mermaid
flowchart LR
    A[Estado atual: Validações Síncronas] --> B[Próxima evolução: Desacoplamento Assíncrono de Catraca]
    B --> C[Evolução futura: Novo Contexto de Gamificação]
```

### Transição 1: Estado atual ➔ Próxima evolução possível (Desacoplamento Assíncrono de Catraca)

- **O que precisaria mudar no contexto:** A *Gestão de Espaço* e a *Gestão de Agendamentos* deixariam de consultar o status da *Gestão Financeira* via chamadas síncronas (tempo real). A Gestão Financeira passaria a publicar Eventos de Domínio (ex: `AlunoTornadoInadimplente`, `PagamentoConfirmado`). A Gestão de Espaço consumiria esses eventos e manteria um cache local (uma base de leitura) contendo apenas o "Sinal Verde/Vermelho" de cada aluno para operar a catraca.
- **Qual problema justificaria a mudança:** A indisponibilidade momentânea do sistema financeiro ou lentidão na rede estar impedindo alunos adimplentes de entrarem fisicamente na academia (catraca travada por falha de comunicação síncrona).
- **Quais evidências deveriam existir:** Métricas de observabilidade apontando alta taxa de *timeouts* nas requisições entre a Gestão de Espaço e o Financeiro; aumento no número de reclamações na recepção de alunos que foram barrados indevidamente por lentidão no sistema.
- **Quais riscos seriam introduzidos:** Adoção de complexidade de infraestrutura (necessidade de um *message broker* como RabbitMQ ou Kafka) e o desafio da consistência eventual (um aluno que paga a mensalidade atrasada no balcão pode levar alguns segundos ou minutos até que o evento chegue à catraca para liberar a entrada).

### Transição 2: Próxima evolução ➔ Evolução futura (Novo Contexto de Gamificação e Engajamento)

- **O que precisaria mudar no contexto:** A criação de um quinto Bounded Context totalmente novo: *Gestão de Engajamento*. Este novo contexto atuaria como um consumidor passivo, escutando eventos gerados pela *Gestão de Agendamentos* (ex: `SessaoTreinoRealizada`) e pela *Prescrição de Treino* (ex: `MetaDeCargaAtingida`) para distribuir pontos, conquistas virtuais ou descontos automáticos na próxima mensalidade.
- **Qual problema justificaria a mudança:** A necessidade estratégica do negócio de combater a evasão silenciosa. O sistema atual resolve o bloqueio de quem não paga (inadimplência) e o choque de horários, mas não atua ativamente na retenção do aluno que paga, mas deixa de frequentar por desmotivação.
- **Quais evidências deveriam existir:** Relatórios analíticos provando que há uma alta taxa de cancelamento de planos (Churn) entre o 3º e o 4º mês de matrícula por falta de incentivo; pesquisas de mercado locais indicando que a concorrência está a atrair alunos utilizando programas de fidelidade e recompensas.
- **Quais riscos seriam introduzidos:** Expansão perigosa do escopo operacional da academia, aumento dos custos de manutenção de software e o risco de acoplamento lógico se os contextos centrais precisarem ser alterados para satisfazer os caprichos das regras de pontuação do novo sistema de Gamificação.

---

## Parte 12 - Decisão arquitetural

### Decisão: Separação do controle de lotação física em um contexto exclusivo (Gestão de Espaço)

**Contexto:**
Durante a modelagem das regras de negócio, identificou-se que o sistema precisava evitar que o aluno agendasse mais de um treino ao mesmo tempo (RN03) e, simultaneamente, garantir que a capacidade física do prédio não fosse ultrapassada (RN02). A dificuldade inicial era definir onde essa validação dupla deveria ocorrer no momento de uma reserva.

**Decisão adotada:**
A equipe decidiu separar os conceitos, criando um Bounded Context exclusivo chamado "Gestão da Capacidade de Espaço" focado apenas no limite físico e controle de catracas, totalmente isolado da "Gestão de Agendamentos", que passou a focar apenas na emissão de tickets de tempo nominais.

**Justificativa:**
Evidências do domínio mostraram que os dois problemas mudam por motivos completamente diferentes. A capacidade do prédio (RN02) é regida por infraestrutura e alvarás, tratando qualquer pessoa apenas como "uma vaga ocupada". Já o agendamento lida com a identidade do aluno e seus conflitos temporais (RN03). Misturar as duas lógicas criaria um "Contexto Deus", onde mudar o tamanho de uma sala na academia exigiria alterar o código do sistema de reservas.

**Alternativas consideradas:**
Manter ambas as responsabilidades num único contexto amplo chamado "Gestão de Acessos e Reservas", que calcularia tanto o choque de horários quanto o limite do prédio na mesma transação de banco de dados.

**Trade-offs:**
- **O que ganhamos:** Alta coesão e independência evolutiva. A lógica da catraca e do edifício fica blindada. O sistema fica mais escalável, pois o controle de catraca pode rodar num servidor local no prédio, enquanto o agendamento roda na nuvem.
- **O que aceitamos como custo/limitação:** Aumento da complexidade de rede e orquestração. Agora, para finalizar uma reserva, a *Gestão de Agendamentos* é obrigada a realizar uma chamada síncrona externa consultando a *Gestão de Espaço* para reservar a vaga, o que adiciona latência ao processo.

**Condições para revisão:**
Esta decisão poderá ser reconsiderada se a academia alterar o seu modelo de negócio para funcionar 100% como um "Estúdio Fechado", onde a catraca física deixa de existir para alunos sem marcação e o número de reservas simultâneas do sistema se torna, por definição, a única forma de acesso. Nesse caso extremo, o controle de espaço tornar-se-ia redundante.

---

## Parte 13 - Impacto sobre os trabalhos anteriores

Compare as descobertas deste trabalho com a documentação produzida anteriormente.

| Descoberta atual | Documento/modelo afetado | Revisão necessária | Justificativa |
|------------------|--------------------------|--------------------|---------------|
| **Separação entre Agenda e Espaço** | Mapa de Agregados e Regras de Negócio | Mover a validação de lotação (RN02) para um contexto próprio (Gestão de Espaço), retirando-a do fluxo original de agendamentos. | Inicialmente, o controle de vagas físicas e tickets de tempo pareciam a mesma coisa. O trabalho revelou que mudam por razões diferentes (física vs temporal). |
| **Escopo Financeiro Restrito** | Documento de Requisitos / Dicionário de Dados | Remover menções a "gastos", "despesas da academia" e "contas a pagar" do modelo financeiro atual. | O escopo do sistema atual visa gerir a receita gerada pelos alunos (RN01) e seu impacto no acesso. Incluir contas a pagar geraria um aumento indevido de escopo (*Scope Creep*). |
| **Dependência Oculta na Catraca** | Diagrama de Fluxo / Casos de Uso | Adicionar uma comunicação síncrona explícita entre a liberação da catraca e o status de pagamento do aluno. | Não havia sido percebido que a "Gestão de Espaço" depende diretamente da "Gestão Financeira" para barrar inadimplentes no momento físico da entrada. |
| **Limitação do Personal (RN04)** | Modelo de Domínio / Agregados | Transferir a responsabilidade de limitar de 1 a 3 alunos por sessão para a "Prescrição de Treino". | Pensava-se que o Agendamento deveria saber o limite de cada profissional. Agora, o Agendamento apenas pede autorização à Prescrição, que aplica a regra. |
| **Vocabulário de Negócio vs Banco de Dados** | Documentação Geral de Arquitetura | Substituir termos técnicos (ex: "armazenar ID", "salvar tabela") por linguagem ubíqua (ex: "reservar vaga", "bloquear acesso"). | A arquitetura deve refletir o comportamento do domínio (Bounded Contexts) e não a estrutura técnica de persistência. |

---

## Parte 14 - Síntese crítica

**1. Qual foi a principal mudança na compreensão arquitetural do sistema após esta análise?**
A transição de um pensamento voltado a "tabelas de banco de dados" para um pensamento orientado ao comportamento e proteção de regras de negócio (Invariantes). Em vez de um grande sistema monolítico que partilha todos os dados, compreendeu-se que o sistema é composto por departamentos que conversam entre si.

**2. Qual fronteira foi mais difícil de definir? Por quê?**
A "Gestão de Agendamentos". Foi tentador colocar todas as regras dentro dela. Perceber que o Agendamento é apenas um "emissor de bilhetes de tempo" e que ele deveria perguntar aos outros contextos antes de agir exigiu uma disciplina arquitetural.

**3. Onde está atualmente o maior risco de acoplamento?**
Nas validações síncronas que a Gestão de Agendamentos precisa fazer. Para emitir um ticket, ela depende de respostas em tempo real da Gestão Financeira e da Gestão de Espaço. Se qualquer um desses serviços ficar indisponível, o Agendamento também fica inoperante.

**4. Qual decisão da equipe possui maior grau de incerteza?**
A decisão de manter a comunicação síncrona na Gestão de Espaço (catraca) com o Financeiro. Apesar de ser mais fácil de implementar agora, a latência da rede num horário de pico da academia pode gerar filas na porta, o que não foi testado no mundo real.

**5. Que evidência futura poderia alterar a arquitetura proposta?**
Se o modelo de negócio da academia mudar de "Livre Acesso com Catraca" para "Estúdio 100% Agendado". Nesse caso, o contexto de Gestão de Espaço perderia a sua razão principal de existir, pois a própria capacidade do Agendamento definiria a lotação. 

**6. O que a equipe deliberadamente decidiu não distribuir neste momento?**
Não foi decidido ainda adotar uma arquitetura orientada a eventos (assíncrona) para a distribuição do estado financeiro, optando por chamadas de API síncronas para evitar a complexidade prematura de gerenciar consistência eventual e *message brokers*.

**7. Como os trabalhos anteriores contribuíram para chegar às fronteiras atuais?**
O mapeamento das 5 Regras de Negócio (RN01 a RN05) nas partes iniciais funcionou como uma "bússola". Foram essas invariantes que ditaram onde cada fronteira deveria ser desenhada.
