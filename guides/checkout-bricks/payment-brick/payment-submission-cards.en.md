> SERVER_SIDE
>
> h1
>
> Cards

With all the information collected in the backend, send a POST with the necessary attributes to the endpoint [/v1/payments ](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, send the information using our SDKs.

> NOTE
> 
> Important
>
> Also, it is mandatory to send the attribute `X-Idempotency-Key` to ensure the execution and reexecution of requests without the risk of accidentally performing the same action more than once. To do so, update our [SDKs Library](/developers/en/docs/sdks-library/landing), or generate a UUID V4 and send it in the _header_ of your requests.

[[[
```php
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
var mercadopago = require('mercadopago');
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
----[mlm]----
```java
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

client.create(paymentCreateRequest, requestOptions);
```
------------
----[mla, mlb, mpe, mco, mlu, mlc]----
```java
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

client.create(paymentCreateRequest, requestOptions);
```
------------
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

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

payment_response = sdk.payment.create(payment_data, custom_request_options)
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

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

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
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);

Console.WriteLine(payment.Status);
```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

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

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]

print(payment)
```
----[mlm]----
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
    -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
          "transaction_amount": 100,
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "description": "Blue shirt",
          "installments": 1,
          "payment_method_id": "visa",
          "issuer_id": 310,
          "payer": {
            "email": "PAYER_EMAIL_HERE",
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
    -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
          "transaction_amount": 100,
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "description": "Blue shirt",
          "installments": 1,
          "payment_method_id": "visa",
          "issuer_id": 310,
          "payer": {
            "email": "PAYER_EMAIL_HERE",
            "identification": {
                "number": 19119119100,
                "type": "CPF"
            }
          }
    }'
```
------------
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