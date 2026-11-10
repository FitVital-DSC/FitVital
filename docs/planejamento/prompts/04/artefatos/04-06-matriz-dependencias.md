# Artefato 6 — Matriz de dependências

| Atividade | Pré-requisito | Justificativa | Paralelo |
|---|---|---|---|
| SUB-01 | — | Define a invariante central | Pode iniciar imediatamente |
| SUB-02 | SUB-01 | Contratos dependem do modelo | Parcial com SUB-04 |
| SUB-03 | SUB-01, SUB-02 | Orquestra contratos e domínio | Não |
| SUB-04 | SUB-01, SUB-02 | Persistência implementa portas aprovadas | Sim com SUB-03, parcialmente |
| SUB-05 | SUB-02, SUB-03 | API depende de comando e aplicação | Não |
| SUB-06 | SUB-01 a SUB-05 | Testes precisam das camadas definidas | Parcial por camada |
| SUB-07 | SUB-01 a SUB-06 | Consolida decisões finais | Não |

Não há dependências circulares.
