> SERVER_SIDE
>
> h1
>
> Recibir pagos con tarjeta

Checkout Bricks facilita el envío de pagos a Mercado Pago desde el backend. Los datos que recibe Checkout Bricks en la función `onSubmit` son exactamente los que se necesitan para llamar a la API de Pagos de Mercado Pago.

1. En la estructura actual de tu integración, encuentra la llamada a la API de Pagos.

[[[
```php
<?php
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = 100;
    $payment->token = $token;
    $payment->description = "Blue shirt";
    $payment->installments = $installments;
    $payment->payment_method_id = $payment_method_id;
    $payment->issuer_id = $issuer_id;
    $payment->payer = array(
    "email" => "john@yourdomain.com"
    );
    // Guarda y postea el pago
    $payment->save();
    //...
    // Imprime el estado del pago
    echo $payment->status;
    //...
?>
```
```java
MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment();
payment.setTransactionAmount(100f)
       .setToken(token)
       .setDescription("Blue shirt")
       .setInstallments(installments)
       .setPaymentMethodId(payment_method_id)
       .setIssuerId(issuer_id)
       .setPayer(new Payer()
         .setEmail("john@yourdomain.com"));
// Guarda y postea el pago
payment.save();
//...
// Imprime el estado del pago
System.out.println(payment.getStatus());
//...
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: token,
  description: 'Blue shirt',
  installments: installments,
  payment_method_id: payment_method_id,
  issuer_id: issuer_id,
  payer: {
    email: 'john@yourdomain.com'
  }
};

// Guarda y postea el pago
mercadopago.payment.save(payment_data).then(function (data) {
  // ...    
  // Imprime el estado del pago
  Console.log(data.status);
}).catch(function (error) {
  // ...
});

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_object = {
   transaction_amount: 100,
   token: token,
   description: 'Blue shirt',
   installments: installments,
   payment_method_id: payment_method_id,
   issuer_id: issuer_id,
   payer: {
      email: 'john@yourdomain.com'
  }
}
payment_response = sdk.payment.create(payment_object)
payment = payment_response[:response]

```
```csharp
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
// ...
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
// ...
var paymentRequest = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = token,
    Description = "Blue shirt",
    Installments = installments,
    PaymentMethodId = payment_method_id,
    IssuerId = issuer_id,
    Payer = new PaymentPayerRequest
    {
        Email = "john@yourdomain.com",
    },
};
// Crea el pago
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
// ...
// Imprime el estado del pago
Console.WriteLine(payment.Status);
// ...
```
```python
payment_data = {
    "transaction_amount": 100,
    "token": token,
    "description": "Blue shirt",
    "installments": installments,
    "payment_method_id": payment_method_id,
    "issuer_id": issuer_id,
    "payer": {
        "email": "john@yourdomain.com"
    }
}

# Guarda y postea el pago
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
]]]

> Los campos requeridos a enviar son `token`, `transaction_amount`, `payment_method_id` y el `payer.email`.

2. Reemplázalo con la integración de Checkout Bricks:

[[[
```php
===
Puedes encontrar el estado del pago en el valor _status_.
===
<?php
  require_once 'vendor/autoload.php';
  MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");
  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = (float)$_POST['transactionAmount'];
  $payment->token = $_POST['token'];
  $payment->installments = (int)$_POST['installments'];
  $payment->payment_method_id = $_POST['paymentMethodId'];
  $payment->issuer_id = (int)$_POST['issuer'];
  $payer = new MercadoPago\Payer();
  $payer->email = $parsed_body['payer']['email'];
  $payer->identification = array(
     "type" => $parsed_body['payer']['identification']['type'],
     "number" => $parsed_body['payer']['identification']['number']
   );
  $payment->payer = $payer;
  $payment->save();
  $response = array(
      'status' => $payment->status,
      'status_detail' => $payment->status_detail,
      'id' => $payment->id
  );
  echo json_encode($response);

?>
```
```node
===
Puedes encontrar el estado del pago en el valor _status_.
===
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

mercadopago.payment.save(req.body)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });
```
```java
===
Puedes encontrar el estado del pago en el valor _status_.
===

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

client.create(paymentCreateRequest);

```
```ruby
===
Puedes encontrar el estado del pago en el valor _status_.
===
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 payer: {
   email: params[:payer][:email],
   identification: {
     type: params[:payer][:identification][:type],
     number: params[:payer][:identification][:number]
   },
 }
}

payment_response = sdk.payment.create(payment_data)
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

var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Installments = int.Parse(Request["installments"]),
   PaymentMethodId = Request["paymentMethodId"],
   Payer = new PaymentPayerRequest
   {
       Email = Request["payer"]["email"],
       Identification = new IdentificationRequest
       {
           Type = Request["payer"]["identification"]["type"],
           Number = Request["payer"]["identification"]["number"],
       },
   },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);

Console.WriteLine(payment.Status);

```
```python
===
Puedes encontrar el estado del pago en el valor _status_.
===
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "email": request.POST["payer"].get("email"),
       "identification": {
           "type": request.POST["payer"]["identification"].get("type"),
           "number": request.POST["payer"]["identification"].get("number")
       }
   }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

print(payment)
```
```curl
===
Puedes encontrar el estado del pago en el valor _status_.
===
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
          "transaction_amount": 100,
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "description": "Blue shirt",
          "installments": 1,
          "payment_method_id": "visa",
          "issuer_id": 310,
          "payer": {
            "email": "test@test.com"
          }
    }'

```
]]]

> PREV_STEP_CARD_ES
>
> Client-side
>
> Configura cómo recibir pagos con tarjetas en el client-side de tu integración.
>
> [Client-side](/developers/es/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v1/clientside)