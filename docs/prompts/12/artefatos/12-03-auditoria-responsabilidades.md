# 12-03 — Auditoria de responsabilidades

## Matriz

| Componente | Responsabilidade | Avaliação |
|---|---|---|
| `SchedulingController` | Receber HTTP e delegar | Adequada |
| `ConfirmSchedulingDto` | Validar entrada | Adequada |
| `ConfirmReservationResponseDto` | Definir saída pública | Adequada após estabilização |
| `ConfirmReservationResponseMapper` | Transformar resposta HTTP | Adequada |
| `SchedulingService` | Coordenar caso de uso | Adequada |
| `SchedulesRepository` | Contrato de persistência | Adequada |
| `TypeOrmSchedulingRepository` | Adaptar TypeORM | Adequada |
| `SchedulingMapper` | Adaptar domínio/ORM | Adequada |
| `SchedulingEntity` | Persistência | Adequada |
| `SchedulingModule` | Compor providers | Necessita verificação efetiva |

## Critérios

1. **Separação de responsabilidades:** Confirmada entre HTTP, aplicação, domínio e infraestrutura.
2. **Acoplamento:** Núcleo não importa ORM. O adaptador depende do contrato e do TypeORM apenas na infraestrutura.
3. **Coesão:** Cada mapper tem responsabilidade distinta.
4. **Duplicação:** Não foi encontrada duplicação arquitetural necessária.
5. **Legibilidade:** Classes e arquivos seguem convenções existentes.
6. **Testabilidade:** Service possui mocks unitários e adaptador possui integração real.
7. **Estabilidade de contratos:** Token e assinatura do Repository foram preservados.
8. **Configuração:** Providers resolvem os adaptadores concretos por token.

## Achados

### Observação

O teste E2E de agendamento usa o banco configurado no `AppModule` e limpa registros por ID em parte dos cenários.

### Problema confirmado

`SchedulingModule` substituía `MONTHLYPAYMENT_REPOSITORY` por `useValue` sempre pago. Isso fazia o agendamento ignorar o adapter mensal real e escondia o estado real da mensalidade.

Correção aplicada:

- remoção do `useValue`;
- uso do `FinancesModule` exportado;
- criação de mensalidades reais nos testes que confirmam agendamento;
- substituição parcial de `repository.clear()` por limpeza por UUID.
