# Captura pago autorizado

La finalización de un pago sucede después de la captura del pago autorizado, lo que significa que se puede debitar de la tarjeta el importe reservado para la compra.

Hay dos formas de capturar un pago autorizado:

* **Captura del monto total de una reserva**: en el que se captura el monto total del pago reservado.
* **Captura del monto inferior al reservado**: en la que se captura el monto parcial del pago reservado.

A continuación describimos en detalle cada una de las opciones y cómo ejecutarlas.

## Capturar monto total

Para capturar el monto total de una reserva, envía el valor a capturar al parámetro `transaction_amount` y ejecuta la solicitud a través de los códigos disponibles a continuación.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = MercadoPago\Payment::find_by_id($payment_id);
  $payment->capture = true;
  $payment->update();
?>
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");


Long paymentId = 123456789L;

PaymentClient client = new PaymentClient();
client.capture(paymentId);
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

let paymentId = 123;

mercadopago.payment.capture(paymentId, mercadopago, (error, response) => {
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
Payment payment = await client.CaptureAsync(paymentId);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = { "capture": True }
payment_response = sdk.payment().update(payment_id, payment_data)
payment = payment_response["response"]
```
```curl
curl -X PUT \
  'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  -d '{"capture": true}'
```
]]]

La respuesta va a devolver que el pago se encuentra aprobado y acreditado.

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

## Capturar monto parcial

Para capturar un monto inferior al monto reservado, envía el valor a capturar al parámetro `transaction_amount` y ejecuta la solicitud a través de los códigos disponibles a continuación.

----[mla]----
> WARNING
>
> Importante
>
> Solo disponible para Visa, Cabal, Master y American Express.

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

La respuesta va a devolver que el pago se encuentra aprobado y acreditado.

[[[
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
]]]

> NOTE
>
> Importante
>
> No es posible captar un monto mayor al monto reservado, para ello deberá cancelar la reserva y generar una nueva.