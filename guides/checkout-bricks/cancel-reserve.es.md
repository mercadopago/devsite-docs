# Cancela la reserva

La cancelación de una reserva se produce cuando, por algún motivo, no se aprueba el pago de una compra y se debe devolver el valor de la reserva al límite de la tarjeta del cliente o cuando un comprador desiste de la compra. Para más información sobre reembolsos y cancelaciones de pagos, consulte la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-bricks/payment-management/cancellations-and-refunds).

Para cancelar una reserva, utiliza uno de nuestros códigos disponibles a continuación.

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

La respuesta devolverá el siguiente resultado:

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