# Artefato 2 — Decomposição em unidades de trabalho

As unidades abaixo cobrem o slice sem separar artificialmente fases de TDD.

| ID | Atividade | Objetivo e escopo | Camada | Origem | Dependências | Critério geral |
|---|---|---|---|---|---|---|
| SUB-01 | Refinar domínio de agendamento | Modelar `Agendamento`, `Horario`, estados e comportamento de confirmação, preservando invariantes | Domínio | Pós-condição; RN03; RN04 | Nenhuma | Modelo e transições documentados, sem dependência de ORM |
| SUB-02 | Definir comandos, DTOs e portas | Formalizar entrada, saída e contratos Financeiro, Espaço, Personal e Repositório | Aplicação/contratos | Etapas 15–17 | SUB-01 | Contratos tipados e fronteiras registradas |
| SUB-03 | Implementar serviço de aplicação | Orquestrar consultas nas portas, domínio, persistência e evento na ordem definida | Aplicação | Fluxo principal; RN01–RN04 | SUB-01, SUB-02 | Fluxos de sucesso e recusas com erros explícitos |
| SUB-04 | Planejar adaptador HTTP | Traduzir POST `/api/v1/agendamentos`, JWT, validação de entrada e respostas HTTP | Apresentação/API | Etapa 16 | SUB-02, SUB-03 | DTO, controller e mapeamentos 201/400/409/422 especificados |
| SUB-05 | Implementar persistência do agendamento | Mapear entidade, repositório, consulta de choque e gravação sem contaminar domínio | Infraestrutura/Persistência | Etapa 18 | SUB-02, SUB-03 | Salvar e consultar agendamentos conforme contrato |
| SUB-06 | Proteger concorrência e capacidade | Definir e aplicar estratégia de reserva/lock para RN02 e corrida entre solicitações | Infraestrutura/integração | RN02; Etapa 19 | SUB-02, SUB-05 | Estratégia de lock validada pela equipe e comportamento concorrente coberto |
| SUB-07 | Validar automaticamente o slice | Cobrir domínio, aplicação, HTTP e persistência com testes futuros | Testes | Etapa 23; fluxos alternativos | SUB-01 a SUB-06, conforme camada | Cenários positivos, RN01–RN04, 400, 409, 422 e falha infra verificáveis |
| SUB-08 | Consolidar documentação e rastreabilidade | Atualizar dicionário, UC01, contratos, pendências e evidências do planejamento | Documentação | Etapas 24–26 | SUB-01 a SUB-07 | Documentos coerentes e referências cruzadas revisadas |

