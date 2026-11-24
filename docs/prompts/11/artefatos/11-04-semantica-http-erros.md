# 11-04 — Semântica HTTP e erros

## Sucesso

- método: `POST`;
- rota: `/schedulings/confirm`;
- status: `200 OK`;
- corpo: `schedulingId` e `message`.

## Entrada inválida

UUID malformado:

- status observado: `400 Bad Request`;
- corpo observado:

```json
{
  "message": ["schedulingId must be a UUID"],
  "error": "Bad Request",
  "statusCode": 400
}
```

Campo ausente produziu a mesma resposta de UUID inválido.

## Erro não encontrado

`SchedulingNotFoundException` possui filtro HTTP correspondente apenas como exceção genérica; no teste atual a rota não encontrada recebeu `500` em parte da suíte legada. Foi registrada como pendência de revisão, sem alteração indevida de semântica neste Material.
