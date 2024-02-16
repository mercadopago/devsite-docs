# Capture authorized payment

The completion of a payment takes place after the authorized payment has been captured, which means that the amount reserved for the purchase can be debited from the card.

There are two ways to capture an authorized payment:

* **Capture the total amount of a reserve**: in which the full amount of the reserved payment is captured.
* **Capture of an amount lower than the reserved amount**: in which the partial amount of the reserved payment is captured.

Below we describe in detail each of the options and how to execute them.

## Capture total amount

To capture the total amount of a reservation, send the value to be captured to the `transaction_amount` parameter and execute the request through the codes available below.

[[[
```php
  use MercadoPago\Client\Payment\PaymentClient;

  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $client->capture($payment_id, $request_options);
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
client.capture(paymentId, requestOptions);
```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payment = new Payment(client);

payment.capture({
id: '<PAYMENT_ID>',
transaction_amount: 12.34,
requestOptions: {
idempotencyKey: '<IDEMPOTENCY_KEY>'
}
}).then(console.log).catch(console.log);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

request = {
  capture: true
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
Payment payment = await client.CaptureAsync(paymentId, requestOptions);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = { "capture": True }
payment_response = sdk.payment().update(payment_id, payment_data, request_options)
payment = payment_response["response"]
```
```curl
curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
  -d '{"capture": true}'
```
]]]

The response will return that the payment is approved and credited.

```json
{
...
"status": "approved",
"status_detail": "accredited",
...
"captured": true,
...
}
```

## Capture partial value

To capture an amount lower than the reserved amount, send the value to be captured to the `transaction_amount` parameter and execute the request through the codes available below.

----[mla]----
> WARNING
>
> Important
>
> Only available for Visa, Cabal, Master and American Express.

------------
 
[[[
```php
<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = MercadoPago\Payment::find_by_id($payment_id);
$payment->transaction_amount = 75;
$payment->capture = true;
$payment->update();
?>
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");


Long paymentId = 123456789L;

PaymentClient client = new PaymentClient();
client.capture(paymentId, new BigDecimal("75"));
```
```node
var Mercadopago = require('mercadopago');
Mercadopago.configurations.setAccessToken(config.access_token);

let captureInfo = {id: 123, transaction_amount: 5}

Mercadopago.payment.capturePartial(captureInfo, Mercadopago, (error, response) => {
if (error){
console.log(error);
}else{
console.log(response)
}
});
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

request = {
transaction_amount: 75,
capture: true
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
Payment payment = await client.CaptureAsync(paymentId, 75);
```
```python
import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
"transaction_amount": 75,
"capture": True
}

payment_response = sdk.payment().update(payment_id, payment_data)
payment = payment_response["response"]
```
```curl

curl -X PUT \
'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-d '{
"transaction_amount": 75,
"capture": true
}'
```
]]]

The answer will yield the following result:

```json
{
...
"status": "approved",
"status_detail": "accredited",
...
"transaction_amount": 75,
...
"captured": true,
...
}
```

> NOTE
>
> Important
>
> It is not possible to capture a value greater than the reserved amount, for this it is necessary to cancel the reservation and generate a new one.