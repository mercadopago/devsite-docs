> SERVER_SIDE
>
> h1
>
> Tarjetas

Con toda la información recopilada en el backend, envía un **POST** con los atributos requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, envía la información utilizando nuestros SDKs.

[[[
```php
<?php
  require_once 'vendor/autoload.php';
  MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");
  $contents = json_decode(file_get_contents('php://input'), true);
 
  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = $contents['transaction_amount'];
  $payment->token = $contents['token'];
  $payment->installments = $contents['installments'];
  $payment->payment_method_id = $contents['payment_method_id'];
  $payment->issuer_id = $contents['issuer_id'];
  $payer = new MercadoPago\Payer();
  $payer->email = $contents['payer']['email'];
  $payer->identification = array(
     "type" => $contents['payer']['identification']['type'],
     "number" => $contents['payer']['identification']['number']
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
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

var payment_data = {
  amount: req.body.amount,
  ...
}
mercadopago.payment.save(payment_data)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });
```
----[mlm]----
```java
PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(request.getTransactionAmount())
       .token(request.getToken())
       .description(request.getDescription())
       .installments(request.getInstallments())
       .paymentMethodId(request.getPaymentMethodId())
       .payer(
           PaymentPayerRequest.builder()
               .email(request.getPayer().getEmail())
               .firstName(request.getPayer().getFirstName())
               .identification(
                   IdentificationRequest.builder()
                       .number(request.getPayer().getIdentification().getNumber())
                       .build())
               .build())
       .build();

client.create(paymentCreateRequest);
```
------------
----[mla, mlb, mpe, mco, mlu, mlc]----
```java
PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(request.getTransactionAmount())
       .token(request.getToken())
       .description(request.getDescription())
       .installments(request.getInstallments())
       .paymentMethodId(request.getPaymentMethodId())
       .payer(
           PaymentPayerRequest.builder()
               .email(request.getPayer().getEmail())
               .firstName(request.getPayer().getFirstName())
               .identification(
                   IdentificationRequest.builder()
                       .type(request.getPayer().getIdentification().getType())
                       .number(request.getPayer().getIdentification().getNumber())
                       .build())
               .build())
       .build();

client.create(paymentCreateRequest);

```
------------
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

payment_data = {
  transaction_amount: params[:transactionAmount].to_f,
  token: params[:token],
  description: params[:description],
  installments: params[:installments].to_i,
  payment_method_id: params[:paymentMethodId],
  payer: {
    email: params[:cardholderEmail],
    identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
      type: params[:identificationType],------------
      number: params[:identificationNumber]
    },
    first_name: params[:cardholderName]
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]

puts payment

```
```csharp
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
    Description = Request["description"],
    Installments = int.Parse(Request["installments"]),
    PaymentMethodId = Request["paymentMethodId"],
    Payer = new PaymentPayerRequest
    {
        Email = Request["cardholderEmail"],
        Identification = new IdentificationRequest
        {----[mla, mlb, mlu, mlc, mpe, mco]----
            Type = Request["identificationType"],------------
            Number = Request["identificationNumber"],
        },
        FirstName = Request["cardholderName"]
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);

Console.WriteLine(payment.Status);
```

```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_data = {
    "transaction_amount": float(request.POST.get("transaction_amount")),
    "token": request.POST.get("token"),
    "description": request.POST.get("description"),
    "installments": int(request.POST.get("installments")),
    "payment_method_id": request.POST.get("payment_method_id"),
    "payer": {
        "email": request.POST.get("cardholderEmail"),
        "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
            "type": request.POST.get("identificationType"), ------------
            "number": request.POST.get("identificationNumber")
        }
        "first_name": request.POST.get("cardholderName")
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

print(payment)

```
----[mlm]----
```curl
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
            "email": "test@test.com",
            "identification": {
                "number": 19119119100
            }
          }
    }'

```
------------
----[mla, mlb, mpe, mco, mlu, mlc]----
```curl
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
            "email": "test@test.com",
            "identification": {
                "number": 19119119100,
                "type": "CPF"
            }
          }
    }'
```
------------
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

Para hacer esto, agregue campos relevantes al objeto enviado, que viene en la respuesta del callback onSubmit de Brick.
Algunos de estos campos son: `description` (este campo se puede mostrar en los tickets emitidos) y `external_reference` (id de compra en su sitio web, lo que permite un reconocimiento de compra más fácil). También es posible añadir datos adicionales sobre el comprador.

> Conoce todos los campos disponibles para realizar un pago completo en las [Referencias de API.](/developers/es/reference/payments/_payments/post)