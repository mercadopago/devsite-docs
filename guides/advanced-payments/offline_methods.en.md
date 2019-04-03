# Payments with Offline Methods

You can make payments with offline or cash payment methods in addition to credit and debit cards.

> NOTE
> 
> Note
>
> You can view the [offline payment methods](https://www.mercadopago.com.br/developers/en/guides/payments/api/other-payment-ways) for more details.
> You can also view the [supported payment methods](https://www.mercadopago.com.br/developers/en/guides/advanced-payments/supported-payment-methods) through the Advanced Payments API.

#### Request
In the request `body` you must define the payment as `ticket` and the method according to the country.
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
In the response, you will find the `external_resource_url` field with the url that contains the instructions so that the Buyer can make the payment.
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
