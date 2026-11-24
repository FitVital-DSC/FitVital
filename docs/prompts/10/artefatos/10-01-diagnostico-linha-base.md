# 10-01 — Diagnóstico e linha de base

## Identificação

- Projeto: FitVital;
- Repositório: `FitVital-DSC/FitVital`;
- Caso de uso: UC01 — confirmar agendamento;
- Sub-Issue de persistência: #17;
- Diretório dos artefatos: `docs/prompts/10/artefatos/`;
- Branch atual: `main`;
- Não foi informada uma Issue específica de containerização;
- Não foi informada uma branch de trabalho específica.

## Artefatos do Material 09

Todos os oito artefatos em `docs/prompts/09/artefatos/` foram recuperados e analisados.

## Estado existente

O backend está em `fitvital-backend/`. Existem PostgreSQL de desenvolvimento e PostgreSQL de testes no Compose, mas não existem:

- `Dockerfile`;
- `.dockerignore`;
- serviço da API no Compose.

O projeto utiliza Node.js `24.14.1`, pnpm `12.9.1`, NestJS, TypeORM, migrations explícitas e `dist/` gerado pelo build.

## Linha de base atual

Comandos executados:

```powershell
pnpm test --run
pnpm run build
docker --version
docker compose version
```

Resultados:

- 8 arquivos de teste aprovados;
- 13 testes aprovados;
- build NestJS aprovado;
- Docker 29.9.1 disponível;
- Docker Compose v5.6.0 disponível.

## Estado Git

A branch atual é `main`. Existem alterações locais referentes ao Material 09 e ao estado atual do repositório. Não foi criada uma branch específica de containerização, pois nenhuma branch foi informada pelo estudante.

Nenhum commit, merge ou push foi realizado.
