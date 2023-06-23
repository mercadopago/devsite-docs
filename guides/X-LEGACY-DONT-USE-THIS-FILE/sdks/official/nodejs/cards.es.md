## Obtener tarjetas de un cliente

Es posible obtener los datos de la tarjeta de un determinado cliente a través de su ID de cliente utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Obtener tarjetas de un cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/cards/_customers_customer_id_cards/get).

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