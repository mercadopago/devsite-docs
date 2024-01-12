# Reserva fondos

Una reserva de fondos ocurre cuando se realiza una compra y se reserva su monto del límite total de la tarjeta, asegurando que el valor se mantenga hasta la finalización del procesamiento.

Para realizar una autorización de reserva, envíe un **POST** con todos los atributos necesarios y agregue el atributo `capture=false` al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecute la solicitud o, si lo prefiere, use uno de los SDK a continuación.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => 100,
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

Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

PaymentClient client = new PaymentClient();

PaymentCreateRequest request =
PaymentCreateRequest.builder()
.transactionAmount(new BigDecimal("100"))
.token("ff8080814c11e237014c1ff593b57b4d")
.description("Product Title")
.installments(1)
.paymentMethodId("visa")
.payer(PaymentPayerRequest.builder().email("test_user_19653727@testuser.com").build())
.capture(false)
.build();

client.create(request, requestOptions);

```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
transaction_amount: 100,
token: '123456',
description: 'My product',
installments: 1,
payment_method_id: 'visa',
payer: {
email: 'my.user@example.com',
},
capture: false
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```ruby
require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
transaction_amount: 100,
token: 'ff8080814c11e237014c1ff593b57b4d',
description: 'Product title',
installments: 1,
payment_method_id: 'visa',
payer: {
email: 'test_user_19653727@testuser.com'
},
capture: false
}

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment[:response]
```
```csharp
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var paymentRequest = new PaymentCreateRequest
{
TransactionAmount = 100,
Token = "ff8080814c11e237014c1ff593b57b4d",
Description = "Product Title",
Installments = 1,
PaymentMethodId = "visa",
Payer = new PaymentPayerRequest
{
Email = "test_user_19653727@testuser.com",
},
capture = false,
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);
```
```python
import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
"transaction_amount": 100,
"token": 'ff8080814c11e237014c1ff593b57b4d',
"description": "Title of what you are paying for",
"installations": 1,
"payment_method_id": "visa",
"payer": {
"email": "test_user_19653727@testuser.com"
},
"capture": False
}
payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
```
```curl

curl -X POST \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
'https://api.mercadopago.com/v1/payments' \
-d '{
"transaction_amount": 100,
"token": "ff8080814c11e237014c1ff593b57b4d",
"description": "Product title",
"installations": 1,
"payment_method_id": "visa",
"payer": {
"email": "test_user_19653727@testuser.com"
},
"capture": "false"
}'
```
]]]

La respuesta indica que el pago se encuentra autorizado y pendiente de captura.

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

Además, también es posible resultar como rechazado o pendiente. Ten en cuenta que los fondos autorizados no podrán ser utilizados por su cliente hasta que sean capturados. Recomendamos capturar lo antes posible.

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