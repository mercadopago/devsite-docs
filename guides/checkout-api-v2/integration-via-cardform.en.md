# Integration via Cardform

The integration of card payments is done via cardform. In this integration mode, **MercadoPago.js** is responsible for the necessary flow to obtain the required information to create a payment. When initialized, a search is performed to collect the types of documents available for the country in question.

As the card data is entered, an automatic search takes place for the issuer information and available installments for that payment method. As a result, the implementation of the flow is transparent for those who perform the integration.

----[mla, mlb, mlm, mpe, mlc]----
> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate **card payments** using the **Card Payment Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/card-payment-brick/default-rendering#editor_2) documentation of Card Payment for more details. We also recommend adopting the 3DS 2.0 protocol to increase the likelihood of your payments being approved. For more information, please refer to the documentation on [How to integrate 3DS with Checkout API.](/developers/en/docs/checkout-api/how-tos/integrate-3ds)

------------
----[mlu, mco]----
> NOTE
>
> Important
>
> In addition to the options available in this documentation, it is also possible to integrate **card payments** using the **CardPayment Brick**. Check [Default rendering](/developers/en/docs/checkout-bricks/card-payment-brick/default-rendering#editor_2) documentation of CardPayment for more details.

------------

Check below the diagram that illustrates the card payment process using the Card Form.

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-2-en.png)

To integrate card payments into Checkout API, follow the steps below.

## Import MercadoPago.js

The first step in the card payment integration process is capturing card data. This capture is made by including the MercadoPago.js library in your project, followed by the payment form. Use the code below to import the library before adding the payment form.

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

Credentials are unique keys with which we identify an integration in your account. They are made to capture payments in virtual stores and other applications securely.

This is the first step of a complete code structure that must be followed for the correct integration of payment via card. 

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

The capture of card data is done through the CardForm of the MercadoPago.js library. Our CardForm will connect to your HTML payment form, making it easy to obtain and validate all the data needed to process the payment.

To add the payment form, insert the HTML below directly into the project.

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
  <form id="form-checkout">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer"></select>
    <select id="form-checkout__installments"></select>
    <select id="form-checkout__identificationType"></select>
    <input type="text" id="form-checkout__identificationNumber" />
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pay</button>
    <progress value="0" class="progress-bar">Loading...</progress>
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
  <form id="form-checkout">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer"></select>
    <select id="form-checkout__installments"></select>
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pay</button>
    <progress value="0" class="progress-bar">Loading...</progress>
  </form>
```
]]]

------------

## Initialize payment form

After adding the payment form, you will need to initialize it. This step consists of relating the ID of each form field with the corresponding attributes. The library will be responsible for filling out, obtaining and validating all necessary data at the time of payment confirmation.

> NOTE
>
> Important
>
> When submitting the form, a token, also known as **cardtoken**, is generated, securely representing the card data. You can access it via the `cardForm.getCardFormData()` function, as shown abive in the `onSubmit` callback. Furthermore, this token is also stored in a hidden input within the form where it can be found with the name `MPHiddenInputToken`. Keep in mind that the cardtoken can **only be used once** and expires within **7 days**.

----[mla, mlu, mpe, mco, mlb, mlc]----
[[[
```javascript

const cardForm = mp.cardForm({
amount: "100.5",
iframe: true,
form: {
id: "form-checkout",
cardNumber: {
id: "form-checkout__cardNumber",
placeholder: "Card Number",
},
expirationDate: {
id: "form-checkout__expirationDate",
placeholder: "MM/YY",
},
securityCode: {
id: "form-checkout__securityCode",
placeholder: "Security Code",
},
cardholderName: {
id: "form-checkout__cardholderName",
placeholder: "Cardholder",
},
issuer: {
id: "form-checkout__issuer",
placeholder: "Issuing bank",
},
installments: {
id: "form-checkout__installments",
placeholder: "Installments",
},
identificationType: {
id: "form-checkout__identificationType",
placeholder: "Document type",
},
identificationNumber: {
id: "form-checkout__identificationNumber",
placeholder: "Document number",
},
cardholderEmail: {
id: "form-checkout__cardholderEmail",
placeholder: "Email",
},
},
callbacks: {
onFormMounted: error => {
if (error) return console.warn("Form Mounted handling error: ", error);
console.log("Form mounted");
},
onSubmit: event => {
event.preventDefault();

const {
paymentMethodId: payment_method_id,
issuerId: issuer_id,
cardholderEmail: email,
amount,
token,
installments,
identificationNumber,
identificationType,
} = cardForm.getCardFormData();

fetch("/process_payment", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
token,
issuer_id,
payment_method_id,
transaction_amount: Number(amount),
installments: Number(installments),
description: "Product Description",
payer: {
email,
identification: {
type: identificationType,
number: identificationNumber,
},
},
}),
});
},
onFetching: (resource) => {
console.log("Fetching resource: ", resource);

// Animate progress bar
const progressBar = document.querySelector(".progress-bar");
progressBar.removeAttribute("value");

return() => {
progressBar.setAttribute("value", "0");
};
}
},
});
```
]]]

------------
----[mlm]----
[[[
```javascript

const cardForm = mp.cardForm({
amount: "100.5",
iframe: true,
form: {
id: "form-checkout",
cardNumber: {
id: "form-checkout__cardNumber",
placeholder: "Card Number",
},
expirationDate: {
id: "form-checkout__expirationDate",
placeholder: "MM/YY",
},
securityCode: {
id: "form-checkout__securityCode",
placeholder: "Security Code",
},
cardholderName: {
id: "form-checkout__cardholderName",
placeholder: "Cardholder",
},
issuer: {
id: "form-checkout__issuer",
placeholder: "Issuing bank",
},
installments: {
id: "form-checkout__installments",
placeholder: "Installments",
},
cardholderEmail: {
id: "form-checkout__cardholderEmail",
placeholder: "Email",
},
},
callbacks: {
onFormMounted: error => {
if (error) return console.warn("Form Mounted handling error: ", error);
console.log("Form mounted");
},
onSubmit: event => {
event.preventDefault();

const {
paymentMethodId: payment_method_id,
issuerId: issuer_id,
cardholderEmail: email,
amount,
token,
installments,
identificationNumber,
identificationType,
} = cardForm.getCardFormData();

fetch("/process_payment", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
token,
issuer_id,
payment_method_id,
transaction_amount: Number(amount),
installments: Number(installments),
description: "Product Description",
payer: {
email,
identification: {
type: identificationType,
number: identificationNumber,
},
},
}),
});
},
onFetching: (resource) => {
console.log("Fetching resource: ", resource);

// Animate progress bar
const progressBar = document.querySelector(".progress-bar");
progressBar.removeAttribute("value");

return() => {
progressBar.setAttribute("value", "0");
};
}
},
});
```
]]]

------------

> NOTE
>
> Important
>
> If you need to add or modify some logic in the flow of Javascript methods, consult the documentation [Integration via Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods)

## Send payment

To continue the card payment integration process, it is necessary for the backend to receive the form information with the generated token and the complete data as indicated in the previous steps.

In the example from the previous section, we sent all the necessary data to create the payment to the `process_payment` endpoint of the backend.

With all the information collected in the backend, send a POST with the necessary attributes, paying attention to the parameters `token`, `transaction_amount`, `installments`, `payment_method_id` and the `payer.email` to the endpoint [/v1/payments ](/developers/en/reference/payments/_payments/post) and execute the request or, if you prefer, send the information using our SDKs.

> NOTE
>
> Important
>
> To increase the chances of payment approval and prevent the anti-fraud analysis from authorizing the transaction, we recommend entering as much information about the buyer when making the request. For more details on how to increase approval chances, see [How to improve payment approval.](/developers/en/docs/checkout-api/how-tos/improve-payment-approval)
> <br><br>
> Also, it is mandatory to send the attribute `X-Idempotency-Key` to ensure the execution and reexecution of requests without the risk of accidentally performing the same action more than once. To do so, update our [SDKs Library](/developers/en/docs/sdks-library/landing), or generate a UUID V4 and send it in the _header_ of your requests.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\Client\Common\RequestOptions;
  use MercadoPago\MercadoPagoConfig;

  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "token" => $_POST['<TOKEN>'],
    "description" => $_POST['<DESCRIPTION>'],
    "installments" => $_POST['<INSTALLMENTS>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID'],
    "issuer_id" => $_POST['<ISSUER>'],
    "payer" => [
      "email" => $_POST['<EMAIL>'],
      "identification" => [
        "type" => $_POST['<IDENTIFICATION_TYPE'],
        "number" => $_POST['<NUMBER>']
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
===
Find the payment status in the _status_ field.
===

Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

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

client.create(paymentCreateRequest, requestOptions);

```
```ruby
===
Find the payment status in the _status_ field.
===
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

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
 
payment_response = sdk.payment.create(payment_data, custom_request_options)
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

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");
 
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
Payment payment = await client.CreateAsync(paymentReques, requestOptions);
 
Console.WriteLine(payment.Status);
 
```
```python
===
Find the payment status in the _status_ field.
===
import market
sdk = Mercadopago.SDK("ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

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
 
payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
 
print(payment)
```
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func processPayment(r *http.Request) {
	accessToken := "{{ACCESS_TOKEN}}"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	request := payment.Request{
		TransactionAmount: r.FormValue("transactionAmount"),
		Token: r.FormValue("token"),
            Description: r.FormValue("description"),
		PaymentMethodID:   r.FormValue("paymentMethodId"),
		Payer: &payment.PayerRequest{
			Email: r.FormValue("email"),
			Identification: &payment.IdentificationRequest{
				Type: r.FormValue("type"),
				Number: r.FormValue("number"),
			},
		},
	}

	resource, err := client.Create(context.Background(), request)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(resource)
}
```
```curl
===
Find the payment status in the _status_ field.
===
 
curl -X POST \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
-H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
'https://api.mercadopago.com/v1/payments' \
-d '{
"transaction_amount": 100,
"token": "ff8080814c11e237014c1ff593b57b4d",
"description": "Blue shirt",
"installations": 1,
"payment_method_id": "visa",
"issuer_id": 310,
"payer": {
"email": "PAYER_EMAIL"
}
}'
 
```
]]]

The response will show the following result

```json
{
"status": "approved",
"status_detail": "accredited",
"id": 3055677,
"date_approved": "2019-02-23T00:01:10.000-04:00",
"payer": {
...
},
"payment_method_id": "visa",
"payment_type_id": "credit_card",
"refunds": [],
...
}
```

> WARNING
>
> Attention
>
> When creating a payment it is possible to receive 3 different statuses: "Pending", "Rejected" and "Approved". To keep up with updates, you need to configure your system to receive payment notifications and other status updates. See [Notifications](/developers/en/docs/checkout-api/additional-content/your-integrations/notifications) for more details.

## Code example

> GIT
>
> Checkout API
>
> For complete code samples, check out the [Full Integration Examples](https://github.com/mercadopago/card-payment-sample) available on GitHub.