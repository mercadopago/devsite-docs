# SPEI Transfers

With Mercado Pago's Checkout API, it is possible to offer payments using **SPEI Transfers**. This service allows you to make payments from any bank or financial institution using your CLABE **(Clave Bancaria Estandarizada)**.

For a detailed list of all available payment methods for integration, send a **GET** request with your `access_token` to the endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get) and execute the request. Alternatively, you can make the request using one of our SDKs.

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

To offer payments via **SPEI Transfers**, follow the steps below.


## Import MercadoPago.js

To perform the Checkout API integration, you need to capture the necessary data to process the payment.

This capture is made by including the MercadoPago.js library in your project, followed by the payment form. Use the code below to import the library before adding the payment form.


[[[
```html
<body>
<script src="https://sdk.mercadopago.com/js/v2"></script>
</body>

```
```bash
npm install @mercadopago/sdk-js

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

With the **MercadoPago.js library** included and the **credentials configured**. add the payment form below to your project to ensure the secure capture of buyer data. In this step, it is important to use the list you consulted to obtain the available payment methods to create the payment options you want to offer.

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
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="5000">
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

By including the element of type `select` with the id: id = `docType` that is on the form, it will be possible to automatically fill in the available options when calling the following function:

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


When finalizing the inclusion of the payment form and obtaining the types of documents, it is necessary to forward the buyer's email, type and document number, the payment method used and the details of the amount to be paid using our **Payments API** or one of our **SDKs**.

To configure payments via **SPEI Transfers**, send a **POST** with the following parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and run the request or, if you prefer, use one of our SDKs below.

[[[
```php
<?php
require '../vendor/autoload.php';

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 5000;
$payment->description = "Título del producto";
$payment->payment_method_id = "clabe";

$payer = new MercadoPago\Payer();
$payer->email = $_POST['email'];
$payer->first_name = $_POST['payerFirstName']
$payer->last_name = $_POST['payerLastName']
$payer->entity_type = "individual";

$payment->payer = $payer;

$payment->save();

$response = array(
    'status' => $payment->status,
    'payment_link' => $payment->transaction_details->external_resource_url,
    'id' => $payment->id
);
echo json_encode($response);

?>

```
```node
const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment = req.body;

var payment_data = {
 	transaction_amount: 5000,
 	description: 'Título del producto',
 	payment_method_id: 'clabe',
 	payer: {
 		entity_type: 'individual',
 		email: payment.email,
 		first_name: payment.payerFirstName,
    last_name: payment.payerLastName
 	}
};

var payment = mercadopago.payment.save(payment_data)
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

var payment_link = payment.transaction_details.external_resource_url;

```
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

  PaymentClient client = new PaymentClient();

  PaymentPayerRequest payer =
  	PaymentPayerRequest.builder()
  	.type("customer")
  	.email(request.getEmail())
    .firstName(request.getPayerFirstName())
    .lastName(request.getPayerLastName())
  	.entityType("individual")
  	.build();

  PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
  	.transactionAmount(new BigDecimal(5000))
  	.description("description")
  	.paymentMethodId("clabe")
  	.payer(payer)
  	.build();

  Payment payment = client.create(paymentCreateRequest);
  String paymentLink = payment.transactionDetails.externalResourceUrl;

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ACCESS_TOKEN')

payment_data = {

  transaction_amount: 5000,
  description: "description",
  payment_method_id: "clabe",
  payer: {
    type: "customer",
    email: params[: email],
    entity_type: "individual",
    first_name: params[: payerFirstName]
    last_name: params[: payerLastName]
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[: response]
payment_link = payment.transaction_details.external_resource_url;

```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ACCESS_TOKEN";

var client = new PaymentClient();

var payer = new PaymentPayerRequest() {
    Type = "customer",
    Email = request.Email,
    EntityType = "individual",
    FirstName = request.PayerFirstName,
    LastName = request.PayerLastName
};

var paymentCreateRequest = new PaymentCreateRequest() {
  TransactionAmount = 5000,
    Description = "description",
    PaymentMethodId = "clabe",
    AdditionalInfo = additionalInfo,
    CallbackUrl = "https://your-site.com",
    Payer = payer
};

var payment = await client.CreateAsync(paymentCreateRequest);
var paymentLink = payment.TransactionDetails.externalResourceUrl; 

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_data = {
   "transaction_amount": 5000,
   "description": "description",
   "payment_method_id": "clabe",
   "payer": {
       "type": "customer",
       "email": request.POST.get("email"),
       "entity_type": "individual",
       "first_name": request.POST.get("first_name"),
       "last_name": request.POST.get("last_name"),
   }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
Payment_link = payment.transaction_details.external_resource_url

```
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-H 'Content-Type: application/json' \
--d '{
    "transaction_amount": 5000,
    "description": "Título del producto",
    "payment_method_id": "clabe",
    "payer": {
        "email": "test_user_19549678@testuser.com",
        "entity_type": "individual",
        "first_name": "John",
        "last_name": "Doe"
    }
}'

```
]]]

The response will show the `pending` status until the buyer completes the payment. Also, in the response to the request, the `payment_method.data.external_resource_url` parameter will return a URL that contains instructions for the buyer to make the payment. You can redirect to this same link to complete the payment flow. See below for an example response.

[[[
```json
{
    "id": 51096146182,
    "version": null,
    "date_created": "2023-05-10T13:43:14.586-04:00",
    ...
    "payment_method_id": "clabe",
    "payment_type_id": "bank_transfer",
    "payment_method": {
        "id": "clabe",
        "type": "bank_transfer",
        "data": {
            "reference_id": "6410293433784980810",
            "external_reference_id": "1009",
            "external_resource_url": "https://www.mercadopago.com.mx/payments/51096146182/ticket?caller_id=34728475&hash=f3a8630a-f06a-48e4-b2a6-f95750af7346"
        }
    },
    "status": "pending",
    ...
}

```
]]]

> NOTE
>
> Important
>
> If you receive an error while generating a payment, please refer to the list of possible errors in the [API Reference](/developers/en/reference/payments/_payments/post) section.

## Payment visualization


In order for the user to make the transfer, direct them directly to the URL available at `external_resource_url` or make it available through a button, following the example below.

[[[
```html
<a href="https://www.mercadopago.com.mx/payments/51096146182/ticket?caller_id=34728475&hash=f3a8630a-f06a-48e4-b2a6-f95750af7346" target="_blank">Pay with SPEI Transfers</a>

```
]]]