# Artefato 5 — Matriz de rastreabilidade

| Requisito/fluxo | Sub-Issue | Critério de aceite | Verificação |
|---|---|---|---|
| Recepcionista informa dados do Aluno | SUB-02, SUB-05 | Contrato e validação aprovados | Teste de API |
| Aluno é criado como ativo | SUB-01, SUB-03, SUB-04 | Estado ativo persistido | Teste de aplicação/persistência |
| Primeira Mensalidade é gerada | SUB-02, SUB-03, SUB-04 | Mensalidade vinculada ao Aluno | Teste transacional |
| Personal é opcional | SUB-02, SUB-03, SUB-04 | Matrícula sem vínculo funciona | Teste de caso alternativo |
| RN05: ativo tem Mensalidade | SUB-01, SUB-03, SUB-06 | Nenhum ativo sem cobrança | Teste de domínio e integração |
| Falha da cobrança reverte cadastro | SUB-03, SUB-04, SUB-06 | Nenhum Aluno órfão permanece | Teste de rollback |
| Contratos não documentados | SUB-02, SUB-07 | Pendências explicitadas | Revisão humana |

Campos, endpoint, duplicidade e estratégia exata de transação ainda são decisões pendentes.
