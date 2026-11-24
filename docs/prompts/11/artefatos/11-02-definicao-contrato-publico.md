# 11-02 — Definição do contrato público

## Contrato de entrada

```json
{
  "schedulingId": "UUID"
}
```

- `schedulingId`: string, UUID válido, obrigatório;
- validação: `@IsUUID()`;
- propriedade extra: descartada pelo `ValidationPipe` com `whitelist: true`.

## Contrato público de saída

```json
{
  "schedulingId": "UUID",
  "message": "Scheduling confirmed successfully"
}
```

Campos:

- `schedulingId`: string UUID, obrigatório;
- `message`: string, obrigatório.

## Responsabilidades distintas

- DTO de entrada: valida a fronteira HTTP;
- domínio: contém estado e regras do agendamento;
- ORM: representa persistência;
- DTO de resposta: fixa somente o que consumidores recebem;
- mapper HTTP: converte identificador público e mensagem em DTO de resposta.

Nenhum campo novo de domínio ou persistência foi introduzido.
