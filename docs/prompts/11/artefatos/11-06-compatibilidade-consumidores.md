# 11-06 — Compatibilidade com consumidores

## Compatibilidade

O contrato estabilizado usa exatamente a resposta já observada na API containerizada anteriormente:

```json
{
  "schedulingId": "<UUID>",
  "message": "Scheduling confirmed successfully"
}
```

Portanto, não houve mudança de formato para o cliente atual.

O campo `status`, antes declarado no DTO mas não enviado pelo código real, não será considerado parte do contrato público.

## Risco mitigado

Propriedades internas ou futuras não vazam pela serialização manual controlada pelo mapper.
