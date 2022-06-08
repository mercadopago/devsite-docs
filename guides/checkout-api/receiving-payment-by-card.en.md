# Integrate Checkout API payment for cards

[TXTSNIPPET][/guides/snippets/test-integration/receiving-payment-by-card]

## How does it work?

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-en.png)

> If you want to make a customized payment flow, we share all the [methods available for advanced integration](/developers/en/docs/online-payments/checkout-api/receiving-payment-by-card-core-methods).

With our Mercado Pago Checkout API, you should take into account two aspects: data capture and payment confirmation submission.

1. First, you need a frontend to collect card data and generate a security token with the information required to create a payment.
2. Then, you need a backend that takes the generated token and payment data, such as amount and item, to confirm and make a payment.

Both for frontend and backend, we recommend [our libraries](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/checkout-api/previous-requirements#bookmark_always_use_our_libraries) to collect user sensitive data securely.

> NOTE
>
> Note
>
> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/cards/_customers_customer_id_cards/post).

<br>

> CLIENT_SIDE
>
> h2
>
> Card data capture

[TXTSNIPPET][/guides/snippets/test-integration/secure-fields-card]

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Payment submission to Mercado Pago

To continue with the Mercado Pago payment process, your backend should know how to receive form information with the generated token and the filled out data.

In the above example, after the submit action, your backend should make available a `/process_payment` endpoint, to receive all the data.

Once the request –with all the collected information– is in your backend, it should be submitted to Mercado Pago through our APIs.  The minimum mandatory fields to submit are: `token`, `transaction_amount`, `installments`, `payment_method_id` and `payer.email`.

For this to work, you should configure your [private key]([FAKER][CREDENTIALS][URL]). Also, to interact with our APIs, you should use [Mercado Pago official SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/checkout-api/previous-requirements#bookmark__install_mercado_pago_sdk).

[[[
```php
===
Find the payment status in the _status_ field.
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
   $payer->email = $_POST['email'];
   $payer->identification = array(----[mla, mlb, mlu, mlc, mpe, mco]----
       "type" => $_POST['identificationType'],------------
       "number" => $_POST['identificationNumber']
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
Find the payment status in the _status_ field.
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
Find the payment status in the _status_ field.
===
 
MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");
 
Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
      .setToken(request.getParameter("token"))
      .setDescription(request.getParameter("description"))
      .setInstallments(Integer.valueOf(request.getParameter("installments")))
      .setPaymentMethodId(request.getParameter("paymentMethodId"));
 
Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("identificationType"))
             .setNumber(request.getParameter("identificationNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("identificationNumber"));------------
 
Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
    .setIdentification(identification);
   
payment.setPayer(payer);
 
payment.save();
 
System.out.println(payment.getStatus());
 
```
```ruby
===
Find the payment status in the _status_ field.
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
   email: params[:email],
   identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
     type: params[:identificationType],------------
     number: params[:identificationNumber]
   }
 }
}
 
payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]
 
puts payment
 
```
```csharp
===
Find the payment status in the _status_ field.
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
       Email = Request["email"],
       Identification = new IdentificationRequest
       {----[mla, mlb, mlu, mlc, mpe, mco]----
           Type = Request["identificationType"],------------
           Number = Request["identificationNumber"],
       },
   },
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
 
Console.WriteLine(payment.Status);
 
```
```python
===
Find the payment status in the _status_ field.
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
       "email": request.POST.get("email"),
       "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
           "type": request.POST.get("type"), ------------
           "number": request.POST.get("number")
       }
   }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
 
print(payment)
```
```curl
===
Find the payment status in the _status_ field.
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

#### Response

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

> Check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments/post) to learn about all the available fields for full payments.

## Response Handling

[TXTSNIPPET][/guides/snippets/test-integration/api-response-handling]

## Receive payment notifications

[TXTSNIPPET][/guides/snippets/test-integration/api-payment-notifications]

## Sample projects

> GIT
>
> Checkout API
>
> Use our [complete integration examples](https://github.com/mercadopago/card-payment-sample) to download instantly.
