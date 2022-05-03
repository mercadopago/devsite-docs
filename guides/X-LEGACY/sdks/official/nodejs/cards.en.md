## Get customer cards

It is possible to get the card data of a certain customer through their customer ID using the SDK below. For details on request parameters, check the [Get customer cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/cards/_customers_customer_id_cards/get) API.

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