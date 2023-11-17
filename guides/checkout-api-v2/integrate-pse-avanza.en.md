----[mco]----
# PSE

With Mercado Pago Checkout API you can offer payments with **PSE -Secure Online Payments-**, the service that allows you to make purchases and payments over the Internet by debiting online resources directly from savings and checking accounts, or electronic deposits.

To get a detailed list of all payment methods available for integration, send a **GET** with your _Public Key_ to the endpoint [/v1/payment_methods](/developers/en/reference/payment_methods/_payment_methods/get) or, if you prefer, make the request using the SDKs below.

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

> NOTE
>
> Note
>
> We recommend that, when displaying the list of banks, you do so in alphabetical ascending order; that is, from A to Z.

To offer **PSE** payments, please follow the steps below.

## Import MercadoPago.js

To perform the Checkout API integration, you need to capture the necessary data to process the payment.

This capture is made by including the `MercadoPago.js` library in your project, followed by the payment form. Use the code below to import the library before adding the payment form.

[[[
```html

<body>
<script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
]]]

## Configure credentials

[Credentials](/developers/en/docs/checkout-api/additional-content/your-integrations/credentials) are unique passwords with which we identify an integration in your account. They are made to capture payments in virtual stores and other applications securely.

This is the first step of a complete code structure that must be followed for the correct integration of the payment flow. Pay attention to the blocks below to add to the codes as indicated.


[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
]]]

## Add payment form

With the `MercadoPago.js` library included, add the payment form below to your project to ensure the secure capture of buyer data. In this step, it is important to use the list you consulted to obtain the available payment methods to create the payment options you want to offer.

[[[
```html

   <form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Nombre</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Appelido</label>
        <input id="form-checkout__payerLastName" name="payerLastName" type="text">
      </div>
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
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
        <input type="hidden" name="description" id="description" value="Nome do Produto">
        <br>
        <button type="submit">Pagar</button>
      </div>
    </div>
  </form>

```
]]]

## Get document types

After configuring the credential, it is necessary to obtain the types of documents that will be part of filling out the payment form.

By including the element of type `select` with the ID `id = docType` that is on the form, it will be possible to automatically fill in the available options when calling the following function:

[[[
```javascript
document.getElementById('form-checkout__personType').addEventListener('change', e => {
    const personTypesElement = document.getElementById('form-checkout__personType');
    updateSelectOptions(personTypesElement.value);
});

function updateSelectOptions(selectedValue){
    console.log(selectedValue);
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
 
 (function setIdentificationTypes () {
    try {
        const docTypeElement = document.getElementById('form-checkout__identificationType');
 
        updateSelectOptions('natural')
    }catch(e) {
        return console.error('Error getting identificationTypes: ', e);
    }
 })();
```
]]]

## Send payment

When finalizing the inclusion of the payment form and obtaining the types of documents, it is necessary to forward the buyer's email, type and document number, the payment method used and the details of the amount to be paid using our Payments API or one of our SDKs.

To configure payments with **PSE**, send a **POST** with the appropriate parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post ) and execute the request or, if you prefer, use one of our SDKs below.

> WARNING
>
> Important
>
> For this step, when making the request via API or SDKs, it is necessary to send your Private Key (`access_token`).

[[[
```php

<?php
require '../vendor/autoload.php';

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 5000;
$payment->description = "Título del producto";
$payment->payment_method_id = "pse";
$payment->additional_info = array(
  "ip_address" => "127.0.0.1"
);
$payment->transaction_details = array(
  "financial_institution" => '1009'
);
$payment->callback_url = "http://www.your-site.com";

$payer = new MercadoPago\Payer();
$payer->email = $_POST['email'];
$payer->identification = array(
     "type" => $_POST['identificationType'],
     "number" => $_POST['identificationNumber']
);
$payer->address = array(
      "zip_code" => $_POST['zipCode'],
      "street_name": $_POST['streetName'],
      "street_number": $_POST['streetNumber'],
      "neighborhood": $_POST['neighborhood'],
      "city": $_POST['city'],
      "federal_unit": $_POST['federalUnit']
);

$payer->phone = array(
     "area_code" => $_POST['phoneAreaCode'],
     "number" => $_POST['phoneNumber']
);
$payer->entity_type = "individual";

$payment->payer = $payer;

$payment->save();

$response = array(
    'status' => $payment->status,
    'status_detail' => $payment->status_detail,
    'id' => $payment->id
);
echo json_encode($response);

```
```node

 const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment = req.body;

var payment_data = {
 	transaction_amount: 5000,
 	description: 'Título del producto',
 	payment_method_id: 'pse',
 	payer: {
 		entity_type: 'individual',
 		email: payment.email,
 		identification: {
 			type: payment.identificationType,
 			number: payment.identificationNumber
 		}
            address: {
                 zip_code: payment.zipCode,
                 street_name: payment.streetName,
                 street_number: payment.streetNumber,
                 neighborhood: payment.neighborhood,
                 city: payment.city,
                 Federal_unit: payment.federalUnit
           },
           phone: {
                 area_code: payment.phoneAreaCode,
                 number: payment.phoneNumber
           }
 	},
 	additional_info: {
 		ip_address: '127.0.0.1'
 	},
 	transaction_details: {
 		financial_institution: '1009'
 	},
 	callback_url: 'http://www.your-site.com'
};

mercadopago.payment.save(payment_data)
 	.then(function(response) {
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
  	.type(request.getPayer().getIdentification().getType())
  	.number(request.getPayer().getIdentification().getNumber())
  	.build();

  PaymentPayerAddressRequest address =
      PaymentPayerAddressRequest.builder()
      .zipCode(request.getPayer().getAddress().getZipCode())
      .streetName(request.getPayer().getAddress().getStreetName())
      .streetNumber(request.getPayer().getAddress().getStretNumber())
      .neighborhood(request.getPayer().getAddress().getNeighborhood())
      .city(request.getPayer().getAddress().getCity())
      .federalUnit(request.getPayer().getAddress().getFederalUnit())
      .build();

  PaymentPayerPhoneRequest phone =
      PaymentPayerPhoneRequest.builder()
      .areaCode(request.getPayer().getPhone().getAreaCode())
      .number(request.getPayer().getPhone().getNumber())
      .build();

  PaymentPayerRequest payer =
  	PaymentPayerRequest.builder()
  	.type("customer")
  	.email("test_payer_9999999@testuser.com")
  	.entityType("individual")
  	.firstName("Test")
  	.lastName("User")
  	.identification(identification)
      .address(address)
      .phone(phone)
  	.build();

  PaymentAdditionalInfoRequest additionalInfo =
  	PaymentAdditionalInfoRequest.builder()
  	.ipAddress("127.0.0.1")
  	.build();

  PaymentTransactionDetailsRequest transactionDetails = PaymentTransactionDetailsRequest.builder()
  	.financialInstitution("1009")
  	.build();

  PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
  	.transactionAmount(new BigDecimal(5000))
  	.description("description")
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
  description: "description",
  payment_method_id: "pse",
  additional_info: {
    ip_address: "127.0.0.1"
  },
  transaction_details: {
    financial_institution: "1009"
  },
  callback_url: "https://your-site.com"
  payer: {
    type: "customer",
    email: "test_payer_9999999@testuser.com",
    entity_type: "individual",
    first_name: "Test",
    last_name: "User",
    identification: {
      type: params[: identificationType],
      number: params[: identificationNumber]
    }
    address: {
      zip_code: params[: zip_code],
      street_name: params[: street_name],
      street_number: params[: street_number],
      neighborhood: params[: neighborhood],
      city: params[: city],
      federal_unit: params[: federal_unit]
    }
    phone: {
      area_code: params[: area_code],
      number: params[: number]
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
  Type = request.Payer.Identification.Type,
    Number = request.Payer.Identification.Number
};

var address = new PaymentPayerAddressRequest() {
    ZipCode = request.Payer.Address.ZipCode,
    StreetName = request.Payer.Address.StreetName,
    StreetNumber = request.Payer.Address.StreetNumber,
    Neighborhood = request.Payer.Address.Neighborhood,
    City = request.Payer.Address.City,
    FederalUnit = request.Payer.Address.FederalUnit
};

var phone = new PaymentPayerPhoneRequest() {
    AreaCode = request.Payer.Phone.AreaCode,
    Number = request.Payer.Phone.Number
};

var payer = new PaymentPayerRequest() {
    Type = "customer",
    Email = "test_payer_9999999@testuser.com",
    EntityType = "individual",
    FirstName = "Test",
    LastName = "User",
    Identification = identification,
    Address = address,
    Phone = phone
};

var additionalInfo = new PaymentAdditionalInfoRequest() {
  IpAddress = "127.0.0.1"
};

var transactionDetails = new PaymentTransactionDetailsRequest() {
  FinancialInstitution = "1009"
};

var paymentCreateRequest = new PaymentCreateRequest() {
    TransactionAmount = 5000,
    Description = "description",
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
   "description": "description",
   "payment_method_id": "pse",
   "additional_info": {
      "ip_address": "127.0.0.1"
   },
   "transaction_details": {
      "financial_institution": "1009"
   },
   "callback_url": "https://your-site.com"
   "payer": {
       "type": "customer",
       "email": "test_payer_9999999@testuser.com",
       "entity_type": "individual",
       "first_name": "Test",
       "last_name": "User",
       "identification": {
           "type": request.POST.get("type"), 
           "number": request.POST.get("number")
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
-H 'Content-Type: application/json' \
--d '{
    "transaction_amount": 5000,
    "description": "Título del producto",
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
| `transaction_details.financial_institution` | Bank informed in the POST to make the electronic transfer. You must show the list to the user and allow him to select. This list usually refreshes, so it’s  Se debe mostrar al usuario el listado de bancos y permitirle seleccionar. El listado se actualiza, por lo que recommended to consume the information every hour. | - | https://api.mercadopago.com/v1/payment_methods/search?site_id=MCO&id=pse&public_key=YOUR_PUBLIC_KEY  |
| `payer.entity_type` | Type of personality, physical or legal. | *individual* or *association* | - |
| `payer.identification` | Type and number of the buyer's document. | - | curl -X GET \<br>'https://api.mercadopago.com/v1/identification_types' \<br>-H 'Authorization: Bearer **YOUR_PUBLIC_KEY**' |
| `additional_info.ip_address` |  Buyer’s IP address, where the payment is made.. | - | - |
| `callback_url` | URL where the buyer is redirected by default after making the payment within the bank's page, when the buyer indicates that they want to return to the store.<br>You can check suggested messages to show the buyer under “Message examples for callbacks URL” | - | - |
| `payer.address.zip_code` | Zip code of the payer’s address. | - | - |
| `payer.address.street_name` | Street name of the payer’s address. | - | - |
| `payer.address.street_number` | Street number of the payer’s address. | - | - |
| `payer.address.neighborhood` | Neighbourhood of the payer’s address. | - | - |
| `payer.address.city` | Payer’s city | - | - |
| `payer.phone.area_code` | Area code of the payer’s phone number. | - | - |
| `payer.phone.number` | Payer’s phone number. | - | - |

The response will show the **pending status** until the buyer completes the payment. Also, in the response to the request, the `external_resource_url` parameter will return a URL where you should redirect the buyer to complete the payment flow. 


```json
{
    "id": 1312147735,
     ..., 
    "operation_type": "regular_payment",
    "payment_method_id": "pse",
    "payment_type_id": "bank_transfer",
    "payment_method": {
        "id": "pse",
        "type": "bank_transfer"
    },
    "status": "pending",
    "status_detail": "pending_waiting_transfer",
     ...,
    "description": "Título del producto",
     ..., 
    "callback_url": "http://www.your-site.com",
    "installments": 1,
    "transaction_details": {
     ...,
        "total_paid_amount": 5000,
     ...,
        "external_resource_url": "https://www.mercadopago.com.co/sandbox/payments/1312147735/bank_transfer?caller_id=1148920820&hash=f41dd14f-b3a6-4ac4-9b78-5cfeb5a35e77",
     ...,
        "financial_institution": "1009",
     ...,
        "bank_transfer_id": 129229,
        "transaction_id": "10022214"
    }, 
}

```

> NOTE
>
> Important
>
> In case an error is returned when generating a payment, you can check the list of possible errors in the [API Reference section](/developers/en/reference/payments/_payments/post), or go to [Errors with PSE payments](/developers/en/checkout-api/error-messages/pse-errors).

### Examples for callback URL

Once the buyer makes the payment on the platform of the selected bank, they are redirected to a callback URL, in which they are informed of the status of their transaction.

Below, we show you examples of messages that you can offer, according to the three possible states in which a payment can be found.

#### Approved status

![image of an approved transaction and the redirection ](/images/api/pse-transaccion-aprobada.png)

#### Pending status

![Pending transaction image](/images/api/pse-transaccion-pendiente.png)

#### Rejected status

![Rejected transaction image](/images/api/pse-transaccion-rechazada.png)


## Expiration

The payment created with **PSE** automatically expires within 15 minutes of being generated and its status becomes rejected. If the user does not access the web and makes the payment within that time, a new one must be generated.

------------