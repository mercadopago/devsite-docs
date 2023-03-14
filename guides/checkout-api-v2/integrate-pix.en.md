# Pix

Pix is an instant electronic payment method offered by the Central Bank of Brazil to individuals and legal entities. Through the Checkout API, it is possible to offer this payment option through QR code or payment code.

> WARNING
>
> Important
>
> To offer payments with Pix, you must ensure that the Pix keys have been created. If you haven't created it yet, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) and check the necessary steps.

To integrate payments with Pix, follow the steps below, but if you have already integrated card payments, start the integration from the [Add payment form](/developers/en/docs/checkout-api/integration-configuration/integrate-with-pix#bookmark_Add_payment_form) step.

## Import MercadoPago.js

After creating the Pix keys, it is necessary to capture data for payment. This capture is made by including the MercadoPago.js library in your project, followed by the payment form. Use the code below to import the library before adding the payment form.

[[[
```html

<body>
<script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
]]]


## Configure credentials

Credentials are unique keys with which we identify an integration in your account. They serve to capture payments in virtual stores and other applications securely.

This is the first step of a complete code structure that must be followed for the correct integration of payment via Pix. Pay attention to the blocks below to add to the codes as indicated.

[[[
```javascript

<script>
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
```
]]]


## Add payment form

With the MercadoPago.js library included and the credentials configured, add the payment form below to your project to ensure secure capture of customer data.


[[[
```html

<form id="form-checkout" action="/process_payment" method="post">
<div>
<div>
<label for="payerFirstName">Name</label>
<input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
</div>
<div>
<label for="payerLastName">Surname</label>
<input id="form-checkout__payerLastName" name="payerLastName" type="text">
</div>
<div>
<label for="email">Email</label>
<input id="form-checkout__email" name="email" type="text">
</div>
<div>
<label for="identificationType">Document type</label>
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
<input type="hidden" name="description" id="description" value="Product Name">
<br>
<button type="submit">Pay</button>
</div>
</div>
</form>
```
]]]


## Get document types

After configuring the credential and adding the payment form, it is necessary to obtain the types of documents that will be part of filling out the payment form.

By including the element of type `select` with the id: `form-checkout__identificationType` that is in the form, it will be possible to automatically fill in the available options when calling the following function:

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

When finalizing the inclusion of the payment form, it is necessary to send the buyer's email, type and document number, the payment method used (pix) and the value detail.

To configure payment with Pix, send a **POST** to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, make the request using our SDKs.


[[[
```php
<?php
require_once 'vendor/autoload.php';

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 100;
$payment->description = "Product title";
$payment->payment_method_id = "pix";
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
payment_method_id: 'pix',
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
street_name: '"Avenida das Nações Unidas"',
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
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
PaymentCreateRequest.builder()
.transactionAmount(new BigDecimal("100"))
.description("Product Title")
.paymentMethodId("pix")
.dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
.payer(
PaymentPayerRequest.builder()
.email("test@test.com")
.firstName("Test")
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
import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
"transaction_amount": 100,
"description": "Product title",
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



The response will show the payment **pending status** and all the information you need to show to the buyer. The `transaction_data` value will return the data for QR code.


[[[
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
]]]


With Pix, you can also choose the period that the customer will have to pay for the purchase, defining the expiration date of the payment code sent after the order is placed.

> NOTE
>
> Important
>
> By default, the expiration date for payments with Pix is **24 hours**, but you can change it by submitting the `date_of_expiration` field in the payment creation request. The configured date must be between **30 minutes and 30 days** from the payment issue date.


## Payment visualization

For the user to make the payment, you must choose the way to open it, which can be through a button or a QR code that must be rendered.

Select the option that best suits your business model and follow the steps described below.


* **Add Link or Button**: When choosing to add a link or button for payment with Pix, the buyer will be directed to a new window containing all payment information, such as **QR Code**, **Pix Copy and Paste** and instructions for payment.

To offer this option, use the `ticket_url` attribute, which shows a Pix in a new window with all the QR Code, Pix Copy and Paste information and payment instructions.

[[[
```html

<a href="https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000" target="_blank">Pay with Pix</a>
```
]]]


* **Render QR code**: It is possible to render the current QR code, which must be used only once, on the screen itself. In addition, it is also possible to add an option to copy and paste the payment code, which will allow you to carry out the transaction from an Internet Banking.

Follow the steps below to render the QR code and make copy and paste available.


1. Add `qr_code_base64` to display the QR code.


[[[
```html
<img src={`data:image/jpeg;base64,${qr_code_base64}`/>

```
]]]


2. To present the option that will allow you to copy and paste the payment code, add the qr code as follows:

[[[
```html
<label for="copy">Copy Hash:</label>
<input type="text" id="copy" value={qr_code}/>
```
]]]


Upon completing these steps, the QR code will have been rendered and will be displayed to the buyer at checkout.


