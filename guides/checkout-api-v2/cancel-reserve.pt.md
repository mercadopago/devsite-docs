---
  sites_supported:
      - mla
      - mlb
      - mlm
      - mpe
      - mlu
---

# Cancelar reserva

O cancelamento de uma reserva ocorre quando, por algum motivo, o pagamento de uma compra não é aprovado e a reserva do valor precisa retornar para o limite do cartão do cliente ou quando um comprador desiste da compra.

> Para mais informações sobre reembolsos e cancelamentos de pagamentos, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds).

Para cancelar uma reserva utilize um dos códigos disponíveis abaixo.


[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->cancel($payment_id, $request_options);
  echo $payment->status;
?>
```
```node
import { MercadoPagoConfig }, { Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payments = new Payments(client);

const paymentId = '123';

payments.cancel(paymentId, { idempotencyKey: '<SOME_UNIQUE_VALUE>' }).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");


Long paymentId = 123456789L;

PaymentClient client = new PaymentClient();
client.cancel(paymentId);
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



