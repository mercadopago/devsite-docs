----[mco]----
# PSE

With Mercado Pago Checkout API you can offer payments with **PSE -Secure Online Payments-**, the service that allows you to make purchases and payments over the Internet by debiting online resources directly from savings and checking accounts, or electronic deposits.

To offer **PSE** payments, please follow the steps below.

> WARNING
>
> Important
>
> Remember to configure your [Credentials](/developers/en/docs/checkout-api/additional-content/your-integrations/credentials) before starting your integration.

> SERVER_SIDE
>
> h2
>
> Get payment methods


To get a detailed list of all payment methods available for integration, send a **GET** with your _Access Token_ to the endpoint [/v1/payment_methods](/developers/en/reference/payment_methods/_payment_methods/get) or, if you prefer, make the request using the SDKs below.

[[[
```php
<?php
  use MercadoPago\Client\PaymentMethod\PaymentMethodClient;
  use MercadoPago\MercadoPagoConfig;

  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  $client = new PaymentMethodClient();
  $payment_methods = $client->list();
?>
```
```node
import MercadoPago, { PaymentMethod } from 'mercadopago';

const client = new MercadoPago({ accessToken: '<ACCESS_TOKEN>' });
const paymentMethod = new PaymentMethod(client);

paymentMethod.get()
  .then(paymentMethods => res.status(200).json(paymentMethods))
  .catch(console.log);
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
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

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

Once the payment methods are obtained, you can list the available banks for payments with PSE through the `financial_institutions` field within the object with `id=pse`, as shown in the example response below. This list of banks will be necessary to continue with the integration during the [List banks](/developers/en/docs/checkout-api/integration-configuration/pse#bookmark_list_banks) stage.

```json
[
  {
       "id": "pse",
       "name": "PSE",
       "payment_type_id": "bank_transfer",
       "status": "active",
       "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pse.gif",
       "thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pse.gif",
       "deferred_capture": "does_not_apply",
       "settings": [],
       "additional_info_needed": [
           "entity_type"
       ],
       "min_allowed_amount": 1600,
       "max_allowed_amount": 340000000,
       "accreditation_time": 30,
       "financial_institutions": [
           {
               "id": "1040",
               "description": "Banco Agrario"
           },
           {
               "id": "1507",
               "description": "NEQUI"
           },
           {
               "id": "1052",
               "description": "Banco AV Villas"
           },
           {
               "id": "1032",
               "description": "Banco Caja Social"
           }
       ],
       "processing_modes": [
           "aggregator"
       ]
   }
]
```

For the list of payment methods to be consumed by the frontend in the following steps, you will need to create a new `GET /payment_methods` endpoint in your application.


> CLIENT_SIDE
>
> h2
>
> Add payment form

In the frontend of your project, you must add the following payment form.

```html
 <form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="zipCode">Zip Code</label>
        <input id="form-checkout__zipCode" name="zipCode" type="text">
      </div>
      <div>
        <label for="streetName">Street Name</label>
        <input id="form-checkout__streetName" name="streetName" type="text">
      </div>
      <div>
        <label for="streetNumber">Street Number</label>
        <input id="form-checkout__streetNumber" name="streetNumber" type="text">
      </div>
      <div>
        <label for="neighborhood">Neighborhood</label>
        <input id="form-checkout__neighborhood" name="neighborhood" type="text">
      </div>
      <div>
        <label for="city">Ciudad</label>
        <input id="form-checkout__city" name="city" type="text">
      </div>
      <div>
        <label for="federalUnit">Unidad Federal</label>
        <input id="form-checkout__federalUnit" name="federalUnit" type="text">
      </div>
      <div>
        <label for="phoneAreaCode">PhoneAreaCode</label>
        <input id="form-checkout__phoneAreaCode" name="phoneAreaCode" type="text">
      </div>
      <div>
        <label for="phoneNumber">PhoneNumber</label>
        <input id="form-checkout__phoneNumber" name="phoneNumber" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="personType">Tipo de persona</label>
        <select id="form-checkout__personType" name="personType" type="text">
          <option value="natural">Natural</option>
          <option value="juridica">Jurídica</option>
        </select>
      </div>
      <div>
        <label for="identificationType">Tipo de documento</label>
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Número del documento</label>
        <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
      </div>
    </div>
    <div>
      <div>
        <label for="banksList">Banco</label>
        <div id="banksList"></div> 
      </div>
    </div>
    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
        <input type="hidden" name="description" id="description" value="Nome do Produto">
        <br>
        <button type="submit">Pagar</button>
      </div>
    </div>
  </form>

```

> CLIENT_SIDE
>
> h2
>
> Get document types

To create a payments with PSE, it is also necessary to obtain the user's document type and number. This information will depend on the type of person (natural or legal) selected while adding the payment form, and you can obtain them automatically using the following function:

```javascript

document.getElementById('form-checkout__personType').addEventListener('change', e => {
    const personTypesElement = document.getElementById('form-checkout__personType');
    updateSelectOptions(personTypesElement.value);
});

function updateSelectOptions(selectedValue){
    const naturalDocTypes = [
        new Option('C.C', 'CC'),
        new Option('C.E.', 'CE'),
        new Option('Otro', 'Otro')
    ];
    const juridicaDocTypes = [
        new Option('NIT', 'NIT')
    ];
    const idDocTypes = document.getElementById('form-checkout__identificationType');
    
    if(selectedValue === 'natural') {
        idDocTypes.options.length = 0;
        naturalDocTypes.forEach(item => idDocTypes.options.add(item, undefined));
    } else {
        idDocTypes.options.length = 0;
        juridicaDocTypes.forEach(item => idDocTypes.options.add(item, undefined));
    }
}

```

> CLIENT_SIDE
>
> h2
>
> List banks

When creating a payment with PSE, it is necessary to send the bank code that will be used to make the transfer. To do this, you must list the available banks and offer the options to the payer, so that they can choose the bank of their preference.

If you have not done so yet, obtain the list of payment methods, as indicated in the [Get payment methods](/developers/es/docs/checkout-api/integration-configuration/pse#bookmark_get_payment_methods) stage, and filter the list of available banks for PSE. Next, create a `select` element in javascript, and enrich it with the data returned in that call, as shown in the example below:

```javascript
function setPse() {
    fetch('/payment_methods')
        .then(async function(response) {
            const paymentMethods = await response.json();
            const pse = paymentMethods.filter((method) => method.id === 'pse')[0];
            const banksList = pse.financial_institutions;
            const banksListElement = document.getElementById('banksList');
            const selectElement = document.createElement('select');
            selectElement.name = 'financialInstitution';

            banksList.forEach(bank => {
                const option = document.createElement('option');
                option.value = bank.id;
                option.textContent = bank.description;
                selectElement.appendChild(option);
            });

            banksListElement.appendChild(selectElement);

        }).catch(function(reason) {
            console.error('Failed to get payment methods', reason);
        });
}
```

> NOTE
>
> Note
>
> We recommend that, when displaying the list of banks, you do so in alphabetical ascending order; that is, from *A* to *Z*.

In order for the dynamic elements created with this javascript to load when the page finishes rendering, you must add the following code:

```javascript
(function initCheckout() {
    try {
        const docTypeElement = document.getElementById('form-checkout__identificationType');
        setPse();
        updateSelectOptions('natural')
    }catch(e) {
        return console.error('Error getting identificationTypes: ', e);
    }
 })();

``` 


> SERVER_SIDE
>
> h2
>
> Send payment

When finalizing the inclusion of the payment form, obtaining the types of documents and configuring the banks list, it is necessary to forward the buyer's email, telephone number, address, type and document number, the payment method used and the details of the amount to be paid.

To do so, send a **POST** with the appropriate parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post ) and execute the request or, if you prefer, use one of our SDKs below.

> WARNING
>
> Important
>
> For this step, when making the request via API or SDKs, it is necessary to send your Private Key (`access_token`).

[[[
```php

<?php
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\MercadoPagoConfig;


MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
$client = new PaymentClient();
$payment = $client->create([
  "transaction_amount" => 5000,
  "description" => "Product description",
  "payment_method_id" => "pse",
  "additional_info" => [
    "ip_address" => "127.0.0.1"
  ],
  "transaction_details" => [
    "financial_institution" => $_POST['financialInstitution']
  ],
  "callback_url" => "http://www.your-site.com",
  "email" => $_POST['email'],
  "identification" => [
       "type" => $_POST['identificationType'],
       "number" => $_POST['identificationNumber']
  ],
  "address" => [
        "zip_code" => $_POST['zipCode'],
        "street_name": $_POST['streetName'],
        "street_number": $_POST['streetNumber'],
        "neighborhood": $_POST['neighborhood'],
        "city": $_POST['city'],
        "federal_unit": $_POST['federalUnit']
  ],

  "phone" => [
       "area_code" => $_POST['phoneAreaCode'],
       "number" => $_POST['phoneNumber']
  ],
  "entity_type" => "individual";
]);

echo implode($payment);
?>

```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
const payment = new Payment(client);

payment.create({
      body: {
 	transaction_amount: 5000,
 	description: 'Product description',
 	payment_method_id: 'pse',
 	payer: {
 		entity_type: 'individual',
 		email: req.body.email,
 		identification: {
 			type: req.body.identificationType,
 			number: req.body.identificationNumber
 		}
            address: {
                 zip_code: req.body.zipCode,
                 street_name: req.body.streetName,
                 street_number: req.body.streetNumber,
                 neighborhood: req.body.neighborhood,
                 city: req.body.city,
                 Federal_unit: req.body.federalUnit
           },
           phone: {
                 area_code: req.body.phoneAreaCode,
                 number: req.body.phoneNumber
           }
 	},
 	additional_info: {
 		ip_address: '127.0.0.1'
 	},
 	transaction_details: {
 		financial_institution: req.body.financialInstitution
 	},
 	callback_url: 'http://www.your-site.com'
   }
}).then(function(response) {
 		res.status(response.status).json({
 			status: response.body.status,
 			status_detail: response.body.status_detail,
 			id: response.body.id,
 		});
 	})
 	.catch(function(error) {
 		res.status(error.status).send(error);
 	});

```
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

  PaymentClient client = new PaymentClient();

  IdentificationRequest identification =
  	IdentificationRequest.builder()
  	.type(request.getIdentificationType())
  	.number(request.getIdentificationNumber())
  	.build();

  PaymentPayerAddressRequest address =
      PaymentPayerAddressRequest.builder()
      .zipCode(request.getZipCode())
      .streetName(request.getStreetName())
      .streetNumber(request.getStretNumber())
      .neighborhood(request.getNeighborhood())
      .city(request.getCity())
      .federalUnit(request.getFederalUnit())
      .build();

  PaymentPayerPhoneRequest phone =
      PaymentPayerPhoneRequest.builder()
      .areaCode(request.getPhoneAreaCode())
      .number(request.getPhoneNumber())
      .build();

  PaymentPayerRequest payer =
  	PaymentPayerRequest.builder()
  	.email(request.getEmail())
  	.entityType("individual")
  	.identification(identification)
      .address(address)
      .phone(phone)
  	.build();

  PaymentAdditionalInfoRequest additionalInfo =
  	PaymentAdditionalInfoRequest.builder()
  	.ipAddress("127.0.0.1")
  	.build();

  PaymentTransactionDetailsRequest transactionDetails = PaymentTransactionDetailsRequest.builder()
  	.financialInstitution(request.getFinancialInstitution())
  	.build();

  PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
  	.transactionAmount(new BigDecimal(5000))
  	.description("Product description")
  	.paymentMethodId("pse")
  	.additionalInfo(additionalInfo)
  	.transactionDetails(transactionDetails)
  	.notificationUrl("https://your-site.com")
  	.payer(payer)
  	.build();

  client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ACCESS_TOKEN')

payment_data = {

  transaction_amount: 5000,
  description: "Product description",
  payment_method_id: "pse",
  additional_info: {
    ip_address: "127.0.0.1"
  },
  transaction_details: {
    financial_institution: params[: financialInstitution]
  },
  callback_url: "https://your-site.com"
  payer: {
    email: params[:email],
    entity_type: "individual",
    identification: {
      type: params[: identificationType],
      number: params[: identificationNumber]
    }
    address: {
      zip_code: params[: zipCode],
      street_name: params[: streetName],
      street_number: params[: streetNumber],
      neighborhood: params[: neighborhood],
      city: params[: city],
      federal_unit: params[: federalUnit]
    }
    phone: {
      area_code: params[: phoneAreaCode],
      number: params[: phoneNumber]
    }
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[: response]


```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ACCESS_TOKEN";

var client = new PaymentClient();

var identification = new IdentificationRequest() {
  Type = request.IdentificationType,
    Number = request.IdentificationNumber
};

var address = new PaymentPayerAddressRequest() {
    ZipCode = request.ZipCode,
    StreetName = request.StreetName,
    StreetNumber = request.StreetNumber,
    Neighborhood = request.Neighborhood,
    City = request.City,
    FederalUnit = request.FederalUnit
};

var phone = new PaymentPayerPhoneRequest() {
    AreaCode = request.PhoneAreaCode,
    Number = request.PhoneNumber
};

var payer = new PaymentPayerRequest() {
    Email = request.Email,
    EntityType = "individual",
    Identification = identification,
    Address = address,
    Phone = phone
};

var additionalInfo = new PaymentAdditionalInfoRequest() {
  IpAddress = "127.0.0.1"
};

var transactionDetails = new PaymentTransactionDetailsRequest() {
  FinancialInstitution = request.FinancialInstitution
};

var paymentCreateRequest = new PaymentCreateRequest() {
    TransactionAmount = 5000,
    Description = "Product description",
    PaymentMethodId = "pse",
    AdditionalInfo = additionalInfo,
    TransactionDetails = transactionDetails,
    CallbackUrl = "https://your-site.com",
    Payer = payer
};

var payment = await client.CreateAsync(paymentCreateRequest);

```
```python
 import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_data = {
   "transaction_amount": 5000,
   "description": "Product description",
   "payment_method_id": "pse",
   "additional_info": {
      "ip_address": "127.0.0.1"
   },
   "transaction_details": {
      "financial_institution": request.POST.get("financialInstitution")
   },
   "callback_url": "https://your-site.com"
   "payer": {
       "email": request.POST.get("email"),
       "entity_type": "individual",
       "identification": {
           "type": request.POST.get("identificationType"), 
           "number": request.POST.get("identificationNumber")
       }
       "address": {
                 "zip_code": request.POST.get("zipCode"),
                 "street_name": request.POST.get("streetName"),
                 "street_number": request.POST.get("streetNumber"),
                 "neighborhood": request.POST.get("neighborhood"),
                 "city": request.POST.get("city"),
                 "federal_unit": request.POST.get("federalUnit")
       },
       "phone": {
                 "area_code": request.POST.get("phoneAreaCode"),
                 "number": request.POST.get("phoneNumber")
       }
   }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
 curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
-H 'Content-Type: application/json' \
--d '{
    "transaction_amount": 5000,
    "description": "Product description",
    "payment_method_id": "pse",
    "payer": {
        "email": "test_user_19549678@testuser.com",
        "entity_type": "individual",
        "identification": {
            "type": "CC",
            "number": "76262349"
        }, 
        "address": {
          "zip_code": "111",
          "street_name": "siempre viva",
          "street_number": "111",
          "neighborhood": "sarasa",
          "city": "salto",
          "federal_unit": "1"
        },
        "phone": {
          "area_code": "011",
          "number": "2134242412"
        }
    },
    "additional_info": {
        "ip_address": "127.0.0.1"
    },
    "transaction_details": {
        "financial_institution": "1009"
    },
    "callback_url": "http://www.your-site.com"
}'

```
]]]


The following are **mandatory** fields that must be completed when sending a payment according to the specifications below:

| Field | Description | Posssible values/validaations | Request to get the values |
|:---:|:---:|:---:|:---:|
| `transaction_details.financial_institution` | Bank informed in the POST to make the electronic transfer. You must show the list to the user and allow him to select. This list usually refreshes, so it’s recommended to consume the information every hour. | - | https://api.mercadopago.com/v1/payment_methods/search?site_id=MCO&id=pse&public_key=YOUR_PUBLIC_KEY  |
| `payer.entity_type` | Type of person, natural or legal. | *individual* or *association* | - |
| `payer.identification` | Type and number of the buyer's document. | - | curl -X GET \ <br> 'https://api.mercadopago.com/v1/identification_types' \ <br> -H 'Authorization: Bearer **YOUR_PUBLIC_KEY**' |
| `additional_info.ip_address` |  Buyer’s IP address, where the payment is made.. | - | - |
| `callback_url` | URL where the buyer is redirected by default after making the payment within the bank's page, when the buyer indicates that they want to return to the store. <br> You can check suggested messages to show the buyer under [Examples for callback URLs](/developers/en/docs/checkout-api/integration-configuration/pse#bookmark_examples_for_callback_urls). | - | - |
| `payer.address.zip_code` | Zip code of the payer’s address. | - | - |
| `payer.address.street_name` | Street name of the payer’s address. | - | - |
| `payer.address.street_number` | Street number of the payer’s address. | - | - |
| `payer.address.neighborhood` | Neighbourhood of the payer’s address. | - | - |
| `payer.address.city` | Payer’s city | - | - |
| `payer.phone.area_code` | Area code of the payer’s phone number. | - | - |
| `payer.phone.number` | Payer’s phone number. | - | - |

The response will show the **pending status** until the buyer completes the payment. Also, the `external_resource_url` parameter will return a URL where you should redirect the buyer to complete the payment flow. 

You can see an example of this response below. Please note that information was omitted in order to show the most relevant fields.

```json
{
    "id": 1312147735,
     … 
    "operation_type": "regular_payment",
    "payment_method_id": "pse",
    "payment_type_id": "bank_transfer",
    "payment_method": {
        "id": "pse",
        "type": "bank_transfer"
    },
    "status": "pending",
    "status_detail": "pending_waiting_transfer",
     … 
    "description": "Título del producto",
     … 
    "callback_url": "http://www.your-site.com",
    
    "transaction_details": {
     … 
        "total_paid_amount": 5000,
     … 
        "external_resource_url": "https://www.mercadopago.com.co/sandbox/payments/1312147735/bank_transfer?caller_id=1148920820&hash=f41dd14f-b3a6-4ac4-9b78-5cfeb5a35e77",
     … 
        "financial_institution": "1009",
     … 
        "bank_transfer_id": 129229,
        "transaction_id": "10022214"
    },
}

```

> WARNING
>
> Important
>
> In case an error is returned when generating a payment, you can check the list of possible errors in the [API Reference section](/developers/en/reference/payments/_payments/post), or go to [Errors with PSE payments](/developers/en/docs/checkout-api/error-messages/pse-errors).

### Examples for callback URLs

Once the buyer makes the payment on the platform of the selected bank, they are redirected to a callback URL, in which they are informed of the status of their transaction.

Below, we show you examples of messages that you can offer, according to the three possible states in which a payment can be found.

#### Approved status

![image of an approved transaction and the redirection ](/images/api/pse-callback-approved.png)

#### Pending status

![Pending transaction image](/images/api/pse-callback-pending.png)

#### Rejected status

![Rejected transaction image](/images/api/pse-callback-rejected.png)


## Expiration

The payment created with **PSE** automatically expires within 15 minutes of being generated and its status becomes rejected. If the user does not access the web and makes the payment within that time, a new one must be generated.

------------