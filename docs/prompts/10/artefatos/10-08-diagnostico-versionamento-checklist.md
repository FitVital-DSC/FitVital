# 10-08 — Diagnóstico, versionamento e checklist

## Projeto e caso de uso

- Projeto: FitVital;
- Caso de uso: UC01 — confirmar agendamento;
- Sub-Issue relacionada: #17;
- Issue específica de containerização: não localizada;
- Branch atual: `main`;
- Branch específica de containerização: não informada/criada.

## Diagnóstico

Não existiam Dockerfile, `.dockerignore` ou serviço `api`. Foram criados/adicionados de forma mínima sem recriar a aplicação.

Falha ou diagnóstico observado:

- antes da alteração, o Compose não estava configurado com um serviço da API;
- a imagem exigiu Node 24 e pnpm compatível com o lockfile;
- não houve falha final de build ou inicialização.

Nenhum `down -v`, `DROP`, `TRUNCATE`, `migration:revert` ou operação destrutiva foi executado.

## Alterações

- criado `fitvital-backend/Dockerfile`;
- criado `fitvital-backend/.dockerignore`;
- adicionado serviço `api` ao Compose;
- adicionados scripts de migration de produção;
- mantidos PostgreSQL de desenvolvimento e testes separados;
- mantidas migrations, contratos e componentes existentes.

## Evidências

- imagem `fitvital-api:dev` construída;
- API iniciada em contêiner;
- migrations mostradas como aplicadas;
- HTTP real executado;
- registro consultado antes e depois do reinício da API;
- testes principal e integração aprovados.

## Versionamento

Nenhum commit, push, branch específica, Pull Request ou merge foi criado nesta atividade. A Issue específica de containerização não foi localizada e não foi criada automaticamente uma Issue duplicada.

O estado Git permanece com alterações locais que devem ser revisadas pela equipe antes do versionamento.

## Checklist

- [x] Oito artefatos do Material 09 recuperados.
- [x] Diretório de destino confirmado.
- [x] Linha de base executada.
- [x] Dockerfile existente auditado ou criado.
- [x] `.dockerignore` criado.
- [x] Compose validado.
- [x] Imagem Docker construída.
- [x] Serviço `api` configurado.
- [x] Rede e porta internas/verificadas.
- [x] Histórico de migrations verificadas.
- [x] Nenhuma migration pendente aplicada porque não havia pendência.
- [x] API iniciada em contêiner.
- [x] Logs confirmaram comunicação e rotas.
- [x] Cadastro HTTP executado.
- [x] Registro consultado diretamente no PostgreSQL.
- [x] Somente API reiniciada.
- [x] Durabilidade comprovada após reinício.
- [x] Suíte principal reexecutada.
- [x] Integração PostgreSQL reexecutada.
- [ ] Branch específica criada ou confirmada pela equipe.
- [ ] Commit realizado.
- [ ] Pull Request criado.
- [ ] GitHub Project atualizado.
- [ ] Nenhum merge prematuro realizado.
