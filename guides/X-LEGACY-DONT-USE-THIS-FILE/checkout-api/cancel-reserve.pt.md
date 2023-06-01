---
  sites_supported:
      - mla
      - mlb
      - mlm
      - mpe
---

# Cancelar uma reserva

Pode-se cancelar uma reserva e liberar o limite do cartão ao atualizar o atributo `status` do pagamento ao estado `cancelled`.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $payment->status = "cancelled";
  $payment->update();
?>
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");


Long paymentId = 123456789L;

PaymentClient client = new PaymentClient();
client.cancel(paymentId);
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

let paymentToBeCanceled = 123;

mercadopago.payment.cancel(paymentToBeCanceled, mercadopago, (error, response) => {
    if (error){
        console.log(error);
    }else{
        console.log(response)
    }
});
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new(ENV_ACCESS_TOKEN)

request = {
  status: 'canceled'
}

payment_response = sdk.payment.update(payment_id, request)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentClient();
Payment payment = await client.CancelAsync(paymentId);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
  "status": "cancelled"
}

payment_response = sdk.payment().update(payment_id, payment_data)
payment = payment_response["response"]
```
```curl
curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{"status": "cancelled"}'
```
]]]

## Resposta

```json
{
  ...
  "status": "cancelled",
  "status_detail": "by_collector",
  ...
  "captured": false,
  ...
}
```
