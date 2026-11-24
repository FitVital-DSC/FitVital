# 11-05 — Testes automatizados de contrato

## Suíte atual

Comando:

```powershell
pnpm test --run
```

Resultado:

- 8 arquivos aprovados;
- 14 testes aprovados.

Foi adicionado um teste que envia `internalNote` junto da entrada e verifica:

- resposta contém `schedulingId`;
- resposta contém `message`;
- resposta não contém `status`;
- resposta não contém `internalNote`.

## Integração PostgreSQL

Comando:

```powershell
pnpm test:integration
```

Resultado:

- 1 arquivo aprovado;
- 1 teste aprovado.
