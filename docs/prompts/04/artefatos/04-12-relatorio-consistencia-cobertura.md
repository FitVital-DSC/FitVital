# Artefato 12 — Relatório de consistência e cobertura

## Consistência

- O objetivo e a RN05 foram extraídos do M4.
- O fluxo alternativo exige rollback quando a cobrança falha.
- A Mensalidade é obrigatória para Aluno ativo.
- Nenhum campo, endpoint ou regra adicional foi inventado.

## Cobertura

O primeiro critério do slice unitário foi convertido em teste automatizado. A execução confirmou uma falha RED funcional em `EnrollmentService.enrollStudent`, com 1 teste executado e 1 falha. Os fluxos de rollback, duplicidade, vínculo opcional, persistência e API permanecem pendentes para as Sub-Issues seguintes.

## Riscos

- Implementação parcial pode deixar Aluno sem Mensalidade.
- Falta de transação pode criar “alunos fantasmas”.
- O vínculo com Personal pode ser modelado incorretamente se sua cardinalidade não for confirmada.
- O teste atual não deve ser convertido em GREEN nesta etapa; a implementação pertence ao Material 05.
