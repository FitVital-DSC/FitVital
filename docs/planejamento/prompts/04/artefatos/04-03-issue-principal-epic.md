# Artefato 3 — Issue principal (Epic)

## Título

`[UC04] Realizar Matrícula de Aluno`

## Objetivo

Planejar e implementar o fluxo de matrícula que cria um Aluno ativo e sua primeira Mensalidade de forma atômica, com vínculo opcional a Personal Trainer.

## Escopo

- Receber dados do novo Aluno pela Recepcionista.
- Criar Aluno com status `Ativo`.
- Gerar a primeira Mensalidade.
- Criar vínculo opcional com Personal.
- Reverter o cadastro quando a cobrança falhar.

Campos, endpoint, mecanismo de transação e regra de duplicidade dependem de confirmação da equipe e não são presumidos neste Epic.

## Sub-Issues

- [ ] SUB-01 — Refinar domínio de matrícula
- [ ] SUB-02 — Definir dados e contratos
- [ ] SUB-03 — Implementar serviço transacional
- [ ] SUB-04 — Implementar persistência
- [ ] SUB-05 — Integrar API da Recepcionista
- [ ] SUB-06 — Validar automaticamente
- [ ] SUB-07 — Consolidar documentação

## Critérios gerais de aceite

- Matrícula bem-sucedida deixa o Aluno ativo e com ao menos uma Mensalidade.
- Falha na cobrança não deixa Aluno persistido sem Mensalidade.
- Vínculo com Personal é opcional e consistente.
- RN05 é protegida no domínio e na aplicação.
- Contratos e decisões pendentes são explicitamente aprovados antes do desenvolvimento.
