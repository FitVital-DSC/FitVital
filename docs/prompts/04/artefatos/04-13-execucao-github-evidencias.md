# Artefato 13 — Execução e evidências

## Implementação

Foi criada a branch `test/uc04-matricula-red` para o primeiro slice do UC04. O teste unitário está em `fitvital-backend/src/modules/enrollment/services/enrollment.service.spec.ts` e cobre dados válidos produzindo matrícula ativa com a primeira mensalidade.

O esqueleto de `EnrollmentService` preserva o contrato aprovado, mas lança erro explícito de não implementado. Isso permite executar o teste e comprovar RED funcional sem implementar GREEN.

## Evidência RED

Comando:

```powershell
cd C:\FitVital\fitvital-backend
npm test -- --run src/modules/enrollment/services/enrollment.service.spec.ts
```

Resultado observado:

- Test Files: `1 failed`;
- Tests: `1 failed`;
- Falha: `EnrollmentService.enrollStudent is not implemented`;
- O aviso sobre `vite-tsconfig-paths` não causou a falha.

## GitHub

- **Epic:** [#38 — UC04 Realizar Matrícula de Aluno](https://github.com/FitVital-DSC/FitVital/issues/38)
- **Project:** [#5 — Planejamento - UC04 Realizar Matrícula de Aluno](https://github.com/orgs/FitVital-DSC/projects/5)

| ID | Issue | Título | Project |
|---|---:|---|---|
| SUB-01 | [#39](https://github.com/FitVital-DSC/FitVital/issues/39) | Refinar domínio de matrícula | Project #5 |
| SUB-02 | [#40](https://github.com/FitVital-DSC/FitVital/issues/40) | Definir dados e contratos | Project #5 |
| SUB-03 | [#41](https://github.com/FitVital-DSC/FitVital/issues/41) | Implementar serviço transacional | Project #5 |
| SUB-04 | [#42](https://github.com/FitVital-DSC/FitVital/issues/42) | Implementar persistência | Project #5 |
| SUB-05 | [#43](https://github.com/FitVital-DSC/FitVital/issues/43) | Integrar API da Recepcionista | Project #5 |
| SUB-06 | [#44](https://github.com/FitVital-DSC/FitVital/issues/44) | Validar automaticamente | Project #5 |
| SUB-07 | [#45](https://github.com/FitVital-DSC/FitVital/issues/45) | Consolidar documentação | Project #5 |

As Issues foram criadas como filhas da Epic e receberam comentários técnicos e dependências bloqueadoras. A SUB-02 foi movida para `Ready` após a aprovação do contrato; as demais permanecem condicionadas às camadas seguintes.

## Evidências esperadas

- URL da Epic.
- URLs das sete Sub-Issues.
- URL e número do Project.
- Labels aplicadas.
- Dependências e comentários técnicos publicados.
- Estado inicial dos itens no board.
