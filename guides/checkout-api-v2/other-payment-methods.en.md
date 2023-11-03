# Other payment methods

----[mlb]----
With Mercado Pago's Checkout API, it is possible to offer, in addition to card and Pix, **payments via boleto bancário and pagamento em lotérica**.

> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate **other payment methods** using the **Payment Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/payment-brick/default-rendering#editor_2) documentation of Payment for more details.
> <br><br>
> When executing the APIs mentioned in this documentation, you may come across the attribute `X-Idempotency-Key`. Filling it out is important to ensure the execution and reexecution of requests without undesirable situations, such as duplicate payments, for example.

------------
----[mla]----
With Mercado Pago's Checkout API, it is also possible to offer payments with **Rapipago** and/or **Pago Fácil**.

> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate **other payment methods** using the **Payment Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/payment-brick/default-rendering#editor_2) documentation of Payment for more details.
> <br><br>
> When executing the APIs mentioned in this documentation, you may come across the attribute `X-Idempotency-Key`. Filling it out is important to ensure the execution and reexecution of requests without undesirable situations, such as duplicate payments, for example.

------------
----[mlm]----
With the Mercado Pago's Checkout API, it is also possible to offer payments with **OXXO**, **Paycash**, **Citibanamex**, **Santander**, **BBVA Bancomer** and **Mercado Pago Card**.

> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate **other payment methods** using the **Payment Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/payment-brick/default-rendering#editor_2) documentation of Payment for more details.
> <br><br>
> When executing the APIs mentioned in this documentation, you may come across the attribute `X-Idempotency-Key`. Filling it out is important to ensure the execution and reexecution of requests without undesirable situations, such as duplicate payments, for example.

------------
----[mpe]----
With Mercado Pago's Checkout API, it is also possible to offer payments through **PagoEfectivo**.

> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate **other payment methods** using the **Payment Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/payment-brick/default-rendering#editor_2) documentation of Payment for more details.
> <br><br>
> When executing the APIs mentioned in this documentation, you may come across the attribute `X-Idempotency-Key`. Filling it out is important to ensure the execution and reexecution of requests without undesirable situations, such as duplicate payments, for example.

------------
----[mco]----
With Mercado Pago's Checkout API, it is also possible to offer payments with **Efecty**.

> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate **other payment methods** using the **Payment Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/payment-brick/default-rendering#editor_2) documentation of Payment for more details.
> <br><br>
> When executing the APIs mentioned in this documentation, you may come across the attribute `X-Idempotency-Key`. Filling it out is important to ensure the execution and reexecution of requests without undesirable situations, such as duplicate payments, for example.

------------
----[mlu]----
With Mercado Pago's Checkout API, it is also possible to offer payments with **Abitab** and **Redpagos**.

> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate **other payment methods** using the **Payment Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/payment-brick/default-rendering#editor_2) documentation of Payment for more details.
> <br><br>
> When executing the APIs mentioned in this documentation, you may come across the attribute `X-Idempotency-Key`. Filling it out is important to ensure the execution and reexecution of requests without undesirable situations, such as duplicate payments, for example.

------------

To get a detailed list of all payment methods available for integration, send a **GET** with your **Access token** to the endpoint [/v1/payment_methods](/developers/en/reference/payment_methods/_payment_methods/get) and run the request or, if you prefer, make the request using the SDKs below.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "first_name" => $_POST['payerFirstName'],
      "last_name" => $_POST['payerLastName'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
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

----[mlb]----
To offer **Boleto Bancário** and/or **Pagamento em lotérica**, follow the steps below.

------------
----[mla]----
To offer **Rapipago** and/or **Pago Fácil** payments, follow the steps below.

------------
----[mlm]----
To offer payments with **OXXO**, **Paycash**, **Citibanamex**, **Santander**, **BBVA Bancomer** or **Mercado Pago Card**, follow the steps below.

------------
----[mpe]----
To offer **PagoEfectivo** payments, please follow the steps below.

------------
----[mco]----
To offer **Efecty** payments, please follow the steps below.

------------
----[mlu]----
To offer payments with **Abitab** and/or **Redpagos**, please follow the steps below.

------------

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

----[mlb, mla, mpe, mco, mlu, mlc]----
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

------------

## Send payment

When finalizing the inclusion of the payment form and obtaining the types of documents, it is necessary to forward the buyer's email, type and document number, the payment method used and the details of the amount to be paid using our Payments API or one of our SDKs.

----[mlb]----
To configure payments with **Boleto Bancário** or **Pagamento em lotérica**, send a **POST** with the following parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and run the request or, if you prefer, use one of our SDKs below.

> WARNING
>
> Important
>
> For this step, when making the request via API or SDKs, it is necessary to send your Private Key - Access token.

| Payment Type | Parameter | Value |
| --- | --- | --- |
| Boleto | `payment_method_id` | `bolbradesco` |
| Lottery payment | `payment_method_id` | `pec` |

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "first_name" => $_POST['payerFirstName'],
      "last_name" => $_POST['payerLastName'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
PaymentCreateRequest.builder()
.transactionAmount(new BigDecimal("100"))
.description("Product Title")
.paymentMethodId("bolbradesco")
.dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
.payer(
PaymentPayerRequest.builder()
.email("PAYER_EMAIL")
.firstName("Test")
.lastName("User")
.identification(
IdentificationRequest.builder().type("CPF").number("19119119100").build())
.build())
.build();

client.create(paymentCreateRequest, requestOptions);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
  transaction_amount: 100,
  description: 'Product title',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'PAYER_EMAIL',
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

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var request = new PaymentCreateRequest
{
TransactionAmount = 105,
Description = "Product Title",
PaymentMethodId = "bolbradesco",
Payer = new PaymentPayerRequest
{
Email = "PAYER_EMAIL",
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
Payment payment = await client.CreateAsync(request, requestOptions);

```
```python
import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
"transaction_amount": 100,
"description": "Product title",
"payment_method_id": "bolbradesco",
"payer": {
"email": "PAYER_EMAIL",
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

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
```
```curl
curl -X POST \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
'https://api.mercadopago.com/v1/payments' \
-d '{
"transaction_amount": 100,
"description": "Product title",
"payment_method_id": "bolbradesco",
"payer": {
"email": "PAYER_EMAIL",
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

The response will show the `pending` status until the buyer completes the payment. Also, in the response to the request, the `external_resource_url` parameter will return a URL that contains instructions for the buyer to make the payment. You can redirect to this same link to complete the payment flow. See below for an example return.

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
> Note
>
> The customer has between 3 and 5 days to pay, depending on the payment method. After this time, the payment must be canceled.

## Expiration date

The default expiration date for payments with boleto is 3 days. Optionally, it is possible to change this date by sending the `date_of_expiration` field in the payment creation request, defining a period between 1 and 30 days from the boleto issuance date.

To change the expiration date, use one of the codes available below.

[[[
```php
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===
$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===
payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
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
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

The time for payments with boleto approval is up to 48 working hours. Therefore, set the expiration date to a minimum of 3 days to ensure that the payment is made.

> WARNING
>
> Important
>
> If the boleto is paid after the expiration date, the amount will be refunded to the payer's Mercado Pago account.

## Cancel payment

To avoid billing issues, it is important to cancel overdue payments. Also, keep in mind that **it is possible to cancel only payments that are pending or in process**. If a payment is due within 30 days, the cancellation is automatic and the final status of the payment will be `canceled` or `expired`.

For more information, see the [Refunds and Cancellations](/developers/en/docs/checkout-api/payment-management/cancellations-and-refunds) section.

------------
----[mla]----

To configure payments with **Rapipago** and/or **Pago Fácil**, send a **POST** with the required parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, use one of our SDKs below.

> WARNING
>
> Important
>
> For this step, when making the request via API or SDKs, it is necessary to send your Private Key - Access token.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "first_name" => $_POST['payerFirstName'],
      "last_name" => $_POST['payerLastName'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
.setDescription("Product Title")
.setPaymentMethodId("rapipago")
.setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
transaction_amount: 100,
description: 'Product title',
payment_method_id: 'rapipago',
payer: {
email: 'test_user_19653727@testuser.com',
}
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
TransactionAmount = 100,
Description = "Product Title",
PaymentMethodId = "rapipago",
Payer = new PaymentPayerRequest
{
Email = "test_user_19653727@testuser.com",
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
"payment_method_id": "rapipago",
"payer": {
"email": "test_user_19653727@testuser.com"
}
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-d '{
transaction_amount: 100,
description: "Product Title",
payment_method_id: "rapipago",
payer: { email: "test_user_19653727@testuser.com" }
}'
```
]]]

The response will show the **pending status** until the buyer completes the payment. Also, in the response to the request, the `external_resource_url` parameter will return a URL that contains instructions for the buyer to make the payment. You can redirect to this same link to complete the payment flow.

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

## Expiration date

It is possible to change the expiration date for cash payments by submitting the `date_of_expiration` field in the payment creation request. The configured date must be between 1 and 30 days from the date the payment is issued.

To change the expiration date, use one of the codes available below.

[[[
```php
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
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
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

The crediting period takes between 1 and 2 business days, depending on the payment method. That's why we recommend that you set the expiration date to a minimum of 3 days to ensure the payment to be made.

> WARNING
>
> Important
>
> If the payment is made after the expiration date, the amount will be refunded to the payer's Mercado Pago account.


## Cancel payment

To avoid billing issues, it is important to cancel overdue payments. Also, keep in mind that **it is possible to cancel only payments that are pending or in process**.

If a payment expires within 30 days, the cancellation is automatic and the final status of the payment will be `canceled` or `expired`. For more information, see the [Refunds and Cancellations](/developers/en/docs/checkout-api/payment-management/cancellations-and-refunds) section.

------------

----[mlm]----

To configure payments with **OXXO**, **Paycash**, **Citibanamex**, **Santander**, **BBVA Bancomer** and/or **Mercado Pago Card** , send a **POST** with the appropriate parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, use one of our SDKs below.

> WARNING
>
> Important
>
> For this step, when making the request via API or SDKs, it is necessary to send your Private Key - Access token.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "first_name" => $_POST['payerFirstName'],
      "last_name" => $_POST['payerLastName'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
.setDescription("Product Title")
.setPaymentMethodId("oxxo")
.setPayer(new Payer("test_user_82045343@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
transaction_amount: 100,
description: 'Product title',
payment_method_id: 'oxxo',
payer: {
email: 'test_user_82045343@testuser.com',
}
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
TransactionAmount = 100,
Description = "Product Title",
PaymentMethodId = "oxxo",
Payer = new PaymentPayerRequest
{
Email = "test_user_82045343@testuser.com",
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
"payment_method_id": "oxxo",
"payer": {
"email": "test_user_82045343@testuser.com"
}
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-d '{
transaction_amount: 100,
description: "Product Title",
payment_method_id: "oxxo",
payer: { email: "test_user_82045343@testuser.com" }
}'
```
]]]

The response will show the **pending status** until the buyer completes the payment. Also, in the response to the request, the `external_resource_url` parameter will return a URL that contains instructions for the buyer to make the payment. You can redirect to this same link to complete the payment flow.

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

## Cancel payment

To avoid billing issues, it is important to cancel overdue payments. Also, keep in mind that **it is possible to cancel only payments that are pending or in process**.

If a payment expires within 30 days, the cancellation is automatic and the final status of the payment will be `canceled` or `expired`. For more information, see the [Refunds and Cancellations](/developers/en/docs/checkout-api/payment-management/cancellations-and-refunds) section.


## Payment locations

When completing the integration, it is important to share with buyers the information on the different places where they can make the payment. See the details of each one in the table below.

| Payment method | Available stores |
| --- | --- |
| OXXO | OXXO
| PayCash | 7-Eleven |
| PayCash | Circle K |
| PayCash | Soriana |
| PayCash | Extra |
| PayCash | Calimax |
| PayCash | Santander |
| BBVA Bancomer | Pharmacies in Ahorro |
| BBVA Bancomer | Ley House |
| BBVA Bancomer | BBVA Bancomer |
| Citibanamex| Chedraui |
| Citibanamex| Telecomm |
| Citibanamex| Citibanamex |

------------
----[mpe]----

To configure payments with **PagoEfectivo**, send a **POST** with the required parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, use one of our SDKs below.

> WARNING
>
> Important
>
> For this step, when making the request via API or SDKs, it is necessary to send your Private Key - Access token.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "first_name" => $_POST['payerFirstName'],
      "last_name" => $_POST['payerLastName'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
.setDescription("Product Title")
.setPaymentMethodId("pagoefectivo_atm")
.setPayer(new Payer("test_user_42972582@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
transaction_amount: 100,
description: 'Product title',
payment_method_id: 'pagoefectivo_atm',
payer: {
email: 'test_user_42972582@testuser.com'
}
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
TransactionAmount = 5000,
Description = "Product Title",
PaymentMethodId = "paypayment_atm",
Payer = new PaymentPayerRequest
{
Email = "test_user_42972582@testuser.com",
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
"payment_method_id": "payment_atm",
"payer": {
"email": "test_user_42972582@testuser.com"
}
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-d '{
transaction_amount: 100,
description: "Product Title",
payment_method_id: "paypayment_atm",
payer: { email: "test_user_42972582@testuser.com" }
}'
```
]]]

The response will show the **pending status** until the buyer completes the payment. Also, in the response to the request, the `external_resource_url` parameter will return a URL that contains instructions for the buyer to make the payment. You can redirect to this same link to complete the payment flow.

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

## Cancel payment

To avoid billing issues, it is important to cancel overdue payments. Also, keep in mind that **it is possible to cancel only payments that are pending or in process**.

If a payment expires within 30 days, the cancellation is automatic and the final status of the payment will be `canceled` or `expired`. For more information, see the [Refunds and Cancellations](/developers/en/docs/checkout-api/payment-management/cancellations-and-refunds) section.

------------
----[mco]----

To configure payments with **Efecty**, send a **POST** with the appropriate parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post ) and execute the request or, if you prefer, use one of our SDKs below.

> WARNING
>
> Important
>
> For this step, when making the request via API or SDKs, it is necessary to send your Private Key - Access token.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "first_name" => $_POST['payerFirstName'],
      "last_name" => $_POST['payerLastName'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(5000f)
.setDescription("Product Title")
.setPaymentMethodId("efecty")
.setPayer(new Payer("test_user_19549678@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
transaction_amount: 5000,
description: 'Product title',
payment_method_id: 'effect',
payer: {
email: 'test_user_19549678@testuser.com',
}
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
TransactionAmount = 5000,
Description = "Product Title",
PaymentMethodId = "effect",
Payer = new PaymentPayerRequest
{
Email = "test_user_19549678@testuser.com",
},
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
"transaction_amount": 5000,
"description": "Product title",
"payment_method_id": "effect",
"payer": {
"email": "test_user_19549678@testuser.com"
}
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-d '{
transaction_amount: 5000,
description: "Product Title",
payment_method_id: "effect",
payer: { email: "test_user_19549678@testuser.com" }
}'
```
]]]


The response will show the **pending status** until the buyer completes the payment. Also, in the response to the request, the `external_resource_url` parameter will return a URL that contains instructions for the buyer to make the payment. You can redirect to this same link to complete the payment flow.

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

## Expiration date

It is possible to change the expiration date for cash payments by submitting the `date_of_expiration` field in the payment creation request. The configured date must be between 1 and 30 days from the issue date. To do this, use one of the codes available below.

[[[
```php
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
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
The date uses the ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

The crediting period is between 1 and 2 working days according to the payment method. That's why we recommend that you set the expiration date to a minimum of 3 days to ensure payment is made.

> WARNING
>
> Important
>
> If payment is made after the expiration date, the amount will be refunded to the payer's Mercado Pago account.

## Cancel payment

It is important to cancel a payment as soon as it is due to avoid billing issues. Cash payments must be paid between 3 and 5 working days according to the time of each one.

Please note that **you can only cancel payments that are pending or in process**. If a payment expires after 30 days, the cancellation is automatic and the final status will be canceled or expired.

For details on how to cancel a payment, see the [Refunds and Cancellations](/developers/en/docs/checkout-api/payment-management/cancellations-and-refunds) section.

------------
----[mlu]----

To configure payments with **Abitab** and/or **Redpagos**, send a **POST** with the following parameters to the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) and run the request or, if you prefer, use one of our SDKs below.

> WARNING
>
> Important
>
> For this step, when making the request via API or SDKs, it is necessary to send your Private Key - Access token.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "first_name" => $_POST['payerFirstName'],
      "last_name" => $_POST['payerLastName'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
.setDescription("Product Title")
.setPaymentMethodId("abitab")
.setPayer(new Payer("test_user_84162205@testuser.com"));

payment.save();
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
transaction_amount: 100,
description: 'Product title',
payment_method_id: 'abitab',
payer: {
email: 'test_user_84162205@testuser.com',
}
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
TransactionAmount = 100,
Description = "Product Title",
PaymentMethodId = "abitab",
Payer = new PaymentPayerRequest
{
Email = "test_user_84162205@testuser.com",
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
"payment_method_id": "abitab",
"payer": {
"email": "test_user_84162205@testuser.com"
}
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
'https://api.mercadopago.com/v1/payments' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-d '{
transaction_amount: 100,
description: "Product Title",
payment_method_id: "abitab",
payer: { email: "test_user_84162205@testuser.com" }
}'
```
]]]

The response will show the **pending status** until the buyer completes the payment. Also, in the response to the request, the `external_resource_url` parameter will return a URL that contains instructions for the buyer to make the payment. You can redirect to this same link to complete the payment flow.

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

## Cancel payment

To avoid billing issues, it's important to cancel payments as soon as they expire. Cash payments must be made between 3 and 5 business days depending on the time of each one.

Take into consideration that you can only cancel payments that are in
`pending` or `in process`. If a payment expires within 30 days, the cancellation is automatic and the final status will be `canceled` or `expired`.

To cancel a payment, see the [Refunds and Cancellations](/developers/en/docs/checkout-api/payment-management/cancellations-and-refunds) section.

------------