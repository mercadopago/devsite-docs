----[mlb]----

# Boleto bancário

With Mercado Pago's Checkout API, it is possible to offer, in addition to card and Pix, **payments via boleto bancário**.

To get a detailed list of all payment methods available for integration, send a **GET** with your **Access token** to the endpoint [/v1/payment_methods](/developers/en/reference/payment_methods/_payment_methods/get) and run the request or, if you prefer, make the request using the SDKs below.

[[[
```php
<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var Mercadopago = require('mercadopago');
Mercadopago.configurations.setAccessToken(config.access_token);

var response = await Mercadopago.payment_methods.listAll();
var payment_methods = response.body;
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentMethodClient client = new PaymentMethodClient();
client.list();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import market
sdk = Mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]
```
```curl
curl -X GET \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/payment_methods' \
```
]]]

To offer **Pagamento via boleto bancário**, follow the steps below.

## Import MercadoPago.js

To perform the Checkout API integration, you need to capture the necessary data to process the payment.

This capture is made by including the MercadoPago.js library in your project, followed by the payment form. Use the code below to import the library before adding the payment form.

[[[
```html

<body>
<script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
]]]

## Configure credentials

Credentials are unique passwords with which we identify an integration in your account. They are made to capture payments in virtual stores and other applications securely.

This is the first step of a complete code structure that must be followed for the correct integration of the payment flow. Pay attention to the blocks below to add to the codes as indicated.


[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
]]]


## Add payment form

With the MercadoPago.js library included, add the payment form below to your project to ensure the secure capture of buyer data. In this step, it is important to use the list you consulted to obtain the available payment methods to create the payment options you want to offer.


[[[
```html

  <form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Name</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Last name</label>
        <input id="form-checkout__payerLastName" name="payerLastName" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="identificationType">Type of document</label>
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Document number</label>
        <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
      </div>
    </div>

    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
        <input type="hidden" name="description" id="description" value="Nome do Produto">
        <br>
        <button type="submit">Pay</button>
      </div>
    </div>
  </form>
```
]]]

## Get document types

After configuring the credential, it is necessary to obtain the types of documents that will be part of filling out the payment form.

By including the element of type `select` with the id: `id = docType` that is on the form, it will be possible to automatically fill in the available options when calling the following function:

[[[
```javascript

(async function getIdentificationTypes() {
try {
const identificationTypes = await mp.getIdentificationTypes();
const identificationTypeElement = document.getElementById('form-checkout__identificationType');

createSelectOptions(identificationTypeElement, identificationTypes);
} catch (e) {
return console.error('Error getting identificationTypes: ', e);
}
})();

function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {
const { label, value } = labelsAndKeys;

elem.options.length = 0;

const tempOptions = document.createDocumentFragment();

options.forEach(option => {
const optValue = option[value];
const optLabel = option[label];

const opt = document.createElement('option');
opt.value = optValue;
opt.textContent = optLabel;

tempOptions.appendChild(opt);
});

elem.appendChild(tempOptions);
}
```
]]]

## Send payment

When finalizing the inclusion of the payment form and obtaining the types of documents, it is necessary to forward the buyer's email, type and document number, the payment method used and the details of the amount to be paid using our Payments API or one of our SDKs.

To configure **pagamento via boleto bancárioa**, send a **POST** with the following parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and run the request or, if you prefer, use one of our SDKs below.


| Payment Type | Parameter | Value |
| --- | --- | --- |
| Boleto  | `payment_method_id`  | `bolbradesco`  |


> WARNING
>
> Important
>
> For this step, when making the request via API or SDKs, it is necessary to send your Private Key - Access token.

[[[
```php
<?php

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título del producto";
 $payment->payment_method_id = "bolbradesco";
 $payment->payer = array(
     "email" => "test@test.com",
     "first_name" => "Test",
     "last_name" => "User",
     "identification" => array(
         "type" => "DNI",
         "number" => "19119119"
      ),
     "address"=>  array(
         "zip_code" => "1264",
         "street_name" => "Av. Caseros",
         "street_number" => "3039",
         "neighborhood" => "Parque Patricios",
         "city" => "Buenos Aires",
         "federal_unit" => "BA"
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
  description: 'Título del producto',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'DNI',
        number: '19119119'
    },
    address:  {
        zip_code: '1264',
        street_name: 'Av. Caseros',
        street_number: '3039',
        neighborhood: 'Parque Patricios',
        city: 'Buenos Aires',
        federal_unit: 'BA'
    }
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
       .description("Título del producto")
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
  description: 'Título del producto',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
      type: 'DNI',
      number: '19119119',
    },
    address: {
      zip_code: '1264',
      street_name: 'Av. Caseros',
      street_number: '3039',
      neighborhood: 'Parque Patricios',
      city: 'Buenos Aires',
      federal_unit: 'BA'
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
    Description = "Título del producto",
    PaymentMethodId = "bolbradesco",
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new IdentificationRequest
        {
            Type = "DNI",
            Number = "19119119",
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
    "description": "Título del producto",
    "payment_method_id": "bolbradesco",
    "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "DNI",
            "number": "19119119"
        },
        "address": {
            "zip_code": "1264",
            "street_name": "Av. Caseros",
            "street_number": "3039",
            "neighborhood": "Parque Patricios",
            "city": "Buenos Aires",
            "federal_unit": "BA"
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
      "description": "Título del producto",
      "payment_method_id": "bolbradesco",
      "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "DNI",
            "number": "19119119"
        },
        "address": {
            "zip_code": "1264",
            "street_name": "Av. Caseros",
            "street_number": "3039",
            "neighborhood": "Parque Patricios",
            "city": "Buenos Aires",
            "federal_unit": "BA"
        }
      }
    }'
```
]]]

The response will show the **pending status** until the buyer completes the payment. Also, in the response to the request, the `external_resource_url` parameter will return a URL that contains instructions for the buyer to make the payment. You can redirect to this same link to complete the payment flow. See below for an example return.

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
        "external_resource_url": "https://www.mercadopago.com/mlb/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
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
> Note
>
> The customer has between 3 and 5 days to pay, depending on the payment method. After this time, the payment must be canceled.

## Boleto bancário with fines, interest and discounts

If you want to offer **boleto bancário with discounts, fines, and interest**, either for payments made in advance, or for payments made after the expiration date, you can create them directly via Mercado Pago API, or using the following SDKs:

[[[
```php

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->description = "Titulo do produto";
 $payment->date_of_expiration = "2022-12-24T22:59:59.000-04:00";
 $payment->payment_method_id = "bolbradesco";
 $payment->transaction_amount = 100;

 $payer = new MercadoPago\Payer();
 $payer->first_name = "Test";
 $payer->last_name = "user";
 $payer->email = "test_user_123456@testuser.com";
 $payer->identification = array(
   "type" => "CPF",
   "number" => "19119119100"
 );
 $payment->payer = $payer;

 $payment->payment_method = array(
   "data" => array(
     "rules" => array(
       "discounts" => array(
         array(
          "value" => 5,
          "type" => "fixed",
          "limit_date" => "2022-12-10"
         )
       ),
       "fine" => array(
         "value" => 2,
         "type" => "percentage"
       ),
       "interest" => array(
         "value" => 0.03,
         "type" => "percentage"
       )
     )
   )
 );

 $payment->save();
 echo 'URL Boleto: ' . $payment->transaction_details->external_resource_url;

```
```nodeJS
var mercadopago = require('mercadopago');
mercadopago.configure({
  access_token: 'YOUR_ACCESS_TOKEN'
});

var payment = {
  description: 'Título do produto',
  date_of_expiration: '2022-12-24T15:37:48.000-03:00',
  payment_method_id: 'bolbradesco',
  transaction_amount: 100,
  payer: {
    first_name: 'Test',
    last_name: 'User',
    email: 'test_user_123456@testuser.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  },
  payment_method: {
    data: {
      rules: {
        discounts: [
          {
            value: 5,
            type: 'fixed',
            limit_date: '2022-12-10'
          }
        ],
        fine: {
          value: 2,
          type: 'percentage'
        },
        interest: {
          value: 0.03,
          type: 'percentage'
        }
      }
    }
  }
};

mercadopago.payment.create(payment).then(function (data) {
  console.log('URL boleto: ' + data.body.transaction_details.external_resource_url);
}).catch(function (error) {
  console.log(error);
});

```
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

LocalDateTime dateOfExpiration = LocalDateTime.of(2022, 12, 24, 23, 59, 59);
PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .description("Título do produto")
        .dateOfExpiration(OffsetDateTime.of(dateOfExpiration, ZoneOffset.UTC))
        .paymentMethodId("bolbradesco")
        .transactionAmount(new BigDecimal("100"))
        .payer(PaymentPayerRequest.builder()
            .firstName("Test")
            .lastName("User")
            .email("test_user_123456@testuser.com")
            .identification(IdentificationRequest.builder()
                .type("CPF")
                .number("19119119100")
                .build())
            .build())
        .paymentMethod(PaymentMethodRequest.builder()
            .data(PaymentDataRequest.builder()
                .rules(PaymentRulesRequest.builder()
                     .discounts(Collections.singletonList(
                          PaymentDiscountRequest.builder()
                               .value(new BigDecimal("5"))
                               .type("fixed")
                               .limitDate(LocalDate.of(2022, 12, 10))
                               .build()))
                     .fine(PaymentFeeRequest.builder()
                          .value(new BigDecimal("2"))
                          .type("percentage")
                          .build())
                     .interest(PaymentFeeRequest.builder()
                          .value(new BigDecimal("0.03"))
                          .type("percentage")
                          .build())
                     .build())
                 .build())
             .build())
         .build();

Payment payment = client.create(createRequest);
System.out.printf("URL boleto: %s", payment.getTransactionDetails().getExternalResourceUrl());
```
```ruby
require_relative 'mercadopago'

sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

payment_data = {
  description: 'Titulo do produto',
  date_of_expiration: '2022-12-24T15:37:48.000-03:00',
  payment_method_id: 'bolbradesco',
  transaction_amount: 100,
  payer: {
    first_name: 'Test',
    last_name: 'User',
    email: 'test_user_123456@testuser.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  },
  payment_method: {
    data: {
      rules: {
        discounts: [
          {
            value: 5,
            type: 'fixed',
            limit_date: '2022-12-10'
          }
        ],
        fine: {
          value: 2,
          type: 'percentage'
        },
        interest: {
          value: 0.03,
          type: 'percentage'
        }
      }
    }
  }
};

result = sdk.payment.create(payment_data)
puts result[:response]["transaction_details"]["external_resource_url"]
```
```python
import mercadopago

sdk = mercadopago.SDK("YOUR_ACCESS_TOKEN")

payment_data = {
    "description": "Titulo do produto",
    "date_of_expiration": "2022-12-24T15:37:48.000-03:00",
    "payment_method_id": "bolbradesco",
    "transaction_amount": 100,
    "payer": {
        "first_name": "Test",
        "last_name": "User",
        "email": "test_user_123456@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        }
    },
    "payment_method": {
        "data": {
            "rules": {
                "discounts": [
                    {
                        "value": 5,
                        "type": "fixed",
                        "limit_date": "2022-12-10"
                    }
                ],
                "fine": {
                    "value": 2,
                    "type": "percentage"
                },
                "interest": {
                    "value": 0.03,
                    "type": "percentage"
                }
            }
        }
    }
}

result = sdk.payment().create(payment_data)
print(result["response"]["transaction_details"]["external_resource_url"])
```
]]]

The response will return the following result:

[[[
```json
{
  "id": 123456789,
  "status": "pending",
  "status_detail": "pending_waiting_payment",
  ...,
  "payment_method": {
    "id": "bolbradesco",
    "type": "ticket",
    "data": {
      "rules": {
        "discounts": [
          {
            "value": 1,
            "type": "fixed",
            "limit_date": "2022-12-12"
          }
        ],
        "fine": {
          "value": 2,
          "type": "percentage"
        },
        "interest": {
          "value": 0.03,
          "type": "percentage"
        }
      }
    }
  },
  ...,
  "transaction_details": {
    "net_received_amount": 0,
    "total_paid_amount": 100,
    "overpaid_amount": 0,
    "external_resource_url": "https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=e10c4695-49a0-475e-8adc-29a8055b9167",
    "installment_amount": 0,
    "financial_institution": null,
    "payment_method_reference_id": "1234567890"
  }
}
```
]]]


If you want to create them through Mercado Pago API, send a request following this model:

[[[
```Curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "transaction_amount": 100,
    "date_of_expiration": "2022-12-24T15:37:48.000-03:00",
    "payment_method_id": "bolbradesco",
    "description": "Titulo do produto",
    "payer": {
        "first_name": "Test",
        "last_name": "User",
        "email": "test_user_123456@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        }
    },
    "payment_method": {
        "data": {
            "rules": {
                "discounts": [
                    {
                        "value": 5,
                        "type": "fixed",
                        "limit_date": "2022-12-10"
                    }
                ],
                "fine": {
                    "value": 2,
                    "type": "percentage"
                },
                "interest": {
                    "value": 0.03,
                    "type": "percentage"
                }
            }
        }
    }
}'
```
]]]

To send a payment, you must complete the fields following the specifications in the next charts:

|      FIELD     |  TYPE  |                            DESCRIPTION                           |                           VALIDATIONS                           |
|:--------------:|:------:|:----------------------------------------------------------------:|:---------------------------------------------------------------:|
| payment_method | Object | Object that keeps the information related to the payment method. | -                                                               |
| data           | Object | Object that preserves the data related to the means of payment.  | -                                                               |
| rules          | Object | Object that preserves the rules related to the means of payment. | -                                                               |
| discounts      | List   | List of discounts to apply.                                      | Currently, only the first discount on the list will be applied. |
| fine           | Object | Object that holds the information related to the fine.           | -                                                               |
| interest       | Object | Object that keeps information related to interests.              | -                                                               |

Within the **"Discounts"** field, you must replace the values following the specifications below:

|    FIELD   |    TYPE    |                                                  DESCRIPTION                                                  |                                                                   VALIDATIONS                                                                  |
|:----------:|:----------:|:-------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------:|
| value      | BigDecimal | Property to define the amount of the discount to be applied when the payment is made before the defined term. | **Number of decimal places**: 0 - 2. **Maximum value**: Must be **positive** and **less than or equal** to the value reported in "transaction_amount". |
| type       | String     | Property to define the type of calculation on the value reported in "value".                                  | Possible values: "fixed".                                                                                                                      |
| limit_date | Date       | Property to define the term to consider the discount.                                                         | Format: yyyy-MM-dd. The expiration date must be before the date entered in "date_of_expiration". 

Within the **“Fine"** field, you must replace the values following the specifications below:

| FIELD |    TYPE    |                                           DESCRIPTION                                          |                               VALIDATIONS                               |
|:-----:|:----------:|:----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------:|
| value | BigDecimal | Property to define the value of the fine to apply when the payment is made after the due date. | **Number of decimal**: 0 - 2. **Maximum values**: "type = percentage: 2" |
| type  | String     | Property to define the type of calculation on the value reported in "value".                   | Possible values: "percentage".                                          |


Within the **"Interest"** field, you must replace the values following the specifications below:

| FIELD |    TYPE    |                                               DESCRIPTION                                              |                                 VALIDATIONS                                 |
|:-----:|:----------:|:------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|
| value | BigDecimal | Property to define the daily interest value to be applied when the payment is made after the due date. | **Number of decimal**: 0 - 2. **Maximum values**: "type = percentage: 0.03". |
| type  | String     | Property to define the type of calculation on the value reported in "value".                           | Possible values: "percentage".                                              |


The response will return the following result:

[[[
```json
{
  "id": 1111111111111,
  "date_created": "2022-11-07T15:47:21.753-04:00",
  "date_last_updated": "2022-11-07T15:47:21.753-04:00",
  "date_of_expiration": "2022-11-24T22:59:59.000-04:00",
  "operation_type": "regular_payment",
  "payment_method_id": "bolbradesco",
  "payment_type_id": "ticket",
  "status": "pending",
  "status_detail": "pending_waiting_payment",
  "currency_id": "BRL",
  "description": "Streaming subscription",
  "site_id": "MLB",
  "marketplace": "NONE",
  ...
  "payment_method": {
    "id": "bolbradesco",
    "type": "ticket",
    "data": {
      "paid_date": null,
      "rules": {
        "discounts": [
            {
                "type": "fixed",
                "value": 1,
                "limit_date": "2022-11-10",
                "amount_applied": 0
            }
        ],
        "fine": {
            "type": "percentage",
            "value": 2,
            "amount_applied": 0
        },
        "interest": {
            "type": "percentage",
            "value": 0.03,
            "amount_applied": 0
        }
      }
    }
  }
}

```
]]]


In the following charts you will find the specifications for each field returned when sending the payment:

|      FIELD     |  TYPE  |                            DESCRIPTION                           |
|:--------------:|:------:|:----------------------------------------------------------------:|
| payment_method | Object | Object that keeps the information related to the payment method. |
| id             | String | Payment method’s identification                                  |
| data           | Object | Object that preserves the data related to the means of payment.  |
| paid_date      | Date   | Date in which the payment was made. yyyy-MM-dd format.           |
| rules          | Object | Object that preserves the rules related to the means of payment. |
| discounts      | List   | List of discounts applied.                                       |
| fine           | Object | Object that holds the information related to the fine.           |
| interest       | Object | Object that holds the information related to the interests.      |

For the **“Discounts”** value, the specifications are as follows:

|      FIELD     |    TYPE    |                                                                                                                                 DESCRIPTION                                                                                                                                |
|:--------------:|:----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| value          | BigDecimal | Property to define the amount of the discount to be applied when the payment is made before the defined term.                                                                                                                                                              |
| type           | String     | Property to define the type of calculation on the value reported in "value".                                                                                                                                                                                               |
| limit_date     | Date       | Property to define de due date to consider the discount.                                                                                                                                                                                                                   |
| amount_applied | BigDecimal | Property with discount calculated value. To calculate the discount applied to the "transaction_amount" value, check if the current date is less than or equal to the discount due date. In case the current date is greater than the due date, the returned value will be 0. |

For the **“Fine”** value, the specifications are as follows:

|      FIELD     |    TYPE    |                                                                                                                         DESCRIPTION                                                                                                                        |
|:--------------:|:----------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| value          | BigDecimal | Property to define the value of the fine to apply when the payment is made after the due date.                                                                                                                                                             |
| type           | String     | Property to define the type of calculation on the value reported in "value".                                                                                                                                                                               |
| amount_applied | BigDecimal | Property with fine calculated value. To calculate the fine applied over the "transaction_amount" value, check if the current date is greater than the boleto’s due date. In case it is less than or equal to the current date, the returned value will be 0. |

For the **“Interest”** value, the specifications are as follows:

|      FIELD     |    TYPE    |                                                                                                                                                                                                                           DESCRIPTION                                                                                                                                                                                                                           |
|:--------------:|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| value          | BigDecimal | Property to define the daily interest value to be applied when the payment is made after the due date.                                                                                                                                                                                                                                                                                                                                                          |
| type           | String     | Property to define the type of calculation on the value reported in "value".                                                                                                                                                                                                                                                                                                                                                                                    |
| amount_applied | BigDecimal | Property with interests’ calculated value. To calculate this interest applied over the "transaction_amount" value, check if the current date is greater than the boleto’s due date and the difference of days between these dates; that is, the amount applied is the number of days after the due date, multiplied by the interest defined in the request.  In case the current date is less than or equal to the expiration date, the returned value will be 0. |


## Expiration date

The default expiration date for **pagamento com boleto bancário** is 3 days. Optionally, it is possible to change this date by sending the date_of_expiration field in the payment creation request, defining a period between 1 and 30 days from the boleto issuance date.

To change the expiration date, use one of the codes available below.

[[[
```php
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
La fecha usa el formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

The time for payment approval is up to 48 business hours. Therefore, set the expiration date to a minimum of 3 days to ensure that the payment is made.

> WARNING
>
> Important
>
> If the boleto is paid after the expiration date, the amount will be refunded to the payer's Mercado Pago account.

## Cancel payment

To avoid billing issues, it is important to cancel overdue payments. Also, keep in mind that **it is possible to cancel only payments that are pending or in process**. If a payment is due within 30 days, the cancellation is automatic and the final status of the payment will be `canceled` or `expired`.

For more information, see the [Refunds and Cancellations](/developers/en/docs/checkout-api/payment-management/cancellations-and-refunds) section.

------------
