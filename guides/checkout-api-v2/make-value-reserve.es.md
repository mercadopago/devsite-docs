---
  sites_supported:
      - mla
      - mlb
      - mlm
      - mpe
---

# Reservar fondos

Una reserva de fondos ocurre cuando se realiza una compra y se reserva su monto del límite total de la tarjeta, asegurando que el valor se mantenga hasta la finalización del procesamiento.

Para realizar una autorización de reserva, envíe un **POST** con todos los atributos necesarios y agregue el atributo `capture=false` al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecute la solicitud o, si lo prefiere, use uno de los SDK a continuación.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => 100.0,
    "token" => "123456",
    "description" => "My product",
    "installments" => 1,
    "payment_method_id" => "visa",
    "payer" => [
      "email" => "my.user@example.com",
    ],
    "capture" => false
  ], $request_options);
  echo implode($payment);
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
import MercadoPago, { Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payments = new Payments(client);

payments.create({
  transaction_amount: 100.0,
  token: "123456",
  description: "My product",
  installments: 1,
  payment_method_id: "visa",
  payer: {
    email: "my.user@example.com",
  },
  capture: false 
}, { idempotencyKey: '<SOME_UNIQUE_VALUE>' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
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
    -d '
{
   "transaction_amount":100,
   "token":"ff8080814c11e237014c1ff593b57b4d",
   "description":"Product title",
   "installments":1,
   "payment_method_id":"visa",
   "payer":{
      "email":"test_user_3931694@testuser.com"
   },
   "capture":false
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


Además, también es posible que retorne como `rechazado` o `pendiente`. En caso de que retorne como `pendiente`, deberás prestar atención a las notificaciones para saber cuál es el estado final del pago.

Ten en cuenta que tu cliente no podrá utilizar los valores autorizados hasta que se capturen. Recomendamos realizar la captura lo antes posible.


----[mla, mlm]----
> WARNING
>
> Importante
>
> La reserva tendrá una validez de 7 días. Si no la capturas hasta ese momento, será cancelada. Además, debes guardar el ID del pago para poder finalizar el proceso.
------------

----[mpe]----
> WARNING
>
> Importante
>
> La reserva tendrá una validez de 22 días. Si no la capturas hasta ese momento, será cancelada. Además, debes guardar el ID del pago para poder finalizar el proceso.
------------

----[mlb]----
> WARNING
>
> Importante
>
> La reserva tendrá una validez de 5 días. Si no la capturas hasta ese momento, será cancelada. Además, debes guardar el ID del pago para poder finalizar el proceso.

------------

