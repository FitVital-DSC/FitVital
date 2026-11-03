# Artefato 9 — Distribuição de responsabilidades

Equipe informada: Mariana Veiga e Vitor Thomé. Como não foi indicada uma alocação individual, o responsável permanece `A definir` para evitar atribuição inventada.

| Item | Atividade | Responsável | Dependências | Estado | Comunicação |
|---|---|---|---|---|---|
| Epic UC01 | Coordenação do slice | A definir | — | Ready | Revisão conjunta de escopo |
| SUB-01 | Domínio de agendamento | A definir | — | Ready | Validar invariantes e linguagem |
| SUB-02 | Commands, DTOs e portas | A definir | SUB-01 | Ready | Parear com responsável do domínio |
| SUB-03 | Serviço de aplicação | A definir | SUB-01, SUB-02 | Backlog | Alinhar ordem das portas |
| SUB-04 | Adaptador HTTP | A definir | SUB-02, SUB-03 | Backlog | Revisar contrato e códigos HTTP |
| SUB-05 | Persistência | A definir | SUB-02, SUB-03 | Backlog | Alinhar mapper e schema |
| SUB-06 | Concorrência/capacidade | A definir | SUB-02, SUB-05 | Backlog | Decisão conjunta de lock |
| SUB-07 | Testes | A definir | Conforme camada | Backlog | Manter matriz de cobertura atualizada |
| SUB-08 | Documentação/governança | A definir | SUB-01–SUB-07 | Backlog | Revisão final pelos dois integrantes |

Recomendação: designar um responsável primário e um revisor para cada Issue no GitHub antes de movê-la para `Ready`. Decisões sobre lock, limite do personal e correção RN03/RN04 devem ser registradas em comentário ou documentação revisada pela equipe.

