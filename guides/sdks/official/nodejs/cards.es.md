## Obtener tarjetas de un cliente

Consulta el listado de tarjetas almacenadas de un cliente para poder mostrarlas al momento de hacer un pago.

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