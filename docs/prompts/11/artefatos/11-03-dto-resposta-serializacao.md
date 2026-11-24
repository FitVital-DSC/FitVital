# 11-03 — DTO de resposta e serialização

## Alterações realizadas

Arquivo atualizado:

- `src/modules/scheduling/dtos/confirm-reservation-response.dto.ts`.

O DTO passou a conter somente:

```typescript
export class ConfirmReservationResponseDto {
  schedulingId!: string;
  message!: string;
}
```

Foi criado o mapper HTTP:

- `src/modules/scheduling/mappers/confirm-reservation-response.mapper.ts`;
- método `toResponse(schedulingId)`.

## Controller

O `SchedulingController` usa o DTO e o mapper como retorno explícito, preservando `SchedulingService.confirmReservation(schedulingId): Promise<void>`.

## ValidationPipe

Em `src/main.ts`, a configuração passou a usar:

```typescript
new ValidationPipe({
  whitelist: true,
  transform: true,
})
```
