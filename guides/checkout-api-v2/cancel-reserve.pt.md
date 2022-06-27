---
  sites_supported:
      - mla
      - mlb
      - mlm
      - mpe
---

# Cancelar reserva

O cancelamento de uma reserva ocorre quando, por algum motivo, o pagamento de uma compra não é aprovado e a reserva do valor precisa retornar para o limite do cartão do cliente ou quando um comprador desiste da compra.

Para cancelar uma reserva envie um PUT com o parâmetro `status` ao endpoint [/v1/payments/{id}](/developers/pt/reference/payments/_payments_id/put) e execute a requisição ou, se preferir, utilize um de nossos SDKs abaixo. 

> NOTE
>
> Importante
>
> Para mais informações sobre reembolsos e cancelamentos de pagamentos, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-api/additional-content/cancellations-and-refunds).



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

A resposta trará o seguinte resultado

[[[
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
]]]

> PREV_STEP_CARD_PT
>
> Capturar pagamento autorizado
>
> Conheça as formas disponíveis para captura de um pagamento autorizado.
>
> [Capturar pagamento autorizado](/developers/pt/docs/checkout-api/payment-management/capture-authorized-payment)


> NEXT_STEP_CARD_PT
>
> Reembolsos e cancelamentos
>
> Saiba como realizar reembolsos e/ou cancelamentos de um pagamento.
>
> [Alterar data de vencimento](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds)

