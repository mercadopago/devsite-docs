## Obter cartões de um cliente

É possível obter os dados de cartões de determinado cliente através do seu ID de cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter cartões de um cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/cards/_customers_customer_id_cards/get).

[[[
```node

  var filters = {
    id: customer_id
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
]]]