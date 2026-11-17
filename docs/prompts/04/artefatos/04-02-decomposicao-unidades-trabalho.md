# Artefato 2 — Decomposição em unidades de trabalho

| ID | Atividade | Objetivo | Camada | Origem | Dependências | Critério de conclusão |
|---|---|---|---|---|---|---|
| SUB-01 | Refinar domínio de matrícula | Modelar Aluno ativo e a invariante da Mensalidade | Domínio | Pós-condição/RN05 | Nenhuma | Estados e invariantes definidos |
| SUB-02 | Definir dados e contratos | Formalizar DTO, comando e portas sem inventar campos | Contratos | Fluxo principal | SUB-01 | Contratos aprovados pela equipe |
| SUB-03 | Implementar serviço transacional | Orquestrar Aluno, Mensalidade e Personal com rollback | Aplicação | Fluxo e exceção | SUB-01, SUB-02 | Falha não deixa Aluno órfão |
| SUB-04 | Implementar persistência | Mapear Aluno, Mensalidade e vínculo opcional | Persistência | Pós-condição | SUB-01, SUB-02 | Repositórios e transação definidos |
| SUB-05 | Integrar API da Recepcionista | Expor matrícula com validação e resposta | Apresentação | Atores/fluxo | SUB-02, SUB-03 | Endpoint aprovado e testável |
| SUB-06 | Validar automaticamente | Cobrir sucesso, rollback e RN05 | Testes | Fluxos principal/alternativo | SUB-01 a SUB-05 | Testes cobrindo invariantes |
| SUB-07 | Consolidar documentação | Registrar decisões, lacunas e rastreabilidade | Documentação | Governança | SUB-01 a SUB-06 | Documentos coerentes |
