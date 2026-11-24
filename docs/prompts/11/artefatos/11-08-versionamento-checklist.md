# 11-08 — Versionamento e checklist

## Entregas

- contrato público definido;
- DTO de resposta corrigido;
- mapper HTTP criado;
- Controller atualizado com retorno tipado;
- ValidationPipe configurado com `whitelist` e `transform`;
- teste de propriedade extra criado;
- API containerizada reconstruída;
- contrato real verificado em HTTP.

## Resultados

- build aprovado;
- lint aprovado com avisos menores;
- 14 testes aprovados;
- integração PostgreSQL aprovada;
- nenhuma mudança em domínio, Service ou Repository.

## Pendências

- Issue específica do Material 11 não localizada;
- branch atual: `feature/material-09-10-containerizacao`;
- não foram criados commit, push ou PR nesta execução;
- o tratamento HTTP de agendamento inexistente deve ser revisado em etapa posterior.
- a suíte E2E legada não foi usada como evidência final, pois já mistura acesso a banco conforme seu próprio setup.

## Checklist

- [x] Artefatos do Material 10 recuperados.
- [x] Contrato HTTP observado.
- [x] DTO de resposta definido.
- [x] Mapper HTTP criado.
- [x] Controller adaptado minimamente.
- [x] ValidationPipe configurado.
- [x] Teste de contrato criado.
- [x] API containerizada reconstruída.
- [x] Suíte anterior reexecutada.
- [x] Integração PostgreSQL executada.
- [ ] Issue específica do Material 11 criada/localizada.
- [ ] Commit e PR realizados pela equipe.
