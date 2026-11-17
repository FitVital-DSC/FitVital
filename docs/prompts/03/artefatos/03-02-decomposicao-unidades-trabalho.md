# Artefato 2 — Decomposição em unidades de trabalho

| ID | Atividade | Objetivo | Camada | Origem | Dependências | Critério de conclusão |
|---|---|---|---|---|---|---|
| SUB-01 | Refinar domínio de Mensalidade | Encapsular a transição para `PAID` e a data do pagamento | Domínio | UC03-RN01/RN02 | Nenhuma | Comportamento de domínio testado |
| SUB-02 | Definir contrato do callback | Formalizar rota, UUID e status `PAID`/`FAILED` | API/Contratos | Fluxo principal e alternativo | SUB-01 | DTO e contrato HTTP definidos |
| SUB-03 | Implementar serviço de aplicação | Orquestrar busca, decisão de sucesso/falha e persistência | Aplicação | Fluxo UC03 | SUB-01, SUB-02 | Serviço com erros explícitos |
| SUB-04 | Implementar persistência financeira | Criar entidade ORM, mapper, repositório e migration | Persistência | Pós-condição | SUB-01 | Leitura e gravação no PostgreSQL |
| SUB-05 | Integrar módulo e controller | Expor o callback e conectar dependências NestJS | Apresentação | Contrato confirmado | SUB-02, SUB-03, SUB-04 | Endpoint funcional |
| SUB-06 | Validar automaticamente o UC03 | Cobrir sucesso, falha e inexistência | Testes | Fluxos principal e alternativos | SUB-01 a SUB-05 | Testes unitários e E2E passando |
| SUB-07 | Documentar operação e migração | Registrar contrato, execução e evidências | Documentação | Governança do slice | SUB-05, SUB-06 | README e artefatos atualizados |

Não foram criadas tarefas artificiais de fases TDD; cada unidade representa uma responsabilidade técnica distinta.
