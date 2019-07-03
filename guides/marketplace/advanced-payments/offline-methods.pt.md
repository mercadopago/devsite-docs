---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Pagamentos com Meios offline

É possível realizar pagamentos com meios de pagamento off-line, além de cartões de crédito.

> NOTE
>
> Nota
>
> É possível consultar os [meios de pagamento off-line](https://www.mercadopago.com.br/developers/pt/guides/payments/api/other-payment-ways) para mais informação.
> Também é possível ver os [meios de pagamento suportados](https://www.mercadopago.com.br/developers/pt/guides/marketplace/advanced-payments/supported-payment-methods) pela API de Advanced Payments.

#### Request
No `body` do request defina o tipo de pagamento como `ticket` e o meio de pagamento segundo o país.
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
Na resposta,  você encontrará o campo `external_resource_url` com a url que contém as instruções para que o Comprador possa pagar.
```json
{
  "payments": [
    {
      "payment_method_id": "bolbradesco",
      "payment_type_id": "ticket",
      ...
      "external_resource_url": "http://www.mercadopago.com/mlb/payments/ticket/helperpayment_id=4265666119&payment_method_reference_id=3575111597&caller_id=121212&hash=87069857reydfhgjhkjliouy7t6rd",
      ...
    }
  ]
}
```
