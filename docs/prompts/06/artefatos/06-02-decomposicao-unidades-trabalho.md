# Artefato 2 — Decomposição

| ID | Atividade | Camada | Origem | Dependências | Conclusão |
|---|---|---|---|---|---|
| SUB-01 | Refinar domínio da ficha de treino | Domínio | Ficha atrelada ao aluno | — | Modelo e invariantes aprovados |
| SUB-02 | Definir contratos e autorização | Aplicação/contratos | Prescrição pelo Personal | SUB-01 | DTOs, comando e autorização aprovados |
| SUB-03 | Implementar serviço de montagem | Aplicação | Montar plano | SUB-01, SUB-02 | Fluxo consistente e testável |
| SUB-04 | Implementar persistência da ficha | Infraestrutura | Ficha atrelada ao aluno | SUB-01, SUB-02 | Mapper, repositório e migration aprovados |
| SUB-05 | Expor a interface do caso de uso | API | Prescrição pelo Personal | SUB-02, SUB-03 | Interface e validações aprovadas |
| SUB-06 | Validar automaticamente o UC06 | Testes | Resultado observável | SUB-01 a SUB-05 | Cenários aprovados executáveis |
| SUB-07 | Consolidar decisões e rastreabilidade | Documentação | Todos os elementos | SUB-01 a SUB-06 | Documentação coerente e evidenciada |
