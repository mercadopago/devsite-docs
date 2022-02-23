## Obtener tarjetas de un cliente

Consulta el listado de tarjetas almacenadas de un cliente para poder mostrarlas al momento de hacer un pago.

[[[
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
]]]