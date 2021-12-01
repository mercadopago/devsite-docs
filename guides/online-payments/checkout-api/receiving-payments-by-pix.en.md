----[mlb]----
[TXTSNIPPET][/guides/snippets/test-integration/pix-intro]

After registering the Pix key, follow the documentation to perform the integration or, if you prefer, [see on Github](https://github.com/mercadopago/pix-payment-sample) for examples of how to add Pix payments by integrating with Checkout Transparente.

## Configure a payment with Pix

After [capturing the data for payment](#bookmark_data_capture_for_payment) in the form, to start getting Pix payments you will need to dend the buyer's email address, document type and number, method of payment and amount.

[[[
```php
<?php

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título do produto";
 $payment->payment_method_id = "pix";
 $payment->payer = array(
     "email" => "test@test.com",
     "first_name" => "Test",
     "last_name" => "User",
     "identification" => array(
         "type" => "CPF",
         "number" => "19119119100"
      ),
     "address"=>  array(
         "zip_code" => "06233200",
         "street_name" => "Av. das Nações Unidas",
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
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'pix',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'CPF',
        number: '19119119100'
    },
    address:  {
        zip_code: '06233200',
        street_name: 'Av. das Nações Unidas',
        street_number: '3003',
        neighborhood: 'Bonfim',
        city: 'Osasco',
        federal_unit: 'SP'
    }
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
import com.mercadopago.*;

MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
       .setDescription("Título do produto")
       .setPaymentMethodId("pix")
       .setPayer(new Payer()
           .setEmail("test@test.com")
           .setFirstName("Test")
           .setLastName("User")
           .setIdentification(new Identification()
               .setType("CPF")
               .setNumber("19119119100"))
           .setAddress(new Address()
               .setZipCode("06233200")
               .setStreetName("Av. das Nações Unidas")
               .setStreetNumber(3003)
               .setNeighborhood("Bonfim")
               .setCity("Osasco")
               .setFederalUnit("SP"))
);

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'pix',
  payer: {
    email: 'test@test.com',
    identification: {
      type: 'CPF',
      number: '19119119100',
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
    PaymentMethodId = "pix",
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
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "pix",
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
            "street_name": "Av. das Nações Unidas",
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
      "description": "Título do produto",
      "payment_method_id": "pix",
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
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
      }
    }'
```
]]]

The response will show the pending payment status and all the information needed to show to the buyer. The `transaction_data` will provide the data to make the payment available via QR code.

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
      "external_resource_url": "https://www.mercadopago.com/mlb/payments/bank_transfer/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
      "installment_amount": 0,
      "financial_institution": null
  },
  "point_of_interaction": {
      "type": "PIX",
      "sub_type": null,
      "application_data": {
        "name": "NAME_SDK",
        "version": "VERSION_NUMBER",
      },
      "transaction_data": {
        "qr_code_base64": "iVBORw0KGgoAAAANSUhEUgAABRQAAAUUCAYAAACu5p7oAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAIABJREFUeJzs2luO3LiWQNFmI+Y/Zd6vRt36KGNXi7ZOBtcagHD4kNLeiLX33v8DAAAAABD879sDAAAAAAA/h6AIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCAAAAAJmgCAAAAABkgiIAAAAAkAmKAAAAAEAmKAIAAAAAmaAIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCA...",
        "qr_code": "00020126600014br.gov.bcb.pix0117john@yourdomain.com0217additional data520400005303986540510.005802BR5913Maria Silva6008Brasilia62070503***6304E2CA",
      }
  }
  ...,
}
```
With Pix payment you can also define the validity period of the payment code sent to the customer after placing the order, this being the period the customer will have to pay for the purchase. By default, the expiration date for payments with Pix is 24 hours, but you can change it by sending the `date_of_expiration` field in the payment creation request. The configured date must be between 30 minutes and up to 30 days from the date of issue.

[[[
```php
===
The date uses the format ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
The date uses the format ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
The date uses the format ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
The date uses the format ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
The date uses the format ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
The date uses the format ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

> WARNING
>
> Important
>
> If you try to make the payment after the date of expiration set, the transaction will be rejected.

 Attributes| Description |
| --- | --- |
| `qr_code_base64` | Data for QR code render.|
| `qr_code` | Data to make payment code available for copy and paste. |

## Data to make the payment

To make the payment, render the QR code to show it. The code can only be used once and will be displayed as long as it is still valid.

You can also add an option to copy and paste the payment code, which will allow you to carry out the transaction from Internet Banking. To render the QR code follow the steps below.

1. Add `qr_code_base64` to show the QR code. For example, you can render it like this:

```html
<img src={`data:image/jpeg;base64,${qr_code_base64}`/>
```

2. To show the payment code for copy and paste, you can add `qr_code` like this:

```html
<label for="copy">Copy Hash:</label>
<input type="text" id="copy"  value={qr_code}/>
```

> NOTE
>
> Important
>
> If you need to refund a payment made by a Pix transfer, you can find this information in [Refunds and cancellations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds).

------------