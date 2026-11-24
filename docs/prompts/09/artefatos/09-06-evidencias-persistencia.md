# 09-06 — Evidências da Persistência Real e Durabilidade

## Registro criado

UUID usado:

```text
d13c4fd6-9a71-4796-8d9a-a4717eccaf3a
```

## Requisição HTTP

```http
POST /schedulings/confirm
Content-Type: application/json

{"schedulingId":"d13c4fd6-9a71-4796-8d9a-a4717eccaf3a"}
```

Resposta real:

```json
{"message":"Scheduling confirmed successfully","schedulingId":"d13c4fd6-9a71-4796-8d9a-a4717eccaf3a"}
```

## Antes da reinicialização

Consulta SQL e resultado:

```text
d13c4fd6-9a71-4796-8d9a-a4717eccaf3a
status: CONFIRMED
```

## Reinicialização

Somente o processo `nest start` foi encerrado e reiniciado. Os contêineres PostgreSQL permaneceram ativos.

## Depois da reinicialização

A mesma consulta pelo UUID produziu o mesmo identificador, `clientId`, status `CONFIRMED` e os mesmos timestamps de criação.

Conclusão: a durabilidade foi comprovada em PostgreSQL após reinício do backend.
