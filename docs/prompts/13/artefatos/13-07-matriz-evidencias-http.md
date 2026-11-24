# 13-07 - Matriz de evidencias HTTP

| Nivel | Ferramenta | Executado | Resultado |
|---|---|---|---|
| Manual | REST Client `.http` | Pendente | Arquivos criados; execucao manual nao registrada pelo usuario |
| Manual | curl/Invoke-WebRequest | Sim | 200, 401, 403, 404 |
| Automatizado | `run-checks.sh` | Sim | 9 ok, 0 falhas |
| Automatizado | `run-checks.sh --durability` | Sim | 11 ok, 0 falhas |
| Testes | Suite rapida | Sim | 28 testes passando |
| Persistencia | Integracao PostgreSQL | Sim | 1 teste passando |
| E2E | Suite E2E | Sim | 11 testes passando contra banco de teste |
| Containerizado | API temporaria | Sim | Contrato UC08 confirmado |
