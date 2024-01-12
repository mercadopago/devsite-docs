# Cancele a reserva

O cancelamento de uma reserva ocorre quando, por algum motivo, o pagamento de uma compra não é aprovado e a reserva do valor precisa retornar para o limite do cartão do cliente ou quando um comprador desiste da compra. Para mais informações sobre reembolsos e cancelamentos de pagamentos, veja a seção [Reembolsos e cancelamentos](/developers/pt/docs/checkout-bricks/payment-management/cancellations-and-refunds).

Para cancelar uma reserva utilize um dos códigos disponíveis abaixo.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->cancel($payment_id, $request_options);
  echo $payment->status;
?>
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

Long paymentId = 123456789L;

Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

PaymentClient client = new PaymentClient();
client.cancel(paymentId, requestOptions);
```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payment = new Payment(client);

payment.cancel({
id: '<PAYMENT_ID>',
requestOptions: {
idempotencyKey: '<IDEMPOTENCY_KEY>'
},
}).then(console.log).catch(console.log);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new(ENV_ACCESS_TOKEN)

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

request = {
  status: 'canceled'
}

payment_response = sdk.payment.update(payment_id, request, custom_request_options)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var client = new PaymentClient();
Payment payment = await client.CancelAsync(paymentId, requestOptions);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
  "status": "cancelled"
}

payment_response = sdk.payment().update(payment_id, payment_data, request_options)
payment = payment_response["response"]
```
```curl
curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
  -d '{"status": "cancelled"}'
```
]]]

A resposta trará o seguinte resultado:

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