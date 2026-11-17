# Artefato 2 — Decomposição

| ID | Atividade | Camada | Dependências | Critério |
|---|---|---|---|---|
| SUB-01 | Refinar domínio de avaliação e histórico | Domínio | — | Entidades e invariantes aprovadas |
| SUB-02 | Definir métricas e contratos | Contratos | SUB-01 | Campos, unidades e DTO aprovados |
| SUB-03 | Implementar serviço de aplicação | Aplicação | SUB-01, SUB-02 | Registro e atualização orquestrados |
| SUB-04 | Implementar persistência do histórico | Persistência | SUB-01, SUB-02 | Repository/mapper/migration funcionais |
| SUB-05 | Integrar API do Personal Trainer | Apresentação | SUB-02, SUB-03 | Endpoint validado |
| SUB-06 | Validar automaticamente o UC05 | Testes | SUB-01 a SUB-05 | Fluxos e validações cobertos |
| SUB-07 | Consolidar documentação | Documentação | SUB-01 a SUB-06 | Evidências e decisões registradas |
