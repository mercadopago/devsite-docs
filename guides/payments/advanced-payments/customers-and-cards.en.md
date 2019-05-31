# Payments with saved customers and cards

The Advanced Payments API allows you to make payments with Customers and Saved Cards for integrators that work with this business model.

> NOTE
> 
> Note
>
> View reference of [Customers & Cards](https://www.mercadopago.com.br/developers/en/guides/payments/api/customers-and-cards) for more details.

To create a payment using `Customers`, the user ID and the type must be set with the `customer` value.

```json
{
  "payer": {
    "id": "213693707-b2i8UYRe5h9NQv",
    "type": "customer"
  },
  ...
}
```
