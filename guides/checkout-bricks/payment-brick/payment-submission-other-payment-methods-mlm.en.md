> SERVER_SIDE
>
> h1
>
> Other payment methods

To configure **payments with cash via ticket**, send a **POST** with the following parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and run the request or, if you prefer, use one of our SDKs below.

> NOTE
>
> Important
>
> Remember that Brick already resolves most parameters to send the POST. The information return comes in the `onSubmit` callback, inside the `formData` object, where you can find parameters like: `payment_method_id`, `payer.email` and `amount`.
> <br><br>
> When executing the APIs mentioned in this documentation, you may come across the attribute `X-Idempotency-Key`. Filling it out is important to ensure the execution and reexecution of requests without undesirable situations, such as duplicate payments, for example. 

| Payment type | Payment point | Parameter | Value |
| --- | --- | --- | --- |
| Paycash  | 7 Eleven | `payment_method_id`  | `paycash`  |
| Paycash  | Santander | `payment_method_id`  | `paycash`  |
| Paycash  | HSBC| `payment_method_id`  | `paycash`  |
| BBVA  | BBVA | `payment_method_id`  | `bancomer`  |
| Citibanamex  | Citibanamex | `payment_method_id`  | `banamex`  |
| Citibanamex  | Telecomm | `payment_method_id`  | `banamex`  |
| Paycash  | Farmacias Yza| `payment_method_id`  | `paycash`  |
| BBVA  | Farmacias del ahorro | `payment_method_id`  | `bancomer`  |
| OXXO  | OXXO | `payment_method_id`  | `oxxo`  |
| Paycash  | Circle K | `payment_method_id`  | `paycash`  |
| Paycash  | Extra | `payment_method_id`  | `paycash`  |
| Paycash  | Kiosko | `payment_method_id`  | `paycash`  |
| Paycash  | Soriana | `payment_method_id`  | `paycash`  |
| BBVA  | Casa Ley | `payment_method_id`  | `bancomer`  |
| Citibanamex  | Chedraul | `payment_method_id`  | `banamex`  |
| Paycash  | Calimax | `payment_method_id`  | `paycash`  |

When creating a payment, in addition to sending the `payment_method_id` parameter, which is used by the [payments API](/developers/en/reference/payments/_payments/post), Brick also returns to the integrator the metadata parameter containing the payment point. This data is useful for improving specific payment instructions in the [Status Screen Brick](/developers/en/docs/checkout-bricks/status-screen-brick/introduction).

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "first_name" => $_POST['payerFirstName'],
      "last_name" => $_POST['payerLastName'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
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
      .transactionAmount(new BigDecimal("100"))
      .description("Título do produto")
      .paymentMethodId("oxxo")
      .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
      .payer(
          PaymentPayerRequest.builder()
              .email("test@test.com").build()
      )
      .metadata(
          Map.of('payment_point', 'oxxo')
      )
      .build()
client.create(paymentCreateRequest, requestOptions);
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
  description: 'Título do produto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_point: 'oxxo',
  }
}
 
payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título do produto",
    PaymentMethodId = 'oxxo',
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
    },
    Metadata = new Dictionary<string, object>
    {
	["payment_point"] = "oxxo",
    },
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request, requestOptions);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "oxxo",
    "payer": {
        "email": "test@test.com",
    },
    "metadata": {
        "payment_point": "oxxo",
    }
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
      "description": "Título do produto",
      "payment_method_id": "oxxo",
      "payer": {
        "email": "PAYER_EMAIL_HERE",
      }
"metadata": {
        "payment_point": "oxxo",
      }
 
    }'
```
]]]

The response will show the **pending status** until the buyer completes the payment. Also, in the response to the request, the `external_resource_url` parameter will return a URL that contains instructions for the buyer to make the payment. You can redirect to this same link to complete the payment flow. See below for an example return.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com.mx/payments/123456/ticket?caller_id=123456&payment_method_id=oxxo&payment_id=123456&payment_method_reference_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

## Show payment status

After the payment creation in the backend using the Mercado Pago SDK, use the **id** received in the response to instantiate the [Status Screen Brick](/developers/en/docs/checkout-bricks/status-screen-brick/introduction) and show it to the buyer.

In addition, the Status Screen can also redirect the buyer to the ticket with the transaction number and barcode for the buyer to go to a store and thus make the payment. Check out how simple it is to integrate [click here](/developers/en/docs/checkout-bricks/status-screen-brick/introduction).

<center>

![payment-submission-other-payment-methods-status-mlm](checkout-bricks/payment-submission-other-payment-methods-status-mlm-en.jpg)

</center>

> NOTE
>
> Important
>
> The boleto expiration date can be configured by sending a POST request with the `data_of_expiration` parameter to the endpoint [/v1/payments.](/developers/en/reference/payments/_payments/post) After expiration, the boleto will be cancelled.