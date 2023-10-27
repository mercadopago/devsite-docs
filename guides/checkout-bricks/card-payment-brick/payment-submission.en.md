> SERVER_SIDE
>
> h1
>
> Payment submission to Mercado Pago

To continue with the Mercado Pago payment process, your backend should know how to receive form information with the generated token and the filled out data. Your backend should make available a `/process_payment` endpoint to receive all the data.

Once the request –with all the collected information– is in your backend, it should be submitted to Mercado Pago through our APIs.  The minimum mandatory fields to submit are: `token`, `transaction_amount`, `installments`, `payment_method_id` and `payer.email`.

For this to work, you should configure your [private key](/developers/en/guides/additional-content/your-integrations/credentials). Also, to interact with our APIs, you should use [Mercado Pago official SDK](/developers/en/docs/sdks-library/landing).

> NOTE
> 
> Important
>
> Before making the API call, it is important to validate that the data that will be sent is correct. So, if you already have some kind of session on your integration server where the purchase context information is stored, you can use it to compare the data received from the frontend.

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

Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

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
You can find payment status in _status_ value.
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
You can find payment status in _status_ value.
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
You can find payment status in _status_ value.
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
You can find payment status in _status_ value.
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

The onSubmit callback contains all the necessary data for a payment creation, however, if you wish, it is possible to include additional details, which can facilitate the purchase recognition by the payer, and increase the payment approval rate.

To do that, add the relevant fields to the recieved object, contained in the Brick's onSubmit callback.
Some of these fields are: `description` (this field can be shown in created tickets) and `external_reference` (id of the purchase in your website, which eases the purchase recognition for the buyer). It is also possible to add complementary buyer's data.

> NOTE
>
> Important
>
> We recommend adherence to the 3DS 2.0 protocol, in order to increase the probability of approval of your payments, which can be done as described [here.](/developers/en/docs/checkout-bricks/how-tos/integrate-3ds)

Check [API References](/developers/en/reference/payments/_payments/post) to learn about all the available fields for full payments.