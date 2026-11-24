# 11-07 — Verificação da API containerizada

## Reconstrução

Comando executado:

```powershell
docker compose up -d --build api
```

Resultado:

- imagem `fitvital-api:dev` construída;
- API recreada e iniciada;
- rota `POST /schedulings/confirm` registrada.

## Validação real

Entrada válida com campo extra:

```json
{"schedulingId":"d0eea6de-7f47-4f47-9c85-e18a7f1e6f4d","internalNote":"não deve vazar"}
```

Resposta:

```json
{"schedulingId":"d0eea6de-7f47-4f47-9c85-e18a7f1e6f4d","message":"Scheduling confirmed successfully"}
```

UUID inválido e objeto vazio retornaram `400 Bad Request`.

O registro foi confirmado no PostgreSQL como `CONFIRMED`.
