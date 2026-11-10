# Artefato 12 — Relatório de consistência e cobertura

## Consistência

- O objetivo e a RN05 foram extraídos do M4.
- O fluxo alternativo exige rollback quando a cobrança falha.
- A Mensalidade é obrigatória para Aluno ativo.
- Nenhum campo, endpoint ou regra adicional foi inventado.

## Cobertura

Todos os fluxos documentados possuem Sub-Issue, critério de aceite e verificação planejada. As decisões ainda ausentes estão marcadas como pendências no contrato, no Epic e na revisão.

## Riscos

- Implementação parcial pode deixar Aluno sem Mensalidade.
- Falta de transação pode criar “alunos fantasmas”.
- O vínculo com Personal pode ser modelado incorretamente se sua cardinalidade não for confirmada.
