# Ferramentas adicionais

## Pesquisa de pagamentos

Se você precisar de uma lista dos pagamentos realizados, poderá fazer uma chamada para o endpoint de pagamento. Em nossa [Referência de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_search/get) você obterá as informações necessárias sobre os parâmetros de solicitação e resposta.

Você pode usar os parâmetros do body de um `pagamento` como query params para poder filtrar os resultados:

* **Data de início:** data de início da pesquisa.
* **Data de término:** data de término da pesquisa.
* **Status:** status do pagamento.

Aqui está um exemplo da chamada de API com estes parâmetros de consulta:

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?limit=30&range=date_created&begin_date=2019-8-4T00:00:00.001-04:00&end_date=2021-12-4T23:59:59.999-04:00&sort=date_created&criteria=desc' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```
