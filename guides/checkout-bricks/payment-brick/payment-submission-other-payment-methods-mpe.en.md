> SERVER_SIDE
>
> h1
>
> Other payment methods

To configure payments with **PagoEfectivo**, send a **POST** with the following parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and run the request or, if you prefer, use one of our SDKs below.

> NOTE
>
> Important
>
> Remember that Brick already resolves most parameters to send the POST. The information return comes in the `onSubmit` callback, inside the `formData` object, where you can find parameters like: `payment_method_id`, `payer.email` and `amount`.

| Payment Type | Parameter | Value |
| --- | --- | --- |
| PagoEfectivo  | `payment_method_id`  | `pagoefectivo_atm`  |

[[[
```php
<?php
 
 require_once 'vendor/autoload.php';
 
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 
 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Product title";
 $payment->payment_method_id = "pagoefectivo_atm";
 $payment->payer = array(
     "email" => "test@test.com",
 );
 $payment->metadata = array(
     "payment_mode" => "online",
 );
 $payment->save();
 
?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
var payment_data = {
  transaction_amount: 100,
  description: 'Product title',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_mode: 'online',
  }
};
 
mercadopago.payment.create(payment_data).then(function (data) {
}).catch(function (error) {
});
```
```java
PaymentClient client = new PaymentClient();
PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Product title")
       .paymentMethodId("pagoefectivo_atm")
       .payer(
          PaymentPayerRequest.builder()
              .email("test@test.com").build()
       )
	.metadata(
          Map.of("payment_mode", "online")
       )
      .build();
client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
payment_request = {
  transaction_amount: 100,
  description: 'Product title',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_mode: 'online',
  }
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Description = "Product title",
    PaymentMethodId = "pagoefectivo_atm",
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
    },
    Metadata = new Dictionary<string, object>
    {
	["payment_mode"] = "online",
    }
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
 
payment_data = {
    "transaction_amount": 100,
    "description": "Product title",
    "payment_method_id": "pagoefectivo_atm",
    "payer": {
        "email": "test@test.com",
    },
    "metadata": {
        "payment_mode": "online",
    }
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
    -d '{
      "transaction_amount": 100,
      "description": "Product title",
      "payment_method_id": "pagoefectivo_atm",
      "payer": {
        "email": "test@test.com",
      },
"metadata": {
        "payment_mode": "online",
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
        "external_resource_url": "https://www.mercadopago.com.pe/payments/123456/ticket?caller_id=123456&payment_method_id=pagoefectivo_atm&payment_id=123456&payment_method_reference_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

## Show payment status

After the payment creation in the backend using the Mercado Pago SDK, use the **id** received in the response to instantiate the Status Screen Brick and show it to the buyer.

In addition to displaying the payment status, Status Screen Brick will also display the barcode to copy and paste or scan in order for the buyer to pay. Learn how simple it is to integrate [click here](/developers/en/docs/checkout-bricks/status-screen-brick/default-rendering).

[IMAGEM]

> NOTE
>
> Important
>
> The boleto expiration date can be configured by sending a POST request with the `data_of_expiration` parameter to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post). After expiration, the boleto will be cancelled.