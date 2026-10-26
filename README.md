# FitVital - Sistema de Gestão de Academias e Personal Trainers 

## Propósito
O FitVital é um sistema de gestão para academias de pequeno e médio porte. O objetivo principal é combater a evasão de alunos por meio de um acompanhamento individualizado e organizar a ocupação física do espaço, evitando a superlotação.

## Responsáveis
- Mariana
- Vitor

## Estágio Atual
Fase de preparação do repositório e documentação arquitetural. A implementação do primeiro slice foi iniciada.

## Primeiro Slice Escolhido
**UC01 — Solicitar Agendamento de Treino.**
O recorte foca em garantir as regras de adimplência, lotação e disponibilidade de horário. Integrações com catraca física e gateway de pagamento real não farão parte deste primeiro momento (serão mockadas).

## Tecnologias Previstas (Ainda não configuradas)
- **Backend:** NestJS com TypeScript (previsto)
- **Banco de Dados:** PostgreSQL (previsto)
- **Infraestrutura:** Docker (previsto)

## Organização do Repositório
- `/docs`: Documentação de domínio e visão geral (Bounded Contexts, Regras de Negócio e Blueprint).
- `/fitvital-backend`: Código-fonte da API (NestJS e TypeScript), incluindo a estrutura inicial de entidades e persistência.
- `.gitignore`: Regras de exclusão de arquivos locais (como `node_modules`, `dist` e variáveis de ambiente).
- `README.md`: Documento principal com a visão geral, tecnologias e instruções do projeto.
- 
## Documentação Complementar
- [Visão Geral e Bounded Contexts](docs/visao-geral.md)
