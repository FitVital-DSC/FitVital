# Artefato 08-07 - Preparacao Conceitual para Persistencia Real

## Migracao futura

A futura persistencia real deve implementar o mesmo contrato `MonthlyPaymentRepository`, preservando o token `MONTHLYPAYMENT_REPOSITORY`.

## Operacoes necessarias

- tabela ou schema de mensalidades;
- coluna para identificador UUID;
- coluna para aluno/cliente;
- enum para `PENDING`, `PAID` e possivelmente `OVERDUE`;
- data de pagamento;
- timestamps de criacao e atualizacao;
- migration criavel e reversivel;
- testes de integracao contra PostgreSQL separado.

## Criterios de substituicao

A implementacao futura nao deve exigir mudancas no Controller ou no Service. Deve ser conectada ao mesmo token no modulo.

## Limitacoes da memoria

- dados perdidos ao reiniciar o processo;
- sem transacoes;
- sem constraints SQL;
- sem concorrencia real;
- sem testes de migration;
- sem durabilidade.
