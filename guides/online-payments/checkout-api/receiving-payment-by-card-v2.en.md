# Integrate Checkout API payment for cards

[TXTSNIPPET][/guides/snippets/test-integration/receiving-payment-by-card]

## How does it work?

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-en.png)

> If you want to make a customized payment flow, we share all the [methods available for advanced integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/receiving-payment-by-card-core-methods-v2).

With our Mercado Pago Checkout API, you should take into account two aspects: data capture and payment confirmation submission.

1. First, you need a frontend to collect card data and generate a security token with the information required to create a payment.
2. Then, you need a backend that takes the generated token and payment data, such as amount and item, to confirm and make a payment.

Both for frontend and backend, we recommend [our libraries](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/previous-requirements#bookmark_always_use_our_libraries) to collect user sensitive data securely.

> NOTE
>
> Note
>
> For more information, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Card data capture

To create a payment, you should capture card data through the buyer's browser. For security reasons, **never store data in your servers**.

To capture card data, follow these steps:

1. [Include and configure MercadoPago.js library](#bookmark_1._include_and_configure_mercadopago.js_library)
2. [Add payment form](#bookmark_2._add_payment_form)
3. [Integrate the form with MercadoPago.js library](#bookmark_3._integrate_the_form_with_mercadopago.js_library)

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

If you still don't have an account to check your credentials, [sign in](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

> NOTE
>
> Note
>
> This documentation uses the new library version. To see the previous version, go to [integrate credit card payment with MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/v1/receiving-payment-by-card) section.

The card information will be converted into a token so you can send the data to your servers in a secure way.

### 2. Add payment form

Before capturing the card data, provide a form to load all the information.

With MercadoPago.js V2 library CardForm functionality you can get and validate all the data needed to identify the type and name of payment method, issuing bank, number of installments and more. 

CardForm provides secure implementation and correct token of card data. 

For the PCI fields (**Card Number**, **Expiration Month**, **Expiration Year** and **CVV**) you must create `divs` that will serve as containers for the `iFrames`.

Use the following form and add the styles of your choice.

```html
<!-- Step #2 -->
<form id="form-checkout">
   <div type="text" name="cardNumber" id="form-checkout__cardNumber"></div>
<div type="text" name="cardExpirationMonth"   id="form-checkout__cardExpirationMonth"></div>
   <div type="text" name="cardExpirationYear" id="form-checkout__cardExpirationYear"></div>
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <div type="text" name="securityCode" id="form-checkout__securityCode"></div>
   <select name="issuer" id="form-checkout__issuer"></select>----[mla, mlb, mlu, mlc, mpe, mco]----
   <select name="identificationType" id="form-checkout__identificationType"></select>------------
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pagar</button>
   <progress value="0" class="progress-bar">Carregando...</progress>
 </form>
```

> GIT
> 
> Technical reference
> 
> Find information about the different attributes in the [technical references](https://github.com/mercadopago/sdk-js).

### 3. Integrate the form with MercadoPago.js library

Now, to initialize the CardForm, relate each form field ID with the relevant attributes. The library will be responsible for filling out, getting and validating all the data needed for payment confirmation.

For the IFrame to be rendered, it is necessary to pass the `iframe` option with `true` value in the parameter object received by the cardForm. It is also possible to pass the `style` to the elements.

```javascript

// Step #3
const cardForm = mp.cardForm({
   amount: '100.5',
   autoMount: true,
   iframe: true,
   form: {
     id: 'form-checkout',
     cardholderName: {
       id: 'form-checkout__cardholderName',
       placeholder: "Card Holder",
     },
     cardholderEmail: {
       id: 'form-checkout__cardholderEmail',
       placeholder: 'E-mail'
     },
     cardNumber: {
       id: 'form-checkout__cardNumber',
       placeholder: 'Card Number',
       style: {
         // Style examples:
         // "font-size": "18px",
         // color: "blue"
       },
     },
     securityCode: {
       id: 'form-checkout__securityCode',
       placeholder: 'CVV'
     },
     installments: {
       id: 'form-checkout__installments',
       placeholder: 'Installments'
     },
     cardExpirationMonth: {
       id: 'form-checkout__cardExpirationMonth',
       placeholder: 'MM'
     },
     cardExpirationYear: {
       id: 'form-checkout__cardExpirationYear',
       placeholder: 'YYYY'
     },----[mla, mlb, mlu, mlc, mpe, mco]----
     identificationType: {
       id: 'form-checkout__identificationType',
       placeholder: 'Document type'
     },------------
     identificationNumber: {
       id: 'form-checkout__identificationNumber',
       placeholder: 'Document value'
     },
     issuer: {
       id: 'form-checkout__issuer',
       placeholder: 'Issuer'
     }
   },
   callbacks: {
     onFormMounted: function (error) {
       if (error) return console.log('Callback para tratar o erro: montando o cardForm ', error)
     },
     onFormUnmounted: function (error) {
       if (error) return console.log('Callback para tratar o erro: desmontando o cardForm ', error)
     },
     onIdentificationTypesReceived: function (error, identificationTypes) {
       if (error) return console.log('Callback para tratar o erro: recebendo tipos de documento ', error)
     },
     onPaymentMethodsReceived: function (error, paymentMethods) {
       if (error) return console.log('Callback para tratar o erro: recebendo payment methods ', error)
     },
     onIssuersReceived: function (error, issuers) {
       if (error) return console.log('Callback para tratar o erro: recebendo emissores ', error)
     },
     onInstallmentsReceived: function (error, installments) {
       if (error) return console.log('Callback para tratar o erro: recebendo parcelas ', error)
     },
     onCardTokenReceived: function (error, token) {
       if (error) return console.log('Callback para tratar o erro: recebendo o token ', error)
     },
     onSubmit: function (event) {
       event.preventDefault();
 
       const {
         paymentMethodId: payment_method_id,
         issuerId: issuer_id,
         cardholderEmail: email,
         amount,
         token,
         installments,
         identificationNumber----[mla, mlb, mlu, mlc, mpe, mco]----,
         identificationType------------
       } = cardForm.getCardFormData();
 
	fetch('/process_payment', {
  method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           token,
           issuer_id,
           payment_method_id,
           transaction_amount: Number(amount),
           installments: Number(installments),
           description: 'product description',
           payer: {
             email,
             identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
               type: identificationType,------------
               number: identificationNumber
             }
           }
         })
       })
     },
     onFetching: function (resource) {
       console.log('fetching... ', resource)
       const progressBar = document.querySelector('.progress-bar')
       progressBar.removeAttribute('value')
 
       return () => {
         progressBar.setAttribute('value', '0')
       }
     },
     onReady: function () {
       console.log('Fields are ready')
     },
     onValidityChange: function ({ field, messages }) {
       console.log(`${field}:\n${messages.join('\n')}`);
     },
   }
 });
}
```

The callbacks option accepts different functions that are activated in different flow moments.

> GIT
> 
> Technical reference
> 
> Learn more information about callbacks in the [technical references](https://github.com/mercadopago/sdk-js).

When submitting the form, we generate a token as a secure representation of the card data. You can access this token using the `getCardFormData` function, as we showed in the previous example in the `onSubmit` callback. We will also store the token in a hidden `input` within your form which we will name `MPHiddenInputToken`.

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

For this to work, you should configure your [private key]([FAKER][CREDENTIALS][URL]). Also, to interact with our APIs, you should use [Mercado Pago official SDK](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/previous-requirements#bookmark__install_mercado_pago_sdk).

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
       "type" => $_POST['docType'],------------
       "number" => $_POST['docNumber']
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
     type: req.body.docType,------------
     number: req.body.docNumber
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
   res.status(response.status).send(error);
 });
```
```java
===
Find the payment status in the _status_ field.
===
 
MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");
 
Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
      .setToken(request.getParameter("token"))
      .setDescription(request.getParameter("description"))
      .setInstallments(Integer.valueOf(request.getParameter("installments")))
      .setPaymentMethodId(request.getParameter("paymentMethodId"));
 
Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("docType"))
             .setNumber(request.getParameter("docNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("docNumber"));------------
 
Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
    .setIdentification(identification);
   
payment.setPayer(payer);
 
payment.save();
 
System.out.println(payment.getStatus());
 
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
     type: params[:docType],------------
     number: params[:docNumber]
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
           Type = Request["docType"],------------
           Number = Request["docNumber"],
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

[TXTSNIPPET][/guides/snippets/test-integration/api-response-handling]

## Receive payment notifications

[TXTSNIPPET][/guides/snippets/test-integration/api-payment-notifications]

## Sample projects

> NOTE
>
> Checkout API
>
> Use our [complete integration examples](https://drive.google.com/file/d/12gSCPLfZCE36iKFbM4BTUwf6lnM7lVEL/view?usp=sharing) to download instantly.

<span></span>

> GIT
>
> Payment form
>
> If you want to deploy other technology in your server, you can [download a complete payment form sample](https://github.com/mercadopago/card-payment-sample) from GitHub.

---
### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Test your integration
>
> Check that everything works in your integration with test users.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/testing)

----[mlc]----
> RIGHT_BUTTON_RECOMMENDED_EN
>
> API References
>
> Find all the information required to interact with our APIs.
>
> [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference)
------------

----[mla, mlb, mlm, mlu, mpe, mco]----
> RIGHT_BUTTON_RECOMMENDED_EN
>
> Integrate other payment methods
>
> Learn about all the available payment options and how to offer them.
>
> [Integrate other payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/other-payment-ways)
------------
