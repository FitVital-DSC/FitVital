# Artefato 08-04 - Execucao HTTP Integrada

## Comando

```powershell
npx vitest run test/finances/monthly-payment.integrated-spec.ts
```

## Resultado

```text
Test Files  1 passed (1)
Tests       3 passed (3)
Duration    2.30s
```

## Cenarios

1. `PAID` atraves de Controller, Service e repositorio em memoria:
   - HTTP 200
   - resultado de resposta verificado
   - estado armazenado em memoria verificado diretamente
2. UUID invalido:
   - HTTP 400
3. Status de gateway invalido:
   - HTTP 400
