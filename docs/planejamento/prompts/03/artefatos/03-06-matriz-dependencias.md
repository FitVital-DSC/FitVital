# Artefato 6 — Matriz de dependências

| Atividade | Pré-requisito | Justificativa | Paralelo |
|---|---|---|---|
| SUB-01 | — | Define a transição do domínio | Pode iniciar imediatamente |
| SUB-02 | SUB-01 | Contrato deve refletir o domínio | Parcial com SUB-04 |
| SUB-03 | SUB-01, SUB-02 | Serviço depende do comportamento e entrada | Não |
| SUB-04 | SUB-01 | Mapper precisa do modelo financeiro | Sim com SUB-02 |
| SUB-05 | SUB-02, SUB-03, SUB-04 | Controller conecta todos os componentes | Não |
| SUB-06 | SUB-01 a SUB-05 | Testes verificam o conjunto integrado | Parcial por camada |
| SUB-07 | SUB-05, SUB-06 | Documentação depende da implementação validada | Não |

Não há dependências circulares. SUB-02 e SUB-04 podem evoluir em paralelo após a definição do domínio.
