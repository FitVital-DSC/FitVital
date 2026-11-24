# 10-07 — Testes e regressões

## Suíte principal

Comando executado:

```powershell
pnpm test --run
```

Resultado real:

- 8 arquivos aprovados;
- 13 testes aprovados;
- 0 falhas.

## Integração PostgreSQL

Comando executado:

```powershell
pnpm test:integration
```

Resultado real:

- 1 arquivo aprovado;
- 1 teste aprovado;
- banco `fitvital_test_db`;
- usuário `fitvital_test_user`;
- porta publicada de testes `5434`.

## Build

Comando executado:

```powershell
pnpm run build
```

Resultado: aprovado.

## Conclusão

A containerização não introduziu regressões nas suítes existentes executadas nesta atividade.
