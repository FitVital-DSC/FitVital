# Artefato 03 — Matriz de distribuição das Sub-Issues

Estado real observado no relatório anterior: `Todo` no Project. Estado recomendado nesta etapa: `Backlog`, pois nenhuma revisão humana foi registrada e a DoR-06/07 não está atendida.

| ID | Título | Complexidade | Dependências | Responsável proposto | Revisor proposto | Estado real | Estado recomendado | Justificativa |
|---|---|---|---|---|---|---|---|---|
| SUB-01/#13 | Refinar domínio de agendamento | Alta | — | Mariana | Vitor | Todo | Backlog | Arquitetura e invariantes exigem experiência técnica; revisão independente |
| SUB-02/#14 | Definir comandos, DTOs e portas | Média | SUB-01 | Vitor | Mariana | Todo | Backlog | Contratos são atividade adequada ao desenvolvimento de Vitor; Mariana valida arquitetura |
| SUB-03/#15 | Implementar serviço de aplicação | Alta | SUB-01, SUB-02 | Mariana | Vitor | Todo | Backlog | Orquestra regras críticas e requer experiência em backend |
| SUB-04/#16 | Planejar adaptador HTTP | Média | SUB-02, SUB-03 | Vitor | Mariana | Todo | Backlog | API fica com Vitor; Mariana revisa códigos e fronteiras |
| SUB-05/#17 | Implementar persistência | Alta | SUB-02, SUB-03 | Mariana | Vitor | Todo | Backlog | Persistência e isolamento arquitetural alinhados à experiência de backend |
| SUB-06/#18 | Proteger concorrência e capacidade | Alta | SUB-02, SUB-05 | Vitor | Mariana | Todo | Backlog | Vitor executa; Mariana revisa a decisão de lock e risco RN02 |
| SUB-07/#19 | Validar automaticamente o slice | Alta | SUB-01 a SUB-06 | Mariana | Vitor | Todo | Backlog | Experiência informada em testes; revisão independente evita autoaprovação |
| SUB-08/#20 | Consolidar documentação e rastreabilidade | Média | SUB-01 a SUB-07 | Vitor | Mariana | Todo | Backlog | Vitor consolida e Mariana verifica consistência final |

Os pares de responsável e revisor são distintos. A equipe deve confirmar a proposta e efetivar os assignees no GitHub.

