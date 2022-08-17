# Descrição de fatura

Descrição de fatura é uma configuração que permite definir o nome do estabelecimento que será exibido na fatura do comprador. Isto permite a identificação do negócio e evita contestações desnecessárias.

1. Envie um POST com o parâmetro "statement_descriptor" ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post).
2. Em "statement_descriptor", insira o nome do estabelecimento.
3. Execute a requisição.

```json
"statement_descriptor": "MEUNEGOCIO"
```