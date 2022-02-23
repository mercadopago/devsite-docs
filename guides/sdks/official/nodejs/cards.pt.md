## Obter cartões de um cliente

Consulte a lista de cartões armazenados de um cliente a fim de mostrá-los no momento de fazer um pagamento.

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