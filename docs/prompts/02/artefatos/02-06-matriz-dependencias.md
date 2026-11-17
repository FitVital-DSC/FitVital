# Artefato 6 — Matriz de dependências

| Atividade | Pré-requisito | Justificativa | Desbloqueio | Paralelo |
|---|---|---|---|---|
| SUB-01 | — | Define invariantes de acesso e ocupação | Escopo do UC02 confirmado | Sim, com documentação |
| SUB-02 | SUB-01 | Contratos dependem do modelo mínimo | Modelo revisado | Parcial com SUB-01 |
| SUB-03 | SUB-01, SUB-02 | Serviço usa domínio e portas | Contratos aprovados | Não |
| SUB-04 | SUB-02, SUB-03 | Persistência implementa operações usadas pelo serviço | Contrato e fluxo estáveis | Sim com SUB-05 |
| SUB-05 | SUB-02, SUB-03 | Adapter traduz entrada e decisão da aplicação | Contrato de catraca aprovado | Sim com SUB-04 |
| SUB-06 | SUB-02, SUB-04 | Concorrência depende da operação de ocupação | Estratégia aprovada | Análise sim; implementação parcial |
| SUB-07 | SUB-01 a SUB-06 por camada | Testes precisam dos contratos e componentes | Cenários e decisões disponíveis | Sim entre camadas |
| SUB-08 | SUB-01 a SUB-07 | Consolida evidências e decisões | Revisão dos resultados | Não |

Não há dependências circulares. SUB-04 e SUB-05 podem avançar em paralelo após os contratos; SUB-06 exige que a operação de ocupação esteja definida. SUB-01 deve iniciar em `Ready`; as demais ficam em `Backlog` até atenderem à Definition of Ready.
