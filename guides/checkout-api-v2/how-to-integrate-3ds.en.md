# How to integrate 3DS with Checkout API

In this documentation you will find all the necessary information to carry out the integration with 3DS with Checkout API. For more information on how this type of authentication works, see [3DS 2.0](/developers/en/docs/checkout-api/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Important
>
> To integrate with 3DS, certain requirements must be met. Before moving on to the next steps, review the [Prerequisites](/developers/en/docs/checkout-api/prerequisites) section and make sure that all are met.

## Integrate with 3DS

3DS authentication can be done through two different flows: **with or without Challenge**, which are additional steps that the buyer must complete to ensure their identity. The decision to include or exclude the Challenge depends on the card issuer and the risk profile of the transaction being performed.

> Also learn about the integrations via [Checkout Bricks,](/developers/en/docs/checkout-bricks/how-tos/integrate-3ds) a modular, secure and customizable payment method that automates several of the processes described below.

For **low-risk transactions**, the information sent at checkout is sufficient and the additional Challenge steps are not necessary. However, **for cases of high fraud risk**, the Challenge is necessary to **verify the buyer's identity**, which increases card transaction conversion.

Below are the steps to integrate with 3DS.

1. Use the Mercado Pago [SDK JS](https://www.mercadopago.com.br/developers/en/docs/sdks-library/client-side/mp-js-v2) at checkout to generate the [credit card token](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform).
2. Next, send the **checkout data** along with the **card token** to the backend.
3. After that, make a request to create a new payment with the received data. The `three_d_secure_mode` attribute needs to be sent with one of the following values:
    1. `not_supported`: 3DS must not be used (this is the default value).
    2. `optional`: 3DS may or may not be required, depending on the risk profile of the transaction.
    3. `mandatory`: 3DS will be required mandatorily.

> NOTE
>
> Important
>
> We recommend using the `optional` value in the implementation of 3DS, as it balances security and transaction approval. The `mandatory`should be used only for integrations that require all approved transactions to go through 3DS.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: <ENV_ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payer": {
        "email": "<BUYER_EMAIL>"
    },
    "additional_info": {
        "items": [
            {
                "quantity": <ITEM_QUANTITY>,
                "category_id": <CATEGORY_ID>,
                "title": <ITEM_TITLE>,
                "unit_price": <TRANSACTION_AMOUNT>
            }
        ]
    },
    "payment_method_id": <PAYMENT_METHOD_ID>,
    "marketplace": "NONE",
    "installments": <INSTALLLMENTS_NUMBER>,
    "transaction_amount": <TRANSACTION_AMOUNT>,
    "description": "<DESCRIPTION>",
    "token": "CARD_TOKEN",
    "three_d_secure_mode": "optional",
    "capture": true,
    "binary_mode": false
}'
```
```java
MercadoPagoConfig.setAccessToken("<ENV_ACCESS_TOKEN>");
    PaymentClient client = new PaymentClient();
    PaymentCreateRequest createRequest =
        PaymentCreateRequest.builder()
            .transactionAmount(new BigDecimal(<TRANSACTION_AMOUNT>))
            .token("<CARD_TOKEN>")
            .description("<DESCRIPTION>")
            .installments(<INSTALLLMENTS_NUMBER>)
            .paymentMethodId("<PAYMENT_METHOD_ID>")
            .payer(
               PaymentPayerRequest.builder()
                 .email("<BUYER_EMAIL>")
                 .build()
            )
            .threeDSecureMode("optional")
            .build();
    client.create(createRequest);
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
MercadoPagoConfig.AccessToken = "<ENV_ACCESS_TOKEN>";
var request = new PaymentCreateRequest
{
    TransactionAmount = <TRANSACTION_AMOUNT>,
    Token = "<CARD_TOKEN>",
    Description = "<DESCRIPTION>",
    Installments = <INSTALLLMENTS_NUMBER>,
    Payer = new PaymentPayerRequest
    {
        Email = "<BUYER_EMAIL>",
    },
    ThreeDSecureMode = "optional",
};
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);
```
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => <TRANSACTION_AMOUNT>,
    "token" => "CARD_TOKEN",
    "description" => "<DESCRIPTION>",
    "installments" => <INSTALLMENTS_NUMBER>,
    "payment_method_id" => "<PAYMENT_METHOD_ID>",
    "issuer_id" => "<ISSUER_ID>",
    "payer" => [
      "email" => $_POST['email']
    ],
    "three_d_secure_mode" => "optional"
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ENV_ACCESS_TOKEN>' });
const payment = new Payment(client);

const body = {
  transaction_amount: <TRANSACTION_AMOUNT>,
  token: '<CARD_TOKEN>',
  description:  '<DESCRIPTION>',
  installments: <INSTALLMENTS_NUMBER>,
  payment_method_id: '<PAYMENT_METHOD_ID>',
  issuer_id: '<ISSUER_ID>',
  payer: {
    email: '<BUYER_EMAIL>',
  },
  three_d_secure_mode: 'optional'
}
payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```ruby

require 'mercadopago'
sdk = Mercadopago::SDK.new('<ENV_ACCESS_TOKEN>')
payment_request = {
  token: '<CARD_TOKEN>',
  installments: <INSTALLLMENTS_NUMBER>,
  transaction_amount: <TRANSACTION_AMOUNT>,
  description: '<DESCRIPTION>',
  payer: {
    email: '<BUYER_EMAIL>',
  },
  three_d_secure_mode: 'optional'
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```python
import mercadopago
sdk = mercadopago.SDK("<ENV_ACCESS_TOKEN>")
payment_data = {
    "transaction_amount": <TRANSACTION_AMOUNT>,
    "token": "<CARD_TOKEN>",
    "description": "<DESCRIPTION>",
    "installments": <INSTALLLMENTS_NUMBER>,
    "payer": {
        "email": "<BUYER_EMAIL>",
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

When the Challenge is initiated, the user has about 5 minutes to complete it. If it is not completed, the bank will decline the transaction and Mercado Pago will consider the payment cancelled. While the user doesn't complete the Challenge, the payment will remain as `pending_challenge`.

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

4. To **display the Challenge**, you need to generate an iframe (min height: 500px, min width: 600px) containing a form with `method post`, `action` containing the URL obtained in the field `external_resource_url`, and a hidden input with the value returned in `creq`. Then, you must post the form below to start the Challenge.

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

See the section below for more details on how to check the status of each transaction.

## Check the status of the transaction

To find out the result of each transaction, there are three options:

* **Notifications**: A notification of the payment status change will be received through Webhooks and the buyer must be redirected to a screen indicating that the transaction was successful. Check the [Webhooks](/developers/en/docs/checkout-api/additional-content/your-integrations/notifications/webhooks)  section and learn how to set it up.
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

A transaction with 3DS can return different statuses depending on the type of authentication performed (with or without Challenge). In a payment **without Challenge**, the transaction status will be directly `approved` or `rejected`.

In a payment **with Challenge**, the transaction will have a `pending` status and the authentication process with the bank will be initiated. Only after this step, the final status will be displayed.

See below the table with the possible statuses and their respective descriptions.

| Status     | Status_detail                 | Description                                                      |
|------------|-------------------------------|------------------------------------------------------------------|
| "approved" | "accredited"                  | Transaction approved without authentication.                     |
| "rejected" | -                            | Transaction rejected without authentication. To check the reasons, please refer to the standard [list of status details](https://mercadopago.com.br/developers/en/docs/checkout-api/response-handling/collection-results).                     |
| "pending"  | "pending_challenge"           | Transaction pending authentication or Challenge timeout. |
| "rejected" | "cc_rejected_3ds_challenge"   | Transaction rejected due to Challenge failure.                 |
| "rejected" | "cc_rejected_3ds_mandatory" | Transaction rejected for not complying with 3DS validation when it is mandatory. |
| "cancelled" | "expired" | Transaction with Challenge canceled after 24 hours in pending status. |

## Integration test

To facilitate the validation of 3DS payments, we have created a sandbox testing environment. This environment returns fictional results that are only used for simulating and validating the implementation.

> WARNING
>
> Important
>
> To test the integration, it is necessary to use your test credentials. Also, make sure to include the `three_d_secure_mode` attribute, setting it as `optional` or `mandatory`, to ensure the correct implementation of the 3DS payment.

To test payments in a sandbox environment, specific cards should be used to test the implementation of the Challenge with both success and failure flows, as shown in the table below:

| Card        | Flow                    | Number              | Security Code | Expiration Date |
|-------------|-------------------------|---------------------|----------------|-----------------|
| Mastercard  | Successful Challenge    | 5483 9281 6457 4623 | 123            | 11/25           |
| Mastercard  | Unauthorized Challenge | 5361 9568 0611 7557 | 123            | 11/25           |
| Matercard | 3ds mandatory | 5031 7557 3453 0604 | 123 | 11/25 |

The steps to create the payment remain the same. If you have any doubts about how to create card payments, please refer to the [documentation on Cards](https://www.mercadopago.com.br/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform).


[[[
```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "CARD_TOKEN",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "master",
         "issuer_id": 310,
         "payer": {
           "email": "PAYER_EMAIL"
         },
         "three_d_secure_mode": "optional"
   }'
```
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\MercadoPagoConfig;
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
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
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ],
    "three_d_secure_mode" => "optional"
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
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
    }
  },
  three_d_secure_mode: 'optional' 
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```java
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
       .threeDSecureMode("optional")
       .build();

client.create(paymentCreateRequest);
```
```ruby
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
   identification: {
     type: params[:identificationType],
     number: params[:identificationNumber]
   }
 three_d_secure_mode: "optional",
 }
}
 
payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]
 
puts payment
```
```csharp
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
       {
           Type = Request["identificationType"],
           Number = Request["identificationNumber"],
       },
   },
ThreeDSecureMode = "optional",
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
 
Console.WriteLine(payment.Status);

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "email": request.POST.get("email"),
       "identification": {
           "type": request.POST.get("type"), 
           "number": request.POST.get("number")
       }
   }
   "three_d_secure_mode": "optional"
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
 
print(payment)
```
]]]

### Challenge

In both the success and failure flows, the Challenge, which is a screen similar to the one shown below, should be displayed within the iframe:

![Challenge](/images/api/sandbox-v1-en.png)

The provided verification code is for illustrative purposes only. To complete the test flow, simply click the **Confirm** button. After completing this action, follow the detailed instructions in the [Check the status of the transaction](/developers/en/docs/checkout-api/how-tos/integrate-3ds#bookmark_check_transaction_status) section to determine when the Challenge has been completed and how to check for payment updates. 