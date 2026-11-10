# 04-07 — Draft Pull Request

## Situação

O Draft Pull Request ainda **não foi aberto**. Não há URL, título remoto ou número de PR a registrar.

## Minuta

**Título:** `test(uc01): add RED test for valid training scheduling (#1)`

```markdown
## Draft Pull Request — UC01 Solicitar Agendamento de Treino

### Issue vinculada
Ref: #1

### Objetivo
Validar o cenário de confirmação de um agendamento existente com mensalidade paga.

### Alteração incluída
- Teste e2e em `fitvital-backend/test/scheduling/confirm-reservation.e2e-spec.ts`.

### Evidência RED
A execução está pendente de configuração válida do PostgreSQL. A execução atual falhou antes da asserção com erro de senha do cliente PostgreSQL.

### Estado
- [x] Branch de trabalho preparada
- [x] Cenário de teste identificado
- [ ] RED funcional comprovado
- [ ] Commit atômico do teste
- [ ] Draft PR aberto
- [ ] Revisão técnica registrada
```

O PR não deve ser aberto nem integrado enquanto a falha de ambiente não for resolvida.

