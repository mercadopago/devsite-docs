# Cancelar reserva

La cancelación de una reserva se produce cuando, por algún motivo, no se aprueba el pago de una compra y se debe devolver el valor de la reserva al límite de la tarjeta del cliente, o cuando un comprador desiste de la compra. 

> Para más información sobre reembolsos y cancelaciones de pagos, consulta la sección [Reembolsos y cancelaciones](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).

Para cancelar una reserva, utiliza uno de nuestros códigos disponibles a continuación.

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

La respuesta devolverá el siguiente resultado

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
