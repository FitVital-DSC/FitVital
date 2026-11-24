# 09-08 — Versionamento e Checklist Consolidado

## Identificação

- Projeto: FitVital;
- Caso de uso: UC01 — confirmar agendamento;
- Sub-Issue persistência: #17;
- Branch atual desta execução: `main`;
- Nenhum merge foi executado.

## Entregas implementadas

- Entidade ORM alinhada para UUID fornecido pelo domínio;
- Migration de alinhamento criada e aplicada no desenvolvimento;
- DataSource com migrations reais registradas;
- Serviço PostgreSQL isolado de testes em Docker;
- Teste Vitest integrado com PostgreSQL real;
- Script `test:integration`;
- Teste anterior corrigido para o endpoint real;
- Evidência HTTP e SQL antes/depois do reinício.

## Resultados

- Build: aprovado;
- Suíte principal: 8 arquivos e 13 testes aprovados;
- Integração PostgreSQL: 1 arquivo e 1 teste aprovado;
- Migration aplicado no banco de desenvolvimento;
- Durabilidade comprovada pelo mesmo UUID após reinício.

## Checklist

- [x] Oito artefatos 08 recuperados.
- [x] Diretório de destino confirmado.
- [x] Contratos existentes preservados.
- [x] Sub-Issue #17 identificada.
- [ ] DoR integral da equipe confirmada: responsável/revisores externos ao workspace pendentes.
- [x] Linha de base executada.
- [x] Docker existente preservado.
- [x] Banco de testes dedicado criado.
- [x] `synchronize: false`.
- [x] Entidade ORM separada.
- [x] Mapper implementado.
- [x] Migration aplicada no desenvolvimento.
- [x] Adaptador TypeORM existente preservado.
- [x] Provider existente preservado.
- [x] Requisição HTTP real executada.
- [x] Registro confirmado no SQL.
- [x] Backend reiniciado e registro confirmado novamente.
- [x] Suíte PostgreSQL executada.
- [x] Suíte anterior reexecutada sem regressão.
- [ ] Commit, branch específica, PR e GitHub Project dependem de aprovação humana.
- [ ] Nenhum merge prematuro foi realizado.
- [x] Nenhum segredo real foi registrado nos artefatos.
