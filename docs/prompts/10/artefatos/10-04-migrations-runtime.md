# 10-04 — Migrations no ambiente containerizado

## Scripts adicionados

No `package.json`:

- `migration:show:prod`;
- `migration:run:prod`.

Os scripts apontam para `dist/database/data-source.js`.

## Comando executado

```powershell
docker compose run --rm --no-deps api pnpm migration:show:prod
```

Resultado:

```text
[X] 1 CreateScheduling1793106356872
[X] 2 CreateMonthlyPayment1793106356873
[X] 3 AlignSchedulingPrimaryKey1793106356874
```

Nenhuma migration pendente foi encontrada. Portanto, `migration:run:prod` não foi executado.
