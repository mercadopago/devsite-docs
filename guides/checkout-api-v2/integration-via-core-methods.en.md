# Integration via Core Methods

In this integration method, the person in charge of the integration is responsible for defining how the information necessary to complete the payment will be searched, unlike the integration via Cardform, where the search for information is done automatically.

In integration via Core Methods, the integrator decides when to look for information about the type of document, in addition to card information (issuer and installments). As a result, you have complete flexibility in building the checkout flow experience.

> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate **card payments** using the **CardPayment Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/card-payment-brick/default-rendering#editor_2) documentation of CardPayment for more details

Check below the diagram that illustrates the card payment process using Core Methods.

![API-integration-flowchart](/images/api/api-integration-flowchart-coremethods-en.png)

## Import MercadoPago.js

The first step in the card payment integration process is the **card data capture**. This capture is made by including the MercadoPago.js library in your project, followed by the payment form. Use the code below to import the MercadoPago.js library before adding the payment form.

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

> NOTE
>
> Important
>
> The card information will be converted into a token for you to send the data to your servers securely.

## Configure credential

Credentials are unique keys with which we identify an integration in your account. They serve to capture payments in virtual stores and other applications securely.

This is the first step of a complete code structure that must be followed for the correct integration of payment via card. Pay attention to the blocks below to add to the codes as indicated.

[[[
```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
```
```javascript
import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

## Add payment form

The capture of card data (card number, security code and expiration date) is done through a payment form that allows obtaining and validating the information necessary to process the payment.

To obtain this data and process payments, insert the HTML below directly into the project.

----[mla, mlu, mpe, mco, mlb, mlc]----
[[[
```html

<style>
#form-checkout {
display: flex;
flex-direction: column;
max-width: 600px;
}

.container {
height: 18px;
display: inline-block;
border: 1px solid rgb(118, 118, 118);
border-radius: 2px;
padding: 1px 2px;
}
</style>
<form id="form-checkout" action="/process_payment" method="POST">
<div id="form-checkout__cardNumber" class="container"></div>
<div id="form-checkout__expirationDate" class="container"></div>
<div id="form-checkout__securityCode" class="container"></div>
<input type="text" id="form-checkout__cardholderName" placeholder="Cardholder" />
<select id="form-checkout__issuer" name="issuer">
<option value="" disabled selected>Issuing Bank</option>
</select>
<select id="form-checkout__installments" name="installments">
<option value="" disabled selected>Plots</option>
</select>
<select id="form-checkout__identificationType" name="identificationType">
<option value="" disabled selected>Document type</option>
</select>
<input type="text" id="form-checkout__identificationNumber" name="identificationNumber" placeholder="Document number" />
<input type="email" id="form-checkout__email" name="email" placeholder="Email" />

<input id="token" name="token" type="hidden">
<input id="paymentMethodId" name="paymentMethodId" type="hidden">
<input id="transactionAmount" name="transactionAmount" type="hidden" value="100">
<input id="description" name="description" type="hidden" value="Product Name">

<button type="submit" id="form-checkout__submit">Pay</button>
</form>
```
]]]

------------
----[mlm]----
[[[
```html

<style>
#form-checkout {
display: flex;
flex-direction: column;
max-width: 600px;
}

.container {
height: 18px;
display: inline-block;
border: 1px solid rgb(118, 118, 118);
border-radius: 2px;
padding: 1px 2px;
}
</style>
<form id="form-checkout" action="/process_payment" method="POST">
<div id="form-checkout__cardNumber" class="container"></div>
<div id="form-checkout__expirationDate" class="container"></div>
<div id="form-checkout__securityCode" class="container"></div>
<input type="text" id="form-checkout__cardholderName" placeholder="Cardholder" />
<select id="form-checkout__issuer" name="issuer">
<option value="" disabled selected>Issuing Bank</option>
</select>
<select id="form-checkout__installments" name="installments">
<option value="" disabled selected>Plots</option>
</select>
<input type="email" id="form-checkout__email" name="email" placeholder="Email" />

<input id="token" name="token" type="hidden">
<input id="paymentMethodId" name="paymentMethodId" type="hidden">
<input id="transactionAmount" name="transactionAmount" type="hidden" value="100">
<input id="description" name="description" type="hidden" value="Product Name">

<button type="submit" id="form-checkout__submit">Pay</button>
</form>
```
]]]

------------

## Initialize card fields

After adding the payment form, it is necessary to initialize the card fields (card number, expiration date and security code) that must be filled in when starting the payment flow.

When finalizing the initialization of the fields, the divs will contain the iframes with the inputs where the PCI data will be inserted.

[[[
```javascript

const cardNumberElement = mp.fields.create('cardNumber', {
placeholder: "Card Number"
}).mount('form-checkout__cardNumber');
const expirationDateElement = mp.fields.create('expirationDate', {
placeholder: "MM/YY",
}).mount('form-checkout__expirationDate');
const securityCodeElement = mp.fields.create('securityCode', {
placeholder: "Security Code"
}).mount('form-checkout__securityCode');
```
]]]

----[mla, mlu, mpe, mco, mlb, mlc]----
## Get document types

After configuring the credential, adding the payment form and initializing the card fields, it is necessary to obtain the types of documents that will be part of filling out the payment form.

By including the element of type `select` with the id: `form-checkout__identificationType` that is in the form, it will be possible to automatically fill in the available options when calling the function below.

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

------------

## Get card payment methods

In this step, the buyers' data is validated when they fill in the necessary fields to make the payment. In order to identify the payment method used by the buyer, insert the code below directly into the project.

[[[
```javascript

const paymentMethodElement = document.getElementById('paymentMethodId');
const issuerElement = document.getElementById('form-checkout__issuer');
const installmentsElement = document.getElementById('form-checkout__installments');

const issuerPlaceholder = "Issuing bank";
const installmentsPlaceholder = "Installments";

let currentBin;
cardNumberElement.on('binChange', async(data) => {
const { bin } = date;
try {
if (!bin && paymentMethodElement.value) {
clearSelectsAndSetPlaceholders();
paymentMethodElement.value = "";
}

if (bin && bin !== currentBin) {
const { results } = await mp.getPaymentMethods({ bin });
const paymentMethod = results[0];

paymentMethodElement.value = paymentMethod.id;
updatePCIFieldsSettings(paymentMethod);
updateIssuer(paymentMethod, bin);
updateInstallments(paymentMethod, bin);
}

currentBin = bin;
} catch (e) {
console.error('error getting payment methods: ', e)
}
});

function clearSelectsAndSetPlaceholders() {
clearHTMLSelectChildrenFrom(issuerElement);
createSelectElementPlaceholder(issuerElement, issuerPlaceholder);

clearHTMLSelectChildrenFrom(installmentsElement);
createSelectElementPlaceholder(installmentsElement, installmentsPlaceholder);
}

function clearHTMLSelectChildrenFrom(element) {
const currOptions = [...element.children];
currOptions.forEach(child => child.remove());
}

function createSelectElementPlaceholder(element, placeholder) {
const optionElement = document.createElement('option');
optionElement.textContent = placeholder;
optionElement.setAttribute('selected', "");
optionElement.setAttribute('disabled', "");

element.appendChild(optionElement);
}

// This step improves cardNumber and securityCode validations
function updatePCIFieldsSettings(paymentMethod) {
const { settings } = paymentMethod;

const cardNumberSettings = settings[0].card_number;
cardNumberElement.update({
settings: cardNumberSettings
});

const securityCodeSettings = settings[0].security_code;
securityCodeElement.update({
settings: securityCodeSettings
});
}
```
]]]

## Get issuing bank

When filling out the payment form, it is possible to identify the card issuing bank, avoiding data processing conflicts between different issuers. In addition, it is from this identification that the installment options are displayed.

The issuing bank is obtained through the `issuer_id` parameter. To get it, use the Javascript below.

[[[
```javascript

async function updateIssuer(paymentMethod, bin) {
const { additional_info_needed, issuer } = paymentMethod;
let issuerOptions = [issuer];

if (additional_info_needed.includes('issuer_id')) {
issuerOptions = await getIssuers(paymentMethod, bin);
}

createSelectOptions(issuerElement, issuerOptions);
}

async function getIssuers(paymentMethod, bin) {
try {
const { id: paymentMethodId } = paymentMethod;
return await mp.getIssuers({ paymentMethodId, bin });
} catch (e) {
console.error('error getting issuers: ', e)
}
};
```
]]]

## Get number of installments

One of the mandatory fields that make up the payment form is the **number of installments**. To activate it and display the available installments at the time of payment, use the function below.

[[[
```javascript

async function updateInstallments(paymentMethod, bin) {
try {
const installments = await mp.getInstallments({
amount: document.getElementById('transactionAmount').value,
bin,
paymentTypeId: 'credit_card'
});
const installmentOptions = installments[0].payer_costs;
const installmentOptionsKeys = { label: 'recommended_message', value: 'installments' };
createSelectOptions(installmentsElement, installmentOptions, installmentOptionsKeys);
} catch(error) {
console.error('error getting installments: ', e)
}
}
```
]]]

## Create card token

The card token is created from the card information itself, increasing security during the payment flow. In addition, once the token is used in a given purchase, it is discarded, requiring the creation of a new one for future purchases. To create the card token, use the function below. In addition, remember that **the token is valid for 7 days** and can be **used only once**.

> NOTE
>
> Important
>
> The `createCardToken` method returns a token with the secure representation of the card data. We will take the ID token from the response and save it in a hidden input called `token` and then send the form to the servers.

[[[
```javascript

const formElement = document.getElementById('form-checkout');
formElement.addEventListener('submit', createCardToken);

async function createCardToken(event) {
try {
const tokenElement = document.getElementById('token');
if (!tokenElement.value) {
event.preventDefault();
const token = await mp.fields.createCardToken({
cardholderName: document.getElementById('form-checkout__cardholderName').value,
identificationType: document.getElementById('form-checkout__identificationType').value,
identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
});
tokenElement.value = token.id;
formElement.requestSubmit();
}
} catch (e) {
console.error('error creating card token: ', e)
}
}
```
]]]

## Send payment

To finish the card payment integration process, it is necessary for the backend to receive the form information with the generated token and the complete data according to the previous steps.

With all the information collected in the backend, send a POST with the necessary attributes, paying attention to the parameters `token`, `transaction_amount`, `installments`, `payment_method_id` and the `payer.email` to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, send the information using the SDKs below.

> NOTE
>
> Important
>
> To increase the chances of payment approval and prevent the anti-fraud analysis from authorizing the transaction, we recommend entering as much information about the buyer when making the request. For more details on how to increase approval chances, see [How to improve payment approval](/developers/en/docs/checkout-api/how-tos/improve-payment-approval).

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

var Mercadopago = require('mercadopago');
Mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

var payment_data = {
transaction_amount: Number(req.body.transactionAmount),
token: req.body.token,
description: req.body.description,
installments: Number(req.body.installments),
payment_method_id: req.body.paymentMethodId,
issuer_id: req.body.issuer,
payer: {
email: req.body.email,
identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
type: req.body.identificationType,------------
number: req.body.identificationNumber
}
}
};

Mercadopago.payment.save(payment_data)
.then(function(response) {
res.status(response.status).json({
status: response.body.status,
status_detail: response.body.status_detail,
id: response.body.id
});
})
.catch(function(error) {
console.error(error)
});
```
```java
===
Find the payment status in the _status_ field.
===

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
PaymentCreateRequest.builder()
.transactionAmount(request.getTransactionAmount())
.token(request.getToken())
.description(request.getDescription())
.installments(request.getInstallments())
.paymentMethodId(request.getPaymentMethodId())
.payer(
PaymentPayerRequest.builder()
.email(request.getPayer().getEmail())
.firstName(request.getPayer().getFirstName())
.identification(
IdentificationRequest.builder()
.type(request.getPayer().getIdentification().getType())
.number(request.getPayer().getIdentification().getNumber())
.build())
.build())
.build();

client.create(paymentCreateRequest);

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
import market
sdk = Mercadopago.SDK("ACCESS_TOKEN")

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
"installations": 1,
"payment_method_id": "visa",
"issuer_id": 310,
"payer": {
"email": "test@test.com"
}
}'

```
]]]

> WARNING
>
> Important
>
> When creating a payment it is possible to receive 3 different statuses: "Pending", "Rejected" and "Approved". To keep up with updates, you need to configure your system to receive payment notifications and other status updates. See [Notifications](/developers/en/docs/checkout-api/additional-content/your-integrations/notifications) for more details.

When finished, you can perform tests and ensure that the integration is working correctly.