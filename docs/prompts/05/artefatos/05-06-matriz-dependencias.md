# Artefato 6 — Dependências

| Atividade | Pré-requisito | Justificativa |
|---|---|---|
| SUB-01 | — | Define o modelo |
| SUB-02 | SUB-01 | Contratos dependem do modelo |
| SUB-03 | SUB-01, SUB-02 | Orquestra domínio e contratos |
| SUB-04 | SUB-01, SUB-02 | Persistência implementa portas |
| SUB-05 | SUB-02, SUB-03 | API depende da aplicação |
| SUB-06 | SUB-01 a SUB-05 | Testa as camadas |
| SUB-07 | SUB-01 a SUB-06 | Consolida evidências |

SUB-02 e SUB-04 podem avançar em paralelo após SUB-01.
