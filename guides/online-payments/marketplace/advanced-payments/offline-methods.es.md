---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Pagos con Medios offline

Se pueden realizar pagos con medios de pago offline o en efectivo además de tarjetas de crédito o débito. Por ejemplo, a través de transferencias o lugares de pago físicos.

> NOTE
>
> Nota
>
> Puedes consultar los [medios de pago offline](https://www.mercadopago.com.ar/developers/es/guides/payments/api/other-payment-ways) para más información.
> También puedes ver los [medios de pago soportados](https://www.mercadopago.com.ar/developers/es/guides/marketplace/advanced-payments/supported-payment-methods) por la API de Advanced Payments.

#### Request
En el `body` del request debes definir el tipo de pago como `ticket` y el método según el país.
```json
{
  ...
  "payments": [
    {
      "payment_method_id": "bolbradesco",
      "payment_type_id": "ticket",
      ...
    }
  ]
}
```

#### Response
En la respuesta, encontrarás el campo `external_resource_url` con la url que contiene las instrucciones para que el comprador pueda pagar.

```json
{
  "payments": [
    {
      "payment_method_id": "bolbradesco",
      "payment_type_id": "ticket",
      ...
      "external_resource_url": "http://www.mercadopago.com/mla/payments/ticket/helperpayment_id=4265666119&payment_method_reference_id=3575111597&caller_id=121212&hash=87069857reydfhgjhkjliouy7t6rd",
      ...
    }
  ]
}
```
