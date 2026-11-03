# Artefato 5 — Matriz de rastreabilidade

| Requisito/regra/fluxo | Sub-Issue | Atividade | Critério de aceite vinculado | Verificação futura |
|---|---|---|---|---|
| Aluno autenticado solicita data/horário | SUB-02, SUB-04 | Command, DTO e HTTP | Corpo sem `alunoId`; aluno vem do JWT | Request autenticado e conversão para command |
| Fluxo feliz confirma e persiste | SUB-01, SUB-03, SUB-05 | Domínio, aplicação e repositório | Status confirmado e save executado | Teste unitário, aplicação e integração |
| RN01: atraso >24h bloqueia | SUB-03, SUB-07 | FinanceiroPort e orquestração | Interrupção antes da confirmação; 422 | Mock retorna inadimplente e resposta 422 |
| RN02: lotação máxima | SUB-03, SUB-06, SUB-07 | EspacoCapacidadePort e lock | Não ultrapassar capacidade; 409 | Cenário lotado e concorrente |
| RN03: choque do aluno | SUB-01, SUB-05, SUB-07 | Invariante e consulta do repositório | Duplicidade recusada; 409 | Consulta do mesmo aluno/horário |
| RN04: limite/disponibilidade do personal | SUB-02, SUB-03, SUB-07 | AgendaPersonalPort e aplicação | Limite excedido recusado; 422 | Mock sem vaga |
| Horário/data inválidos | SUB-01, SUB-04, SUB-07 | VO, DTO e controller | 400 para formato inválido | Teste HTTP de validação |
| Evento `AgendamentoConfirmado`/log | SUB-03, SUB-08 | Efeito pós-confirmação e documentação | Evento/log previsto sem notificação externa | Verificação de emissão/log |
| Falha do banco | SUB-05, SUB-07 | Adapter e tradução de erro | Falha explícita, futura resposta 500 | Teste de indisponibilidade |
| Isolamento modular e sem ORM no domínio | SUB-02, SUB-05, SUB-08 | Portas, mapper e documentação | Sem acesso direto a tabelas externas | Revisão arquitetural |

**Cobertura:** todos os requisitos e fluxos documentados têm cobertura planejada. A referência RN03/RN04 na tabela de falhas do Blueprint é uma inconsistência documental a corrigir em SUB-08. O limite numérico do personal e a estratégia de lock não possuem valor definido; são decisões pendentes, não requisitos inventados.

