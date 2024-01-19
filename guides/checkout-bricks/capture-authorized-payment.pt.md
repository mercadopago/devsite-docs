# Capture pagamento autorizado

A finalização de um pagamento acontece após a captura do pagamento autorizado, o que significa que o valor reservado para a compra pode ser debitado do cartão. 

Existem duas formas de capturar um pagamento autorizado:

* **Captura do valor total de uma reserva**: na qual se captura o valor integral do pagamento reservado.
* **Captura de um valor inferior ao reservado**: na qual se captura o valor parcial do pagamento reservado.

Abaixo descrevemos o detalhe de cada uma das opções e como executá-las.

## Capturar valor total 

Para fazer a captura do valor total de uma reserva, envie o valor que deve ser capturado ao parâmetro `transaction_amount` e execute a requição através dos códigos disponíveis abaixo.

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

A resposta devolverá que o pagamento se encontra aprovado e creditado.

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

## Capturar valor parcial

Para capturar um valor inferior ao reservado, envie o valor que deve ser capturado ao parâmetro `transaction_amount` e execute a requição através dos códigos disponíveis abaixo.

----[mla]----
> WARNING
>
> Importante
>
> Disponível somente para Visa, Cabal, Master e American Express.

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
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

let captureInfo = {id: 123, transaction_amount: 5}

mercadopago.payment.capturePartial(captureInfo, mercadopago, (error, response) => {
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
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

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

A resposta trará o seguinte resultado:

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
> Importante
>
> Não é possível capturar um valor superior ao reservado, para isso é preciso cancelar a reserva e gerar uma nova.