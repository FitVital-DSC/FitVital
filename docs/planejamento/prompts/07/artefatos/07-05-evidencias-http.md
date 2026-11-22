# Artefato 07-05 - Evidencias da Fronteira HTTP

## Build

Comando:

```powershell
npm run build
```

Resultado:

```text
Nest build concluido sem erros.
```

## Testes unitarios

Comando:

```powershell
npx vitest run src
```

Resultado:

```text
Test Files  3 passed (3)
Tests       7 passed (7)
```

## Inicializacao HTTP

A tentativa de iniciar `npm run start:dev` foi realizada com PostgreSQL via Docker.

Pendencia:

- A porta PostgreSQL configurada nao autenticou o processo Node no ambiente atual.
- A aplicacao nao chegou a ficar disponivel para requisicoes reais nesta execucao.

## Requisicoes HTTP reais

Nao foram registradas respostas HTTP validas nesta etapa. O teste E2E existente nao pode ser considerado executado ate que a aplicacao inicie com sucesso.
