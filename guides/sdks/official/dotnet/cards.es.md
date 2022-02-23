## Obtener tarjetas de un cliente

Consulta el listado de tarjetas almacenadas de un cliente para poder mostrarlas al momento de hacer un pago.

[[[
```dotnet

var customerClient = new CustomerClient();
ResourcesList<CustomerCard> customerCards = await customerClient.ListCardsAsync("CUSTOMER_ID");

```
]]]