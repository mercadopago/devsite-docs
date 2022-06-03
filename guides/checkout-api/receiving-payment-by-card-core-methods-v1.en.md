# Integrate Checkout API payment for cards

Integrating Mercado Pago's Checkout API for cards allows you to offer a complete payment option within the site. The entire experience takes place in your store, so customers avoid exiting your site while making a purchase.


## How it works

![API-integration-flowchart](/images/api/api-integration-flowchart-coremethods-en.png)

> For an automated payment flow, [use MercadoPago.js V2 CardForm functionality](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/checkout-api/receiving-payment-by-card).

<br>


With our Mercado Pago Checkout API, you should take into account two aspects: data capture and payment confirmation submission.


1. First, you need a frontend to collect card data and generate a security token with the information required to create a payment.
2. Then, you need a backend that takes the generated token and payment data, such as amount and item, to confirm and make a payment.

Both for frontend and backend, we recommend [our libraries](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/checkout-api/previous-requirements#bookmark_always_use_our_libraries) to collect user sensitive data securely.

For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Card data capture

To create a payment, you should capture card data through the buyer's browser. For security reasons, **never store data in your servers**.

> NOTE
>
> Note
>
> This documentation uses the new library version. To see the previous version, go to [integrate payment for cards with MercadoPago.js V1 section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

### 1. Include MercadoPago.js library

Use our **official library** to access Mercado Pago API from your application and collect data securely.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Card information will be turned into a token so that you can send data to your servers securely.

### 2. Add payment form

To capture sensitive data from your customer's cards, please use our form with the corresponding attributes to ensure information security and correct token generation. For example, don't use the `name` attribute in fields containing sensitive data. This way your servers will never store these data.

You can easily include anything you need, change the suggested `label` attribute, and add your own style.

The following example assumes that `transactionAmount` and `description` data were obtained in the previous step in which customers selected the product or service to be paid.

```html
<form id="form-checkout" method="POST" action="/process_payment">
       <input type="text" id="form-checkout__cardNumber" placeholder="Card number" />
       <input type="text" id="form-checkout__expirationMonth" placeholder="Expiration month (MM)" />
       <input type="text" id="form-checkout__expirationYear" placeholder="Expiration year (YY or YYYY)" />
       <input type="text" name="cardholderName" id="form-checkout__cardholderName" placeholder="Cardholder name"/>
       <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" placeholder="E-mail" />
       <input type="text" id="form-checkout__securityCode" placeholder="Security code"/>
       <select name="issuer" id="form-checkout__issuer">
           <option value="" disabled selected>Issuer</option>
       </select>----[mla, mlb, mlu, mlc, mpe, mco]----
       <select name="identificationType" id="form-checkout__identificationType">
           <option value="" disabled selected>Document Type</option>
       </select>------------
       <input type="text" name="identificationNumber" id="form-checkout__identificationNumber" placeholder="Número de documento" />
       <select name="installments" id="form-checkout__installments">
           <option value="" disabled selected>Choose the amount of installments</option>
       </select>
       <input id="token" name="token" type="hidden" />
       <input id="paymentMethodId" name="paymentMethodId" type="hidden" />
       <input id="transactionAmount" name="transactionAmount" type="hidden" value="100"/>
       <input id="description" name="description" type="hidden" value="product description" />
       <button type="submit" id="form-checkout__submit">Pay</button>
   </form>
```

> NOTE
>
> Note
>
> Before following the steps below, make sure that the form is available, so it can operate correctly.

### 3. Configure your public key

Add your [public key]([FAKER][CREDENTIALS][URL]) like this:

```javascript
<script>
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
----[mla, mlb, mlu, mlc, mpe, mco]----
// Add Step #getIdentificationTypes------------
// Add Step #getPaymentMethods
// Add Step #getIssuers
// Add Step #getInstallments
// Add Step #createCardToken
</script>
```

>  If you still don't have an account to check your credentials, [sign in](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### 4. Get data for your form

----[mla, mlb, mlu, mco, mlc, mpe]----

#### Get document types

Document type is one of the mandatory fields. Use the document list to fill out your data.

Including `select` type element with id `form-checkout__identificationType` contained in the form, you can automatically fill out the available choices when you call this function:

```javascript

// Step #getIdentificationTypes

// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const identificationTypeElement = document.getElementById('form-checkout__identificationType');

       createSelectOptions(identificationTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```

> Find more information in the [Document type section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/resources/localization/identification-types).

------------

#### Get card payment method

Avoid mistakes and offer the correct available installments by validating your customers' data as they fill it out. Use the code in the following example to identify payment method with the first 8 digits of the card.

```javascript
// Step #getPaymentMethods
const cardNumberElement = document.getElementById('form-checkout__cardNumber');

function clearHTMLSelectChildrenFrom(element) {
    const currOptions = [...element.children];
    currOptions.forEach(child => child.remove());
}

cardNumberElement.addEventListener('keyup', async () => {
   try {
       const paymentMethodElement = document.getElementById('paymentMethodId');
       const issuerElement = document.getElementById('form-checkout__issuer');
       const installmentsElement = document.getElementById('form-checkout__installments');
       let cardNumber = cardNumberElement.value;

       if (cardNumber.length < 8 && paymentMethodElement.value) {
           clearHTMLSelectChildrenFrom(issuerElement);
           clearHTMLSelectChildrenFrom(installmentsElement);
           paymentMethodElement.value = "";
           return
       }

       if (cardNumber.length >= 8 && !paymentMethodElement.value) {
           let bin = cardNumber.substring(0,8);
           const paymentMethods = await mp.getPaymentMethods({'bin': bin});

           const { id: paymentMethodId, additional_info_needed, issuer } = paymentMethods.results[0];

           // Assign payment method ID to a hidden input.
           paymentMethodElement.value = paymentMethodId;

           // If 'issuer_id' is needed, we fetch all issuers (getIssuers()) from bin.
           // Otherwise we just create an option with the unique issuer and call getInstallments().
           additional_info_needed.includes('issuer_id') ? getIssuers() : (() => {
               const issuerElement = document.getElementById('form-checkout__issuer');
               createSelectOptions(issuerElement, [issuer]);
  
               getInstallments();
           })()
       }
   }catch(e) {
       console.error('error getting payment methods: ', e)
   }
});
```

#### Obtain issuer

When completing the form, it is important to identify card's issuing bank to avoid conflicts between the different issuers and to be able to provide the correct payment options in installments.

Add the following code to obtain the `issuer_id`:

```javascript
// Step #getIssuers

const getIssuers = async () => {
   try {
       const cardNumber = document.getElementById('form-checkout__cardNumber').value;
       const paymentMethodId = document.getElementById('paymentMethodId').value;
       const issuerElement = document.getElementById('form-checkout__issuer');

       const issuers = await mp.getIssuers({paymentMethodId, bin: cardNumber.slice(0,8)});

       createSelectOptions(issuerElement, issuers);

       getInstallments();
   }catch(e) {
       console.error('error getting issuers: ', e)
   }
};
```

#### Get number of installments

The number of installments is also a mandatory field for credit card payments. You can use the function in the following example to fill out the _select_ type suggested field called `installments` and get the available installments.

```javascript
// Step #getInstallments
const getInstallments = async () => {
   try {
       const installmentsElement = document.getElementById('form-checkout__installments')
       const cardNumber = document.getElementById('form-checkout__cardNumber').value; 

       const installments = await mp.getInstallments({
           amount: document.getElementById('transactionAmount').value,
           bin: cardNumber.slice(0,8),
           paymentTypeId: 'credit_card'
       });

       createSelectOptions(installmentsElement, installments[0].payer_costs, {label: 'recommended_message', value: 'installments'})
   }catch(e) {
       console.error('error getting installments: ', e)
   }
}
```

### 5. Create card token

Before submitting the payment, you must create a token containing all card information securely. You should generate it as follows:

```javascript
// Step #createCardToken
const formElement = document.getElementById('form-checkout');
formElement.addEventListener('submit', e => createCardToken(e));

const createCardToken = async (event) => {
   try {
       const tokenElement = document.getElementById('token');

       if (!tokenElement.value) {
           event.preventDefault();

           const token = await mp.createCardToken({
               cardNumber: document.getElementById('form-checkout__cardNumber').value,
               cardholderName: document.getElementById('form-checkout__cardholderName').value,----[mla, mlb, mlu, mlc, mpe, mco]----
               identificationType: document.getElementById('form-checkout__identificationType').value,------------
               identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
               securityCode: document.getElementById('form-checkout__securityCode').value,
               cardExpirationMonth: document.getElementById('form-checkout__expirationMonth').value,
               cardExpirationYear: document.getElementById('form-checkout__expirationYear').value
           });

           tokenElement.value = token.id;

           formElement.requestSubmit();
       }
   }catch(e) {
       console.error('error creating card token: ', e)
   }
}
```

The `createCardToken` method will return a token with the secure card display.

We will take and save the response token ID in a hidden attribute called `token` and then send the form to your servers.


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

In the above example, after the `submit` action, your backend should display a `/process_payment` endpoint, which is defined in the form `action` attribute, to receive all data.

Once the request –with all the collected information– is in your backend, it should be submitted to Mercado Pago through our APIs.  The minimum mandatory fields to submit are: `token`, `transaction_amount`, `installments`, `payment_method_id` and `payer.email`.

For this to work, you should configure your [private key]([FAKER][CREDENTIALS][URL]). Also, to interact with our APIs, you should use [Mercado Pago official SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/checkout-api/previous-requirements#bookmark__install_mercado_pago_sdk).

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
You can find payment status in _status_ value.
===
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

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

mercadopago.payment.save(payment_data)
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
You can find payment status in _status_ value.
===

MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");

Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
       .setToken(request.getParameter("token"))
       .setDescription(request.getParameter("description"))
       .setInstallments(Integer.valueOf(request.getParameter("installments")))
       .setPaymentMethodId(request.getParameter("paymentMethodId"));

Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("identificationType"))
              .setNumber(request.getParameter("identificationNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("identificationNumber"));------------

Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
     .setIdentification(identification);

payment.setPayer(payer);

payment.save();

System.out.println(payment.getStatus());

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

> Check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments/post) to learn about all the available fields for full payments.

## Response Handling

Possible payment statuses are:

![payment-status](/images/api/api-payment-status-en.png)
<br>
<br>

For improved payment approval, you need to correctly inform results to your customers when making or creating a payment.

This will prevent rejections and chargebacks in the case of already approved transactions.  For example, this allows you to correct data upload mistakes or change payment methods.

We recommend using [response handling](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/checkout-api/response-handling) and the suggested communication in each case.

> NOTE
>
> Note
>
> Avoid rejected payments with our recommendations to [improve the approval process](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/account/payment-rejections).

## Receive payment notifications

Finally, you always need to be notified of new payments and status updates.  For example, if they were approved, rejected, or are pending.

[Configure webhook notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks/webhooks) or [IPN notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/checkout-api/additional-content/notifications/ipn).


