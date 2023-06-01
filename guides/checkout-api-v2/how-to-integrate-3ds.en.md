# How to integrate 3DS with Checkout API

In this documentation you will find all the necessary information to carry out the integration with 3DS with Transparent Checkout. For more information on how this type of authentication works, see [3DS 2.0](/developers/en/docs/checkout-api/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Important
>
> To integrate with 3DS, certain requirements must be met. Before moving on to the next steps, review the [Prerequisites](/developers/en/docs/checkout-api/prerequisites) section and make sure that all are met.

## Integrate with 3DS

3DS authentication can be done through two different flows: **with or without Challenge**, which are additional steps that the buyer must complete to ensure their identity. The decision to include or exclude the Challenge depends on the card issuer and the risk profile of the transaction being performed.

> Also learn about the integrations via [Checkout Bricks](/developers/en/docs/checkout-bricks/how-tos/integrate-3ds), a modular, secure and customizable payment method that automates several of the processes described below.

For **low-risk transactions**, the information sent at checkout is sufficient and the additional Challenge steps are not necessary. However, **for cases of high fraud risk**, the Challenge is necessary to **verify the buyer's identity**, which increases card transaction conversion.

Below are the steps to integrate with 3DS.

1. Use the Mercado Pago [SDK JS](https://www.mercadopago.com.br/developers/en/docs/sdks-library/client-side/mp-js-v2) at checkout to generate the [credit card token](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform).
2. Next, send the **checkout data** along with the **card token** to the backend.
3. After that, make a request to create a new payment with the received data. The `three_d_secure_mode` attribute needs to be sent with one of the following values:
    1. `not_supported`: 3DS must not be used (this is the default value).
    2. `optional`: 3DS may or may not be required, depending on the risk profile of the transaction.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: ENV_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payer": {
        "email": "test_payer_12345@testuser.com"
    },
    "additional_info": {
        "items": [
            {
                "quantity": 1,
                "category_id": "MLA91058",
                "title": "Clases De Payments",
                "unit_price": 100
            }
        ]
    },
    "payment_method_id": "master",
    "marketplace": "NONE",
    "installments": 1,
    "transaction_amount": 100,
    "description": "description",
    "token": "CARD_TOKEN",
    "three_d_secure_mode": "optional",
    "capture": true,
    "binary_mode": false
}'
```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");
    PaymentClient client = new PaymentClient();
    PaymentCreateRequest createRequest =
        PaymentCreateRequest.builder()
            .transactionAmount(new BigDecimal(100))
            .token("CARD_TOKEN")
            .description("description")
            .installments(1)
            .paymentMethodId("visa")
            .payer(
               PaymentPayerRequest.builder()
                 .email("test_payer_12345@testuser.com")
                 .build()
            )
            .threeDSecureMode("optional")
            .build();
    client.create(createRequest);
```
```dotnet
using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "CARD_TOKEN",
    Description = "description",
    Installments = 1,
    Payer = new PaymentPayerRequest
    {
        Email = "test_payer_12345@testuser.com",
    },
    ThreeDSecureMode = "optional",
};
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);
```
```php

<?php
  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
  $payment = new MercadoPago\Payment();
  $payment->transaction_amount = 100;
  $payment->token = "CARD_TOKEN";
  $payment->description = "description";
  $payment->installments = 1;
  $payment->payer = array(
        "email" => "test_payer_12345@testuser.com"
    );
  $payment->three_d_secure_mode = "optional";
  $payment->save();
?>
```
```node

var Mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
var payment_data = {
  transaction_amount: 100,
  token: 'CARD_TOKEN',
  description: 'description',
  installments: 1,
  payer: {
    email: 'test_payer_12345@testuser.com'
  },
  three_d_secure_mode: 'optional'
};
mercadopago.payment.create(payment_data).then(function (data) {
  console.log(data);
});
```
```ruby

require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
payment_request = {
  token: 'CARD_TOKEN',
  installments: 1,
  transaction_amount: 100,
  description: 'description',
  payer: {
    email: 'test_payer_12345@testuser.com',
  },
  three_d_secure_mode: 'optional'
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
payment_data = {
    "transaction_amount": 100,
    "token": "CARD_TOKEN",
    "description": "description",
    "installments": 1,
    "payer": {
        "email": "test_payer_12345@testuser.com",
    },
    "three_d_secure_mode": "optional"
}
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

```
]]]

If the Challenge flow is not required, the payment `status` field will have a value of `approved` and it will not be necessary to display it, so it is possible to proceed with the application flow. 

For cases where the Challenge is necessary, the status will show the value `pending`, and the `status_detail` will be `pending_challenge`.

> NOTE
>
> Important
>
> In the latter case, the response will show a payment attribute called `three_ds_info` with the fields `external_resource_url`, which contains the Challenge URL, and `creq`, a Challenge request identifier. It will be necessary to display the Challenge and treat its result with the following steps.

### Response overview (information omitted)


[[[
```Json

{
    "id": 52044997115,
    ...
    "status": "pending",
    "status_detail": "pending_challenge",
    ...
    "three_ds_info":
    {
        "external_resource_url": "https://acs-public.tp.mastercard.com/api/v1/browser_Challenges",
        "creq": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImJmYTVhZjI0LTliMzAtNGY1Yi05MzQwLWJkZTc1ZjExMGM1MCIsImFjc1RyYW5zSUQiOiI3MDAwYTI2YS1jYWQ1LTQ2NjQtOTM0OC01YmRlZjUwM2JlOWYiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0"
    },
    "owner": null
}

```
]]]

4. To **display the challenge**, you need to generate an iframe (min height: 500px, min width: 600px) containing a form with `method post`, `action` containing the URL obtained in the field `external_resource_url`, and a hidden input with the value returned in `creq`. Then, you must post the form below to start the challenge.

[[[
```javascript

function doChallenge(payment) {
  try {
    const {
      status,
      status_detail,
      three_ds_info: { creq, external_resource_url },
    } = payment;
    if (status === "pending" && status_detail === "pending_challenge") {
      var iframe = document.createElement("iframe");
      iframe.name = "myframe";
      iframe.id = "myframe";
      iframe.height = "500px";
      iframe.width = "600px";
      document.body.appendChild(iframe);

      var idocument = iframe.contentWindow.document;

      var myform = idocument.createElement("form");
      myform.name = "myform";
      myform.setAttribute("target", "myframe");
      myform.setAttribute("method", "post");
      myform.setAttribute("action", external_resource_url);

      var hiddenField = idocument.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "creq");
      hiddenField.setAttribute("value", creq);
      myform.appendChild(hiddenField);
      iframe.appendChild(myform);

      myform.submit();
    }
  } catch (error) {
    console.log(error);
    alert("Error doing challenge, try again later.");
  }
}

```
]]]

When the Challenge is completed, the payment status will be updated to `approved` if the authentication is successful, and `rejected` if it is not. In situations where authentication is not performed, the payment remains `pending`. This update is not immediate and may take a few moments.

> NOTE
>
> Important
>
> When the Challenge is initiated, the user has about 5 minutes to complete it. If it is not completed, the bank will decline the transaction and Mercado Pago will consider the payment cancelled. If the user never completes the challenge, the payment will remain as `pending_challenge`.

See the section below for more details on how to check the status of each transaction.

## Check transaction status

To find out the result of each transaction, there are three options:

* **Notifications**: A notification of the payment status change will be received through Webhooks and the buyer must be redirected to a screen indicating that the transaction was successful. Check the [Webhooks](/developers/en/docs/checkout-api/additional-content/notifications/webhooks)  section and learn how to set it up.
* **Payments API**: It will be necessary to make a [Payments](developers/en/reference/payments/_payments/post) pooling and if the status changes, redirect the buyer to a confirmation screen.
* **Treat the iframe event (recommended)**: Keep in mind that the event only indicates that the Challenge has ended and not that the payment has reached a final status, as the update is not immediate and may take a few moments. Make a request to [Payments](/developers/en/reference/payments/_payments/post) and if the status changes, redirect the buyer to a screen indicating that the transaction was successful.

To **treat the iframe event**, follow the steps below.

### Perform implementation

Use the following JavaScript code to implement and request the event that indicates that the Challenge has ended, so it is possible to redirect the client to the confirmation screen.

[[[
```javascript

window.addEventListener("message", (e) => {
     if (e.data.status === "COMPLETE") {
         window.open("congrats.html");
     }
});

```
]]]

### Search payment status

The following Javascript indicates how to search for the updated payment status and display it on the confirmation screen.

[[[
```javascript

document.addEventListener("DOMContentLoaded", async function (e) {
 heat();
});

async function init() {
 const id = localStorage.getItem("paymentId");

 try {
   const response = await fetch("/get_payment/" + id, {
     method: "GET",
   });
   const result = await response.json();
   if (result.status != 200) throw new Error("error getting payment");
   document.getElementById("congrats-div").innerHTML =
     "Pagamento " + result.data.id + " -> Status: " + result.data.status;
 } catch (error) {
   alert("Unexpected error\n" + JSON.stringify(error));
 }
}

```
]]]

> NOTE
>
> Important
>
> If the payment is still `pending` after the Challenge timeout, it will be necessary to redirect the buyer to a screen informing that the payment has expired and that a new one needs to be created (the update is not immediate, it may take some moments).

After following these steps, your integration is ready to authenticate transactions with 3DS.

## Possible payment statuses

A transaction with 3DS can return different statuses depending on the type of integration performed (with or without Challenge). In a payment **without Challenge**, the transaction status will be directly `approved` or `rejected`.

In a payment **with Challenge**, the transaction will have a `pending` status and the authentication process with the bank will be initiated. Only after this step, the final status will be displayed.

See below the table with the possible statuses and their respective descriptions.

| Status | Description |
| --- | --- |
| `pending` | Transaction with pending authentication or Challenge timeout. |
| `approved` | Transaction approved with authentication. |
| `rejected`| Transaction denied without authentication. |

## Integration test

Before going into production, it is possible to test the integration to ensure that the 3DS flow works correctly and that payments are processed without errors. This way, it avoids buyers from abandoning the transaction because they can't complete it.

To make a test purchase, you will need to have the test credentials of your production user and a test credit card with 3DS enabled.

> WARNING
>
> Important
>
> To perform the tests, we recommend that you contact your Mercado Pago consultant.