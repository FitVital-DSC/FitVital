# Artefato 5 — Matriz de rastreabilidade

| Requisito/fluxo | Sub-Issue | Critério de aceite | Verificação |
|---|---|---|---|
| Gateway envia mensalidade e status | SUB-02, SUB-05 | Rota e DTO aceitam contrato | Teste E2E de request |
| Pagamento aprovado torna mensalidade `PAID` | SUB-01, SUB-03 | Estado persistido como `PAID` | Teste unitário e E2E |
| Pagamento aprovado registra data | SUB-01, SUB-04 | `datePayment` não nulo | Assert no domínio e banco |
| Pagamento falho não altera registro | SUB-03, SUB-06 | Nenhum save em `FAILED` | Teste unitário |
| Mensalidade inexistente | SUB-03, SUB-05 | Erro explícito de recurso | Teste de serviço/HTTP |
| Payload inválido | SUB-02, SUB-05 | Validação rejeita entrada | Teste HTTP |
| Persistência PostgreSQL | SUB-04 | Migration e mapper funcionais | Migration E2E |
| Operação reproduzível | SUB-07 | README e evidências atualizados | Revisão documental |

Todos os requisitos confirmados possuem cobertura. Autenticação do Gateway e retries externos permanecem fora do escopo documentado.
