# Artefato 12 — Relatório de consistência e cobertura

## Quantidade planejada

- **1 Issue principal (Epic):** UC01 — Solicitar Agendamento de Treino
- **8 Sub-Issues:** SUB-01 a SUB-08
- **Total:** 9 Issues planejadas

## Cobertura

O planejamento cobre o fluxo principal, bloqueio por inadimplência (RN01), capacidade da academia (RN02), choque nominal (RN03), limite/disponibilidade do personal (RN04), entradas inválidas, concorrência, persistência, evento/log e falha de infraestrutura. Cada item está relacionado a pelo menos uma Sub-Issue na matriz de rastreabilidade.

## Caminho crítico de implementação

`SUB-01 → SUB-02 → SUB-03 → SUB-05 → SUB-06 → SUB-07 → SUB-08`

SUB-04 pode avançar em paralelo com SUB-05 após a estabilização dos contratos e do serviço. SUB-06 é crítico para a garantia de RN02 e depende da definição da estratégia de lock.

## Decisões que exigem validação

1. Escolher lock otimista ou pessimista para a capacidade.
2. Confirmar o limite numérico e a semântica de disponibilidade do personal.
3. Corrigir no documento funcional a referência de choque nominal como RN03 e de limite do personal como RN04.
4. Confirmar o formato final do evento `AgendamentoConfirmado` e o escopo do log.
5. Confirmar o mecanismo de autenticação/JWT disponível para extrair `alunoId`.

Esses itens são propostas de detalhamento ou pendências documentais; não foram tratados como fatos novos.

## Riscos e recomendações

- **Condição de corrida na última vaga:** decidir e testar o lock antes de concluir a persistência.
- **Acoplamento entre contextos:** preservar portas e impedir consultas diretas a tabelas financeiras.
- **Divergência de contrato HTTP:** revisar DTO, códigos e autenticação conjuntamente.
- **Ambiguidade de regra RN04:** atualizar a documentação antes da implementação.
- **Integrações externas fora do slice:** manter mocks/dublês e não antecipar Gateway ou catraca.
- **Rastreabilidade perdida:** exigir referência ao UC01, Sub-Issue e critério de aceite em cada futura entrega.

## Conclusão

O conjunto é consistente para configurar Issues, labels e Project e iniciar a implementação futura após as validações pendentes. Nenhuma funcionalidade foi declarada implementada ou pronta; `Ready` significa apenas que o planejamento possui informação suficiente para iniciar a atividade correspondente.
