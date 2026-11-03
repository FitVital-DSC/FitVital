# Artefato 05 — Comentários técnicos para o GitHub

Os textos abaixo são modelos para publicação nas Issues. A publicação e a aprovação devem ser feitas pelos revisores humanos.

## SUB-01/#13 — Revisor: Vitor

```markdown
### Revisão de planejamento — SUB-01
Pré-análise: objetivo e escopo estão coerentes com o UC01. Antes de Ready, confirmar estados `Solicitado`, `Confirmado` e `Recusado`, validações de `Horario` e erros de domínio para entradas inválidas.
**Condição para Ready:** Vitor registrar a revisão humana e Mariana confirmar os ajustes.
```

## SUB-02/#14 — Revisor: Mariana

```markdown
### Revisão de planejamento — SUB-02
Confirmar assinaturas de FinanceiroPort, EspacoCapacidadePort, AgendaPersonalPort e AgendamentoRepository. Registrar decisão sobre limite do personal e lock; manter DTOs sem expor entidades.
**Condição para Ready:** contratos aprovados por Mariana e pendências documentadas.
```

## SUB-03/#15 — Revisor: Vitor

```markdown
### Revisão de planejamento — SUB-03
Verificar ordem das consultas, interrupção por RN01, tratamento de RN02/RN03/RN04 e persistência somente após confirmação. Confirmar que o serviço não acessa tabelas de outros contextos.
**Condição para Ready:** Vitor registrar aprovação humana.
```

## SUB-04/#16 — Revisor: Mariana

```markdown
### Revisão de planejamento — SUB-04
Confirmar POST /api/v1/agendamentos, origem do aluno no JWT, validação 400 e mapeamentos 201/409/422. Confirmar contrato final do AgendamentoResponseDTO.
**Condição para Ready:** contrato HTTP validado por Mariana.
```

## SUB-05/#17 — Revisor: Vitor

```markdown
### Revisão de planejamento — SUB-05
Detalhar campos persistidos, mapper bidirecional, consulta de choque nominal e propagação de indisponibilidade do banco. Preservar domínio sem anotações ORM.
**Condição para Ready:** Vitor confirmar o escopo de persistência.
```

## SUB-06/#18 — Revisor: Mariana

```markdown
### Revisão de planejamento — SUB-06
Escolher e registrar lock otimista ou pessimista para RN02. Incluir cenário de duas solicitações concorrentes e resultado esperado, sem ultrapassar a capacidade.
**Condição para Ready:** decisão de arquitetura aprovada por Mariana.
```

## SUB-07/#19 — Revisor: Vitor

```markdown
### Revisão de planejamento — SUB-07
Organizar cenários de domínio, aplicação, HTTP e persistência, incluindo sucesso, RN01–RN04, 400, 409, 422 e falha de infraestrutura. A execução deve ocorrer após contratos confirmados.
**Condição para Ready:** matriz de cenários aprovada por Vitor.
```

## SUB-08/#20 — Revisor: Mariana

```markdown
### Revisão de planejamento — SUB-08
Atualizar UC01, dicionário e decisões de lock/limite do personal. Corrigir a referência RN03/RN04 e preservar rastreabilidade com SUB-01 a SUB-07.
**Condição para Ready:** documentação revisada por Mariana após os demais resultados.
```

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
- [ ] Todos os critérios DoR-01 a DoR-07 atendidos; promover para Ready
- [ ] Manter em Backlog
```

