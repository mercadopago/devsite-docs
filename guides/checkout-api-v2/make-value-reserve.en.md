---
sites_supported:
- mla
- mlb
- mlm
- mpe
- mlu
---

# Reserve values

A reserve of values happens when a purchase is made and its amount is reserved from the total limit of the card, ensuring that the value is kept until the completion of processing.

To carry out a reserve authorization, send a **POST** with all the necessary attributes and add the attribute `capture=false` to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, use one of the SDKs below.

[[[
```php

<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();

$payment->transaction_amount = 100;
$payment->token = "ff8080814c11e237014c1ff593b57b4d";
$payment->description = "Product title";
$payment->installments = 1;
$payment->payment_method_id = "visa";
$payment->payer = array(
"email" => "test_user_19653727@testuser.com"
);

$payment->capture=false;

$payment->save();

?>
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest request =
PaymentCreateRequest.builder()
.transactionAmount(new BigDecimal("100"))
.token("ff8080814c11e237014c1ff593b57b4d")
.description("Product Title")
.installments(1)
.paymentMethodId("visa")
.payer(PaymentPayerRequest.builder().email("test_user_19653727@testuser.com").build())
.capture(false)
.build();

client.create(request);

```
```node

var Mercadopago = require('mercadopago');
Mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
transaction_amount: 100,
token: 'ff8080814c11e237014c1ff593b57b4d'
description: 'Product title',
installments: 1,
payment_method_id: 'visa',
payer: {
email: 'test_user_3931694@testuser.com'
},
capture: false
};

Mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function(error) {

});

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
transaction_amount: 100,
token: 'ff8080814c11e237014c1ff593b57b4d',
description: 'Product title',
installments: 1,
payment_method_id: 'visa',
payer: {
email: 'test_user_19653727@testuser.com'
},
capture: false
}

payment_response = sdk.payment.create(payment_request)
payment = payment[:response]
```
```csharp

using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var paymentRequest = new PaymentCreateRequest
{
TransactionAmount = 100,
Token = "ff8080814c11e237014c1ff593b57b4d",
Description = "Product Title",
Installments = 1,
PaymentMethodId = "visa",
Payer = new PaymentPayerRequest
{
Email = "test_user_19653727@testuser.com",
},
capture = false,
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
```
```python

import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
"transaction_amount": 100,
"token": 'ff8080814c11e237014c1ff593b57b4d',
"description": "Title of what you are paying for",
"installations": 1,
"payment_method_id": "visa",
"payer": {
"email": "test_user_19653727@testuser.com"
},
"capture": False
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
    -d '
{
   "transaction_amount":100,
   "token":"ff8080814c11e237014c1ff593b57b4d",
   "description":"Product title",
   "installments":1,
   "payment_method_id":"visa",
   "payer":{
      "email":"test_user_3931694@testuser.com"
   },
   "capture":false
}'

```
]]]


The response indicates that the payment is authorized and pending capture.


[[[
```json
{
"id": PAYMENT_ID,
...
"status": "authorized",
"status_detail": "pending_capture",
...
"captured": false,
...
}
```
]]]

In addition, it is also possible to return as `rejected` or `pending`. In case it returns as `pending`, you should pay attention to the notifications to know what the final status of the payment is.

Please note that authorized values cannot be used by your client until they are captured. We recommend capturing as soon as possible.


----[mla, mlm]----
> WARNING
>
> Important
>
> The reserve will be valid for 7 days. If you do not capture it within this period, it will be canceled. In addition, it is necessary to save the payment ID in order to complete the process.
------------

----[mpe]----
> WARNING
>
> Important
>
> The reserve will be valid for 22 days. If you do not capture it within this period, it will be canceled. In addition, it is necessary to save the payment ID in order to complete the process.
------------

----[mlb]----
> WARNING
>
> Important
>
> The reservation will be valid for 5 days. If you do not capture it within this period, it will be canceled. In addition, it is necessary to save the payment ID in order to complete the process.
------------