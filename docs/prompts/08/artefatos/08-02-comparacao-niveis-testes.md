# 08-02 — Comparação dos níveis de teste

## Arquivos existentes

Testes unitários encontrados:

- `src/modules/scheduling/services/scheduling.service.spec.ts`;
- `src/modules/finances/services/monthlypayment.service.spec.ts`;
- `src/app.controller.spec.ts`.

Testes HTTP/E2E encontrados:

- `test/app.e2e-spec.ts`;
- `test/scheduling/scheduling.e2e-spec.ts`;
- `test/scheduling/confirm-reservation.e2e-spec.ts`;
- `test/finances/monthly-payment.e2e-spec.ts`.

Não foi localizado um teste integrado consolidado que importa o módulo real da funcionalidade sem mocks e usa um repositório em memória real.

## Linha de base observada

Na execução de `pnpm test --run`, 3 arquivos passaram e 4 falharam. Foram observados 6 testes aprovados, 1 falha de teste e 5 testes skipped. Os testes unitários não importam `AppModule` e não ficaram bloqueados pela conexão PostgreSQL.

## Matriz comparativa

| Critério | Nível A — Unitário do Service | Nível B — HTTP com Service simulado | Nível C — Integrado do Backend |
|---|---|---|---|
| Componentes reais | `SchedulingService` ou `MonthlyPaymentService` | Existem testes HTTP/E2E, mas não foi confirmado um cenário com Controller real e Service efetivamente simulado no código disponível | Não implementado no estado atual |
| Componentes simulados | Repositórios por `useValue`/`vi.fn()` nos specs de Service | Alguns testes HTTP/E2E existentes usam `AppModule` e TypeORM; não há evidência de suíte HTTP frontal com mock identificada no Material 07 | Nenhum, quando implementado conforme o objetivo |
| Dependências exercitadas | Contratos de repositório injetados por token | Roteamento, DTO, Pipe e container, conforme o teste específico | Controller + Service + contrato + implementação em memória |
| Comportamento verificado | Busca, confirmação, validação de exceções e processamento de pagamento | Inicialização HTTP e operações de endpoints existentes | Fluxo completo de uma requisição até o repositório real em memória |
| Evidência produzida | Resultados unitários de Vitest; a linha de base mostrou que os specs unitários passaram | Falha: os testes E2E não iniciaram sem PostgreSQL | Ainda não produzida |
| Limitações | Não exerce rota HTTP nem a resolução completa dos módulos | Não comprova o Service real nem um repositório em memória real quando existe mock do Service | Não comprova PostgreSQL, transações ou constraints SQL |
| Requisitos não cobertos | Roteamento, HTTP, injeção completa e persistência | Comportamento integrado real entre camadas | Persistência relacional real |

## Conclusão técnica

O teste HTTP com Service simulada não substitui o teste integrado com Service e Repositório reais. Além disso, o repositório em memória requerido pelo Material 08 não está implementado no estado atual de `main`.

Os testes existentes chamam `AppModule`, que registra módulos TypeORM e tenta conectar ao PostgreSQL. Portanto, eles não representam o nível integrado em memória planejado pelo Material 08.
