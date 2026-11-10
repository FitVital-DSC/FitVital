# Artefato 1 — Análise técnica do caso de uso

## Identificação

- **Sistema:** FitVital
- **Caso de uso:** UC04 — Realizar Matrícula de Aluno
- **Ator principal:** Recepcionista
- **Contexto:** Gestão Financeira, com criação do Aluno
- **Fonte:** [M4 — Blueprint do Primeiro Slice](../../../../Trabalhos/M4-Blueprint%20do%20Primeiro%20Slice.md)

## Objetivo e escopo

Permitir que a Recepcionista cadastre um novo Aluno, deixe sua situação como `Ativo`, gere a primeira Mensalidade e estabeleça o vínculo com Personal Trainer quando houver.

## Pré e pós-condições

- **Pré-condição:** dados do novo Aluno estão disponíveis para a Recepcionista.
- **Pós-condição:** Aluno ativo, primeira Mensalidade gerada e vínculo com Personal, se houver.

## Fluxo principal

1. A Recepcionista informa os dados do novo Aluno.
2. O sistema cria o registro do Aluno.
3. O sistema gera a primeira cobrança.
4. O sistema estabelece o vínculo opcional com Personal Trainer.
5. O sistema confirma a matrícula.

## Fluxo alternativo

- **Falha na geração da cobrança:** a criação do Aluno é revertida para impedir “alunos fantasmas”, preservando a invariante da matrícula.

## Regra de negócio

| Código | Regra |
|---|---|
| RN05 | Aluno `Ativo` deve ter obrigatoriamente pelo menos uma Mensalidade. |

O M4 não define campos obrigatórios, endpoint, formato da Mensalidade, estratégia de transação, regra de duplicidade ou contrato do vínculo com Personal. Esses itens são pendências de refinamento, não requisitos inventados.

## Componentes e camadas propostas

- **Domínio:** `Aluno`, estado de matrícula e invariante Aluno ativo → Mensalidade.
- **Aplicação:** serviço transacional de matrícula.
- **Apresentação:** controller e DTO da Recepcionista, a definir.
- **Persistência:** repositórios de Aluno, Mensalidade e vínculo com Personal, a definir.
- **Integração:** criação da primeira Mensalidade no contexto financeiro.

## Considerações arquiteturais

O fluxo deve ser atômico: se a primeira cobrança não puder ser gerada, o Aluno não deve permanecer cadastrado. A implementação deve preferir uma transação de aplicação ou mecanismo equivalente, mantendo o domínio independente de ORM.
