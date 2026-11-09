# Artefato 2 — Decomposição em unidades de trabalho

| ID | Atividade | Objetivo e escopo | Camada | Origem | Dependências | Critério geral |
|---|---|---|---|---|---|---|
| SUB-01 | Refinar modelo de acesso e ocupação | Modelar entrada, autorização de acesso, registro e ocupação sem acoplamento a hardware | Domínio | Pós-condição; RN01; RN02 | Nenhuma | Invariantes e estados documentados |
| SUB-02 | Definir comando, DTOs e portas do check-in | Formalizar identificador de entrada, resultado e contratos financeiro, capacidade e catraca | Aplicação/contratos | Fluxo principal; atores | SUB-01 | Contratos tipados e dúvidas registradas |
| SUB-03 | Implementar serviço de aplicação do UC02 | Orquestrar consulta financeira, capacidade, registro e liberação na ordem correta | Aplicação | Fluxo principal e alternativos | SUB-01, SUB-02 | Sucesso e bloqueios produzem resultados explícitos |
| SUB-04 | Implementar persistência da entrada e ocupação | Persistir check-in e atualizar ocupação conforme contratos internos | Infraestrutura | Pós-condição | SUB-02, SUB-03 | Registro e contagem respeitam as portas |
| SUB-05 | Planejar adapter da catraca | Traduzir o comando para o sistema de controle de acesso e bloquear/liberar | Integração | Atores e fluxos alternativos | SUB-02, SUB-03 | Integração isolada e respostas mapeadas |
| SUB-06 | Proteger concorrência da capacidade | Definir proposta de consistência para a última vaga sem exceder RN02 | Domínio/infraestrutura | RN02 | SUB-02, SUB-04 | Estratégia aprovada e comportamento concorrente verificável |
| SUB-07 | Validar automaticamente o caso de uso | Planejar testes de domínio, aplicação, persistência e integração | Testes | Fluxos principal e alternativos | SUB-01 a SUB-06 por camada | Cenários de sucesso, bloqueio e concorrência cobertos |
| SUB-08 | Consolidar documentação e rastreabilidade | Registrar decisões, contratos, limites e dependências UC01/UC03 | Documentação | Pendências do Blueprint | SUB-01 a SUB-07 | Documentos coerentes e sem requisitos inventados |
