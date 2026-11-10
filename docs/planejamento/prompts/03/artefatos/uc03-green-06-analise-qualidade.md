# UC03 GREEN 06 — Análise preliminar de qualidade

- O serviço está separado do controller e recebe uma porta de repositório.
- Os testes unitários usam dublês da persistência.
- O teste E2E cobre a fronteira HTTP e a persistência.
- Novos cenários de borda podem ser tratados na etapa de refatoração: transições inválidas, idempotência e falhas de banco.

Não foi realizada refatoração nesta etapa.
