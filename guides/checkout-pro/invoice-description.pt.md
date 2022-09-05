# Descrição de fatura

Descrição de fatura é uma configuração que permite definir o nome do estabelecimento que será exibido na fatura do comprador. Isto permite a identificação do negócio e evita contestações desnecessárias.

Para exibir a descrição na fatura do comprador, envie um **POST** com o parâmetro `statement_descriptor` informando o nome do estabelecimento conforme indicado no exemplo abaixo ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição.

```json
"statement_descriptor": "MEUNEGOCIO"
```