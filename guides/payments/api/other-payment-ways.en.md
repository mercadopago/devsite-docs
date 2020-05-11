# Integrate other payment methods

With Mercado Pago payment API, you can add **alternative payment methods for your customers to make their payments**.

----[mla]----

## Payment Methods

In addition to cards, you can offer other payment choices on your website.

| Type of payment method | Payment method |
| --- | ---|
| `ticket` | Rapipago |
| `ticket` | Pago Fácil |
| `ticket` | Provincia NET Pagos |
| `ticket` | Carga Virtual |
| `ticket` | Cobro Express |
| `atm` | Red Link |

## Check the available payment methods

You can check the available payment methods whenever you need.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

The result will be a list of payment methods and their features. For example, `payment_type_id` payment methods with `ticket` as value refer to cash payment method.

```json
[
    {
        "id": "rapipago",
        "name": "Rapipago",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2002.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2002.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "id": "redlink",
        "name": "RedLink",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2003.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2003.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```

> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/).

## Receive cash payments

To receive cash payments, just send your customer's e-mail, amount, and payment method.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Product Title";
  $payment->payment_method_id = "rapipago";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->save();

?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Product Title',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test_user_3931694@testuser.com'
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
      .setDescription('Product Title')
      .setPaymentMethodId("rapipago")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Product Title'
payment.payment_method_id = "rapipago"
payment.payer = {
  email: "test_user_19653727@testuser.com"
}

payment.save()

```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Product Title",
    PaymentMethodId = "rapipago",
    Payer = new Payer(){
        Email = "test_user_19653727@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Product Title",
  payment_method_id: "rapipago",
  payer: { email: "test_user_19653727@testuser.com" }
}'
```
]]]

<br>
The response will show pending status until the buyer makes the payment. The payment voucher ID is the same as the Mercado Pago transaction ID.

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
        "external_resource_url": "http://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
 }
]
```

In the `external_resource_url` field you will find an address with payment instructions for your buyer. You can redirect or send him/her the link.

> NOTE
>
> Note
>
> Customers have 3 to 5 days to pay, depending on the payment method. After that, you should cancel it.

## Cancel payments

To avoid collection issues, you need to cancel expired payments. Cash payments should be paid within 3 to 5 business days, based on their relevant term.

Take into account that **you can only cancel payments in process or pending status**. If a payment expires after 30 days, the cancellation is automatic and the final status will be cancelled or expired.

For more information, check the [Refunds and Cancellations section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/cancellations-and-refunds/).

## Payment credit times

Each payment method has its own credit times; it is immediate in some cases, while in others, it may take up to 3 business days.

Check [credit times by payment method](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) whenever you need to.

------------

----[mlm]----

## Payment Methods

In addition to cards, you can offer other payment choices on your website.

| Type of payment method | Payment method |
| --- | ---|
| `ticket` | OXXO |
| `atm` | Citibanamex |
| `atm` | Santander |
| `atm` | BBVA Bancomer |
| `prepaid_card` | Mercado Pago Card |

## Check the available payment methods

You can check the available payment methods whenever you need.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

The result will be a list of payment methods and their features. For example, `payment_type_id` payment methods with `ticket` as value refer to cash payment method.

```json
[
  {
        "id": "oxxo",
        "name": "OXXO",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/oxxo.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/oxxo.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5,
        "max_allowed_amount": 10000,
        "accreditation_time": 2880,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "banamex",
        "name": "Citibanamex",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/banamex.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/banamex.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5,
        "max_allowed_amount": 40000,
        "accreditation_time": 60,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "serfin",
        "name": "Santander",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/serfin.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/serfin.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5,
        "max_allowed_amount": 40000,
        "accreditation_time": 60,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
 {
        "id": "bancomer",
        "name": "BBVA Bancomer",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/bancomer.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/bancomer.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 10,
        "max_allowed_amount": 40000,
        "accreditation_time": 60,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "mercadopagocard",
        "name": "Tarjeta MercadoPago",
        "payment_type_id": "prepaid_card",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/mercadopagocard.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/mercadopagocard.gif",
        "deferred_capture": "supported",
        "settings": [
            {
                "card_number": {
                    "validation": "standard",
                    "length": 16
                },
                "bin": {
                    "pattern": "^539978",
                    "installments_pattern": "^539978",
                    "exclusion_pattern": null
                },
                "security_code": {
                    "length": 3,
                    "card_location": "back",
                    "mode": "mandatory"
                }
            }
        ],
        "additional_info_needed": [
            "cardholder_name"
        ],
        "min_allowed_amount": 5,
        "max_allowed_amount": 300000,
        "accreditation_time": 1440,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
]
```

> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/).

## Receive cash payments

To receive cash payments, just send your customer's e-mail, amount, and payment method.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Product Title";
  $payment->payment_method_id = "oxxo";
  $payment->payer = array(
    "email" => "test_user_82045343@testuser.com"
  );

  $payment->save();

?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Product Title',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test_user_82045343@testuser.com'
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
      .setDescription('Product Title')
      .setPaymentMethodId("oxxo")
      .setPayer(new Payer("test_user_82045343@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Product Title'
payment.payment_method_id = "oxxo"
payment.payer = {
  email: "test_user_82045343@testuser.com"
}

payment.save()

```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Product Title",
    PaymentMethodId = "oxxo",
    Payer = new Payer(){
        Email = "test_user_82045343@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Product Title",
  payment_method_id: "oxxo",
  payer: { email: "test_user_82045343@testuser.com" }
}'
```
]]]

<br>
The response will show pending status until the buyer makes the payment. The payment voucher ID is the same as the Mercado Pago transaction ID.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24304329",
        "verification_code": "882430432923032000100001",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlm/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
    }
  }
]
```

In the `external_resource_url` field you will find an address with payment instructions for your buyer. You can redirect or send him/her the link.

> NOTE
>
> Note
>
> Customers have 3 to 5 days to pay, depending on the payment method. After that, you should cancel it.

## Cancel payments

To avoid collection issues, you need to cancel expired payments. Cash payments should be paid within 3 to 5 business days, based on their relevant term.

Take into account that **you can only cancel payments in process or pending status**. If a payment expires after 30 days, the cancellation is automatic and the final status will be cancelled or expired.

For more information, check the [Refunds and Cancellations section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/cancellations-and-refunds/).

## Payment credit times

Each payment method has its own credit times; it is immediate in some cases, while in others, it may take up to 3 business days.

Check [credit times by payment method]https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) whenever you need to.

## Inform customer payment points

Finally, you should share information about the different places where your customers can pay.

| Payment method | Available stores |
| --- | ---|
| OXXO | OXXO
| BBVA Bancomer | 7-Eleven |
| BBVA Bancomer | K |
| BBVA Bancomer | Farmacias del Ahorro |
| BBVA Bancomer | Casa Ley |
| BBVA Bancomer | BBVA Bancomer |
| Citibanamex| Chedraui |
| Citibanamex| Telecomm |
| Citibanamex| Citibanamex |

------------

----[mlu]----

# Payment Methods

In addition to cards, you can offer other payment choices on your website.

| Type of payment method | Payment method |
| --- | ---|
| `ticket` | Abitab |
| `ticket` | Redpagos |

## Check the available payment methods

You can check the available payment methods whenever you need.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

The result will be a list of payment methods and their features. For example, `payment_type_id` payment methods with `ticket` as value refer to cash payment method.

```json

[
 {
        "id": "abitab",
        "name": "Abitab",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/abitab.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/abitab.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "identification_number"
        ],
        "min_allowed_amount": 1,
        "max_allowed_amount": 150000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
 {
        "id": "redpagos",
        "name": "Redpagos",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/redpagos.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/redpagos.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "identification_number"
        ],
        "min_allowed_amount": 1,
        "max_allowed_amount": 150000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    }
]
```

> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/).

## Receive cash payments

To receive cash payments, just send your customer's e-mail, amount, and payment method.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Product Title";
  $payment->payment_method_id = "abitab";
  $payment->payer = array(
    "email" => "test_user_84162205@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Product Title',
  payment_method_id: 'abitab',
  payer: {
    email: 'test_user_84162205@testuser.com'
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
      .setDescription('Product Title')
      .setPaymentMethodId("abitab")
      .setPayer(new Payer("test_user_84162205@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Product Title'
payment.payment_method_id = "abitab"
payment.payer = {
  email: "test_user_84162205@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Product Title",
    PaymentMethodId = "rapipago",
    Payer = new Payer(){
        Email = "test_user_84162205@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Product Title",
  payment_method_id: "abitab",
  payer: { email: "test_user_84162205@testuser.com" }
}'
```
]]]

<br>
The response will show pending status until the buyer makes the payment. The payment voucher ID is the same as the Mercado Pago transaction ID.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
   "transaction_details": {
        "payment_method_reference_id": "24308188",
        "verification_code": "24308188",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlu/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

In the `external_resource_url` field you will find an address with payment instructions for your buyer. You can redirect or send him/her the link.

> NOTE
>
> Note
>
> Customers have 3 to 5 days to pay, depending on the payment method. After that, you should cancel it.

## Cancel payments

To avoid collection issues, you need to cancel expired payments. Cash payments should be paid within 3 to 5 business days, based on their relevant term.

Take into account that **you can only cancel payments in process or pending status**. If a payment expires after 30 days, the cancellation is automatic and the final status will be cancelled or expired.

For more information, check the [Refunds and Cancellations section]https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/cancellations-and-refunds/).

## Payment credit times

Each payment method has its own credit times; it is immediate in some cases, while in others, it may take up to 3 business days.

Check [credit times by payment method](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) whenever you need to.

------------

----[mco]----

## Payment Methods

In addition to cards, you can offer other payment choices on your website.

| Type of payment method | Payment method |
| --- | ---|
| `ticket` | Efecty |
| `ticket` | Davivienda |
| `ticket` | Baloto |
| `bank_transfer` | PSE |


## Check the available payment methods

You can check the available payment methods whenever you need.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

The result will be a list of payment methods and their features. For example, `payment_type_id` payment methods with `ticket` as value refer to cash payment method.

```json
[
  {
        "id": "efecty",
        "name": "Efecty",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/efecty.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/efecty.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 5000,
        "max_allowed_amount": 4000000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
 {
        "id": "davivienda",
        "name": "Davivienda",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/davivienda.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/davivienda.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 1600,
        "max_allowed_amount": 150000000,
        "accreditation_time": 10080,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "baloto",
        "name": "Baloto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/baloto.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/baloto.gif",
        "deferred_capture": "supported",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 1500,
        "max_allowed_amount": 1000000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
        ]
    },
{
        "id": "pse",
        "name": "PSE",
        "payment_type_id": "bank_transfer",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pse.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/pse.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "entity_type"
        ],
        "min_allowed_amount": 1600,
        "max_allowed_amount": 30000000,
        "accreditation_time": 30,
        "financial_institutions": [
            …,
        ],
        "processing_modes": [
            "aggregator"
        ]
    }
]
```

> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/).

## Receive cash payments

To receive cash payments, just send your customer's e-mail, amount, and payment method.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 5000;
  $payment->description = "Product Title";
  $payment->payment_method_id = "efecty";
  $payment->payer = array(
    "email" => "test_user_19549678@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 5000,
  description: 'Product Title',
  payment_method_id: 'efecty',
  payer: {
    email: 'test_user_19549678@testuser.com'
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

payment.setTransactionAmount(5000f)
      .setDescription('Product Title')
      .setPaymentMethodId("efecty")
      .setPayer(new Payer("test_user_19549678@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 5000
payment.description = 'Product Title'
payment.payment_method_id = "efecty"
payment.payer = {
  email: "test_user_19549678@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("5000"),
    Description = "Product Title",
    PaymentMethodId = "efecty",
    Payer = new Payer(){
        Email = "test_user_19549678@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 5000,
  description: "Product Title",
  payment_method_id: "efecty",
  payer: { email: "test_user_19549678@testuser.com" }
}'
```
]]]

<br>
The response will show pending status until the buyer makes the payment. The payment voucher ID is the same as the Mercado Pago transaction ID.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "payment_method_reference_id": "24308386",
        "verification_code": "24308386",
        "net_received_amount": 0,
        "total_paid_amount": 5000,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mco/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

In the `external_resource_url` field you will find an address with payment instructions for your buyer. You can redirect or send him/her the link.

> NOTE
>
> Note
>
> Customers have 3 to 5 days to pay, depending on the payment method. After that, you should cancel it.

## Cancel payments

To avoid collection issues, you need to cancel expired payments. Cash payments should be paid within 3 to 5 business days, based on their relevant term.

Take into account that **you can only cancel payments in process or pending status**. If a payment expires after 30 days, the cancellation is automatic and the final status will be cancelled or expired.

For more information, check the [Refunds and Cancellations section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/cancellations-and-refunds/).

## Payment credit times

Each payment method has its own credit times; it is immediate in some cases, while in others, it may take up to 3 business days.

Check [credit times by payment method](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) whenever you need to.

------------

----[mlc]----

## Payment Methods

In addition to cards, you can offer other payment choices on your website.

| Type of payment method | Payment method |
| --- | ---|
| `ticket` | Sucursales Servipag |
| `bank_transfer` | Redcompra Webpay |


## Check the available payment methods

You can check the available payment methods whenever you need.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

The result will be a list of payment methods and their features. For example, `payment_type_id` payment methods with `ticket` as value refer to cash payment method.

```json
[
 {
        "id": "servipag",
        "name": "Sucursales Servipag",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/servipag.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/servipag.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "min_allowed_amount": 1,
        "max_allowed_amount": 500000,
        "accreditation_time": 0,
        "financial_institutions": [],
        "processing_modes": [
            "aggregator"
         ]
    },
 {
        "id": "webpay",
        "name": "Redcompra Webpay",
        "payment_type_id": "bank_transfer",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/webpay.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/webpay.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [
            "entity_type"
        ],
        "min_allowed_amount": 50,
        "max_allowed_amount": 3000000,
        "accreditation_time": 20,
        "financial_institutions": [
            {
                "id": "1234",
                "description": "Transbank"
            }
        ],
        "processing_modes": [
            "aggregator"
        ]
    }
]
```

> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/).

## Receive cash payments

To receive cash payments, just send your customer's e-mail, amount, and payment method.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Product Title";
  $payment->payment_method_id = "servipag";
  $payment->payer = array(
    "email" => "test_user_15748052@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Product Title',
  payment_method_id: 'servipag',
  payer: {
    email: 'test_user_15748052@testuser.com'
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
      .setDescription('Product Title')
      .setPaymentMethodId("servipag")
      .setPayer(new Payer("test_user_15748052@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Product Title'
payment.payment_method_id = "servipag"
payment.payer = {
  email: "test_user_15748052@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Product Title",
    PaymentMethodId = "servipag",
    Payer = new Payer(){
        Email = "test_user_15748052@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Product Title",
  payment_method_id: "servipag",
  payer: { email: "test_user_15748052@testuser.com" }
}'
```
]]]

<br>
The response will show pending status until the buyer makes the payment. The payment voucher ID is the same as the Mercado Pago transaction ID.

```json
[
 {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
   "transaction_details": {
        "payment_method_reference_id": "24308616",
        "verification_code": "24308615",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mlc/payments/sandbox/ticket/helper?payment_id=1234&payment_method_reference_id=12345678&caller_id=1234&hash=aaaaaa-bbb-cccc-dddd-eeeeeeee",
        "installment_amount": 0,
        "financial_institution": "",
        "payable_deferral_period": null,
        "acquirer_reference": null
   }
  }
]
```

In the `external_resource_url` field you will find an address with payment instructions for your buyer. You can redirect or send him/her the link.

> NOTE
>
> Note
>
> Customers have 3 to 5 days to pay, depending on the payment method. After that, you should cancel it.

## Cancel payments

To avoid collection issues, you need to cancel expired payments. Cash payments should be paid within 3 to 5 business days, based on their relevant term.

Take into account that **you can only cancel payments in process or pending status**. If a payment expires after 30 days, the cancellation is automatic and the final status will be cancelled or expired.

> WARNING
>
> Important
>
> Remember that if payments are not made within 30 minutes, Webpay will automatically cancel them.

For more information, check the [Refunds and Cancellations section](https://www.mercadopago.cl/developers/en/guides/manage-account/cancellations-and-refunds/).

## Payment credit times

Each payment method has its own credit times; it is immediate in some cases, while in others, it may take up to 3 business days.

Check [credit times by payment method](https://www.mercadopago.cl/ayuda/Medios-de-pago-y-acreditaci-n_221) whenever you need to.

------------


----[mpe]----

## Payment Methods

In addition to cards, you can offer other payment choices on your website.

| Type of payment method | Payment method |
| --- | ---|
| `atm` | PagoEfectivo |


## Check the available payment methods

You can check the available payment methods whenever you need.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

The result will be a list of payment methods and their features. For example, `payment_type_id` payment methods with `ticket` as value refer to cash payment method.

```json
[
  {
      "id": "pagoefectivo_atm",
      "name": "BCP, BBVA Continental u otros",
      "payment_type_id": "atm",
      "status": "active",
      "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pagoefectivo_atm.gif",
      "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/pagoefectivo_atm.gif",
      "deferred_capture": "does_not_apply",
      "settings": [],
      "additional_info_needed": [],
      "min_allowed_amount": 5,
      "max_allowed_amount": 10000,
      "accreditation_time": 2880,
      "financial_institutions": [],
      "processing_modes": [
          "aggregator"
      ]
  }
]
```

> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/).

## Receive cash payments

To receive cash payments, just send your customer's e-mail, amount, and payment method.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->description = "Product Title";
  $payment->payment_method_id = "pagoefectivo_atm";
  $payment->payer = array(
    "email" => "test_user_42972582@testuser.com"
  );

  $payment->save();
?>
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Product Title',
  payment_method_id: 'pagoefectivo_atm',
  payer: {
    email: 'test_user_42972582@testuser.com'
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
      .setDescription('Product Title')
      .setPaymentMethodId("pagoefectivo_atm")
      .setPayer(new Payer("test_user_42972582@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.description = 'Product Title'
payment.payment_method_id = "pagoefectivo_atm"
payment.payer = {
  email: "test_user_42972582@testuser.com"
}

payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("100"),
    Description = "Product Title",
    PaymentMethodId = "pagoefectivo_atm",
    Payer = new Payer(){
        Email = "test_user_42972582@testuser.com"
  }
};

payment.Save();

```
```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  description: "Product Title",
  payment_method_id: "pagoefectivo_atm",
  payer: { email: "test_user_42972582@testuser.com" }
}'
```
]]]

<br>
The response will show pending status until the buyer makes the payment. The payment voucher ID is the same as the Mercado Pago transaction ID.

```json
[
  {
    ...,
    "id": 5466310457,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,

    "order": {},
    "external_reference": null,
    "transaction_amount": 100,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "transaction_details": {
        "payment_method_reference_id": "123457986",
        "verification_code": "24308767",
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "https://www.mercadopago.com/mpe/payments/sandbox/atm/helper?payment_id=24308766&payment_method_reference_id=24308767&caller_id=537490079&hash=c96a61b0-10f4-40f6-afff-82fc0f0923da",
        "installment_amount": 0,
        "financial_institution": "PagoEfectivo",
        "payable_deferral_period": null,
        "acquirer_reference": null
    }
  }
]
```

In the `external_resource_url` field you will find an address with payment instructions for your buyer. You can redirect or send him/her the link.

> NOTE
>
> Note
>
> Customers have 3 to 5 days to pay, depending on the payment method. After that, you should cancel it.

## Cancel payments

To avoid collection issues, you need to cancel expired payments. Cash payments should be paid within 3 to 5 business days, based on their relevant term.

Take into account that **you can only cancel payments in process or pending status**. If a payment expires after 30 days, the cancellation is automatic and the final status will be cancelled or expired.

For more information, check the [Refunds and Cancellations section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/cancellations-and-refunds/).

## Payment credit times

Each payment method has its own credit times; it is immediate in some cases, while in others, it may take up to 3 business days.

Check [credit times by payment method](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-para-tus-compradores_2433) whenever you need to.

------------

----[mlb]----

## Payment Methods

In addition to cards, you can offer other payment choices on your website.

| Type of payment method | Payment method |
| --- | ---|
| `ticket` | Boleto |
| `ticket` | Pagamento em lotérica |

## Check the available payment methods

You can check the available payment methods whenever you need.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");

```
```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payment_methods?access_token=ENV_ACCESS_TOKEN' \
```
]]]

<br>

The result will be a list of payment methods and their features. For example, `payment_type_id` payment methods with `ticket` as value refer to cash payment method.

```json
[
    {
        "id": "bolbradesco",
        "name": "Boleto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/bolbradesco.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/bolbradesco.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "id": "pec",
        "name": "Pagamento na lotérica sem boleto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pec.gif",
        "thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pec.gif",
        "deferred_capture": "supported",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```

> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/).

## Receive payments with boleto or lotérica

To receive payments with boleto or lotérica, you just have to send the amount, the payment method, the identification data and the buyer's address.

[[[
```php
<?php

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Product Title";
 $payment->payment_method_id = "bolbradesco";
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
  description: 'Product Title',
  payment_method_id: 'bolbradesco',
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
       .setDescription('Product Title')
       .setPaymentMethodId("bolbradesco")
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
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_data = {
  transaction_amount: 100,
  description: "Product Title",
  payment_method_id: "bolbradesco",
  payer: {
    email: "test@test.com",
    first_name: "Test",
    last_name: "User",
    identification: {
        type: "CPF",
        number: "191191191-00"
    },
    address: {
        zip_code: "06233-200",
        street_name: "Av. das Nações Unidas",
        street_number: "3003",
        neighborhood: "Bonfim",
        city: "Osasco",
        federal_unit: "SP"
    }
  }
}

payment.save()

```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;

MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
    TransactionAmount = float.Parse("105"),
    Description = "Product Title",
    PaymentMethodId = "bolbradesco",
    Payer = new Payer(){
        Email = "test@test.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new Identification(){
            Type = "CPF",
            Number = "191191191-00"
        },
        Address = new Address(){
            ZipCode = "06233-200",
            StreetName = "Av. das Nações Unidas",
            StreetNumber = "3003",
            Neighborhood = "Bonfim",
            City = "Osasco",
            FederalUnit = "SP"

        }
    }
};

payment.Save();

```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
    -d '{
      "transaction_amount": 100,
      "description": "Product Title",
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

<br>
The response will show pending status until the buyer makes the payment. The payment voucher ID is the same as the Mercado Pago transaction ID.

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
        "external_resource_url": "http://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
}
]
```

In the `external_resource_url` field you will find an address with payment instructions for your buyer. You can redirect or send him/her the link.

> NOTE
>
> Note
>
> Customers have 3 to 5 days to pay, depending on the payment method. After that, you should cancel it.

## Cancel payments

To avoid collection issues, you need to cancel expired payments. Cash payments should be paid within 3 to 5 business days, based on their relevant term.

Take into account that **you can only cancel payments in process or pending status**. If a payment expires after 30 days, the cancellation is automatic and the final status will be cancelled or expired.

For more information, check the [Refunds and Cancellations section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/cancellations-and-refunds/).

## Payment credit times

Each payment method has its own credit times; it is immediate in some cases, while in others, it may take up to 3 business days.

Check [credit times by payment method](https://www.mercadopago.com.br/ajuda/meios-de-pagamento-parcelamento_265) whenever you need to.

------------

---
### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/test-integration/)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Advanced integration
>
> Enhance your integration and improve your sales management.
>
> [Advanced integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/advanced-integration)
