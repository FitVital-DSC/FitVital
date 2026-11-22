# Artefato 09-07 - Testes Automatizados com PostgreSQL

## Teste criado

Arquivo: `fitvital-backend/test/finances/monthly-payment.postgres.e2e-spec.ts`

## Comando

```powershell
npx vitest run --config ./vitest.config.e2e.ts test/finances/monthly-payment.postgres.e2e-spec.ts
```

## Resultado

```text
Test Files  1 passed (1)
Tests       3 passed (3)
```

Cenarios:

- persiste `PAID` no PostgreSQL;
- rejeita UUID invalido;
- rejeita status invalido.
