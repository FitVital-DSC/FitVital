## Sistema de Gestão de Academias e Personal Trainers

**Grupo:** *Eu Quero, Eu Posso*.
**Integrantes:** Mariana Veiga e Vitor Thomé.
**Tema escolhido:** Sistema de gestão de academias e personal trainers.
**Disciplina:** Desenvolvimento de Sistemas Corporativos.
**Data:** 15/09/2026.


## Trabalho 3 — Revisão Arquitetural Baseada na Evolução do Conhecimento do Domínio

---

## 1. Síntese da Arquitetura Inicial

No Trabalho 1, o sistema FitVital foi projetado para evitar a fragmentação do controle hoje feito por planilhas/apps de mensagem/cadernos, gerando retrabalho, perda de histórico de evolução física, dificuldade do personal acompanhar vários alunos e falta de visibilidade gerencial (frequência, inadimplência, ocupação).
*   **Atores principais:** Aluno, Personal Trainer, Administrador da Academia, Recepcionista, além de sistemas externos (Gateway de Pagamento e Catraca).
*   **Módulos:** Gestão de Usuários, Planos e Matrículas, Agendamento, Treinos, Avaliação Física e Evolução, Frequência / Check-in, Pagamentos, Notificações e Relatórios.
*   **Arquitetura:** Em camadas (Apresentação, Aplicação, Domínio e Persistência).
*   **Fluxo principal:** Agendamento de sessão com o personal trainer.
*   **Desafio central:** Consistência em agendamentos simultâneos e dependência de sistemas externos.
*   **ADR-001:** Adoção de um Monólito Modular.
*   **Cenário de evolução:** Expansão para múltiplas unidades.

## 2. Descobertas do Trabalho 2 com impacto arquitetural

| Descoberta do Trabalho 2 | Elementos envolvidos | Possível impacto arquitetural | Grau de certeza |
|---|---|---|---|
| **Dois tipos de Personal Trainer**: o particular (vínculo exclusivo com um aluno) e o da academia (supervisão genérica, sem vínculo) | Personal Trainer, Aluno, Agendamento | Exige diferenciar o "papel duplo" no módulo Gestão de Usuários, e refletir a regra no módulo Agendamento | Confirmado |
| **F01 e F03 são regras parciais** | Quadro de conhecimento, Gestão de Usuários | Revisão da regra de elegibilidade na camada de Domínio | Confirmado |
| **Capacidade de atendimento simultâneo é definida individualmente por cada personal** | Personal Trainer, Agendamento | Regra do domínio passa a depender de atributo configurável por personal | Confirmado |
| **Fluxo de estagnação restrito a aluno-personal; administração não participa** | Notificações, Administrações e Relatórios | Em aberto | Confirmado | 
| **Cálculo de capacidade máxima da academia não definido** | Frequência/Check-in, Agendamento | Indefinido | Questão em aberto |

## 3. Revisão da descrição do problema

**Classificação:** **Alterado**

**Justificativa:** O problema inicial focava muito na "fragmentação de planilhas e retrabalho". Após o Trabalho 2, compreendemos que o problema central do domínio é a **retenção do aluno e evitar a evasão**. A tecnologia e a centralização de dados são apenas o meio para garantir que o aluno não desista por falta de acompanhamento ou por não conseguir agendar treinos.

## 4. Revisão dos atores

| Ator | Situação anterior | Situação atual | Classificação | Justificativa |
|---|---|---|---|---|
| Aluno | Consumidor principal | Consumidor principal | Mantido | Continua sendo o centro do fluxo principal de agendamento |
| Personal Trainer | Prestador de serviço | Prestador de serviço | Refinado | Agora possui uma relação exclusiva (1..1) com o aluno no contexto de aulas particulares |
| Gateway / Catraca | Sistemas externos | Sistemas externos | Mantido | Continuam fora das fronteiras do sistema, gerando desafios de integração |

## 5. Revisão dos módulos do sistema

| Módulo | Situação anterior | Descoberta relevante do Trab. 2 | Situação atual | Justificativa |
|---|---|---|---|---|
| Agendamento | Responsável por reservas | Depende da capacidade da academia e do status financeiro do aluno | Refinado | O módulo não age sozinho, ele orquestra integrações pesadas e necessita de Objetos de Valor para proteger invariantes de limite físico |
| Planos e Matrículas | Separado de Pagamento | Ambos lidam com o mesmo ciclo de vida (Aluno -> Mensalidade) | Em aberto | Pode ser que Planos e Pagamentos pertençam à mesma fronteira de contexto, mas ainda não há evidência suficiente para fundi-los de imediato. |

## 6. Revisão do fluxo principal

**Classificação:** **Alterado**

**Justificativa:** No Trabalho 1, o fluxo de agendamento focava apenas em "solicitar -> checar personal -> confirmar". O Trabalho 2 revelou transições e invariantes estritas. O fluxo foi atualizado para:
1. O aluno solicita agendamento.
2. **Nova Etapa:** O sistema checa o estado da *Mensalidade* (inadimplência superior a 24h = Bloqueio imediato).
3. O sistema valida a Disponibilidade da agenda do personal.
4. O sistema valida a Lotação Máxima do espaço físico (Invariante).
5. Confirmação e geração do evento de domínio `AgendamentoConfirmado`.

## 7. Revisão do diagrama de módulos

**Classificação:** **Mantido com Justificativa**

**Justificativa:** A modularização proposta no Trabalho 1 continua coerente. Embora tenha sido descoberto uma dependência de regras entre "Agendamento", "Pagamentos" e "Frequência", isso deve ser resolvido na camada de Aplicação. 

## 8. Revisão da arquitetura em camadas

**Classificação:** **Mantido e Refinado**

**Justificativa:** A organização em quatro camadas (Apresentação, Aplicação, Domínio, Persistência) provou-se necessária no Trabalho 2. Responsabilidades que antes poderiam vazar para a base de dados agora estão alocadas na Camada de Domínio utilizando Objetos de Valor. A Camada de Aplicação assumiu seu papel de orquestrar módulos no fluxo de agendamento.

## 9. Revisão dos desafios arquiteturais

| Desafio | Já existia no Trab 1? | Evidência atual | Impacto | Situação |
|---------|-----------------------|-----------------|---------|----------|
| Inadimplência e Catraca | Não explicitamente | O bloqueio de catraca exige tolerância de 24h | Falhas na comunicação com a API de pagamentos causarão bloqueios indevidos físicos | Novo |

## 10. Revisão do ADR-001

**ADR-001 (Trabalho 1):** Adoção de Arquitetura em Camadas (Layered Architecture) padrão MVC focada em operações CRUD.

- **O contexto continua válido?** Parcialmente. O foco inicial era apenas digitalizar processos (sair das planilhas), mas agora o domínio provou ser muito mais complexo e focado em regras de negócio críticas (retenção e controle rigoroso de acesso).

- **A decisão ainda faz sentido?** Sim, como base estrutural, mas o isolamento das regras de negócio no modelo CRUD padrão mostrou-se insuficiente.

- **As alternativas consideradas continuam adequadas?** No Trabalho 1, a alternativa era um "Big Ball of Mud" (sem padrão). Agora, a alternativa de adotar princípios de Domain-Driven Design (DDD) ou Arquitetura Hexagonal torna-se muito mais relevante para proteger o domínio.

- **Surgiram novas alternativas?** Sim. A criação de um "Core Domain" isolado para gerenciar as regras de catraca e plano de assinaturas.

- **Os benefícios continuam válidos?** A separação de UI, Lógica e Dados continua válida, mas precisamos de mais granularidade.

- **Apareceram novos riscos ou consequências?** Sim. O risco de a lógica de negócio (ex: regra de bloqueio de 24h) vazar para os Controladores (Controllers) ou Banco de Dados, gerando inconsistências nas invariantes.

- **O novo conhecimento do domínio fortalece ou enfraquece a decisão?** Enfraquece a visão puramente voltada a dados (CRUD) e exige uma visão voltada ao comportamento.

**Classificação do ADR: Revisado.**

Nova Versão (Registro): A arquitetura em camadas será mantida, mas evoluirá para isolar a camada de Domínio (Domain Layer). Regras como "lotação máxima" e "bloqueios de catraca" não podem depender do banco de dados para serem validadas, devendo residir em entidades e serviços de domínio ricos, abandonando o modelo anêmico do Trabalho 1.

## 11. Revisão da funcionalidade inovadora

**Funcionalidade Inovadora (Trabalho 1):** Sistema de gamificação/recompensas para incentivar a frequência dos alunos e ajudar na retenção.

- **Ela continua atendendo a uma necessidade real?** Sim, a retenção de alunos continua sendo um pilar fundamental do negócio.

- **O Trabalho 2 revelou regras que dificultam sua implementação futura?** Sim. O controle de lotação máxima cria um conflito: não podemos dar pontos de gamificação para um aluno frequentar o espaço em horários de pico onde a lotação já está no limite.

- **Ela depende de conceitos que agora compreendemos de outra forma?** Sim. Antes, "presença" era só um registro no banco. Agora, "presença" é um estado temporal vinculado a invariantes e regras de acesso na catraca.

- **Provoca novas responsabilidades?** Sim. O módulo de gamificação precisará consultar o estado da lotação em tempo real e o status da assinatura antes de conceder pontos ou liberar acessos bônus.

- **Continua coerente com o domínio?** Sim, mas precisa ser restringida pelas regras físicas do ambiente.

**Classificação: Refinada.** (A funcionalidade se mantém, mas agora as recompensas e incentivos de horário são condicionados à invariante de lotação máxima e ao estado da catraca).

## 12. Revisão do cenário de evolução

**Cenário de Evolução (Trabalho 1):** Expansão do sistema para suportar múltiplas filiais da academia/espaço.

- **O que permanece na arquitetura?** A necessidade de um banco de dados centralizado e a gestão unificada de usuários e pagamentos.

- **O que precisaria ser alterado?** O controle de acesso. A lotação máxima agora é por unidade física.

- **Alguma decisão arquitetural precisaria ser revista?** Sim. A comunicação com as catracas de múltiplas filiais pode exigir processamento assíncrono (mensageria/eventos) para evitar que a queda de internet em uma filial trave o servidor central.

- **A arquitetura atual favorece ou dificulta essa evolução?** O CRUD simples do Trabalho 1 dificulta muito, pois exigiria consultas lentas ao banco para verificar o acesso.

Fundamentação com base no Trabalho 2:

- **Relações:** Um Aluno agora se relaciona com um "Acesso", que pertence a uma "Filial".

- **Regras:** O bloqueio de 24h na catraca deve ser sincronizado. Se o aluno for bloqueado na Filial A, o estado de "Bloqueado" deve refletir imediatamente na Filial B.

- **Estados/Invariantes:** Invariante crítica: "Um aluno não pode ter entrada registrada em duas filiais ao mesmo tempo sem ter registrado a saída". Isso exige controle de concorrência rigoroso.

## 13. Matriz Geral de Evolução Arquitetural

| Elemento | Situação no Trabalho 1 | Situação atual (Trabalho 2) | Classificação | Evidência que sustenta a decisão |
|---|---|---|---|---|
| Problema | Substituir planilhas manuais. | Garantir regras de acesso e aumentar retenção. | Refinado | A complexidade do domínio mostrou que o problema não era só de armazenamento, mas de controle de comportamento. |
| Atores | Recepcionista, Gestor, Aluno. | + Catraca (Sistema Autônomo), Gateway de Pagamento. | Expandido | A necessidade de bloqueio de 24h exige que a catraca atue como um ator no fluxo de dados. |
| Módulos | Cadastros base (Alunos, Planos). | Controle de Acesso, Gestão de Assinaturas, Capacidade. | Alterado | O foco mudou de simples formulários para módulos de regras de negócio. |
| Fluxo | Usuário -> Interface -> Banco de Dados. | Catraca -> Validação de Invariantes -> Banco de Dados. | Alterado | Operações agora dependem de estados (ex: Aluno Ativo, Inadimplente). |
| Arquitetura em camadas | CRUD anêmico (Modelos só de dados). | Domínio rico (Regras encapsuladas na entidade). | Revisado | A regra da lotação máxima não pode ficar solta no "Controller". |
| Desafios | Modelar o banco de dados inicial. | Sincronizar estado físico (catraca) com o sistema. | Substituído | O desafio físico de concorrência e hardware superou a dificuldade do CRUD. |
| ADR-001 | MVC simples aprovado. | MVC evoluído para isolar o Core Domain. | Revisado | Evitar vazamento das regras do Trabalho 2 para a interface. |
| Funcionalidade inovadora | Gamificação irrestrita. | Gamificação restrita à lotação. | Refinada | Conflito identificado entre incentivar alunos e a invariante de capacidade física. |
| Cenário de evolução | Múltiplas filiais via web. | Filiais com sincronização de hardware e invariantes. | Mantido/Refinado | Manutenção do cenário, mas com nova camada de complexidade de concorrência. |

## 14. Decisões que ainda NÃO podem ser tomadas

| Questão | Por que ainda não podemos decidir? | Que informação falta? | Possível impacto |
|---|---|---|---|
| Integração assíncrona vs síncrona com as Catracas | Não sabemos o volume exato de requisições por segundo em horários de pico. | Métricas de tráfego (Throughput) e se o hardware da catraca possui memória offline. | Se a escolha for errada, uma lentidão no servidor pode formar filas na porta da academia. |
| Separação do banco de dados de Acessos | O modelo atual suporta, mas o histórico de acessos pode crescer exponencialmente. | Estimativa de crescimento de dados a longo prazo (Data Retention Policy). | Custo de infraestrutura elevado e lentidão em relatórios gerenciais no futuro. |
| Contrato com Gateway de Pagamento | Impacta diretamente na regra de "bloqueio por inadimplência". | Tempo de compensação dos pagamentos (D+1, D+3) e webhook de confirmação. | Alunos podem ser bloqueados indevidamente se o sistema financeiro demorar a avisar nosso sistema. |

## 15. Reflexão Arquitetural

- **Qual decisão do Trabalho 1 foi mais fortalecida pelo Trabalho 2?** A decisão de usar um banco de dados relacional. Com as novas regras rígidas e invariantes (não exceder lotação, manter consistência financeira), a garantia de transações ACID tornou-se o pilar da integridade do sistema.

- **Qual decisão ficou mais frágil?** O uso de modelos anêmicos (focar a arquitetura apenas em tabelas de banco de dados e telas).

- **Qual alteração foi mais significativa?** A mudança de mentalidade da equipe: saímos de uma visão de "sistema de cadastro" para um "sistema de controle de estados e fluxos físicos".

- **Algum módulo deixou de fazer sentido?** O módulo de "Controle de Presença Manual" da recepção perdeu totalmente o sentido, pois essa responsabilidade foi transferida para a catraca integrada.

- **Alguma responsabilidade mudou de lugar?** Sim, a validação de acesso. Antes, a recepção "olhava o sistema" e liberava a pessoa. Agora, a regra de bloqueio de 24h e limite de lotação estão incorporadas diretamente no fluxo automatizado da arquitetura.

- **Alguma Regra de Negócio revelou um problema na arquitetura anterior?** A regra de "lotação máxima". Na arquitetura anterior, não havia gestão de concorrência adequada (dois alunos batendo na catraca ao mesmo tempo poderiam furar o limite máximo).

- **Alguma invariante mudou a compreensão sobre responsabilidades?** A invariante de que "Um aluno só entra se estiver com o pagamento confirmado e sem bloqueio recente". Isso obrigou o sistema a tratar a entidade "Aluno" como uma máquina de estados (Ativo, Bloqueado, Inadimplente), e não apenas como dados de texto.

- **Alguma decisão anterior havia sido tomada principalmente por intuição?** Sim, a escolha de funcionalidades secundárias (como a gamificação) foi intuitiva, sem considerar as limitações físicas do ambiente (horários de pico).

- **Qual parte da arquitetura ainda possui maior incerteza?** A camada de integração com hardware externo (Catracas) e a comunicação com a API do sistema financeiro, devido às questões de latência e resiliência a falhas de rede.

- **O que a equipe aprendeu sobre a relação entre conhecimento de domínio e arquitetura?** Aprendemos que a arquitetura não serve apenas para organizar código, mas para blindar e refletir o negócio. O código deve contar a história do domínio; quando não entendíamos as regras físicas e de negócio a fundo, desenhamos uma arquitetura que resolvia o problema errado.

**Por fim, responda: Se precisássemos defender hoje a arquitetura do sistema diante de outro arquiteto, quais partes conseguiríamos justificar com segurança e quais ainda precisaríamos investigar?**
Conseguiríamos justificar com total segurança o modelo de domínio, as máquinas de estado das matrículas e o isolamento das regras de negócio (as invariantes), pois foram diretamente extraídas das necessidades reais mapeadas no Trabalho 2. Por outro lado, precisaríamos investigar melhor as decisões táticas de infraestrutura (Mensageria, balanceamento de carga, protocolo de integração com os hardwares de acesso) antes de bater o martelo.