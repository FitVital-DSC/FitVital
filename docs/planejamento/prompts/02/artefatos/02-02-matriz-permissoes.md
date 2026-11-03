# Artefato 02 — Matriz de permissões do GitHub

## Recomendação pelo menor privilégio

| Integrante | Papel funcional | Operações necessárias | Permissão de repositório recomendada | Project | Justificativa |
|---|---|---|---|---|---|
| Mariana Veiga | Coordenação, técnica e desenvolvimento | Editar Issues, atribuir responsáveis, revisar board, trabalhar em branches/PRs futuros e administrar configurações estritamente necessárias | `Maintain` para governança; `Write` seria suficiente para desenvolvimento. `Admin` somente se a gestão de membros/configurações exigir | Write/administração do Project conforme necessidade | A indicação de Admin é existente, mas não deve ser usada além do necessário |
| Vitor Thomé | Desenvolvimento e revisão | Editar Issues atribuídas, comentar revisões, futuramente criar branches e PRs | `Write` | Write | Permite desenvolvimento e colaboração sem administrar permissões ou repositório |

## Níveis formais

- **Read:** leitura e acompanhamento.
- **Triage:** gerenciamento de Issues/Discussions sem push direto.
- **Write:** branches, commits e Pull Requests.
- **Maintain:** branches protegidas, automações e configurações operacionais, sem administração completa.
- **Admin:** permissões, configurações avançadas e deleção do repositório.

Esta matriz é recomendação de governança e não altera permissões reais. A permissão do repositório é independente da permissão do Project. Nenhum token, credencial ou código de autenticação deve ser registrado nos artefatos.

