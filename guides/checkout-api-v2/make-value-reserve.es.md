---
  sites_supported:
      - mla
      - mlb
      - mlm
      - mpe
---

# Realizar una reserva de fondos

Una reserva de fondos ocurre cuando se realiza una compra y se reserva su monto del límite total de la tarjeta, asegurando que el valor se mantenga hasta la finalización del procesamiento.

Para realizar una autorización de reserva, envíe un **POST** con todos los atributos necesarios y agregue el atributo `capture=false` al endpoint [/v1/pagos](/developers/es/reference/payments/_payments/post) y ejecute la solicitud o, si lo prefiere, use uno de los SDK a continuación.

[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();

  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->description = "Título do produto";
  $payment->installments = 1;
  $payment->payment_method_id = "visa";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->capture=false;

  $payment->save();

?>
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest request =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .token("ff8080814c11e237014c1ff593b57b4d")
       .description("Título del producto")
       .installments(1)
       .paymentMethodId("visa")
       .payer(PaymentPayerRequest.builder().email("test_user_19653727@testuser.com").build())
       .capture(false)
       .build();

client.create(request);

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: 'Título do produto',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test_user_3931694@testuser.com'
  },
  capture: false
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d',
  description: 'Título del producto',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test_user_19653727@testuser.com'
  },
  capture: false
}

payment_response = sdk.payment.create(payment_request)
payment = payment[:response]
```
```csharp

using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var paymentRequest = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "Título do produto",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19653727@testuser.com",
    },
    Capture = false,
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "description": "Título de lo que estás pagando",
    "installments": 1,
    "payment_method_id": "visa",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    },
    "capture": False
}
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl

curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
          "transaction_amount": 100,
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "description": "Título del producto",
          "installments": 1,
          "payment_method_id": "visa",
          "payer": {
            "email": "test_user_19653727@testuser.com"
          },
          "capture": "false"
    }'
```
]]]

La respuesta indica que el pago se encuentra autorizado y pendiente de captura.

[[[
```json
{
  "id": PAYMENT_ID,
  ...
  "status": "authorized",
  "status_detail": "pending_capture",
  ...
  "captured": false,
  ...
}
```
]]]


Además, también es posible resultar como rechazado o pendiente. Ten en cuenta que los fondos autorizados no podrán ser utilizados por su cliente hasta que sean capturados. Recomendamos capturar lo antes posible.

----[mla, mlm]----
> WARNING
>
> Importante
>
> La reserva tendrá una validez de 7 días. Si no la capturas hasta ese momento, será cancelada. Además, ebes guardar el ID del pago para poder finalizar el proceso.
------------

----[mpe]----
> WARNING
>
> Importante
>
> La reserva tendrá una validez de 22 días. Si no la capturas hasta ese momento, será cancelada. Además, ebes guardar el ID del pago para poder finalizar el proceso.
------------

----[mlb]----
> WARNING
>
> Importante
>
> La reserva tendrá una validez de 5 días. Si no la capturas hasta ese momento, será cancelada. Además, ebes guardar el ID del pago para poder finalizar el proceso.
------------

> PREV_STEP_CARD_ES
>
> Capturar pago autorizado
>
> Conozca las formas disponibles para capturar un pago autorizado.
>
> [Capturar pago autorizado](/developers/pt/docs/checkout-api/payment-management/make-value-reserve)
