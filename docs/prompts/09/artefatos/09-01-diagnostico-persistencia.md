# 09-01 — Diagnóstico da persistência e linha de base

## Identificação

- Projeto: FitVital;
- Repositório: `FitVital-DSC/FitVital`;
- Caso de uso selecionado: UC01 — Solicitar/confirmar agendamento;
- Sub-Issue principal selecionada: [#17 — Implementar persistência do agendamento](https://github.com/FitVital-DSC/FitVital/issues/17);
- Branch analisada: `main`;
- Diretório dos artefatos: `docs/prompts/09/artefatos/`;
- Artefatos 08 disponíveis: oito arquivos em `docs/prompts/08/artefatos/`.

## Contratos preservados

Os componentes encontrados para agendamento são:

- Entidade de domínio: `Scheduling`;
- Contrato: `SchedulesRepository`;
- Token: `SCHEDULING_REPOSITORY`;
- Serviço: `SchedulingService`;
- Controller: `SchedulingController`;
- DTO real encontrado: `ConfirmSchedulingDto`;
- Repository TypeORM: `TypeOrmSchedulingRepository`;
- Entidade ORM: `SchedulingEntity`;
- Mapper: `SchedulingMapper`.

Os contratos de domínio, aplicação e HTTP não serão alterados nesta fase.

O adapter de agendamento já utiliza o contrato existente e traduz domínio/ORM.

## Arquitetura atual

```text
SchedulingController
  -> SchedulingService
  -> SCHEDULING_REPOSITORY
  -> TypeOrmSchedulingRepository
  -> TypeORM
  -> PostgreSQL
```

O módulo raiz configura:

- `ConfigModule` com `.env`;
- `TypeOrmModule.forRootAsync`;
- `SchedulingModule`;
- `FinancesModule`;
- `autoLoadEntities: true`;
- `synchronize: false`.

O DataSource da CLI registra `SchedulingEntity`, `MonthlyPaymentOrmEntity` e migrations globais.

## Sub-Issue #17

Estado GitHub: `OPEN`.

Conteúdo verificável:

- Objetivo: persistir e consultar agendamentos pela porta definida;
- Escopo: adapter ORM/SQL, mapper bidirecional e operações de salvar/consultar choque;
- Critérios declarados:
  - adapter implementa o contrato;
  - mapeamento preserva atributos do agendamento;
  - consulta identifica choque;
  - falha de banco é propagada;
- Responsável: A definir;
- Estado no corpo da Issue: `Backlog`;
- Dependências: SUB-02 e SUB-03.

## DoR

| Condição | Situação |
|---|---|
| Objetivo definido | Confirmado |
| Escopo delimitado | Confirmado |
| Critérios de aceite verificáveis | Confirmado parcialmente |
| Dependências identificadas | Confirmado |
| Planejamento técnico disponível | Confirmado no código e no Material 08 |
| Responsável atribuído | Pendente |
| Revisão concluída | Não foi possível verificar |

Resultado: #17 ainda não atende integralmente a DoR. Não será movida artificialmente no GitHub Project.

## Linha de base

Branch: `main`.

Comandos executados:

```powershell
pnpm test --run
pnpm run build
```

Compilação: aprovada.

Vitest:

- 7 arquivos encontrados;
- 3 arquivos unitários aprovados;
- 4 arquivos E2E falharam;
- 6 testes aprovados;
- 1 teste falhou;
- 5 testes skipped.

Os testes E2E falharam com `ECONNREFUSED 127.0.0.1:5432`. A causa observada foi PostgreSQL/Docker indisponível, não uma falha de compilação do código.

A execução isolada dos três specs unitários passou com 6 testes aprovados.

## Evidência atualizada

- Docker PostgreSQL está ativo: `fitvital-postgres` saudável em `5432:5432`.
- Banco identificado: `fitvital_db`, usuário `fitvital_user`.
- Migration de alinhamento aplicada no desenvolvimento: `AlignSchedulingPrimaryKey1793106356874`.
- Histórico real contém três migrations.
- A chave primária ORM passou de `PrimaryGeneratedColumn` para `PrimaryColumn`, coerente com UUID gerado pelo domínio/aplicação.
- Banco exclusivo de testes ativo em `5434:5432`.
- Suíte principal atual: 8 arquivos aprovados, 13 testes aprovados.
- Suíte de integração PostgreSQL: 1 arquivo aprovado, 1 teste aprovado.

## Dependências e WIP

Não foi possível verificar o GitHub Project real nem o limite de WIP de forma codificada neste ambiente.

Há Pull Request aberto `test/uc04-matricula-red` (#65), mas não representa a cadeia de #17.

Não será criada branch nem movida Issue sem confirmação da equipe da branch-base e da governança.

## Infraestrutura

Existe um único PostgreSQL no `compose.yaml`, publicado em `5432:5432`, com volume persistente `fitvital_postgres_data`.

O Docker Desktop não estava acessível ao executar `docker compose ps`; portanto:

- banco não foi iniciado;
- migrations não foram aplicadas;
- nenhuma consulta SQL foi executada;
- nenhuma requisição HTTP real foi comprovada;
- nenhuma durabilidade foi comprovada.

## Branches e Pull Requests

Estado antes das alterações:

- branch atual: `main`;
- branches locais: `main`, `Branch-4-testes`, `feat/issue-1-agendamento-treino`, `feat/issue-3-pagamento-mensalidade`;
- não há branch específica da persistência #17 confirmada;
- não há PR específico confirmado para #17.

## Riscos

1. Docker/PostgreSQL indisponível;
2. #17 em Backlog e sem responsável definido;
3. contrato da Issue menciona campos não presentes no modelo atual de agendamento, como academia/personal/horário;
4. migrations existentes podem não representar exatamente o contrato atual;
5. o provider financeiro dentro de `SchedulingModule` usa `useValue`, mas não faz parte do adaptador de agendamento;
6. testes E2E atuais misturam bancos e inicializam `AppModule`, tornando o ambiente de testes dependente do banco de desenvolvimento.
