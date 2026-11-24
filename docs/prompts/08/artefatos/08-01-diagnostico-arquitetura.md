# 08-01 — Diagnóstico da arquitetura e linha de base

## Identificação

- Repositório: `FitVital-DSC/FitVital`
- Branch analisada: `main`
- Diretório de destino: `docs/prompts/08/artefatos/`
- Material anterior disponível: `docs/prompts/07/artefatos/07-01-diagnostico-fronteira-http.md`
- Artefatos 07-02 a 07-08: não foram localizados no workspace
- Prompt de origem fornecido pelo estudante: `08-verificacao-integrada-do-backend-e-preparacao-para-persistencia-real.md`

## Arquitetura e contratos encontrados

O backend está em `fitvital-backend/`. Foram encontrados dois módulos principais:

- Agendamento: `SchedulingModule`, `SchedulingController`, `SchedulingService`, `SchedulesRepository`, `SCHEDULING_REPOSITORY`;
- Financeiro: `FinancesModule`, `MonthlyPaymentController`, `MonthlyPaymentService`, `MonthlyPaymentRepository`, `MONTHLYPAYMENT_REPOSITORY`.

O módulo raiz importa `SchedulingModule` e `FinancesModule`. O TypeORM está registrado em `AppModule` com `synchronize: false` e os módulos de funcionalidade registram entidades ORM por `TypeOrmModule.forFeature(...)`.

Os adapters atuais são implementações reais com TypeORM:

- `TypeOrmSchedulingRepository`;
- `TypeOrmMonthlyPaymentRepository`.

Não foi encontrada uma implementação `InMemory...Repository` no diretório `src/`. Também não foi encontrado o repositório em memória descrito como infraestrutura inicial do Material 08. Assim, o estado atual não corresponde ao fluxo anterior exigido por esta etapa:

```text
Controller -> Service -> InterfaceRepository -> Repositório em memória
```

Os componentes presentes atualmente já seguem mais diretamente o fluxo:

```text
Controller -> Service -> InterfaceRepository -> Adaptador TypeORM -> PostgreSQL
```

Isso representa uma pendência/retrospectiva técnica, não uma autorização para substituir ou recriar componentes existentes.

## Linha de base executada

Branch utilizada: `main`.

Comando executado:

```powershell
pnpm test --run
```

O Vitest executou 7 arquivos de teste:

- 3 arquivos passaram;
- 4 arquivos falharam na inicialização;
- 6 testes passaram;
- 1 teste falhou;
- 5 testes foram marcados como skipped.

A causa observada foi a indisponibilidade de PostgreSQL em `127.0.0.1:5432`. O NestJS tentou se conectar repetidamente e lançou `ECONNREFUSED`. Os testes de agendamento, mensalidade e app que importam `AppModule` ficaram bloqueados nos hooks `beforeAll`/`beforeEach`, o que provocou falhas consequentes nos hooks de limpeza.

Arquivos relacionados ao bloqueio:

- `test/app.e2e-spec.ts`;
- `test/scheduling/scheduling.e2e-spec.ts`;
- `test/scheduling/confirm-reservation.e2e-spec.ts`;
- `test/finances/monthly-payment.e2e-spec.ts`.

Comando de compilação executado:

```powershell
pnpm run build
```

Resultado observado: `nest build` terminou com código de saída 0.

## Configuração de infraestrutura observada

O arquivo `.env` define conexão local em `127.0.0.1:5432`, banco `fitvital_db` e usuário `fitvital_user`. O conteúdo de credenciais não foi reproduzido neste artefato.

O `compose.yaml` declara um único serviço PostgreSQL:

- Imagem: `postgres:17`;
- Porta publicada: `5432:5432`;
- Volume persistente: `fitvital_postgres_data`;
- Healthcheck configurado.

No ambiente atual, Docker não conseguiu alcançar o daemon:

```text
failed to connect to the docker API at npipe:////./pipe/dockerDesktopLinuxEngine
```

## Rastreabilidade e estado Git

Situação Git antes deste artefato:

- Branch atual: `main`;
- Árvore de trabalho: sem alterações;
- Branches locais/remotas verificadas: `main`, `Branch-4-testes`, `feat/issue-1-agendamento-treino`, `feat/issue-3-pagamento-mensalidade` e branches remotas relacionadas.

Não foi encontrada evidência desta execução de:

- Branch específica do teste integrado do Material 08;
- Pull Request específico do novo teste integrado;
- Commit criado para o Material 08.

Nenhum commit, push, merge ou alteração de produção foi realizado durante este diagnóstico.

## Pendências técnicas

1. Recuperar ou produzir os artefatos 07-02 a 07-08 que não estão no workspace.
2. Definir o caso de uso efetivamente autorizado para o Material 08. O único artefato disponível indica UC01 — Solicitar Agendamento, mas o código atual é majoritariamente de confirmação de agendamento e pagamento mensal.
3. Identificar a implementação em memória esperada do projeto. Atualmente não existe no estado atual de `main`.
4. Disponibilizar PostgreSQL ou separar os testes que não dependem de banco dos testes E2E.
5. Reconciliar o módulo atual com TypeORM com o requisito do Material 08 de Repository em memória real.
6. Confirmar Issue, Sub-Issue responsável, responsável/revisor, política de WIP e PR/branch-base corretos.

## Condição para prosseguir

Não iniciar novo teste integrado que utilize `AppModule` enquanto não houver PostgreSQL disponível ou enquanto não estiver confirmado que o teste deve continuar com persistência real.

O projeto não atende no estado atual à pré-condição de repositório em memória do Material 08. Portanto, o próximo passo deve ser a regularização da ausência de artefatos/contratos ou a confirmação explícita de que a equipe deseja adaptar o diagnóstico ao estado real já persistente em TypeORM.
