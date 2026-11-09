# Artefato 5 — Matriz de rastreabilidade

| Requisito/regra/fluxo | Sub-Issue | Atividade | Critério de aceite | Verificação futura |
|---|---|---|---|---|
| Aluno se apresenta na catraca | SUB-02, SUB-05 | Contrato e adapter de entrada | Identificador recebido sem decisão indevida no adapter | Teste do adapter |
| Consulta financeira em tempo real | SUB-02, SUB-03, SUB-07 | Porta e orquestração | Consulta ocorre antes da liberação | Dublê financeiro e teste de aplicação |
| RN01: atraso superior a 24h bloqueia | SUB-01, SUB-03, SUB-05, SUB-07 | Domínio, serviço e catraca | Bloqueio com orientação e sem registro/incremento | Cenário de inadimplência |
| Verificação de lotação | SUB-02, SUB-03, SUB-06 | Porta de capacidade e serviço | Capacidade é verificada antes da entrada | Cenário lotado |
| RN02: limite físico não pode ser violado | SUB-01, SUB-04, SUB-06, SUB-07 | Invariante, persistência e concorrência | Contador não excede o limite | Teste simultâneo da última vaga |
| Catraca liberada no sucesso | SUB-03, SUB-05 | Aplicação e adapter | Comando de liberação somente após validações | Teste de integração com dublê |
| Entrada registrada | SUB-03, SUB-04, SUB-07 | Serviço e persistência | Registro criado no sucesso | Teste de repositório |
| Contador incrementado no sucesso | SUB-03, SUB-04, SUB-06 | Aplicação, persistência e lock | Incremento consistente e único | Teste de ocupação |
| Catraca bloqueia quando lotada | SUB-03, SUB-05, SUB-07 | Serviço e adapter | Bloqueio sem incremento | Teste de fluxo alternativo |
| Falha de dispositivo ou dependência | SUB-05, SUB-07 | Adapter e tratamento de falha | Falha explícita, sem autorização falsa | Teste de erro |
| Dependência UC03/UC01 documentada | SUB-02, SUB-08 | Contratos e documentação | Nenhum acesso direto indevido | Revisão arquitetural |

**Cobertura:** os fluxos e RN01/RN02 documentados possuem atividades correspondentes. O contrato físico da catraca, o identificador e a estratégia de concorrência ainda são decisões pendentes; não foram inventados.
