# 13-02 - Estrutura da colecao

## Arvore criada

```text
http-rest-client/
├── tests/
│   └── hello-world.http
├── scheduling/
│   ├── scheduling-controller.http
│   └── test-scenarios.http
└── scheduling/uc07-listar-agendamentos/
    ├── scheduling-controller.http
    └── test-scenarios.http
```

## Convencoes

- `@baseUrl` confirmado como `http://localhost:3000`.
- Os titulos incluem o resultado HTTP esperado.
- Os arquivos `.http` nao executam assercoes.
- JWTs nao sao escritos como valores secretos; os arquivos usam nomes de variaveis.
- Nenhum UUID real foi inventado.

## Containerizado

Pendente a criação em `http-rest-client/containerizado/`.
