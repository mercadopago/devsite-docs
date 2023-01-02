# Code example

To facilitate and optimize your integration process, check below a complete example of the integration with Card Payment Brick and how, after performing the integration, to send the payment to Mercado Pago.

> CLIENT_SIDE
>
> h2
>
> Configure the integration

```html
<html>
<head>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
  <div id="cardPaymentBrick_container"></div>
  <script>
    const mp = new MercadoPago('YOUR_PUBLIC_KEY');
    const bricksBuilder = mp.bricks();
    const renderCardPaymentBrick = async (bricksBuilder) => {
      const settings = {
        initialization: {
          amount: 100, // total amount to be paid
          payer: {
            email: 'test@mail.com',
          },
        },
        customization: {
          visual: {
            style: {
              theme: 'default' // | 'dark' | 'bootstrap' | 'flat'
            }
          }
        },        
        callbacks: {
          onReady: () => {
            /*
              Callback called when Brick is ready
              Here you can hide loadings from your site, for example.
            */
          },
          onSubmit: (cardFormData) => {
            // callback called the user to click on the data submit button
            // example of sending the data collected by el Brick to your
            return new Promise((resolve, reject) => {
              fetch("/process_payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData)
              })
                .then((response) => {
                  // receive payment result
                  resolve();
                })
                .catch((error) => {
                  // handle error response when trying to create payment
                  reject();
                })
            });
          },
          onError: (error) => {
            // callback called for all Brick error cases
            console.error(error);
          },
        },
      };
      window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
    };
    renderCardPaymentBrick(bricksBuilder);
  </script>
</body>
</html>
```

> SERVER_SIDE
>
> h2
>
> Payment submission to Mercado Pago

[[[
```php
===
You can find payment status in _status_ value.
===
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
===
You can find payment status in _status_ value.
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
You can find payment status in _status_ value.
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
You can find payment status in _status_ value.
===
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

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
    },
    first_name: params[:cardholderName]
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]

puts payment

```
```csharp
===
You can find payment status in _status_ value.
===
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

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
        }
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);

Console.WriteLine(payment.Status);

```
```python
===
You can find payment status in _status_ value.
===
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

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

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

print("status =>", payment["status"])
print("status_detail =>", payment["status_detail"])
print("id =>", payment["id"])
```
```curl
===
You can find payment status in _status_ value.
===
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
          "transaction_amount": 100,
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "installments": 1,
          "payment_method_id": "visa",
          "issuer_id": 310,
          "payer": {
            "email": "test@test.com"
          }
    }'

```
]]]

### Response

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