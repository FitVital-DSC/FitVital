# 12-07 — Registro arquitetural

## ADR-01 — Separação de mapeamentos

Status: aceito.

Decisão: manter `ConfirmReservationResponseMapper` separado de `SchedulingMapper`.

Consequência: a representação HTTP não invade domínio ou persistência.

## ADR-02 — Provider mensal real

Status: aceito.

Decisão: remover a implementação `useValue` paga no módulo de agendamento e reutilizar o provider real exportado por `FinancesModule`.

Consequência: o caso de uso avalia mensalidades persistidas reais.

## ADR-03 — Limpeza de testes

Status: aceito.

Decisão: usar limpeza por UUID nos novos fixtures e não `repository.clear()` como estratégia principal.

Consequência: menor impacto em dados compartilhados do banco de desenvolvimento.
