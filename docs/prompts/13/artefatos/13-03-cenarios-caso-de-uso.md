# 13-03 - Cenarios do caso de uso

| Cenario | Requisicao | Esperado | Obtido | Conclusao |
|---|---|---|---|---|
| UC08 com JWT valido e registro | `GET /schedulings` | 200 | 200 | Confirmado |
| Sem autenticacao | `GET /schedulings` | 401 | 401 | Confirmado |
| JWT sem claim clientId | `GET /schedulings` | 403 | 403 | Confirmado |
| Lista vazia | `GET /schedulings` | 404 | 404 em ambiente temporario de teste | Confirmado |
| Rota inexistente | `GET /schedulings/rota-inexistente` | 404 | 404 | Confirmado |

Nao houve criacao de dados pelo script. Os cenarios positivos reutilizam dados existentes no banco configurado.
