> SERVER_SIDE
>
> h1
>
> Envia el pago a Mercado Pago

Para continuar el proceso de pago hacia Mercado Pago, es necesario que tu backend sepa recibir la información del formulario con el token generado y los datos completados. Su backend debe disponibilizar un endpoint `/process_payment` para recibir allí todos los datos luego de realizar la acción submit.

Ya estando en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs. Los campos mínimos requeridos a enviar son: `token`, `transaction_amount`, `installments`, `payment_method_id` y el `payer.email`.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada](/developers/es/guides/additional-content/your-integrations/credentials) y que para interactuar con nuestras APIs recomendamos utilizar la [SDK oficial de Mercado Pago](/developers/es/docs/sdks-library/landing).

> NOTE
>
> Importante
> 
> Antes de realizar la llamada a la API, es importante validar que los datos que se enviarán sean correctos. Entonces, si ya tiene algún tipo de sesión en su servidor de integración donde se almacena la información de contexto de compra, puede usarla para comparar los datos recibidos desde el frontend.
> <br><br>
> Al ejecutar las APIs mencionadas en esta documentación, es posible que encuentre el atributo `X-Idempotency-Key`. Completarlo es crucial para asegurar la ejecución y reejecución de las solicitudes sin situaciones no deseadas, como pagos duplicados, por ejemplo. 

[[[
```php
===
Puedes encontrar el estado del pago en el valor _status_.
===
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\Client\Common\RequestOptions;
  use MercadoPago\MercadoPagoConfig;

  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "token" => $_POST['<TOKEN>'],
    "description" => $_POST['<DESCRIPTION>'],
    "installments" => $_POST['<INSTALLMENTS>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID'],
    "issuer_id" => $_POST['<ISSUER>'],
    "payer" => [
      "email" => $_POST['<EMAIL>'],
      "identification" => [
        "type" => $_POST['<IDENTIFICATION_TYPE'],
        "number" => $_POST['<NUMBER>']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
===
Puedes encontrar el estado del pago en el valor _status_.
===
import { MercadoPagoConfig, Payment } from '@src/index';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>', options: { timeout: 5000 } });

const payment = new Payment(client);

payment.create({ body: {
 transaction_amount: 100,
 description: '<DESCRIPTION>',
 payment_method_id: '<PAYMENT_METHOD_ID>',
 payer: {
 email: '<EMAIL>'
},
} }).then(console.log).catch(console.log);
```
```java
===
Puedes encontrar el estado del pago en el valor _status_.
===

Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(request.getTransactionAmount())
       .token(request.getToken())
       .installments(request.getInstallments())
       .paymentMethodId(request.getPaymentMethodId())
       .payer(
           PaymentPayerRequest.builder()
               .email(request.getPayer().getEmail())
               .identification(
                   IdentificationRequest.builder()
                       .type(request.getPayer().getIdentification().getType())
                       .number(request.getPayer().getIdentification().getNumber())
                       .build())
               .build())
       .build();

client.create(paymentCreateRequest, requestOptions);

```
```ruby
===
Puedes encontrar el estado del pago en el valor _status_.
===
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_data = {
  transaction_amount: params[:transactionAmount].to_f,
  token: params[:token],
  installments: params[:installments].to_i,
  payment_method_id: params[:paymentMethodId],
  payer: {
    email: params[:cardholderEmail],
    identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
      type: params[:identificationType],------------
      number: params[:identificationNumber]
    }
  }
}

payment_response = sdk.payment.create(payment_data, custom_request_options)
payment = payment_response[:response]

puts payment

```
```csharp
===
Puedes encontrar el estado del pago en el valor _status_.
===
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var paymentRequest = new PaymentCreateRequest
{
    TransactionAmount = decimal.Parse(Request["transaction_amount"]),
    Token = Request["token"],
    Installments = int.Parse(Request["installments"]),
    PaymentMethodId = Request["payment_method_id"],
    Payer = new PaymentPayerRequest
    {
        Email = Request["payer"]["email"],
        Identification = new IdentificationRequest
        {----[mla, mlb, mlu, mlc, mpe, mco]----
            Type = Request["payer"]["identification"]["type"],------------
            Number = Request["payer"]["identification"]["number"],
        },
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);

Console.WriteLine(payment.Status);

```
```python
===
Puedes encontrar el estado del pago en el valor _status_.
===
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

request_values = request.get_json()
    
payment_data = {
    "transaction_amount": float(request_values["transaction_amount"]),
    "token": request_values["token"],
    "installments": int(request_values["installments"]),
    "payment_method_id": request_values["payment_method_id"],
    "issuer_id": request_values["issuer_id"],
    "payer": {
        "email": request_values["payer"]["email"],
        "identification": {
            "type": request_values["payer"]["identification"]["type"], 
            "number": request_values["payer"]["identification"]["number"]
        }
    }
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]

print("status =>", payment["status"])
print("status_detail =>", payment["status_detail"])
print("id =>", payment["id"])
```
```curl
===
Puedes encontrar el estado del pago en el valor _status_.
===
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
    -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
          "transaction_amount": 100,
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "installments": 1,
          "payment_method_id": "visa",
          "issuer_id": 310,
          "payer": {
            "email": "PAYER_EMAIL_HERE"
          }
    }'

```
]]]

## Respuesta

```json
{
    "status": "approved",
    "status_detail": "accredited",
    "id": 3055677,
    "date_approved": "2019-02-23T00:01:10.000-04:00",
    "payer": {
        ...
    },
    "payment_method_id": "visa",
    "payment_type_id": "credit_card",
    "refunds": [],
    ...
}
```

El callback onSubmit de Brick contiene todos los datos necesarios para crear un pago; sin embargo, si lo desea, puede incluir detalles adicionales que pueden facilitar el reconocimiento de la compra por parte del comprador y aumentar la tasa de aprobación del pago.

Para hacer esto, agregue campos relevantes al objeto enviado, que viene en la respuesta del callback onSubmit de Brick. Algunos de estos campos son: `description` (este campo se puede mostrar en los tickets emitidos) y `external_reference` (id de compra en su sitio web, lo que permite un reconocimiento de compra más fácil). También es posible añadir datos adicionales sobre el comprador.

> NOTE
>
> Importante
>
> Recomendamos adherirse al protocolo 3DS 2.0 para aumentar la probabilidad de aprobación de sus pagos, lo cual se puede hacer como se describe [aquí.](/developers/es/docs/checkout-bricks/how-tos/integrate-3ds)

Conoce todos los campos disponibles para realizar un pago completo en las [Referencias de API](/developers/es/reference/payments/_payments/post).