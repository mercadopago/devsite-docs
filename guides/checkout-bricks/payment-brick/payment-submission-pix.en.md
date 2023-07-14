> SERVER_SIDE
>
> h1
>
> Pix

When finalizing the inclusion of the payment form, it is necessary to send the buyer's email, type and document number, the payment method used (pix) and the value detail.

To configure payment with Pix, send a **POST** to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, make the request using our SDKs.

[[[
```php
<?php
 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->payment_method_id = "pix";
 $payment->payer = array(
    "email" => "PAYER_EMAIL_HERE",
  );

 $payment->save();

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  payment_method_id: 'pix',
  payer: {
    email: 'PAYER_EMAIL_HERE',
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .paymentMethodId("pix")
       .payer(
           PaymentPayerRequest.builder()
               .email("PAYER_EMAIL_HERE")
               .build())
       .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  payment_method_id: 'pix',
  payer: {
    email: 'PAYER_EMAIL_HERE',
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
    TransactionAmount = 105,
    PaymentMethodId = "pix",
    Payer = new PaymentPayerRequest
    {
        Email = "PAYER_EMAIL_HERE",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "payment_method_id": "pix",
    "payer": {
        "email": "PAYER_EMAIL_HERE",
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
      "payment_method_id": "pix",
      "payer": {
        "email": "PAYER_EMAIL_HERE"
      }
    }'
```
]]]

The response will show the payment **pending status** and all the information you need to show to the buyer. The `transaction_data` value will return the data for QR code.

```json
{
...,
"id": 5466310457,
"status": "pending",
"status_detail": "pending_waiting_transfer",
...,
"transaction_details": {
"net_received_amount": 0,
"total_paid_amount": 100,
"overpaid_amount": 0,
"external_resource_url": null,
"installment_amount": 0,
"financial_institution": null
},
"point_of_interaction": {
"type": "PIX",
"sub_type": null,
"application_data": {
"name": "NAME_SDK",
"version": "VERSION_NUMBER"
},
"transaction_data": {
"qr_code_base64": "iVBORw0KGgoAAAANSUhEUgAABRQAAAUUCAYAAACu5p7oAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAIABJREFUeJzs2luO3LiWQNFmI+Y/Zd6vRt36KGNXi7ZOBtcagHD4kNLeiLX33v8DAAAAABD879sDAAAAAAA/h6AIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCAAAAAJmgCAAAAABkgiIAAAAAkAmKAAAAAEAmKAIAAAAAmaAIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCA...",
"qr_code": "00020126600014br.gov.bcb.pix0117john@yourdomain.com0217additional data520400005303986540510.005802BR5913Maria Silva6008Brasilia62070503***6304E2CA",
"ticket_url": "https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000"
}
}
...,
}
```

## Show payment status

After the payment creation in the backend using the Mercado Pago SDK, use the **id** received in the response to instantiate the Status Screen Brick and show it to the buyer.
In addition to displaying the payment status, Status Screen Brick will also display the Pix code to copy and paste and the QRCode for the buyer to scan and pay. Learn how simple it is to integrate [click here](/developers/en/docs/checkout-bricks/status-screen-brick/configure-integration).

> WARNING
>
> Important
>
> If you used production credentials from a test user to generate the Pix payment, an error will occur when clicking the button that takes you to the QR Code page. To view correctly, just remove `/sandbox` from the URL of the opened page.

<center>

![payment-submission-pix-status](checkout-bricks/payment-submission-pix-status-en.jpg)

</center>