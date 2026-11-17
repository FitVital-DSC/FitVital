# Artefato 6 — Matriz de dependências

| Atividade | Pré-requisito | Justificativa | Desbloqueio | Paralelo |
|---|---|---|---|---|
| SUB-01 | — | Define o comportamento que os contratos usam | Escopo do UC01 confirmado | Sim, documentação pode avançar |
| SUB-02 | SUB-01 | Contratos precisam refletir o domínio | Modelo mínimo revisado | Parcialmente com SUB-01 |
| SUB-03 | SUB-01, SUB-02 | Serviço chama domínio e portas | Contratos aprovados | Não, após SUB-02 |
| SUB-04 | SUB-02, SUB-03 | Controller traduz para serviço existente | Command e erros definidos | Parcialmente com SUB-05 |
| SUB-05 | SUB-02, SUB-03 | Adapter implementa porta usada pela aplicação | Contrato e fluxo estáveis | Sim com SUB-04 |
| SUB-06 | SUB-02, SUB-05 | Lock depende da porta e persistência | Estratégia de lock aprovada | Parcialmente com SUB-04 |
| SUB-07 | SUB-01 a SUB-06, por camada | Testes precisam dos componentes a verificar | Componentes e decisões disponíveis | Testes de camadas podem ser paralelos |
| SUB-08 | SUB-01 a SUB-07 | Consolida evidências e decisões finais | Resultados e pendências revisados | Não, fechamento |

Não há dependências circulares. SUB-04 e SUB-05 podem evoluir em paralelo depois dos contratos; SUB-06 pode iniciar a análise junto de SUB-04, mas sua implementação depende de persistência. A execução do planejamento começa predominantemente em `Backlog`, com SUB-01 e SUB-02 em `Ready`.

