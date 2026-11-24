# 10-05 — Inicialização da API

## Inicialização

Comando:

```powershell
docker compose up -d postgres api
```

Resultado:

- `fitvital-postgres`: healthy;
- `fitvital-api`: Started;
- porta publicada `3000:3000`.

## Logs

Os logs confirmaram:

- TypeORM inicializado;
- módulos carregados;
- rota `POST /schedulings/confirm` registrada;
- Nest application started.

O contêiner respondeu em `http://localhost:3000/` com `Hello World!`.
