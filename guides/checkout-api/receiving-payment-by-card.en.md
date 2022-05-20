# Integrate Checkout API payment for cards

Integrating Mercado Pago's Checkout API for cards allows you to offer a complete payment option within the site. The entire experience takes place in your store, so customers avoid exiting your site while making a purchase.

Use our [sample projects](#bookmark_sample_projects) for a complete integration. You can adapt them according to your needs.

## How does it work?

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-en.png)

> If you want to make a customized payment flow, we share all the [methods available for advanced integration](/developers/en/docs/online-payments/checkout-api/receiving-payment-by-card-core-methods). 

<br>


With our Mercado Pago Checkout API, you should take into account two aspects: data capture and payment confirmation submission.


1. First, you need a frontend to collect card data and generate a security token with the information required to create a payment.
2. Then, you need a backend that takes the generated token and payment data, such as amount and item, to confirm and make a payment.

Both for frontend and backend, we recommend [our libraries](/developers/en/guides/checkout-api/previous-requirements#bookmark_always_use_our_libraries) to collect user sensitive data securely.

> For more information, check [API References](/developers/en/reference/cards/_customers_customer_id_cards/post).

<br>

> CLIENT_SIDE
>
> h2
>
> Card data capture

To create a payment, you should capture card data through the buyer's browser. For security reasons, **never store data in your servers**.

### 1. Include and configure MercadoPago.js library

**Use our official library to access Mercado Pago API** from your frontend to collect data securely and to configure your [public key]([FAKER][CREDENTIALS][URL]) like this:

```html
<body>
   <!-- Add step #2 -->
   <script src="https://sdk.mercadopago.com/js/v2"></script>
   <script>
       const mp = new MercadoPago('YOUR_PUBLIC_KEY');
       // Add step #3
   </script>
</body>
```

Card information will be turned into a token so that you can send data to your servers securely.

>  If you still don't have an account to check your credentials, [sign in](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

> This documentation uses the new library version. To see the previous version, go to [integrate credit card payment with MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/receiving-payment-by-card) section.

### 2. Add payment form

Before capturing the card data, provide a form to load all the information.

With MercadoPago.js V2 library CardForm functionality you can get and validate all the data needed to identify the type and name of payment method, issuing bank, number of installments and more. 

CardForm provides secure implementation and correct token of card data. 

Use the following form and add the styles of your choice.

```html
<!-- Step #2 -->
<form id="form-checkout" >
   <input type="text" name="cardNumber" id="form-checkout__cardNumber" />
    <input type="text" name="expirationDate" id="form-checkout__expirationDate" />
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <input type="text" name="securityCode" id="form-checkout__securityCode" />
   <select name="issuer" id="form-checkout__issuer"></select>----[mla, mlb, mlu, mlc, mpe, mco]----
   <select name="identificationType" id="form-checkout__identificationType"></select>------------
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pay</button>
   <progress value="0" class="progress-bar">Loading...</progress>
</form>
```

> GIT
> 
> Technical reference
> 
> Find information about the different attributes in the [technical references](https://github.com/mercadopago/sdk-js).

### 3. Integrate the form with MercadoPago.js library

Now, to initialize the CardForm, relate each form field ID with the relevant attributes. The library will be responsible for filling out, getting and validating all the data needed for payment confirmation.

```javascript

// Step #3
const cardForm = mp.cardForm({
  amount: "100.5",
  autoMount: true,
  form: {
    id: "form-checkout",
    cardholderName: {
      id: "form-checkout__cardholderName",
      placeholder: "Card Holder",
    },
    cardholderEmail: {
      id: "form-checkout__cardholderEmail",
      placeholder: "E-mail",
    },
    cardNumber: {
      id: "form-checkout__cardNumber",
      placeholder: "Card Number",
    },
    expirationDate: {
      id: "form-checkout__expirationDate",
      placeholder: "Expiration date (MM/YYYY)",
    },
    securityCode: {
      id: "form-checkout__securityCode",
      placeholder: "CVV",
    },
    installments: {
      id: "form-checkout__installments",
      placeholder: "Installments",
    },----[mla, mlb, mlu, mlc, mpe, mco]----
    identificationType: {
      id: "form-checkout__identificationType",
      placeholder: "Document Type",
    },------------
    identificationNumber: {
      id: "form-checkout__identificationNumber",
      placeholder: "Document Number",
    },
    issuer: {
      id: "form-checkout__issuer",
      placeholder: "Issuer",
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
        cardholderEmail: e-mail,
        amount,
        token,
        installments,
        identificationNumber----[mla, mlb, mlu, mlc, mpe, mco]----,
        identificationType,------------
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
          description: "Product description",
          payer: {
            email,
            identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
              type: identificationType,------------
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

      return () => {
        progressBar.setAttribute("value", "0");
      };
    }
  },
});
```

The callbacks option accepts different functions that are activated in different flow moments.

> GIT
> 
> Technical reference
> 
> Learn more information about callbacks in the [technical references](https://github.com/mercadopago/sdk-js).

Before sending the form, a token is generated with the card secure display, which is kept in a hidden `input` called `MPHiddenInputToken,` to then send the form to your servers.

> WARNING
>
> Important
>
> Remember that the token is valid for 7 days and can be used only once.

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Payment submission to Mercado Pago

To continue with the Mercado Pago payment process, your backend should know how to receive form information with the generated token and the filled out data.

In the above example, after the submit action, your backend should make available a `/process_payment` endpoint, to receive all the data.

Once the request –with all the collected information– is in your backend, it should be submitted to Mercado Pago through our APIs.  The minimum mandatory fields to submit are: `token`, `transaction_amount`, `installments`, `payment_method_id` and `payer.email`.

For this to work, you should configure your [private key]([FAKER][CREDENTIALS][URL]). Also, to interact with our APIs, you should use [Mercado Pago official SDK](/developers/en/guides/checkout-api/previous-requirements#bookmark__install_mercado_pago_sdk).

[[[
```php
===
You can find payment status in _status_ value.
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
    $payer->email = $_POST['cardholderEmail'];
    $payer->identification = array(----[mla, mlb, mlu, mlc, mpe, mco]----
        "type" => $_POST['identificationType'],------------
        "number" => $_POST['identificationNumber']
    );
    $payer->first_name = $_POST['cardholderName'];
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
You can find payment status in _status_ value.
===
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

mercadopago.payment.save(req.body)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });
```
```java
===
You can find payment status in _status_ value.
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
You can find payment status in _status_ value.
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
    email: params[:cardholderEmail],
    identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
      type: params[:identificationType],------------
      number: params[:identificationNumber]
    },
    first_name: params[:cardholderName]
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]

puts payment

```
```csharp
===
You can find payment status in _status_ value.
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
        Email = Request["cardholderEmail"],
        Identification = new IdentificationRequest
        {----[mla, mlb, mlu, mlc, mpe, mco]----
            Type = Request["identificationType"],------------
            Number = Request["identificationNumber"],
        },
        FirstName = Request["cardholderName"]
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);

Console.WriteLine(payment.Status);

```
```python
===
You can find payment status in _status_ value.
===
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_data = {
    "transaction_amount": float(request.POST.get("transaction_amount")),
    "token": request.POST.get("token"),
    "description": request.POST.get("description"),
    "installments": int(request.POST.get("installments")),
    "payment_method_id": request.POST.get("payment_method_id"),
    "payer": {
        "email": request.POST.get("cardholderEmail"),
        "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
            "type": request.POST.get("identificationType"), ------------
            "number": request.POST.get("identificationNumber")
        }
        "first_name": request.POST.get("cardholderName")
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

print(payment)
```
```curl
===
You can find payment status in _status_ value.
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
          "installments": 1,
          "payment_method_id": "visa",
          "issuer_id": 310,
          "payer": {
            "email": "test@test.com"
          }
    }'

```
]]]

#### Response

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

> Check [API References](/developers/en/reference/payments/_payments/post) to learn about all the available fields for full payments.

## Response Handling

Possible payment statuses are:

![payment-status](/images/api/api-payment-status-en.png)
<br>
<br>

For improved payment approval, you need to correctly inform results to your customers when making or creating a payment.

This will prevent rejections and chargebacks in the case of already approved transactions.  For example, this allows you to correct data upload mistakes or change payment methods.

We recommend using [response handling](/developers/en/guides/checkout-api/response-handling) and the suggested communication in each case.

> NOTE
>
> Note
>
> Avoid rejected payments with our recommendations to [improve the approval process](/developers/en/guides/additional-content/sales-processing/payment-rejections).

## Receive payment notifications

Finally, you always need to be notified of new payments and status updates.  For example, if they were approved, rejected, or are pending.

[Configure webhook notifications](/developers/en/guides/additional-content/notifications/webhooks/webhooks) or [IPN notifications](/developers/en/guides/additional-content/notifications/ipn).

## Sample projects

> GIT
>
> Checkout API
>
> Use our [complete integration examples](http://github.com/mercadopago/card-payment-sample) on GitHub to download instantly.