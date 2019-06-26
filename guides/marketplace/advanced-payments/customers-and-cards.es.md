---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Pagos con clientes y tarjetas guardadas

La API de Advanced Payments permite realizar pagos con clientes y tarjetas guardadas para integradores que trabajen con este modelo de negocio.

> NOTE
>
> Nota
>
> Para mayor información ver referencia de [Customers & Cards](https://www.mercadopago.com.ar/developers/es/guides/payments/api/customers-and-cards).

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
