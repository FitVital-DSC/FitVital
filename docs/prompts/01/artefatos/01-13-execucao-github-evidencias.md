# Artefato 13 — Execução no GitHub e evidências

## Execução

- **Data:** 03/11/2026
- **Repositório:** [FitVital-DSC/FitVital](https://github.com/FitVital-DSC/FitVital)
- **Branch padrão:** `main`
- **Conta usada na CLI:** `marianaveigaa`
- **Código-fonte alterado:** não
- **Branch, commit ou Pull Request criado:** não

## Issue principal

- [#12 — [UC01] Solicitar Agendamento de Treino](https://github.com/FitVital-DSC/FitVital/issues/12)

O corpo do Epic foi atualizado para conter as referências reais das Sub-Issues.

## Sub-Issues

| ID provisório | Número real | Título | URL | Estado no Board | Responsável |
|---|---:|---|---|---|---|
| SUB-01 | #13 | Refinar domínio de agendamento | [#13](https://github.com/FitVital-DSC/FitVital/issues/13) | Todo* | A definir |
| SUB-02 | #14 | Definir comandos, DTOs e portas do agendamento | [#14](https://github.com/FitVital-DSC/FitVital/issues/14) | Todo* | A definir |
| SUB-03 | #15 | Implementar serviço de aplicação do UC01 | [#15](https://github.com/FitVital-DSC/FitVital/issues/15) | Todo* | A definir |
| SUB-04 | #16 | Planejar adaptador HTTP do agendamento | [#16](https://github.com/FitVital-DSC/FitVital/issues/16) | Todo* | A definir |
| SUB-05 | #17 | Implementar persistência do agendamento | [#17](https://github.com/FitVital-DSC/FitVital/issues/17) | Todo* | A definir |
| SUB-06 | #18 | Proteger concorrência e capacidade | [#18](https://github.com/FitVital-DSC/FitVital/issues/18) | Todo* | A definir |
| SUB-07 | #19 | Validar automaticamente o slice | [#19](https://github.com/FitVital-DSC/FitVital/issues/19) | Todo* | A definir |
| SUB-08 | #20 | Consolidar documentação e rastreabilidade | [#20](https://github.com/FitVital-DSC/FitVital/issues/20) | Todo* | A definir |

\* O estado `Todo` é o estado padrão atribuído automaticamente pelo GitHub Project. Ele ainda precisa ser substituído manualmente por `Backlog` ou `Ready`, conforme o planejamento.

## GitHub Project

- [Project #2 — Planejamento - UC01 Solicitar Agendamento de Treino](https://github.com/orgs/FitVital-DSC/projects/2)
- Itens adicionados: Epic #12 e Sub-Issues #13–#20.
- Visibilidade observada: privada.

### Pendência de configuração do Status

O Project foi criado com o campo protegido padrão `Status`, contendo `Todo`, `In Progress` e `Done`. A GitHub CLI permitiu criar o Project e adicionar itens, mas recusou a exclusão do campo padrão (`Only custom fields can be deleted`) e não disponibilizou comando para editar suas opções. Portanto, os cinco estados metodológicos **ainda não estão configurados**.

Na interface web do Project, a equipe deve:

1. Abrir o Project #2.
2. Abrir o menu de configuração do campo `Status`.
3. Renomear `Todo` para `Backlog`, se a interface permitir.
4. Adicionar `Ready` e `In Review`.
5. Manter `In Progress` e `Done`.
6. Remover qualquer estado extra, de modo que restem exatamente `Backlog`, `Ready`, `In Progress`, `In Review` e `Done`.
7. Mover o Epic e SUB-01/SUB-02 para `Ready`.
8. Manter SUB-03 a SUB-08 em `Backlog`.

Se a interface não permitir editar o campo protegido, a equipe deve fazer a configuração pelo editor de campos do próprio GitHub ou registrar a limitação e não considerar o board conforme até resolver.

## Labels criadas ou atualizadas

- `uc01-agendamento`
- `feature`
- `test`
- `documentation`
- `governance`
- `domain`
- `application`
- `api`
- `infra`
- `persistence`
- `priority:high`
- `risk`

## Versionamento local pendente

Os artefatos locais ainda não foram commitados nem enviados. Se desejado, executar na raiz `C:\FitVital`:

```powershell
git add docs\planejamento\prompts\01\artefatos
git commit -m "docs: planejamento técnico e rastreabilidade no GitHub"
git push
```

## Segurança

Após concluir a configuração, especialmente em computador compartilhado ou laboratório, encerrar a sessão local:

```powershell
gh auth logout
```

Não registrar nem compartilhar tokens, códigos de autenticação ou credenciais.
