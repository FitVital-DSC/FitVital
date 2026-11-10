# Artefato 05 — Comentários técnicos para o GitHub

Os textos são modelos para publicação pelos revisores humanos. A pré-análise não substitui a revisão.

## SUB-01 / #22 — Revisor: Vitor a confirmar

> Confirmar o modelo de autorização, os estados de acesso, o identificador do aluno e os erros de domínio. **Ready** somente após revisão humana e critérios verificáveis.

## SUB-02 / #23 — Revisor: Mariana

> Confirmar contratos de consulta financeira, capacidade, registro e catraca. Registrar como hipótese o que não estiver documentado e não permitir acesso direto ao Financeiro.

## SUB-03 / #24 — Revisor: Vitor a confirmar

> Validar a ordem: identificação, situação financeira, capacidade, registro/incremento e liberação. Bloqueios não podem registrar entrada nem incrementar ocupação.

## SUB-04 / #25 — Revisor: Mariana

> Confirmar campos persistidos, atomicidade entre registro e ocupação, mapper e propagação de falhas. A entidade de domínio deve permanecer independente da infraestrutura.

## SUB-05 / #26 — Revisor: Vitor a confirmar

> Definir o contrato do adapter da catraca, comandos de liberação/bloqueio e comportamento de falha. O adapter não deve decidir RN01 ou RN02.

## SUB-06 / #27 — Revisor: Mariana

> Registrar a estratégia de concorrência para a última vaga e o resultado esperado de entradas simultâneas. Uma rejeição não pode alterar o contador.

## SUB-07 / #28 — Revisor: Vitor a confirmar

> Organizar testes de sucesso, inadimplência, lotação, concorrência e falhas por camada. Confirmar que bloqueios não incrementam ocupação.

## SUB-08 / #29 — Revisor: Mariana

> Consolidar contratos, decisões e pendências do UC02, preservando apenas as relações documentadas com UC01 e UC03. Aplicar novamente a DoR após as revisões.

## Template de conclusão humana

```markdown
### Registro de Revisão de Planejamento

**Revisor:** @[usuario_github]
**Issue:** [SUB-XX] - [Título]
**Data:** [DD/MM/AAAA]
**Resultado:** [ ] Aprovada sem ressalvas | [ ] Aprovada com ajustes menores | [ ] Ajustes necessários

**Observações Técnicas:**
- [Pontos verificados]

**Ajustes Solicitados:**
- [Ajustes, se houver]

**Conclusão e Prontidão:**
- [ ] DoR-01 a DoR-07 atendidos; promover para Ready
- [ ] Manter em Backlog
```
