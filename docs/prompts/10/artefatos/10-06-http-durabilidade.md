# 10-06 — HTTP e durabilidade

## Registro

UUID criado no PostgreSQL:

```text
a4d63d7e-29b4-40d4-9d92-ec2a10ad35ab
```

## Requisição real

```http
POST http://localhost:3000/schedulings/confirm
Content-Type: application/json

{"schedulingId":"a4d63d7e-29b4-40d4-9d92-ec2a10ad35ab"}
```

Resposta:

```json
{"message":"Scheduling confirmed successfully","schedulingId":"a4d63d7e-29b4-40d4-9d92-ec2a10ad35ab"}
```

## Consulta antes do reinício

```text
status = CONFIRMED
clientId = af0b054b-a876-4d15-bd27-9282d739c0c8
```

## Reinício

Foi executado somente:

```powershell
docker compose restart api
```

O PostgreSQL não foi reiniciado.

## Consulta depois do reinício

A consulta pelo mesmo UUID retornou o mesmo identificador, `clientId`, status `CONFIRMED`, `createdAt` e `updatedAt`.

Durabilidade comprovada no volume PostgreSQL com reinício somente da API.
