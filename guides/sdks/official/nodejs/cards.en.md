## Get customer cards

Consult a client's saved cards in order to be able to show them when making a payment.

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