## Pagos con Customers

La API de Advanced Payments permite realizar pagos con Clientes y tarjetas guardadas para integradores que trabajen con este modelo de negocio.

> NOTE
>
> Ver referencia de [Customers & Cards](https://www.mercadopago.com.ar/developers/es/guides/payments/api/customers-and-cards) para mayor información.

Para crear un pago usando `Customers`, se setea el ID del usuario y el tipo con el valor `customer`.

```json
{
  "payer": {
    "id": "213693707-b2i8UYRe5h9NQv",
    "type": "customer"
  },
  ...
}
```