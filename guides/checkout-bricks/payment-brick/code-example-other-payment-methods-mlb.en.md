# Code example (other payment methods)

To facilitate and optimize your integration process, check below a complete example of how to include **boleto bancário** and **payment in lottery** as a means of payment with Payment Brick and how, after performing the integration, to send the payment to Mercado Pago. 

> CLIENT_SIDE
>
> h2
>
> Configure the integration

```html
<!DOCTYPE html>
<html lang="en">
 
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Bricks</title>
</head>
 
<body>
 <div id="paymentBrick_container"></div>
 <script src="https://sdk.mercadopago.com/js/v2"></script>
 <script>
   const mp = new MercadoPago('YOUR_PUBLIC_KEY');
   const bricksBuilder = mp.bricks();
   const renderPaymentBrick = async (bricksBuilder) => {
     const settings = {
       initialization: {
         amount: 100, // total amount to be paid 
       },
       customization: {
         paymentMethods: {
           ticket: 'all',
         },
       },
       callbacks: {
         onReady: () => {
           /*
            Callback called when Brick is ready
            Here you can hide loadings from your site, for example.
           */
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback called when clicking on the data submission button
           return new Promise((resolve, reject) => {
             fetch("/processar-pago", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(formData)
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
     window.paymentBrickController = await bricksBuilder.create(
       'payment',
       'paymentBrick_container',
       settings
     );
   };
   renderPaymentBrick(bricksBuilder);
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
<?php

require_once 'vendor/autoload.php';

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 100;
$payment->description = "Product title";
$payment->payment_method_id = "bolbradesco";
$payment->payer = array(
"email" => "test@test.com",
"first_name" => "Test",
"last_name" => "User",
"identification" => array(
"type" => "CPF",
"number" => "19119119100"
),
"address"=> array(
"zip_code" => "06233200",
"street_name" => "Avenida das Nações Unidas",
"street_number" => "3003",
"neighborhood" => "Bonfim",
"city" => "Osasco",
"federal_unit" => "SP"
)
);

$payment->save();

?>
```
```node
var Mercadopago = require('mercadopago');
Mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
transaction_amount: 100,
description: 'Product title',
payment_method_id: 'bolbradesco',
payer: {
email: 'test@test.com',
first_name: 'Test',
last_name: 'User',
identification: {
type: 'CPF',
number: '19119119100'
},
address: {
zip_code: '06233200',
street_name: "Avenida das Nações Unidas",
street_number: '3003',
neighborhood: 'Bonfim',
city: 'Osasco',
federal_unit: 'SP'
}
}
};

Mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function(error) {

});

```
```java
PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
PaymentCreateRequest.builder()
.transactionAmount(new BigDecimal("100"))
.description("Product Title")
.paymentMethodId("bolbradesco")
.dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
.payer(
PaymentPayerRequest.builder()
.email("test@test.com")
.firstName("Test")
.lastName("User")
.identification(
IdentificationRequest.builder().type("CPF").number("19119119100").build())
.build())
.build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
transaction_amount: 100,
description: 'Product title',
payment_method_id: 'bolbradesco',
payer: {
email: 'test@test.com',
first_name: 'Test',
last_name: 'User',
identification: {
type: 'CPF',
number: '19119119100',
},
address: {
zip_code: '06233200',
street_name: 'Avenida das Nações Unidas',
street_number: '3003',
neighborhood: 'Bonfim',
city: 'Osasco',
federal_unit: 'SP'
}
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
Description = "Product Title",
PaymentMethodId = "bolbradesco",
Payer = new PaymentPayerRequest
{
Email = "test@test.com",
FirstName = "Test",
LastName = "User",
Identification = new IdentificationRequest
{
Type = "CPF",
Number = "191191191-00",
},
},
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
"transaction_amount": 100,
"description": "Product title",
"payment_method_id": "bolbradesco",
"payer": {
"email": "test@test.com",
"first_name": "Test",
"last_name": "User",
"identification": {
"type": "CPF",
"number": "191191191-00"
},
"address": {
"zip_code": "06233-200",
"street_name": "Avenida das Nações Unidas",
"street_number": "3003",
"neighborhood": "Bonfim",
"city": "Osasco",
"federal_unit": "SP"
}
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
"payment_method_id": "bolbradesco",
"payer": {
"email": "test@test.com",
"first_name": "Test",
"last_name": "User",
"identification": {
"type": "CPF",
"number": "19119119100"
},
"address": {
"zip_code": "06233200",
"street_name": "Avenida das Nações Unidas",
"street_number": "3003",
"neighborhood": "Bonfim",
"city": "Osasco",
"federal_unit": "SP"
}
}
}'
```
]]]

### Response

[[[
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
"external_resource_url": "https://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
"installment_amount": 0,
"financial_institution": null,
"payment_method_reference_id": "1234567890"
}
}
]
```
]]]

> NOTE
>
> Important
>
> The boleto expiration date can be configured by sending a POST request with the `data_of_expiration` parameter to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post). After expiration, the boleto will be cancelled.