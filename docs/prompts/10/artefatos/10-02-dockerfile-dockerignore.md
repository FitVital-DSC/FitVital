# 10-02 — Dockerfile e .dockerignore

## Dockerfile

Arquivo criado: `fitvital-backend/Dockerfile`.

Estratégia: imagem multi-stage.

- `build`: Node 24 bookworm slim, pnpm via Corepack, dependências completas e `pnpm build`;
- `runtime`: Node 24 bookworm slim, apenas dependências de produção e `dist/`;
- entrada: `node dist/main.js`;
- porta: `3000`.

Não foram reutilizados componentes de aplicação dentro do Dockerfile; o conteúdo existente foi compilado normalmente.

## .dockerignore

Arquivo criado: `fitvital-backend/.dockerignore`.

Exclui Git, variáveis de ambiente, dependências locais, `dist`, cobertura, testes, caches e logs.

## Build

Comando executado:

```powershell
docker compose build api
```

Resultado:

- imagem criada: `fitvital-api:dev`;
- imagem Docker identificada por `docker image ls fitvital-api:dev`.
