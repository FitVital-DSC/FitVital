# 04-04 — Especificação do Teste RED

## Cenário

Para o UC01, o cenário selecionado é: **confirmar uma reserva existente quando o aluno possui mensalidade paga**.

- **Nível:** teste end-to-end.
- **Justificativa:** verifica a fronteira HTTP, a orquestração do NestJS e a persistência do estado confirmado.
- **Arquivo existente:** `fitvital-backend/test/scheduling/confirm-reservation.e2e-spec.ts`
- **Comando:** `pnpm test:e2e -- test/scheduling/confirm-reservation.e2e-spec.ts`

## Critério esperado

Uma requisição `POST /scheduling/:id/confirm` deve retornar HTTP 200, informar a confirmação e persistir o status `CONFIRMED`.

O teste já existente usa um agendamento `PENDING`, uma mensalidade paga fornecida pelo módulo e verifica a resposta HTTP e o registro persistido. Nenhum código de produção foi criado ou alterado para satisfazê-lo.

## Dependências

- Node.js e pnpm instalados;
- dependências do `fitvital-backend` instaladas;
- PostgreSQL acessível com variáveis de ambiente válidas;
- migrations/schema disponíveis.

