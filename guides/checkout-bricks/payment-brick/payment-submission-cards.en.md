> SERVER_SIDE
>
> h1
>
> Send payment with cards

With all the information collected in the backend, send a POST with the necessary attributes to the endpoint [/v1/payments ](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, send the information using our SDKs.

[[[
```php
===
You can find payment status in _status_ value.
===
<?php
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");

    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = (float)$_POST['transactionAmount'];
    $payment->token = $_POST['token'];
    $payment->description = $_POST['description'];
    $payment->installments = (int)$_POST['installments'];
    $payment->payment_method_id = $_POST['paymentMethodId'];
    $payment->issuer_id = (int)$_POST['issuer'];

    $payer = new MercadoPago\Payer();
    $payer->email = $_POST['cardholderEmail'];
    $payer->identification = array(----[mla, mlb, mlu, mlc, mpe, mco]----
        "type" => $_POST['identificationType'],------------
        "number" => $_POST['identificationNumber']
    );
    $payer->first_name = $_POST['cardholderName'];
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
```ruby
===
You can find payment status in _status_ value.
===
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
===
You can find payment status in _status_ value.
===
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

## Response

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

> The onSubmit callback contains all the necessary data for a payment creation, however, if you wish, it is possible to include additional details, which can facilitate the purchase recognition by the payer, and increase the payment approval rate. <br/></br>
> <br/></br>
> To do that, add the relevant fields to the recieved object, contained in the Brick's onSubmit callback.
Some of these fields are: `description` (this field can be shown in created tickets) and `external_reference` (id of the purchase in your website, which eases the purchase recognition for the buyer). It is also possible to add complementary buyer's data. <br/></br>
> <br/></br>
> Check [API References](/developers/en/reference/payments/_payments/post) to learn about all the available fields for full payments.