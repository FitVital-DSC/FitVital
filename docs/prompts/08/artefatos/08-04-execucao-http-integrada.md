# 08-04 — Execução HTTP integrada

## Ambiente investigado

O projeto contém as seguintes rotas verificadas no código:

- `POST /schedulings/confirm`;
- `POST /finances/monthly-payments/:monthlyPaymentId/payment`.

O `main.ts` configura `ValidationPipe({ whitelist: true })` e o backend usa `AppModule`.

## Cenários esperados no código

### Agendamento

Rota: `POST /schedulings/confirm`

Corpo previsto pelo `ConfirmSchedulingDto`:

```json
{
  "schedulingId": "UUID_Válido"
}
```

Na implementação, o Controller delega ao `SchedulingService`, que busca o agendamento, busca o pagamento mensal associado e chama `confirm`.

### Mensalidade

Rota: `POST /finances/monthly-payments/:monthlyPaymentId/payment`

Corpo previsto pelo `ProcessMonthlyPaymentDto`:

```json
{
  "status": "PAID"
}
```

Na implementação, o Controller delega ao `MonthlyPaymentService`, que busca o registro e grava a alteração por meio do adaptador TypeORM.

## Evidência realmente executada

Nenhuma requisição HTTP real foi executada com sucesso nesta etapa.

Os testes E2E que iniciam `AppModule` foram executados e falharam antes de atenderem os cenários HTTP, pois o PostgreSQL não estava disponível em `127.0.0.1:5432`.

Erro observado:

```text
ECONNREFUSED 127.0.0.1:5432
```

Além disso, o Docker Desktop não estava acessível no daemon:

```text
failed to connect to the docker API at npipe:////./pipe/dockerDesktopLinuxEngine
```

## Evidência de resposta HTTP

Não foi possível verificar status HTTP, corpo completo ou conteúdo JSON real.

## Evidência de armazenamento

Não foi possível comprovar diretamente nenhuma gravação no banco.

Os testes existentes tentam consultar repositories TypeORM após as requisições, mas não chegaram a executar por falta de conexão.

Uma resposta HTTP futura não basta isoladamente para provar persistência: a confirmação deverá incluir a consulta direta ao repositório/ORM ou ao PostgreSQL quando o ambiente estiver disponível.

## Conclusão

- Rota e componentes presentes: confirmados no código;
- Aplicação HTTP iniciada com sucesso: não confirmada;
- Cenário válido executado: pendente;
- Cenário inválido executado: pendente;
- Respostas HTTP reais observadas: não disponíveis;
- Persistência real comprovada nesta fase: não disponível.
