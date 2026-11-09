# Artefato 12 — Relatório de consistência e cobertura

## Quantidade planejada

- **1 Issue principal (Epic):** UC02 — Realizar Check-in (Controle de Acesso)
- **8 Sub-Issues:** SUB-01 a SUB-08
- **Total:** 9 Issues planejadas

## Cobertura

O planejamento cobre a apresentação do aluno na catraca, consulta financeira, RN01, verificação e proteção da lotação pela RN02, liberação, bloqueios, registro da entrada e incremento da ocupação. Também cobre persistência, integração, falhas técnicas e testes futuros.

Não foram incluídos o processo de saída/decremento, regras de pagamento, protocolo físico específico ou códigos HTTP não documentados.

## Caminho crítico

`SUB-01 → SUB-02 → SUB-03 → SUB-04 → SUB-06 → SUB-07 → SUB-08`

SUB-05 pode evoluir em paralelo com SUB-04 após a definição dos contratos. SUB-06 é crítico para impedir a violação de capacidade em concorrência.

## Decisões dependentes de validação

1. Definir o identificador fornecido por cartão/biometria.
2. Confirmar a porta e a fonte do status financeiro em tempo real.
3. Definir o protocolo ou adapter da catraca física.
4. Escolher o mecanismo de consistência/lock da ocupação.
5. Confirmar como falhas do dispositivo serão comunicadas.
6. Delimitar a relação operacional do UC02 com UC01 e UC03.

Esses pontos são hipóteses ou pendências técnicas; não foram tratados como requisitos confirmados.

## Riscos e recomendações

- **Última vaga concorrida:** decidir a estratégia transacional antes da implementação.
- **Autorização falsa em falha externa:** exigir resposta explícita da catraca e do Financeiro.
- **Acoplamento entre contextos:** usar portas e evitar acesso direto a tabelas.
- **Contrato físico indefinido:** validar adapter antes de prometer integração real.
- **Contador inconsistente:** testar atomicidade entre autorização, registro e incremento.

## Conclusão

Os 12 artefatos estão consistentes para configurar Issues, labels e Project do UC02, condicionados à validação das decisões pendentes. Nenhuma funcionalidade foi declarada implementada ou pronta.
