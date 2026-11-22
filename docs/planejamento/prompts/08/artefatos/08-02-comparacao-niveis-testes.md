# Artefato 08-02 - Comparacao dos Niveis de Teste

| Criterio | Nivel A - Unitario do Service | Nivel B - HTTP com Service mockado | Nivel C - Integrado do Backend |
|---|---|---|---|
| Componentes reais | `MonthlyPaymentService`, `MonthlyPayment` | Controller, DTO, ValidationPipe | Controller, DTO, ValidationPipe, Service, contrato, repositorio em memoria |
| Componentes simulados | `MonthlyPaymentRepository` | `MonthlyPaymentService` | Nenhum mock no fluxo real; o repositório em memoria e uma implementacao concreta |
| Dependencias exercitadas | Metodo do servico e contrato de repositorio | Roteamento, validacao e delegacao | Injeção via token, composicao, rota, servico e armazenamento em memoria |
| Comportamento verificado | PAID, FAILED, inexistente e idempotencia | Frontiera HTTP e payloads | Requisicao ate persistencia em memoria |
| Evidencia | 7 testes unitarios existentes | Teste E2E existente, nao aprovado por banco | Nao executado enquanto nao existir repositório em memoria e teste integrado |
| Limitacao | Nao prova Controller nem modulo | Nao executa Service ou repositorio reais | Nao prova PostgreSQL, SQL, migrations ou transacoes |
| Requisitos pendentes | Nenhum unitario conhecido adicional | Cenarios HTTP invalidos/validos reais | Injeção integrada e inspeção direta do estado em memoria |

## Conclusao

Os testes unitarios verificam o comportamento isolado. Os testes HTTP existentes nao substituem o fluxo integrado porque carregam o `AppModule` com TypeORM/PostgreSQL. O Material 08 exige um teste isolado em que o modulo real da funcionalidade use um repositório em memoria por meio de `MONTHLYPAYMENT_REPOSITORY`, sem mocks de Service ou Controller.
